// It provides methods for working with URLs
const url = require('url');

// parse a URL
const obj = url.parse('https://www.unsplash.com/name/img?baz=qux');
console.log(obj);

// format an object into a URL
const str = url.format({ protocol: 'https', hostname: 'www.unsplash.com', pathname: '/name/img', query: { baz: 'qux' } });
console.log(str);
