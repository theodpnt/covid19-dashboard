import React, {useContext} from 'react'

import Counter from './counter'
import MixedChart from './charts/mixed-chart'

import {AppContext} from '../pages'

const details = {
  testsEffectues: 'Tests éffectués en hopital',
  testsPositifs: 'Test positifs'
}

const Tests = () => {
  const {date, franceReport} = useContext(AppContext)

  const report = franceReport

  return (
    <>
      <h2>Suivi des tests</h2>
      <div className='counters'>
        <Counter value={13} previousValue={10} label='Tests effectués' details={details.testsEffectues} color='blue' />
        <Counter value={8} previousValue={6} label='Tests positifs' details={details.testsPositifs} color='darkBlue' />
      </div>
      <MixedChart data={report.history.filter(r => date >= r.date)} />
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
