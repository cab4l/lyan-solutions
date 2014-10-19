var http = require('http')
var map = require('through2-map')

http.createServer(function(request, response) {
    if (request.method != "POST")
    {
        response.end("Send me a POST!\n")
    }

    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(response)
}).listen(Number(process.argv[2]))
