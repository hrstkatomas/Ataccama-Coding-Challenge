import getTitleOf from './getTitleOf'

describe('getTitleOf function', () => {
  it('Should return undefined if no title', () => {
    expect(getTitleOf({})).toEqual(undefined)
  })

  it('Should return correct title of kids', () => {
    expect(getTitleOf({
      has_relatives: {
        records: [

        ]
      }
    })).toEqual('has_relatives')
  })

  it('Should return correct title of kids', () => {
    expect(getTitleOf({
      has_phone: {
        records: [

        ]
      }
    })).toEqual('has_phone')
  })

})
