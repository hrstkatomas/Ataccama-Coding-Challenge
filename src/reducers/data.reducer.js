import {
  REMOVE_OBJECT
} from '../actions/data.actions'


export default function data(state = {}, action) {
  switch (action.type) {
    case REMOVE_OBJECT:
      return state

    default:
      return state
  }
}
