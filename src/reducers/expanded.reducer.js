import {
  EXPAND_OBJECT
} from '../actions/expanded.actions'

import sliceAtIndex from '../helpers/arrays/sliceAtIndex'
import indexOfObjectShallow from '../helpers/arrays/indexOfObjectShallow'


/**
 * Store containing currently expanded objects
 * @param {Array} state input state
 * @param {Object} action state modifier
 * @returns {Object} new state or current state if action undefined
 */
export default function expanded(state = [], action) {
  switch (action.type) {
    case EXPAND_OBJECT: {
      const index = indexOfObjectShallow(state, action.value)

      return index >= 0
        ? sliceAtIndex(state, index)
        : [ ...state, action.value ]
    }

    default:
      return state
  }
}
