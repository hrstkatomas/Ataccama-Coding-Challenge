export default function sliceAtIndex(array, index) {
  if (index > array.length - 1 || index < 0) return array

  return [
    ...array.slice(0, index),
    ...array.slice(index + 1)
  ]
}
