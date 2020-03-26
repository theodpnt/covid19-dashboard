import React from 'react'
import {HorizontalBar} from 'react-chartjs-2'

const allData = [23, 54, 142, 234, 534] //  Données de test

const data = {
  labels: ['< 15 ans', '15-44 ans', '45-64 ans', '64-74 ans', '> 75 ans'],
  datasets: [
    {
      label: 'Nombre cas confirmé',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: allData
    }
  ]
}

const AgeChart = () => (
  <HorizontalBar data={data} />
)

export default AgeChart
