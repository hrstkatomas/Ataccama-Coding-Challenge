/**
 * Will compare keys and values of two objects
 * @param {Object} object1 First object to compare
 * @param {Object} object2 Second object to compare
 * @returns {Boolean} true if keys and values of objects are equal
 */
export default function shallowEqual(object1 = {}, object2 = {}) {
  return Object.keys(object1).reduce(
    (result, key) => result && object1[key] === object2[key],
    true
  )
}
