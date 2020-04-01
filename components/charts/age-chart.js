import React from 'react'
import PropTypes from 'prop-types'
import {HorizontalBar} from 'react-chartjs-2'
import colors from '../../styles/colors'

const AgeChart = ({ageData, ageLabels, height}) => {
  const data = {
    labels: ageLabels,
    datasets: [
      {
        label: 'Nombre cas confirmé',
        backgroundColor: colors.lighterBlue,
        borderColor: colors.almostBlack,
        borderWidth: 1,
        hoverBackgroundColor: colors.blue,
        hoverBorderColor: colors.blue,
        data: ageData
      }
    ]
  }

  return (
    <HorizontalBar data={data} height={height} />
  )
}

AgeChart.defaultProps = {
  height: null
}

AgeChart.propTypes = {
  ageData: PropTypes.array.isRequired,
  ageLabels: PropTypes.array.isRequired,
  height: PropTypes.number
}

export default AgeChart
