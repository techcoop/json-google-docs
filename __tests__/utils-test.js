import { extractNested } from './../src/utils'

describe('Utils - When using extractNested', function() {
  beforeEach(() => {
  });

  it('It should return an empty object when passed no data', function() {
    expect(extractNested()).toEqual({})
  })

  it('It should return data if no fields are passed', function() {
    const data = {field: 'value'}
    expect(extractNested(data)).toEqual(data)
  })

  it('It should a single entry when passed a string', function() {
    expect(extractNested({field: 'value'}, 'field')).toEqual('value')
  })

  it('It should a nested object when passed an array of fields', function() {
    const nested = {
      nest1: {
        nest2: {
          field: 'value'
        }
      }
    }

    expect(extractNested(nested, ['nest1', 'nest2'])).toEqual({field: 'value'})
  })
})
