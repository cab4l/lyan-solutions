var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req, resp) {
    fs.createReadStream(process.argv[3]).pipe(resp)
})
server.listen(Number(process.argv[2]))
