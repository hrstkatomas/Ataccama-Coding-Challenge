import indexOfObjectShallow from './indexOfObjectShallow'

describe('indexOfObjectShallow function', () => {
  it('Should return true if object is contained', () => {
    expect(indexOfObjectShallow([ { x: 0 }, { x: 1 }, { y: 0 } ], { x: 0 })).toEqual(0)
    expect(indexOfObjectShallow([ { x: 0 }, { x: 1 }, { y: 0 } ], { x: 1 })).toEqual(1)
    expect(indexOfObjectShallow([ { x: 0 }, { x: 1 }, { y: 0 } ], { y: 0 })).toEqual(2)
  })

  it('Should return false if object is not contained', () => {
    expect(indexOfObjectShallow([ { x: 0 }, { x: 1 }, { y: 0 } ], { y: 1 })).toEqual(-1)
    expect(indexOfObjectShallow([], { y: 1 })).toEqual(-1)
  })
})
