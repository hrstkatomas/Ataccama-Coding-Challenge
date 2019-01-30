import includesObjectShallow from './includesObjectShallow'

describe('sliceAincludesObjectShallowtIndex function', () => {
  it('Should return true if object is contained', () => {
    expect(includesObjectShallow([ { x: 0 }, { x: 1 }, { y: 0 } ], { x: 1 })).toEqual(true)
  })

  it('Should return false if object is not contained', () => {
    expect(includesObjectShallow([ { x: 0 }, { x: 1 }, { y: 0 } ], { y: 1 })).toEqual(false)
    expect(includesObjectShallow([], { y: 1 })).toEqual(false)
  })
})
