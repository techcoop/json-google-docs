import { default as Document } from './../src/Document'
import { createMockXHR } from './../__mocks__/mockXhr'

describe('When creating a Document ', function() {
  it('it should take a URL in the constructor', function() {
    const url = 'http://localhost'
    const instance = new Document(url)
    expect(instance.url).toEqual(url)
  })

  it('it should throw an exception if no URL is passed', function() {
    expect(() => {
      new Document()
    }).toThrow(TypeError)
  })

  it('it should fetch data from the URL', function(done) {
    // Keep reference to request
    const oldXMLHttpRequest = window.XMLHttpRequest
    const data = {data: {field: 'value'}}
    let mockXHR = createMockXHR(data)
    window.XMLHttpRequest = jest.fn(() => mockXHR)

    // Get promise
    const instance = new Document('http://localhost')
    const fetchPromise = instance.fetch()

    // Trigger onload
    mockXHR.onload()

    // Assert data returned
    fetchPromise.then(() => {
      expect(instance.get()).toEqual(data.data)
      expect(instance.get('field')).toEqual('value')
      done()
    })

    // Restore reference to request
    window.XMLHttpRequest = oldXMLHttpRequest
  })
})
