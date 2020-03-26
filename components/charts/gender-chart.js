import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import colors from '../../styles/colors'

const allData = [5245, 525]

const data = {
  labels: [
    'Homme',
    'Femme'
  ],
  datasets: [{
    data: allData,
    backgroundColor: [
      colors.blue,
      colors.lightBlue
    ],
    hoverBackgroundColor: [
      colors.blue,
      colors.lightBlue
    ]
  }]
}

const GenderChart = () => (
  <Doughnut data={data} />
)

export default GenderChart
