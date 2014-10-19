var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function(resp) {
    resp.setEncoding("utf8")
    resp.pipe(bl(function (err, data) {
        if (err)
            return console.error(err)
        var content = data.toString()
        console.log(content.length)
        console.log(content)
    }))
})
