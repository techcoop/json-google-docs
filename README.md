# JSON-Google-Docs
[![Maintenance Status][status-image]][status-url] [![NPM version][npm-image]][npm-url] [![Travis build][travis-image]][travis-url]

Uses Google Apps Scripts with Google Docs to provide a document tree in JSON exposed on a GET URL for integration into anything.

https://techcoop.github.io/json-google-docs/

##### Warning: This is should be considered extremely experimental

# Requirements

1) A Google Account
2) Your Google Doc with text content with headers
3) node > 6.0.0 (Optional)
4) yarn (or npm latest) > 0.10.0 (Optional)

# Installation

### Google Scripts
1) Open your google doc document
2) Click on "Tools" > "Script Editor..."
3) Name your project something memorable
4) Replace contents of code.gs with [this file](https://github.com/techcoop/json-google-docs/blob/master/src/GoogleScript/Code.gs)
4) Click on Publish and select "Deploy as web app"
5) Select new and type a version name (e.g 0.1.0) (or update existing)
6) In "Execute the app as" select yourself
7) In "Who has access to the app" Select "Anyone, even anonymous"
8) Click Deploy or Update
9) Click "Review Permissions", to Authorize application
10) When you see a warning, Click "Advanced" and "Go to json-google-docs Demo"
10) Review list of  permissions required, and click "Allow"
11) Copy and paste URL

### NPM package

```bash
yarn add json-google-docs
```

# Usage

### ES6
```javascript
import { Document } from 'json-google-docs'

const uri = 'https://script.googleusercontent.com/macros/echo?user_content_key=hqAM2uUtmlnuSybtM-GbVnbqBG864jAwf7wPuMjLNY87kFc58orubUuGr2s4w_nU_2XbOUdnOhQYqydGFSerxTZcYg2lq4EUm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKHUxXDtU9d-4s_ZDMMZ5puQfuxCLCTCap-xNYsg5JYoTjyvpSz_6jTgQHY_bPxQKPKfVnhjI6Uu&lib=Mb46ZgXAGNpXApDvE_4m9szZqqPiN-w-P'
const doc = new Document(uri)

doc.fetch().then(() => {
  console.log(document.get('Title'))
})
```

### Node
```javascript
var JSONGoogleDocs = require('json-google-docs')
var uri = 'https://script.googleusercontent.com/macros/echo?user_content_key=hqAM2uUtmlnuSybtM-GbVnbqBG864jAwf7wPuMjLNY87kFc58orubUuGr2s4w_nU_2XbOUdnOhQYqydGFSerxTZcYg2lq4EUm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKHUxXDtU9d-4s_ZDMMZ5puQfuxCLCTCap-xNYsg5JYoTjyvpSz_6jTgQHY_bPxQKPKfVnhjI6Uu&lib=Mb46ZgXAGNpXApDvE_4m9szZqqPiN-w-P'
var doc = new JSONGoogleDocs.Document(uri)

doc.fetch().then(function() {
  console.log(document.get('Title'))
})
```

### Javascript

```html
<script src="json-google-docs.js"></script>
```

```javascript
var url = 'https://script.googleusercontent.com/macros/echo?user_content_key=hqAM2uUtmlnuSybtM-GbVnbqBG864jAwf7wPuMjLNY87kFc58orubUuGr2s4w_nU_2XbOUdnOhQYqydGFSerxTZcYg2lq4EUm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKHUxXDtU9d-4s_ZDMMZ5puQfuxCLCTCap-xNYsg5JYoTjyvpSz_6jTgQHY_bPxQKPKfVnhjI6Uu&lib=Mb46ZgXAGNpXApDvE_4m9szZqqPiN-w-P'
var doc = new JSONGoogleDocs.Document(url)

doc.fetch().then(function() {
  console.log(document.get('Title'))
})
```

# Testing

### Google Scripts
There is a test function setup that you can change to include your own fields and make sure your form is setup correctly.

1) Change the testData in test_get()
2) Move to Run in the top menu)
3) Click function test_get()

### Client library

```bash
# Run unit test
yarn test
```

# Releasing
```bash
# Create new versioned release
yarn run release
```

# Examples

### Demo
You can see a demo for this:
https://techcoop.github.io/json-google-docs/

You can see the original google docs here:
https://docs.google.com/document/d/1bWzB8QWraOfoYG_ptIBTGz0aRWphbiXLvKWg-zs1gz4/edit

You can see the JSON source here:
https://script.googleusercontent.com/macros/echo?user_content_key=hqAM2uUtmlnuSybtM-GbVnbqBG864jAwf7wPuMjLNY87kFc58orubUuGr2s4w_nU_2XbOUdnOhQYqydGFSerxTZcYg2lq4EUm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKHUxXDtU9d-4s_ZDMMZ5puQfuxCLCTCap-xNYsg5JYoTjyvpSz_6jTgQHY_bPxQKPKfVnhjI6Uu&lib=Mb46ZgXAGNpXApDvE_4m9szZqqPiN-w-P

# TODO
- TODO implement search or nested element fetching

# Contributors
[colin@techcoop.group](admin) 

[admin]: https://github.com/colingagnon

[status-image]: https://img.shields.io/badge/status-maintained-brightgreen.svg
[status-url]: https://github.com/techcoop/json-google-docs

[npm-image]: https://img.shields.io/npm/v/json-google-docs.svg
[npm-url]: https://www.npmjs.com/package/json-google-docs

[travis-image]: https://travis-ci.org/techcoop/json-google-docs.svg?branch=master
[travis-url]: https://travis-ci.org/techcoop/json-google-docs

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: https://raw.githubusercontent.com/techcoop/json-google-docs/master/LICENSE
