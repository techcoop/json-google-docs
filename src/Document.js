import { extractNested } from './utils'

class Document {
  constructor (url) {
    this.data = undefined

    if (!url) {
      throw new TypeError('Document::constructor - You must pass a URL.')
    }

    this.url = url
  }

  get (fields) {
    return extractNested(this.data, fields)
  }

  fetch () {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', this.url)
        xhr.onload = () => {
          const response = JSON.parse(xhr.responseText)
          if (response.data) {
            this.data = response.data
          }

          resolve()
        }
        xhr.onerror = () => reject(xhr.statusText)
        xhr.send()
      })
  }
}

export default Document
