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

  const [franceReport, setFranceReport] = useState({})
  const [regionsReport, setRegionsReport] = useState({})
  const [previousRegionsReport, setPreviousRegionsReport] = useState({})
  const [departementsReport, setDepartementsReport] = useState({})
  const [previousDepartementsReport, setPreviousDepartementsReport] = useState({})
  const [previousFranceReport, setPreviousFranceReport] = useState({})
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [selectedLocationReport, setSelectedLocationReport] = useState(null)
  const [selectedPreviousLocationReport, setSelectedPreviousLocationReport] = useState(null)
  const [mapReport, setMapReport] = useState({})

  const [viewport, setViewport] = useState(defaultViewport)

  const dateIdx = indexOf(dates, date)
  const previousDate = dates[dateIdx - 1]

  const previousReport = useCallback(() => {
    const idx = indexOf(dates, date)
    const previousIdx = idx - 1

    if (previousIdx >= 0) {
      setDate(dates[previousIdx])
    }
  }, [dates, date])

  const nextReport = useCallback(() => {
    const idx = indexOf(dates, date)
    const nextIdx = idx + 1
    if (nextIdx <= dates.length - 1) {
      setDate(dates[nextIdx])
    }
  }, [dates, date])

  const getReport = useCallback((date, code) => {
    const filteredReports = data.filter(item => item.code.includes(code))
    return {
      ...filteredReports.find(r => r.date === date),
      history: filteredReports
    }
  }, [data])

  const handleResize = () => {
    const mobileWidth = parseInt(theme.mobileDisplay.split('px')[0])
    setIsMobileDevice(window.innerWidth < mobileWidth)
  }

  const getLocationReport = useCallback(code => {
    let report

    if (code.includes('REG')) {
      report = regionsReport
    } else if (code.includes('DEP')) {
      report = departementsReport
    }

    const feature = report.features.find(f => f.properties.code === code)
    return {...feature.properties}
  }, [regionsReport, departementsReport])

  const getPreviousLocationReport = useCallback(code => {
    let report

    if (code.includes('REG')) {
      report = previousRegionsReport
    } else if (code.includes('DEP')) {
      report = previousDepartementsReport
    }

    const feature = report.features.find(f => f.properties.code === code)
    return {...feature.properties}
  }, [previousRegionsReport, previousDepartementsReport])

  useEffect(() => {
    if (selectedLocation) {
      const locationReport = getLocationReport(selectedLocation)
      const previousLocationReport = getPreviousLocationReport(selectedLocation)
      setSelectedLocationReport(locationReport)
      setSelectedPreviousLocationReport(previousLocationReport)
    } else {
      setSelectedLocationReport(null)
      setSelectedPreviousLocationReport(null)
    }
  }, [selectedLocation, getLocationReport, getPreviousLocationReport])

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
    const franceReport = getReport(date, 'FRA')
    setFranceReport(franceReport)

    const previousFranceReport = getReport(previousDate, 'FRA')
    setPreviousFranceReport(previousFranceReport)

    const regionsReport = getReport(date, 'REG')
    setRegionsReport(regionsReport)

    const previousRegionsReport = getReport(previousDate, 'REG')
    setPreviousRegionsReport(previousRegionsReport)

    const departementsReport = getReport(date, 'DEP')
    setDepartementsReport(departementsReport)

    const previousDepartementsReport = getReport(previousDate, 'DEP')
    setPreviousDepartementsReport(previousDepartementsReport)

    setMapReport(regionsReport)
  }, [date, dates, dateIdx, getReport, previousDate])

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
