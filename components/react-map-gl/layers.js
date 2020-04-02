import colors from '../../styles/colors'

export const casConfirmesLayer = {
  id: 'casConfirmes',
  type: 'circle',
  source: 'casConfirmes',
  filter: ['>', 'casConfirmes', 0],
  paint: {
    'circle-opacity': 0.6,
    'circle-color': colors.orange,
    'circle-radius': [
      'interpolate',
      ['linear'],
      ['sqrt', ['number', ['get', 'casConfirmes']]],
      0,
      10,
      100,
      70
    ]
  }
}

export const decesLayer = {
  id: 'deces',
  type: 'circle',
  source: 'deces',
  filter: ['>', 'deces', 0],
  paint: {
    'circle-opacity': 0.6,
    'circle-color': colors.red,
    'circle-radius': [
      'interpolate',
      ['linear'],
      ['sqrt', ['number', ['get', 'deces']]],
      0,
      10,
      100,
      70
    ]
  }
}

export const guerisLayer = {
  id: 'gueris',
  type: 'circle',
  source: 'gueris',
  filter: ['>', 'gueris', 0],
  paint: {
    'circle-opacity': 0.6,
    'circle-color': colors.green,
    'circle-radius': [
      'interpolate',
      ['linear'],
      ['sqrt', ['number', ['get', 'gueris']]],
      0,
      10,
      100,
      70
    ]
  }
}

export const hospitalisesLayer = {
  id: 'hospitalises',
  type: 'circle',
  source: 'hospitalises',
  filter: ['>', 'hospitalises', 0],
  paint: {
    'circle-opacity': 0.6,
    'circle-color': colors.darkGrey,
    'circle-radius': [
      'interpolate',
      ['linear'],
      ['sqrt', ['number', ['get', 'hospitalises']]],
      0,
      10,
      100,
      70
    ]
  }
}

export const reanimationLayer = {
  id: 'reanimation',
  type: 'circle',
  source: 'reanimation',
  filter: ['>', 'reanimation', 0],
  paint: {
    'circle-opacity': 0.6,
    'circle-color': colors.darkerGrey,
    'circle-radius': [
      'interpolate',
      ['linear'],
      ['sqrt', ['number', ['get', 'reanimation']]],
      0,
      10,
      100,
      70
    ]
  }
}
