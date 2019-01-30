import hasRecords from './hasRecords'

describe('hasRecords function', () => {
  it('Should return false when kids are empty', () => {
    expect(hasRecords({})).toEqual(false)
  })

  it('Should return true when kids are present', () => {
    expect(hasRecords({
      has_relatives: {
        records: [
          {
            data: {
              'Relative ID':         '1007',
              'Patient ID':          '34',
              'Is alive?':           'true',
              'Frequency of visits': '29'
            },
            kids: {

            }
          }
        ]
      }
    })).toEqual(true)
  })
})
