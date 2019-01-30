import getTitleOf from './getTitleOf'


/**
 * Will return records of kids if it has some
 * @param {Object} kids Kids object
 * @returns {Array} Records in kids object
 */
export default function getRecordsOf(kids) {
  return kids[getTitleOf(kids)]?.records || []
}