import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import {Doughnut} from 'react-chartjs-2'
import colors from '../../styles/colors'
import Counter from '../counter'
import Chart from 'chart.js'

const GenderChart = ({genderData, height}) => {
  const chart = {
    labels: [
      'Homme',
      'Femme'
    ],
    datasets: [{
      data: genderData,
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
  const chartRef = useRef(null)
  const options = {
    responsive: true,
    events: false,
    animation: {
      duration: 500,
      easing: 'easeOutQuart',
      onComplete: animation => {
        const {ctx} = animation.chart
        const {data} = chartRef.current.props
        ctx.font = Chart.helpers.fontString(15, 'bold', Chart.defaults.global.defaultFontFamily)
        ctx.textAlign = 'center'
        ctx.textBaseline = 'bottom'
        ctx.context = {}
        data.datasets.forEach(dataset => {
          for (let i = 0; i < dataset.data.length; i++) {
            const model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model
            const total = dataset._meta[Object.keys(dataset._meta)[0]].total
            const midRadius = model.innerRadius + ((model.outerRadius - model.innerRadius) / 2)
            const startAngle = model.startAngle
            const endAngle = model.endAngle
            const midAngle = startAngle + ((endAngle - startAngle) / 2)
            const x = midRadius * Math.cos(midAngle)
            const y = midRadius * Math.sin(midAngle)
            ctx.fillStyle = '#fff'
            const percent = String(Math.round(dataset.data[i] / total * 100)) + '%'
            ctx.fillText(percent, model.x + x, model.y + y + 15)
          }
        })
      }
    }
  }

  return (
    <div className='gender-container'>
      <Doughnut ref={chartRef} data={chart} options={options} height={height} />
      <div className='gender-counter'>
        <Counter value={genderData[0]} label={chart.labels[0]} color='blue' />
        <Counter value={genderData[1]} label={chart.labels[1]} color='lightBlue' />
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

GenderChart.defaultProps = {
  height: null
}

GenderChart.propTypes = {
  genderData: PropTypes.array.isRequired,
  height: PropTypes.number
}

export default GenderChart
