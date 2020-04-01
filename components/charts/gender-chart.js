import React, {useRef} from 'react'
import {Doughnut} from 'react-chartjs-2'
import colors from '../../styles/colors'
import Counter from '../counter'
import Chart from 'chart.js'

const allData = [5245, 525] //  Données de test

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
      <Doughnut ref={chartRef} data={data} options={options} height={150} />
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
