var filterFunc = require('./module.js')

var dir = process.argv[2]
var ext = process.argv[3]

filterFunc(dir, ext, function(err, data) {
    if (!err)
        data.forEach(function(file) {
            console.log(file)
        })
})


