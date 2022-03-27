const YAML = require('js-yaml');

/**
 * Converts a string with front-matter
 * @param {String} str - String with front-matter
 * @param {Object} options - Object with Options
 * @returns {Object}
 */
const matter = (str = '', options) => {
  const { delimiters, parser: parse } = Object.assign(
    {
      delimiters: ['---', '---'],
      parser: YAML.load,
    },
    options,
  );
  const [open, close] = delimiters;
  const r1 = new RegExp(`^${open}[\r\n]`);
  const r2 = new RegExp(`[\r\n]${close}[\r\n]`);
  if (!(r1.test(str) && r2.test(str))) return { content: str };
  const x = r1.exec(str);
  const i = x[0].length;
  const y = r2.exec(str.substr(i));
  const j = i + y.index;
  const k = j + y[0].length;
  const front = str.substring(i, j);
  const data = parse(front);
  let content = str.slice(k);
  if (content[0] === '\r') {
    content = content.slice(1);
  }
  if (content[0] === '\n') {
    content = content.slice(1);
  }
  return { data, content };
};

module.exports = matter;
