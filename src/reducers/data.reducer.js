import { REMOVE_OBJECT } from '../actions/data.actions'

import shallowEqual from '../helpers/shallowEqual'


function getTitleOf(kids) {
  return Object.keys(kids)[0]
}

function getRecordsOf(kids) {
  return kids[getTitleOf(kids)]?.records || []
}

function sliceAtIndex(array, index) {
  return [
    ...array.slice(0, index),
    ...array.slice(index + 1)
  ]
}

function shallowEqualTo(object) {
  return ({ data }) => shallowEqual(data, object)
}

function remove(state, object) {
  const index = state.findIndex(shallowEqualTo(object))
  if (index >= 0) return sliceAtIndex(state, index)

  return state.map(currentObject => {
    const { kids } = currentObject
    const removedKids = remove(getRecordsOf(kids), object)

    return {
      ...currentObject,
      kids: {
        ...removedKids.length && {
          [getTitleOf(kids)]: {
            records: removedKids
          }
        }
      }
    }
  })
}


export default function data(state = [], action) {
  switch (action.type) {
    case REMOVE_OBJECT:
      return remove(state, action.value)

    default:
      return state
  }
}
