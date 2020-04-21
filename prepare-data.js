#!/usr/bin/env node
require('dotenv').config()

const {join} = require('path')
const got = require('got')
const Papa = require('papaparse')
const {outputJson, readJson} = require('fs-extra')
const {groupBy, sortBy, defaults, pick, union, flattenDeep} = require('lodash')

const DATA_SOURCE = process.env.DATA_SOURCE || 'https://raw.githubusercontent.com/opencovid19-fr/data/master/dist/chiffres-cles.json'
const DATA_GENRE = 'https://www.data.gouv.fr/fr/datasets/r/63352e38-d353-4b54-bfd1-f1b3ee1cabd7'
const DATA_AGE = 'https://www.data.gouv.fr/fr/datasets/r/08c18e08-6780-452d-9b8c-ae244ad529b3'
const DATA_COVID_DAY = 'https://www.data.gouv.fr/fr/datasets/r/b4ea7b4b-b7d1-4885-a099-71852291ff20'

async function fetchJson(url) {
  const response = await got(url, {responseType: 'json'})
  return response.body
}

async function fetchCsv(urls) {
  const promises = urls.map(url => got(url, {responseType: 'text'}))
  return Promise.all(promises).then(responses => {
    return responses.map(response => {
      return Papa.parse(response.body, {header: true}).data
    })
  })
}

async function loadJson(dataSource) {
  if (dataSource.startsWith('http')) {
    return fetchJson(dataSource)
  }

  return readJson(dataSource)
}

function dataGenre(data) {
  return flattenDeep(data).filter(r => 'sexe' in r).map(r => {
    return {
      code: `DEP-${r.dep}`,
      sexe: Number.parseInt(r.sexe, 10),
      date: r.jour,
      hospitalises: Number.parseInt(r.hosp, 10),
      reanimation: Number.parseInt(r.rea, 10),
      deces: Number.parseInt(r.dc, 10),
      gueris: Number.parseInt(r.rad, 10),
      source: {nom: 'Santé publique France Data'},
      sourceType: 'sante-publique-france-data'
    }
  })
}

function dataAge(data) {
  return flattenDeep(data).filter(r => 'cl_age90' in r).map(r => {
    return {
      code: `REG-${r.reg}` || `DEP-${r.dep}`,
      date: r.jour,
      trancheAge: r.cl_age90,
      hospitalises: Number.parseInt(r.hosp, 10),
      reanimation: Number.parseInt(r.rea, 10),
      deces: Number.parseInt(r.dc, 10),
      gueris: Number.parseInt(r.rad, 10),
      source: {nom: 'Santé publique France Data'},
      sourceType: 'sante-publique-france-data'
    }
  })
}

function dataCovidDay(data) {
  return flattenDeep(data).filter(r => 'clage_covid' in r && 'jour' in r).map(r => {
    return {
      code: `DEP-${r.dep}`,
      date: r.jour,
      trancheAge: r.clage_covid,
      nbTest: Number.parseInt(r.nb_test, 10),
      nbPositif: Number.parseInt(r.nb_pos, 10),
      nbTestHomme: Number.parseInt(r.nb_test_h, 10),
      nbPositifHomme: Number.parseInt(r.nb_pos_h, 10),
      nbTestFemme: Number.parseInt(r.nb_test_f, 10),
      nbPositifFemme: Number.parseInt(r.nb_pos_f, 10),
      source: {nom: 'Santé publique France Data'},
      sourceType: 'sante-publique-france-data'
    }
  })
}

const SOURCE_PRIORITIES = {
  'ministere-sante': 1,
  'sante-publique-france': 2,
  'sante-publique-france-data': 3,
  'agences-regionales-sante': 4,
  prefectures: 5,
  'opencovid19-fr': 6,
  'lperez-historical-data': 7
}

function consolidate(records) {
  const territoriesGroups = groupBy(records, r => `${r.date}-${r.code}`)

  return Object.keys(territoriesGroups).map(id => {
    return pick(sortBy(territoriesGroups[id], r => SOURCE_PRIORITIES[r.sourceType])
      .reduce((acc, row) => {
        defaults(acc, row)
        return acc
      }, {}), ['casConfirmes', 'deces', 'decesEhpad', 'casEhpad', 'casConfirmesEhpad', 'casPossiblesEhpad', 'reanimation', 'hospitalises', 'gueris', 'date', 'code', 'nom'])
  })
}

function filterRecords(records) {
  const {START_DATE, END_DATE, ALLOWED_SOURCES} = process.env
  const filters = []

  if (START_DATE) {
    filters.push(r => r.date >= START_DATE)
  }

  if (END_DATE) {
    filters.push(r => r.date <= END_DATE)
  }

  if (ALLOWED_SOURCES) {
    filters.push(r => ALLOWED_SOURCES.split(',').includes(r.sourceType))
  }

  return records.filter(r => filters.every(filter => filter(r)))
}

async function main() {
  const records = await loadJson(DATA_SOURCE)
  const csvRecords = await fetchCsv([DATA_GENRE, DATA_AGE, DATA_COVID_DAY])
  const hospitalisations = union(dataGenre(csvRecords), dataAge(csvRecords))
  const covidTests = dataCovidDay(csvRecords)
  const data = consolidate(filterRecords(records))
  await outputJson(join(__dirname, 'chiffres-cles.json'), data, {spaces: 2})
}

main().catch(error => {
  console.error(error)
  process.exit(1)
})
