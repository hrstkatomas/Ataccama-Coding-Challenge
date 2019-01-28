import {
  EXPAND_OBJECT
} from '../actions/expanded.actions'


export default function expanded(state = [], action) {
  switch (action.type) {
    case EXPAND_OBJECT:
      return state

    default:
      return state
  }
}
