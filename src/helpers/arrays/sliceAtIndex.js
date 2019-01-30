/**
 * Will remove object from array at specified index
 * @param {Array} array Array of items
 * @param {Number} index Intex of item to remove
 * @returns {Array} New array of objects
 */
export default function sliceAtIndex(array, index) {
  if (index > array.length - 1 || index < 0) return array

  return [
    ...array.slice(0, index),
    ...array.slice(index + 1)
  ]
}
