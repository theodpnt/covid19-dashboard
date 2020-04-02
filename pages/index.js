import React, {useState, useCallback, useEffect} from 'react'
import {useRouter} from 'next/router'
import PropTypes from 'prop-types'
import {uniq, indexOf} from 'lodash'

import records from '../chiffres-cles.json'

import theme from '../styles/theme'

import Page from '../layouts/main'

import ScreenPage from '../layouts/screen'
import MobilePage from '../layouts/mobile'

export const AppContext = React.createContext()
export const ThemeContext = React.createContext('theme.default')

const defaultViewport = {
  latitude: 46.9,
  longitude: 1.7,
  zoom: 5
}

const MainPage = ({data, dates, isGouv}) => {
  const router = useRouter()

  const [isIframe, setIsIframe] = useState(false)

  const [isMobileDevice, setIsMobileDevice] = useState(false)
  const [isTouchScreenDevice, setIsTouchScreenDevice] = useState(false)

  const [date, setDate] = useState(dates[dates.length - 1])
  const [previousDate, setPreviousDate] = useState(dates[dates.length - 2])
  const [dateIdx, setDateIdx] = useState(indexOf(dates, date))

  const getReport = useCallback((date, code) => {
    const filteredReports = data.filter(item => item.code.includes(code))
    return {
      ...filteredReports.find(r => r.date === date),
      history: filteredReports
    }
  }, [data])

  const [franceReport, setFranceReport] = useState({})
  const [previousFranceReport, setPreviousFranceReport] = useState({})
  const [regionsReport, setRegionsReport] = useState(null)
  const [departementsReport, setDepartementsReport] = useState(null)

  const [selectedLocation, setSelectedLocation] = useState(null)
  const [selectedLocationReport, setSelectedLocationReport] = useState(null)
  const [selectedPreviousLocationReport, setSelectedPreviousLocationReport] = useState(null)
  const [mapReport, setMapReport] = useState(null)

  const [viewport, setViewport] = useState(defaultViewport)

  const previousReport = useCallback(() => {
    const previousIdx = dateIdx - 1

    if (previousIdx >= 0) {
      setDate(dates[previousIdx])
    }
  }, [dates, dateIdx])

  const nextReport = useCallback(() => {
    const nextIdx = dateIdx + 1
    if (nextIdx <= dates.length - 1) {
      setDate(dates[nextIdx])
    }
  }, [dates, dateIdx])

  const handleResize = () => {
    const mobileWidth = parseInt(theme.mobileDisplay.split('px')[0])
    setIsMobileDevice(window.innerWidth < mobileWidth)
  }

  useEffect(() => {
    if (selectedLocation) {
      const locationReport = getReport(date, selectedLocation)
      const previousLocationReport = getReport(previousDate, selectedLocation)
      setSelectedLocationReport(locationReport)
      setSelectedPreviousLocationReport(previousLocationReport)
    } else {
      setSelectedLocationReport(null)
      setSelectedPreviousLocationReport(null)
    }
  }, [date, previousDate, getReport, selectedLocation])

  useEffect(() => {
    if (!mapReport && regionsReport) {
      setMapReport(regionsReport)
    }
  }, [mapReport, regionsReport])

  useEffect(() => {
    const dateIdx = indexOf(dates, date)
    setDateIdx(dateIdx)

    const previousDate = dates[dateIdx - 1]
    setPreviousDate(previousDate)

    setFranceReport(getReport(date, 'FRA'))
    setPreviousFranceReport(getReport(previousDate, 'FRA'))
    setRegionsReport(getReport(date, 'REG'))
    setDepartementsReport(getReport(date, 'DEP'))
  }, [date, dates, getReport])

  useEffect(() => {
    const {latitude, longitude} = viewport
    setViewport({
      latitude,
      longitude,
      zoom: isMobileDevice ? 4.3 : 5
    })
  }, [isMobileDevice]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const {iframe} = router.query

    setIsIframe(Boolean(iframe === '1'))
  }, [router])

  useEffect(() => {
    const mobileWidth = parseInt(theme.mobileDisplay.split('px')[0])
    if (window.innerWidth < mobileWidth) {
      setIsMobileDevice(true)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    setIsTouchScreenDevice('ontouchstart' in document.documentElement)
  }, [])

  return (
    <Page title='Tableau de bord de suivi de l’épidémie de coronavirus en France'>

      <div className='main-page-container'>
        <AppContext.Provider value={{
          date,
          selectedLocationReport,
          selectedPreviousLocationReport,
          setSelectedLocation,
          franceReport,
          previousFranceReport,
          regionsReport,
          departementsReport,
          mapReport,
          setMapReport,
          prev: dateIdx > 0 ? previousReport : null,
          next: dateIdx < dates.length - 1 ? nextReport : null,
          setViewport,
          viewport,
          isIframe,
          isMobileDevice,
          isTouchScreenDevice
        }}
        >
          <ThemeContext.Provider value={isGouv ? theme.gouv : theme.default}>
            {isMobileDevice ? (
              <MobilePage />
            ) : (
              <ScreenPage />
            )}
          </ThemeContext.Provider>
        </AppContext.Provider>

        <style jsx>{`
          .main-page-container {
            display: flex;
            position: absolute;
            width: 100%;
            height: 100%;
          }
        `}</style>
      </div>
    </Page>
  )
}

MainPage.propTypes = {
  data: PropTypes.array.isRequired,
  isGouv: PropTypes.bool.isRequired,
  dates: PropTypes.array.isRequired
}

MainPage.getInitialProps = async () => {
  return {
    data: records,
    isGouv: process.env.GOUV === '1',
    dates: uniq(records.filter(r => r.code === 'FRA').map(r => r.date)).sort()
  }
}

export default MainPage
