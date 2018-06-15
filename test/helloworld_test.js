var Browser = require('zombie') 
var assert = require('assert') 

var app = require('../helloworld')

describe('main page', function() { 
  it('should say hello world')
})

describe('main page', function() { 
  before(function() {
    this.browser = new Browser({ site: 'http://ec2-34-221-8-94.us-west-2.compute.amazonaws.com:3000' })
  })

  before(function(done) {
    this.browser.visit('/', done)
  })
 
  it('should say hello world', function() { 
    assert.ok(this.browser.success)
    assert.equal(this.browser.text(), "Hello World")
  })
})

