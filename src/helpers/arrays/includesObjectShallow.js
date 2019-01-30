import indexOfObjectShallow from './indexOfObjectShallow'


export default function includesObjectShallow(array, object) {
  if (!Array.isArray(array) || !object) throw new Error('Wrong arguments supplied to includesObjectShallow function')

  const index = indexOfObjectShallow(array, object)
  return index >= 0
}
