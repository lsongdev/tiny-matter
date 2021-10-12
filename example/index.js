const matter = require('..');

console.log(matter('---\ntitle: Front Matter\n---\nThis is content.'));
console.log(matter('---\n{ "title": "Front Matter" }\n\n\n\n---\nThis is content.', { parser: JSON.parse }));