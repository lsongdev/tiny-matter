const assert = require('assert');
const matter = require('..');
const test = require('./test');

test('matter#empty', () => {
  const x = matter();
  assert.ok(x);
  assert.strictEqual(typeof x, 'object');
  assert.strictEqual(typeof x.content, 'string');
  assert.strictEqual(typeof x.data, 'undefined');
});

test('matter#normal', () => {
  const x = matter('---\ntitle: Front Matter\n---\nThis is content.');
  assert.ok(x);
  assert.strictEqual(typeof x, 'object');
  assert.strictEqual(typeof x.data, 'object');
  assert.strictEqual(typeof x.content, 'string');
  assert.strictEqual(x.data.title, 'Front Matter');
  assert.strictEqual(x.content, 'This is content.');
});

test('matter#json', () => {
  const x = matter('---\n{ "title": "Front Matter" }\n\n\n\n---\nThis is content.', { parser: JSON.parse });
  assert.strictEqual(typeof x, 'object');
  assert.strictEqual(typeof x.data, 'object');
  assert.strictEqual(typeof x.content, 'string');
  assert.strictEqual(x.data.title, 'Front Matter');
  assert.strictEqual(x.content, 'This is content.');
});

test('matter#delimiters', () => {
  const x = matter('@@@@\ntitle: Front Matter\n~~~~\nThis is content.', {
    delimiters: ['@@@@', '~~~~'],
  });
  assert.ok(x);
  assert.strictEqual(typeof x, 'object');
  assert.strictEqual(typeof x.data, 'object');
  assert.strictEqual(typeof x.content, 'string');
  assert.strictEqual(x.data.title, 'Front Matter');
  assert.strictEqual(x.content, 'This is content.');
});

test('matter#crlf', () => {
  const x = matter('---\r\ntitle: Front Matter\r\n---\r\nThis is content.');
  assert.ok(x);
  assert.strictEqual(typeof x, 'object');
  assert.strictEqual(typeof x.data, 'object');
  assert.strictEqual(typeof x.content, 'string');
  assert.strictEqual(x.data.title, 'Front Matter');
  assert.strictEqual(x.content, 'This is content.');
});
