## tiny-matter

> super tiny front matter parser just ~20 lines with no dependencies. Type definitions included.

### What's is ?

Converts a string with front-matter, like this:

```yaml
---
title: Hello
slug: home
---
<h1>Hello world!</h1>
```

Into an object like this:

```js
{
  content: '<h1>Hello world!</h1>',
  data: {
    title: 'Hello',
    slug: 'home'
  }
}
```

### Install

```sh
~$ npm i tiny-matter --save
```

### Example

```js
// CommonJS
const matter = require('tiny-matter')

// ES6
import matter from 'tiny-matter'

console.log(matter('---\ntitle: Front Matter\n---\nThis is content.'))
```

### License

This project is under MIT license.
