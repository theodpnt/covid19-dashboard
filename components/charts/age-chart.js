import React from 'react'
import {HorizontalBar} from 'react-chartjs-2'
import colors from '../../styles/colors'

const allData = [23, 54, 142, 234, 534] //  Données de test

const data = {
  labels: ['< 15 ans', '15-44 ans', '45-64 ans', '64-74 ans', '> 75 ans'],
  datasets: [
    {
      label: 'Nombre cas confirmé',
      backgroundColor: colors.lighterBlue,
      borderColor: colors.almostBlack,
      borderWidth: 1,
      hoverBackgroundColor: colors.blue,
      hoverBorderColor: colors.blue,
      data: allData
    }
  ]
}

const AgeChart = () => (
  <HorizontalBar data={data} />
)

export default AgeChart
