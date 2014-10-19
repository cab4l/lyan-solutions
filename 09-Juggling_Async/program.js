var http = require('http')
var bl = require('bl')

var urls = process.argv.slice(2)

result = {}

urls.forEach(function(url) {
    count = 0
    getHTTP(url, function(err, data) {
        if (err)
            return console.error(err)
        result[url] = data
        count++
        if (count === urls.length)
        {
            printResults()
        }
    })
})

function printResults()
{
    urls.forEach(function(url) {
        console.log(result[url])
    })
}

function getHTTP(url, callback)
{
    http.get(url, function(resp) { 
        resp.pipe(bl(function (err, data) {
            if (err)
                return callback(err)
            return callback(null, data.toString())
        }))
    })
}


