import React, {useContext, useState} from 'react'
import {FileText, Map, BarChart2} from 'react-feather'

import colors from '../../styles/colors'

import {AppContext, ThemeContext} from '../../pages'

import Scrollable from '../scrollable'
import ReactMapGl from '../react-map-gl'
import Informations from '../informations'

const VIEWS = {
  tests: <h1 style={{padding: '1em'}} >Tests</h1>,
  map: <ReactMapGl />,
  informations: <Informations />
}

const MobileTabTests = () => {
  const [selectedView, setSelectedView] = useState('tests')

  const app = useContext(AppContext)
  const theme = useContext(ThemeContext)

  const handleClick = view => {
    app.setSelectedLocation(null)
    setSelectedView(view)
  }

  return (
    <>
      <Scrollable>
        {VIEWS[selectedView]}
      </Scrollable>

      <div className='view-selector'>
        <div className={`${selectedView === 'tests' ? 'selected' : ''}`} onClick={() => handleClick('tests')}>
          <BarChart2 size={32} color={selectedView === 'tests' ? theme.primary : colors.black} />
        </div>
        <div className={`${selectedView === 'map' ? 'selected' : ''}`} onClick={() => handleClick('map')}>
          <Map size={32} color={selectedView === 'map' ? theme.primary : colors.black} />
        </div>
        <div className={`${selectedView === 'informations' ? 'selected' : ''}`} onClick={() => handleClick('informations')}>
          <FileText size={32} color={selectedView === 'informations' ? theme.primary : colors.black} />
        </div>
      </div>

      <style jsx>{`
        .view-selector {
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          justify-content: center;
          align-items: center;
          background-color: #fff;
          box-shadow: 0 -1px 4px ${colors.lightGrey};
        }

        .view-selector > div {
          padding: 0.5em;
          margin: auto;
          margin-bottom: -4px;
        }

        .view-selector > div.selected {
          border-top: 4px solid ${theme.primary};
        }
      `}</style>
    </>
  )
}

const DesktopTabTests = () => {
  return (
    <>
      <div className='menu'>
        <Scrollable>
          <>
            <h1>Tests</h1>
          </>
        </Scrollable>
      </div>

      <div className='map'>
        <ReactMapGl />
      </div>

      <style jsx>{`
        h1 {
          width: 450px;
          padding: 1em;
        }

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
  )
}

const TabTests = props => {
  const {isMobileDevice} = useContext(AppContext)
  const Component = isMobileDevice ? MobileTabTests : DesktopTabTests

  return <Component {...props} />
}

export default TabTests
