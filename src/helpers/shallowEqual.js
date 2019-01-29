export default function shallowEqual(object1 = {}, object2 = {}) {
  return Object.keys(object1).reduce(
    (result, key) => result && object1[key] === object2[key],
    true
  )
}
