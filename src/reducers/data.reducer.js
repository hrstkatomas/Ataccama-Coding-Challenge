import { REMOVE_OBJECT } from '../actions/data.actions'

import shallowEqual from '../helpers/objects/shallowEqual'
import getTitleOf from '../helpers/kids/getTitleOf'
import getRecordsOf from '../helpers/kids/getRecordsOf'
import sliceAtIndex from '../helpers/arrays/sliceAtIndex'


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

/**
 * Data reducer containing data for visualization
 * @param {Array} state input state
 * @param {Object} action state modifier
 * @returns {Object} new state or current state if action undefined
 */
export default function data(state = [], action) {
  switch (action.type) {
    case REMOVE_OBJECT:
      return remove(state, action.value)

    default:
      return state
  }
}
