import React, {useContext} from 'react'

import Counter from './counter'
import DepistesChart from './charts/depistes-chart'

import {AppContext} from '../pages'

const details = {
  depistes: 'Tests éffectués en hopital',
  casConfirmes: 'Tests positifs'
}

const Tests = () => {
  const {date, franceReport, previousFranceReport} = useContext(AppContext)

  const report = franceReport
  const previousReport = previousFranceReport

  return (
    <>
      <h2>Suivi des tests</h2>
      <div className='counters'>
        <Counter value={report.nb_tests} previousValue={previousReport.nb_tests} label='Tests positifs' details={details.casConfirmes} color='blue' />
        <Counter value={report.nb_pos} previousValue={previousReport.nb_pos} label='Dépistés' details={details.depistes} color='darkBlue' />
      </div>
      <DepistesChart data={report.history.filter(r => date >= r.date)} />
      <style jsx>{`
        h2 {
          text-align: center;
          padding: .5em;
        }

        .counters {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
      `}</style>
    </>
  )
}

export default Tests
