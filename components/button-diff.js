import React from 'react'
import PropTypes from 'prop-types'

import colors from '../styles/colors'

const ButtonDiff = ({isVariation, onClick}) => {
  return (
    <>
      <div className='button-container'>
        <button className='chart-name' type='button' onClick={onClick} >{isVariation ? 'Afficher Données cumulées' : 'Afficher Variations'}</button>
      </div>
      <style jsx>{`
        .chart-name {
          display: block;
          font-weight: bold;
          height: 100%;
          text-align: center;
          background-color: ${colors.white};
          color: ${colors.darkBlue};
          padding: 0.4em;
          font-size: .7em;
          letter-spacing: .1em;
          border: 1px solid ${colors.darkBlue};
          text-transform: uppercase;
          transform: translate(-.1em, -.1em);
          transition: transform .1s ease-out;
        }

        .chart-name:hover {
          cursor: pointer;
          color: ${colors.white};
          background-color: ${colors.darkBlue};
        }

        .chart-name:active {
          transform: translate(0px, 0px);
        }

        .chart-name.selected {
          color: #FFF;
          background-color: ${colors.darkBlue};
        }

        .button-container {
          display: grid;
          background-color: ${colors.white};
          border-bottom: 1px solid ${colors.darkBlue};
          border-right: 1px solid ${colors.darkBlue};
          margin: 1em;
        }
      `}</style>
    </>
  )
}

ButtonDiff.defaultProps = {
  isVariation: false
}

ButtonDiff.propTypes = {
  isVariation: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

export default ButtonDiff
