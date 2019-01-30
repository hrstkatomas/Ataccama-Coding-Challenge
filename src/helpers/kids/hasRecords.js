import getTitleOf from './getTitleOf'


/**
 * Will check whenever kids are present
 * @param {Object} kids Kids object
 * @returns {Boolean} true if kids are present
 */
export default function hasRecords(kids) {
  return !!getTitleOf(kids)
}