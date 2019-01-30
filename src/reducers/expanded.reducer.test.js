import reducer from './expanded.reducer'

import { EXPAND_OBJECT } from '../actions/expanded.actions'


describe('expanded reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual([])
  })

  const anObject = {
    'Identification number': '34',
    Name:                    'Joqmo',
    Gender:                  'female',
    Risk:                    'BITES',
    'Hair length':           '6.2000000000',
    IQ:                      '98',
    'Admission date':        'Mon Dec 13 00:00:00 CET 1993',
    'Last breakdown':        'Wed Dec 24 07:14:50 CET 2014',
    'Yearly fee':            '67035',
    'Knows the Joker?':      'true'
  }

  it('should handle EXPAND_OBJECT', () => {
    expect(reducer(
      [ ],
      {
        type:  EXPAND_OBJECT,
        value: anObject
      }
    )).toEqual(
      [ anObject ]
    )
  })

  it('should collapse object of is expanded', () => {
    expect(reducer(
      [
        anObject
      ],
      {
        type:  EXPAND_OBJECT,
        value: anObject
      }
    )).toEqual(
      [ ]
    )
  })
})
