import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import {ChevronLeft, ChevronRight} from 'react-feather'

import {AppContext} from '../pages'
import {getNextDate, getPreviousDate} from '../lib/data'

import theme from '../styles/theme'
import colors from '../styles/colors'

const formatDate = isoString => {
  const date = new Date(isoString)

  return date.toLocaleDateString()
}

const DateNav = ({disabled}) => {
  const {date, setDate} = useContext(AppContext)
  const formatedDate = formatDate(date)

  const previousDate = getPreviousDate(date)
  const nextDate = getNextDate(date)

  return (
    <div className='menu-header'>
      {!disabled && (
        <>
          <div className={`report-nav ${previousDate ? '' : 'disabled'}`} onClick={() => setDate(previousDate)}><ChevronLeft /></div>
          <h2>Données au {formatedDate}</h2>
          <div className={`report-nav ${nextDate ? '' : 'disabled'}`} onClick={() => setDate(nextDate)}><ChevronRight /></div>
        </>
      )}

      <style jsx>{`
        .menu-header {
          z-index: 2;
          display: flex;
          flex-flow: nowrap;
          justify-content: space-between;
          align-items: center;
          text-align: center;
          box-shadow: 0 1px 4px ${colors.lightGrey};
          padding: 0 1em;
          background-color: ${colors.darkBlue};
          color: #fff;
        }

        .report-nav.disabled {
          color: #ffffff55;
        }

        .report-nav.disabled:hover {
          cursor: initial;
        }

        .report-nav:hover {
          cursor: pointer;
        }

        @media (max-width: ${theme.mobileDisplay}) {
          .menu-header {
            font-size: small;
            padding: ${disabled ? '1.7em 1em' : '0.5em 1em'};
          }

          .menu-header h2 {
            margin: 0.2em;
          }
        }
      `}</style>
    </div>
  )
}

DateNav.defaultProps = {
  disabled: false
}

DateNav.propTypes = {
  disabled: PropTypes.bool
}

export default DateNav
