import shallowEqual from './shallowEqual'

const data = {
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

const data2 = {
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

it('Should compare two objects correctly', () => {
  expect(shallowEqual()).toEqual(true)
  expect(shallowEqual(data, data)).toEqual(true)
  expect(shallowEqual(data, data2)).toEqual(false)
})
