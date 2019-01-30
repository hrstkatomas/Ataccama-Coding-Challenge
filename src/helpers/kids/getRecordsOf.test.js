import getRecordsOf from './getRecordsOf'

describe('getRecordsOf function', () => {
  it('Should return undefined if no title', () => {
    expect(getRecordsOf({})).toEqual([])
  })

  it('Should return correct title of kids', () => {
    expect(getRecordsOf({
      has_relatives: {
        records: [

        ]
      }
    })).toEqual([])
  })

  it('Should return correct title of kids', () => {
    expect(getRecordsOf({
      has_phone: {
        records: [
          {
            data: {
              'Phone ID':           '479',
              'ID of the relative': '1043',
              Phone:                '+(123)-408--5901'
            },
            kids: {

            }
          },
          {
            data: {
              'Phone ID':           '2470',
              'ID of the relative': '1043',
              Phone:                '546 765-7237'
            },
            kids: {

            }
          }
        ]
      }
    })).toEqual([
      {
        data: {
          'Phone ID':           '479',
          'ID of the relative': '1043',
          Phone:                '+(123)-408--5901'
        },
        kids: {

        }
      },
      {
        data: {
          'Phone ID':           '2470',
          'ID of the relative': '1043',
          Phone:                '546 765-7237'
        },
        kids: {

        }
      }
    ])
  })
})
