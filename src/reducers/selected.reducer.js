import {
  SELECT_OBJECT
} from '../actions/selected.actions'


export default function selected(state = null, action) {
  switch (action.type) {
    case SELECT_OBJECT:
      return state

    default:
      return state
  }
}
