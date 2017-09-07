# Serverless-CMS
Uses Google Apps Scripts with Google Docs to provide a document tree in JSON exposed on a GET URL for integration into anything.

# Requirements

1) A Google Account
2) Your Google Doc with text content

# Installation

1) Open your google doc document
2) Click on "Tools" > "Script Editor..."
3) Name your project something useful or use the domain name
4) Click on Publish and select "Deploy as web app"
5) Select new and type a version name (e.g 0.1.0) (or update existing)
6) In "Execute the app as" select yourself
7) In "Who has access to the app" Select "Anyone, even anonymous"
8) Click Deploy or Update
9) Click "Review Permissions", to Authorize application
10) Review list of  permissions required, and click "Allow"
11) Copy and paste URL

TODO build integration library

# Testing
There is a test function setup that you can change to include your own fields and make sure your form is setup correctly.

1) Change the testData in test_get()
2) Move to Run in the top menu)
3) Click function test_get()

# Examples

### XHR Based

### Build Based

### Live website 
The techcoop.group website is setup to use this.

Example content:
https://script.googleusercontent.com/macros/echo?user_content_key=Fj9V8PL6rtPfMuxIJv5stkRUt3Bf-VZUez4CJRZ_kzxNjXMRrENFRp9iryp_ymXH1dejq9ITx-v7-1ujrWa1Om9pTWrFoJmXm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLd1x65xMrUd4kWJ7wGAxdxOschcJWqy_dmkCwagJSZQOLbmRbHajeRK7jWom-VxoOvlFWeK2glt&lib=MQIOYbA6JCJ3qik6k9TEJiRoYjyRuxRsI

You can see the content in use here:
[https://techcoop.group](https://techcoop.group)

# Contributors
[colin@techcoop.group](https://github.com/orgs/techcoop/people/colingagnon) 


[admin_email]: https://img.shields.io/badge/status-maintained-brightgreen.svg