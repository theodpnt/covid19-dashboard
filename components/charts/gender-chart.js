import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import colors from '../../styles/colors'
import 'chartjs-plugin-labels' // eslint-disable-line import/no-unassigned-import
import Counter from '../counter'

const allData = [5245, 525] //  Données de test

const options = {
  responsive: true,
  title: {
    display: true,
    fontSize: 20,
    text: 'Genre'
  },
  plugins: {
    labels: {
      fontColor: colors.white,
      fontSize: 14,
      fontStyle: 'bold'
    }
  }
}

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

const GenderChart = () => {
  return (
    <div className='gender-container'>
      <Doughnut data={data} options={options} height={200} />
      <div className='gender-counter'>
        <Counter value={data.datasets[0].data[0]} label={data.labels[0]} color='blue' />
        <Counter value={data.datasets[0].data[1]} label={data.labels[1]} color='lightBlue' />
      </div>
      <style jsx>{`
        .gender-counter {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
        }
      `}</style>
    </div>
  )
}

export default GenderChart
