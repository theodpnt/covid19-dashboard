import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import {ChevronLeft, ChevronRight} from 'react-feather'

import {AppContext, ThemeContext} from '../pages'

import theme from '../styles/theme'

const formatDate = isoString => {
  const date = new Date(isoString)

  return date.toLocaleDateString()
}

const DateNav = ({disabled}) => {
  const themeContext = useContext(ThemeContext)

  const {date, prev, next} = useContext(AppContext)
  const formatedDate = formatDate(date)

  return (
    <div className='menu-header'>
      {!disabled && (
        <>
          <div className={`report-nav ${prev ? '' : 'disabled'}`} onClick={prev}><ChevronLeft /></div>
          <h3>Données au {formatedDate}</h3>
          <div className={`report-nav ${next ? '' : 'disabled'}`} onClick={next}><ChevronRight /></div>
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
          padding: 0 1em;
          background-color: ${themeContext.primary};
          color: #fff;
        }

          .menu-header h3 {
            margin: 0.5em;
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

          .menu-header h3 {
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
