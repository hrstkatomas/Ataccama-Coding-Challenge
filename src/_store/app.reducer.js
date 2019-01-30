import { combineReducers } from 'redux'

import data from '../reducers/data.reducer'
import expanded from '../reducers/expanded.reducer'


export default combineReducers({
  data,
  expanded
})
