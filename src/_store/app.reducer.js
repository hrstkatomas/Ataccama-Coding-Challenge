import { combineReducers } from 'redux'

import data from '../reducers/data.reducer'
import selected from '../reducers/selected.reducer'
import expanded from '../reducers/expanded.reducer'

export default combineReducers({
  data,
  selected,
  expanded
})
