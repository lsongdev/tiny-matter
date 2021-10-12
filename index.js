const YAML = require('js-yaml');

/**
 * matter
 * @param {*} str 
 * @param {*} options 
 * @returns 
 */
const matter = (str = '', options) => {
  const { delimiters, parser: parse } = Object.assign({
    delimiters: ['---', '---'],
    parser: YAML.load,
  }, options);
  const [open, close] = delimiters;
  const r1 = new RegExp(`^${open}\n`);
  const r2 = new RegExp(`\n${close}\n`);
  if (!(r1.test(str) && r2.test(str)))
    return { content: str };
  const x = r1.exec(str);
  const i = x[0].length;
  const y = r2.exec(str.substr(i));
  const j = i + y.index;
  const k = j + y[0].length;
  const front = str.substring(i, j);
  const data = parse(front);
  const content = str.slice(k);
  return { data, content };
};

module.exports = matter;