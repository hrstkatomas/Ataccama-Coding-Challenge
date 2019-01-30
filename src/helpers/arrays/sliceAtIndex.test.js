import sliceAtIndex from './sliceAtIndex'

describe('sliceAtIndex function', () => {
  it('Should not slice if index out of range', () => {
    expect(sliceAtIndex([ 1, 2, 3 ], -1)).toEqual([ 1, 2, 3 ])
  })

  it('Should slice correctly at the end ', () => {
    expect(sliceAtIndex([ 1, 2, 3 ], 2)).toEqual([ 1, 2 ])
  })

  it('Should slice correctly on the beginning', () => {
    expect(sliceAtIndex([ 1, 2, 3 ], 0)).toEqual([ 2, 3 ])
  })

  it('Should slice correctly in the middle', () => {
    expect(sliceAtIndex([ 1, 2, 3 ], 1)).toEqual([ 1, 3 ])
  })
})
