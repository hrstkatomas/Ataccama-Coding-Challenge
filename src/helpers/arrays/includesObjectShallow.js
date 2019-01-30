import indexOfObjectShallow from './indexOfObjectShallow'


/**
 * Will check array if IT contains the object by shallow comparing the objects
 * @param {Array} array Array of objects
 * @param {Object} object Object to find in the array
 * @returns {Boolean} returns true if object is included
 */
export default function includesObjectShallow(array, object) {
  if (!Array.isArray(array) || !object) throw new Error('Wrong arguments supplied to includesObjectShallow function')

  const index = indexOfObjectShallow(array, object)
  return index >= 0
}
