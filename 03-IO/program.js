var fs = require('fs')
var contents = fs.readFileSync(process.argv[2]).toString()
var lines = contents.split('\n').length - 1
console.log(lines)
