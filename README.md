# SimpleJsonHtml

SimpleJsonHtml generates HTML from a JSON template and a JSON model.

## Installation

Via npm on Node:

```
npm install simplejsonhtml
```


## Usage

Reference in your program:

```js
var sjh = require('simplejsonhtml');
```

## Development

```
git clone git://github.com/ajlopez/SimpleJsonHtml.git
cd SimpleJsonHtml
npm install
npm test
```

## Samples

```js
sjh.transform("Hello");         // "Hello"
sjh.transform({ h1: "Hello" }); // "<h1>Hello</h1>"
sjh.transform(
    { h1: "Hello ${name}" },
    { name: 'Adam' });          // "<h1>Hello Adam</h1>"
sjh.transform(
    [{ h1: "Hello" }, { h1: "${name}" }],
    { name: 'Adam' });          // "<h1>Hello</h1><h1>Adam</h1>"
sjh.transform(
    { h1: { "class": "main", "html": "Hello ${name}" },
    { name: 'Adam' });          // "<h1 class='main'>Hello Adam</h1>"
```

If the template is an object, each property is an attribute, except:

- `html`: the content 

## Inception

Inspired by [json2html](http://www.json2html.com/)

## Contribution

Feel free to [file issues](https://github.com/ajlopez/SimpleJsonHtml) and submit
[pull requests](https://github.com/ajlopez/SimpleJsonHtml/pulls) — contributions are
welcome<

If you submit a pull request, please be sure to add or update corresponding
test cases, and ensure that `npm test` continues to pass.

