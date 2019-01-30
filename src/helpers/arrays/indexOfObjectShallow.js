import shallowEqual from '../objects/shallowEqual'


function shallowEqualTo(object1) {
  return object2 => shallowEqual(object1, object2)
}

export default function indexOfObjectShallow(array, object) {
  if (!Array.isArray(array) || !object) throw new Error('Wrong arguments supplied to indexOfObjectShallow function')

  return array.findIndex(shallowEqualTo(object))
}
