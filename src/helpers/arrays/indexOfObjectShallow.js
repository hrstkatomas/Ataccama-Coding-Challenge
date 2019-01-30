import shallowEqual from '../objects/shallowEqual'


function shallowEqualTo(object1) {
  return object2 => shallowEqual(object1, object2)
}

/**
 * Will try to find index of object in array by shallow comparing
 * @param {Array} array Array of objects
 * @param {Object} object Object to find in the array
 * @returns {Number} index of found object or -1
 */
export default function indexOfObjectShallow(array, object) {
  if (!Array.isArray(array) || !object) throw new Error('Wrong arguments supplied to indexOfObjectShallow function')

  return array.findIndex(shallowEqualTo(object))
}
