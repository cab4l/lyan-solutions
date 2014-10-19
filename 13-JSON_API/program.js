var http = require('http')
var url = require('url')

var server = http.createServer(function (request, response) {
    var parsedURL = url.parse(request.url, true)
    var route = parsedURL.pathname
    var date = new Date(parsedURL.query["iso"])
    var result 

    if (route == "/api/parsetime")
        result = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }
    else if (route == "/api/unixtime")
        result = { unixtime: date.getTime() }

    if (result)
    {
        response.writeHead(200, { 'Content-Type': 'application/json' })        
        response.end(JSON.stringify(result))
    }
    else
    {
        response.writeHead(404)
        response.end()
    }
}).listen(Number(process.argv[2]))
