const url = require('url');

const my_url = new URL('http://myweb.com:344/dash.html?id=23&status=active');

// Serialize URL
console.log(my_url.href)
// console.log(my_url.toString())

// Host (root domain) comes with PORT
console.log(my_url.host)

// Hostname
console.log(my_url.hostname)

// Pathname
console.log(my_url.pathname)

// Serialized Query or GET param
console.log(my_url.search)

// Create GET Params object
console.log(my_url.searchParams)

// Add GET Params
my_url.searchParams.append('dash', '344')
console.log(my_url.searchParams)

// Loop through params
my_url.searchParams.forEach( (value, name) => console.log(`${name}: ${value}`) )