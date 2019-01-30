import getTitleOf from './getTitleOf'

export default function getRecordsOf(kids) {
  return kids[getTitleOf(kids)]?.records || []
}