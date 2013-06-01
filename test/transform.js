
var sjh = require('..'),
    assert = require('assert');
    
var result = sjh.transform("Hello", null);

assert.ok(result);
assert.equal(result, "Hello");

var result = sjh.transform({ h1: "Hello" }, null);

assert.ok(result);
assert.equal(result, "<h1>Hello</h1>");

