/**
 * Will return title of kids object
 * @param {Object} kids Kids object
 * @returns {String} Title of kids object
 */
export default function getTitleOf(kids) {
  return Object.keys(kids)[0]
}