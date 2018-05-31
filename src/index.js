if (typeof window === 'undefined') {
  global.XMLHttpRequest = require('xhr2')
}

export { default as Document } from './Document'
