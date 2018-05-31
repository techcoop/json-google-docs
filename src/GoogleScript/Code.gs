/*
 * MIT License
 *
 * Copyright (c) 2018 Tech Cooperative (https://techcoop.group)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/*
 * Tech Cooperative - json-google-docs
 *
 * Installation:
 * https://github.com/techcoop/json-google-docs
 */

// TODO add authentication support
// TODO will break if you don't go from H1
 
var DEBUG = true; // Should we log extra information

function test_get() {
  if (!DEBUG) {
    Logger.log('Warning, you are running test_get with DEBUG turned off!')
  }
  
  doGet()
}

function doGet(e) {
  try {
    // Setup document
    var doc = DocumentApp.getActiveDocument()
    var body = doc.getBody()
    
    // Init data
    var data = {}
    
    // Process document all sections
    var searchResult = null
    
    // Use an array to hold the previous nesting, will get reset when content is processed
    var tree = []
    var content = []
    var insideContent = false
    var element = null
    var previousElement = null
    while (searchResult = body.findElement(DocumentApp.ElementType.PARAGRAPH, searchResult)) {
      // Get element from search results
      previousElement = element
      element = searchResult.getElement()        
      
      // Get raw text for this element
      var elementText = element.getText()
      
      // Add text to tree if this is not a content item
      if (element.getHeading() !== DocumentApp.ParagraphHeading.NORMAL) {
        // When we reach our next non heading, write the previous content
        // We will need to write the result on the row after loop as well with this
        if (elementText === '') {
          continue
        }
        
        // Detect empty frame, where previousElement was the same heading
        var emptyFrame = false
        if (previousElement && previousElement.getHeading() === element.getHeading()) {
          emptyFrame = true
        }
      
        if (insideContent || emptyFrame) {
          // Merge this row into data
          data = merge(data, nestedObjectValue(tree, content))
          
          // Reset content array and insideContent flag
          content = []
          insideContent = false
          
          // Parse what level this heading is at in the tree
          var level = parseInt(element.getHeading().toString().split(' ')[1].trim())
          
          // Update tree with new heading state
          tree = tree.slice(0, level - 1);
        }
        
        // Add heading to tree array
        tree.push(elementText)
        continue
      }
      
      // If we are processing a normal element, we are inside of a content section
      insideContent = true
      
      // Add this paragraph to content
      content.push(elementText)
    }
    
    // Merge last row into data
    data = merge(data, nestedObjectValue(tree, content))
    
    var message = 'success'
    return handleSuccess(message, data)
    
  } catch(error) {
    var message = 'Unknown error ocurred'
    
    if (DEBUG) {
      Logger.log(error)
    }
    
    return handleError(message, {request: e, error: error})
  }
}


// ***** Utility functions *****

function nestedObjectValue(tree, value) {
  var obj = {}
  for (var i = tree.length; i--;) {
    if (i === tree.length - 1) {
      obj[tree[i].toLowerCase()] = value
    } else {
      obj = nest(obj, tree[i].toLowerCase())
    }
  }
  
  return obj
}

function nest(target, key) {
  var obj = {}
  obj[key] = target
  return obj
}

function merge(target, source) {
  for (var item in source)  {
    if (typeof target[item] === 'object') {
      target[item] = merge(target[item], source[item])
    } else {
      target[item] = source[item] 
    }
  }
  
  return target
}

// Gets response from object
function getResponse(data) {
   return ContentService
          .createTextOutput(JSON.stringify(data))
          .setMimeType(ContentService.MimeType.JSON);
}

// Wraps error
function handleError(message, data) {
  var error = {status: 'error', message: message}
  if (data) {
    error['data'] = data
  }
  
  if (DEBUG) {
    Logger.log(error)
  }
  
  return getResponse(error)
}

// Wraps success
function handleSuccess(message, data) {
  var success = {status: 'success', message: message}
  if (data) {
    success['data'] = data
  }
  
  if (DEBUG) {
    Logger.log(success)
  }
  
  return getResponse(success)
}
