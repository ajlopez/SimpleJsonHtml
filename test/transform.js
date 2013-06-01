
var sjh = require('..'),
    assert = require('assert');
    
var result = sjh.transform("Hello", null);

assert.ok(result);
assert.equal(result, "Hello");

var result = sjh.transform({ h1: "Hello" }, null);

assert.ok(result);
assert.equal(result, "<h1>Hello</h1>");

var result = sjh.transform("Hello ${name}", { name: 'Adam' });

assert.ok(result);
assert.equal(result, "Hello Adam");

var result = sjh.transform({ h1: "Hello ${name}" }, { name: 'Adam' });

assert.ok(result);
assert.equal(result, "<h1>Hello Adam</h1>");

var result = sjh.transform({ h1: { "class": "main", "html": "Hello ${name}" }}, { name: 'Adam' });

assert.ok(result);
assert.equal(result, "<h1 class='main'>Hello Adam</h1>");

var result = sjh.transform({ h1: { "checked": null, "html": "Hello ${name}" }}, { name: 'Adam' });

assert.ok(result);
assert.equal(result, "<h1 checked>Hello Adam</h1>");

var result = sjh.transform([{ h1: "Hello" }, { h1: "${name}" }], { name: 'Adam' });

assert.ok(result);
assert.equal(result, "<h1>Hello</h1><h1>Adam</h1>");
