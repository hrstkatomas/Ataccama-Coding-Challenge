import getTitleOf from './getTitleOf'

export default function hasRecords(kids) {
  return !!getTitleOf(kids)
}