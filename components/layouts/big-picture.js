import React, {useState, useContext} from 'react'
import {FileText, Map, BarChart2} from 'react-feather'

import colors from '../../styles/colors'

import {AppContext, ThemeContext} from '../../pages'

import Scrollable from '../scrollable'
import ReactMapGl from '../react-map-gl'
import Statistics from '../statistics'
import Informations from '../informations'

const VIEWS = {
  map: <ReactMapGl />,
  stats: <Statistics />,
  informations: <Informations />
}

const MobileBigPicture = () => {
  const [selectedView, setSelectedView] = useState('stats')

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
        <div className={`${selectedView === 'stats' ? 'selected' : ''}`} onClick={() => handleClick('stats')}>
          <BarChart2 size={32} color={selectedView === 'stats' ? theme.primary : colors.black} />
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

const DesktopBigPicture = () => (
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
)

const BigPicture = props => {
  const {isMobileDevice} = useContext(AppContext)
  const Component = isMobileDevice ? MobileBigPicture : DesktopBigPicture

  return <Component {...props} />
}

export default BigPicture
