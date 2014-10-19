var http = require('http')
var bl = require('bl)

http.get(process.argv[2], function(resp) {
    var contents = ""
    resp.setEncoding("utf8")
    resp.on("data", function(data) {
        contents += data 
    })
    resp.on("end", function() {
        console.log(contents.length)
        console.log(contents)
    })
})
