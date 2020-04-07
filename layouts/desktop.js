import React, {useState} from 'react'

import DateNav from '../components/date-nav'
import Scrollable from '../components/scrollable'
import ReactMapGl from '../components/react-map-gl'
import Statistics from '../components/statistics'
import Informations from '../components/informations'

import colors from '../styles/colors'
import LayoutSelector from '../components/layout-selector'

const LAYOUTS = {
  'Vue d’ensemble': () => (
    <>
      <div className='menu'>
        <Scrollable>
          <>
            <Statistics />
            <Informations />
          </>
        </Scrollable>
      </div>

      <div className='map'>
        <ReactMapGl />
      </div>

      <style jsx>{`
        .menu {
          z-index: 1;
          display: flex;
          flex-direction: column;
          max-width: 500px;
          box-shadow: 0 1px 4px ${colors.lightGrey};
        }

        .map {
          flex: 1;
          height: 100%;
        }
      `}</style>
    </>
  ),
  'Suivi des hospitalisations': () => (
    <h1>Suivi des hospitalisations</h1>
  ),
  'Suivi des tests': () => (
    <h1>
      Suivi des tests
    </h1>
  )
}

const DesktopPage = () => {
  const [selectedLayout, setSelectedLayout] = useState(Object.keys(LAYOUTS)[0])
  console.log("DesktopPage -> selectedLayout", selectedLayout)

  return (
    <div className='desktop-container'>
      <div className='desktop-header'>
        <DateNav />
        <LayoutSelector
          selected={selectedLayout}
          layouts={Object.keys(LAYOUTS)}
          selectLayout={setSelectedLayout}
        />
      </div>

      <div className='desktop-content'>
        {LAYOUTS[selectedLayout]()}
      </div>

      <style jsx>{`
        .desktop-container {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .desktop-header {
          z-index: 10;
          display: flex;
          flex-direction: column;
          box-shadow: 0 1px 4px ${colors.lightGrey};
        }
        .desktop-content {
          display: flex;
        }
    `}</style>
    </div>
  )
}

export default DesktopPage
