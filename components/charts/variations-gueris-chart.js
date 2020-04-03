import React from 'react'
import PropTypes from 'prop-types'
import {Bar} from 'react-chartjs-2'

import colors from '../../styles/colors'

const options = {
  legend: {
    display: false
  },
  tooltips: {
    mode: 'index'
  },
  scales: {
    xAxes: [{
      type: 'time',
      time: {
        unit: 'day',
        displayFormats: {
          day: 'DD/MM'
        },
        tooltipFormat: 'DD/MM'
      },
      gridLines: {
        offsetGridLines: true
      },
      offset: true
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
}

const formatData = data => {
  const datasets = []

  if (data.some(h => h.gueris)) {
    datasets.push({
      label: 'Retours à domicile',
      data: data.map(h => h.gueris).slice(1).map((cumul, i) => cumul - data[i].gueris),
      backgroundColor: colors.green
    })
  }

  return {
    labels: data.map(h => new Date(h.date)),
    datasets
  }
}

const VariationsGuerisChart = ({data, height}) => (
  <Bar data={formatData(data)} options={options} height={height} />
)

VariationsGuerisChart.defaultProps = {
  height: null
}

VariationsGuerisChart.propTypes = {
  data: PropTypes.array.isRequired,
  height: PropTypes.number
}

export default VariationsGuerisChart
