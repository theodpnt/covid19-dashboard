import React, {useState, useContext} from 'react'
import DeckGL, {ArcLayer} from 'deck.gl'
import ReactMapGL, {Popup} from 'react-map-gl'

import geo from '../../geo.json'
import regions from '../../regions.json'

import {TransfertContext} from '../layouts/transfert'

import TransfertPopup from './transfert-popup'

const EUROPE_CENTER = [11.9531, 50.2331]

const getRegionCenter = name => {
  const {code} = regions.find(({region}) => region === name)
  return geo[code].center
}

const TransfertMap = () => {
  const {transfertsGroup, setSelectedTransferts} = useContext(TransfertContext)

  const [hovered, setHovered] = useState(null)

  const defaultViewport = {
    latitude: 46.9,
    longitude: 1.7,
    zoom: 5
  }

  const onHover = info => {
    if (info.object) {
      const [longitude, latitude] = info.lngLat
      setHovered({
        longitude,
        latitude,
        ...info.object
      })
    } else {
      setHovered(null)
    }
  }

  const onClick = info => {
    if (info.object) {
      setSelectedTransferts(info.object.transferts)
    }
  }

  const data = transfertsGroup.map(transfert => {
    return {
      ...transfert,
      from: {
        name: transfert.regionDepart,
        coordinates: getRegionCenter(transfert.regionDepart)
      },
      to: {
        name: transfert.regionArrivee || 'Pays européens',
        coordinates: transfert.regionArrivee ? getRegionCenter(transfert.regionArrivee) : EUROPE_CENTER
      }
    }
  })

  const layers = [
    new ArcLayer({
      id: 'arcs',
      data,
      autoHighlight: true,
      pickable: true,
      getWidth: d => Math.sqrt(d.nbPatientsTransferes),
      getSourcePosition: d => d.from.coordinates,
      getTargetPosition: d => d.to.coordinates,
      getSourceColor: [209, 51, 91],
      getTargetColor: [0, 65, 146],
      onHover,
      onClick
    })
  ]

  return (
    <ReactMapGL
      viewState={defaultViewport}
      width='100%'
      height='100%'
      mapStyle='https://etalab-tiles.fr/styles/osm-bright/style.json'
    >
      <DeckGL initialViewState={defaultViewport} layers={layers} />
      {hovered && (
        <Popup
          longitude={hovered.longitude}
          latitude={hovered.latitude}
          closeButton={false}
          closeOnClick={false}
          onClose={() => setHovered(null)}
          anchor='bottom-left'
        >
          <TransfertPopup {...hovered} />
        </Popup>)}
    </ReactMapGL>
  )
}

export default TransfertMap
