//var JSONGoogleDocs = require('../lib')
var JSONGoogleDocs = require('json-google-docs')
var uri = 'https://script.googleusercontent.com/macros/echo?user_content_key=hqAM2uUtmlnuSybtM-GbVnbqBG864jAwf7wPuMjLNY87kFc58orubUuGr2s4w_nU_2XbOUdnOhQYqydGFSerxTZcYg2lq4EUm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKHUxXDtU9d-4s_ZDMMZ5puQfuxCLCTCap-xNYsg5JYoTjyvpSz_6jTgQHY_bPxQKPKfVnhjI6Uu&lib=Mb46ZgXAGNpXApDvE_4m9szZqqPiN-w-P'
var doc = new JSONGoogleDocs.Document(uri)

doc.fetch().then(function() {
  console.log(doc.get('Title'))
})
