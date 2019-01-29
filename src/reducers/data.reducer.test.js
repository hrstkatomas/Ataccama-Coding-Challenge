import reducer from './data.reducer'

import { REMOVE_OBJECT } from '../actions/data.actions'


describe('data reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual([])
  })

  it('should handle REMOVE_OBJECT', () => {
    expect(reducer([], { type: REMOVE_OBJECT }))
      .toEqual([])

    expect(reducer(
      [
        {
          data: {
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
          },
          kids: {
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
                    has_phone: {
                      records: [
                        {
                          data: {
                            'Phone ID':           '2008',
                            'ID of the relative': '1007',
                            Phone:                '+(179)-982-0570'
                          },
                          kids: {

                          }
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        },
        {
          data: {
            'Identification number': '35',
            Name:                    'Jason',
            Gender:                  'm',
            Risk:                    'BITES',
            'Hair length':           '1.6000000000',
            IQ:                      '91',
            'Admission date':        'Mon Feb 17 00:00:00 CET 1997',
            'Last breakdown':        'Wed Dec 03 03:09:55 CET 2014',
            'Yearly fee':            '67932',
            'Knows the Joker?':      'false'
          },
          kids: {

          }
        }
      ],
      {
        type:  REMOVE_OBJECT,
        value: {
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
      }
    )).toEqual(
      [
        {
          data: {
            'Identification number': '35',
            Name:                    'Jason',
            Gender:                  'm',
            Risk:                    'BITES',
            'Hair length':           '1.6000000000',
            IQ:                      '91',
            'Admission date':        'Mon Feb 17 00:00:00 CET 1997',
            'Last breakdown':        'Wed Dec 03 03:09:55 CET 2014',
            'Yearly fee':            '67932',
            'Knows the Joker?':      'false'
          },
          kids: {

          }
        }
      ]
    )
  })

  it('should handle REMOVE_OBJECT', () => {
    expect(reducer([], { type: REMOVE_OBJECT }))
      .toEqual([])

    expect(reducer(
      [
        {
          data: {
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
          },
          kids: {
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
                    has_phone: {
                      records: [
                        {
                          data: {
                            'Phone ID':           '2008',
                            'ID of the relative': '1007',
                            Phone:                '+(179)-982-0570'
                          },
                          kids: {

                          }
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        },
        {
          data: {
            'Identification number': '35',
            Name:                    'Jason',
            Gender:                  'm',
            Risk:                    'BITES',
            'Hair length':           '1.6000000000',
            IQ:                      '91',
            'Admission date':        'Mon Feb 17 00:00:00 CET 1997',
            'Last breakdown':        'Wed Dec 03 03:09:55 CET 2014',
            'Yearly fee':            '67932',
            'Knows the Joker?':      'false'
          },
          kids: {

          }
        }
      ],
      {
        type:  REMOVE_OBJECT,
        value: {
          'Identification number': '35',
          Name:                    'Jason',
          Gender:                  'm',
          Risk:                    'BITES',
          'Hair length':           '1.6000000000',
          IQ:                      '91',
          'Admission date':        'Mon Feb 17 00:00:00 CET 1997',
          'Last breakdown':        'Wed Dec 03 03:09:55 CET 2014',
          'Yearly fee':            '67932',
          'Knows the Joker?':      'false'
        }
      }
    )).toEqual(
      [
        {
          data: {
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
          },
          kids: {
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
                    has_phone: {
                      records: [
                        {
                          data: {
                            'Phone ID':           '2008',
                            'ID of the relative': '1007',
                            Phone:                '+(179)-982-0570'
                          },
                          kids: {

                          }
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    )
  })

  it('should handle REMOVE_OBJECT', () => {
    expect(reducer([], { type: REMOVE_OBJECT }))
      .toEqual([])

    expect(reducer(
      [
        {
          data: {
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
          },
          kids: {
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
                    has_phone: {
                      records: [
                        {
                          data: {
                            'Phone ID':           '2008',
                            'ID of the relative': '1007',
                            Phone:                '+(179)-982-0570'
                          },
                          kids: {

                          }
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        },
        {
          data: {
            'Identification number': '35',
            Name:                    'Jason',
            Gender:                  'm',
            Risk:                    'BITES',
            'Hair length':           '1.6000000000',
            IQ:                      '91',
            'Admission date':        'Mon Feb 17 00:00:00 CET 1997',
            'Last breakdown':        'Wed Dec 03 03:09:55 CET 2014',
            'Yearly fee':            '67932',
            'Knows the Joker?':      'false'
          },
          kids: {

          }
        }
      ],
      {
        type:  REMOVE_OBJECT,
        value: {
          'Relative ID':         '1007',
          'Patient ID':          '34',
          'Is alive?':           'true',
          'Frequency of visits': '29'
        }
      }
    )).toEqual(
      [
        {
          data: {
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
          },
          kids: {

          }
        },
        {
          data: {
            'Identification number': '35',
            Name:                    'Jason',
            Gender:                  'm',
            Risk:                    'BITES',
            'Hair length':           '1.6000000000',
            IQ:                      '91',
            'Admission date':        'Mon Feb 17 00:00:00 CET 1997',
            'Last breakdown':        'Wed Dec 03 03:09:55 CET 2014',
            'Yearly fee':            '67932',
            'Knows the Joker?':      'false'
          },
          kids: {

          }
        }
      ]
    )
  })
})
