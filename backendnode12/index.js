const fs = require("fs")
const http = require("http")
const server = http.createServer((req, res)=>{
    res.writeHead(200, {
        'Access-Control-Allow-Origin': 'http://127.0.0.1:5500'
    })
    let data = ''

    req.on('data', (chunk)=>{
        data = data+chunk.toString()
    })

    req.on('end', ()=>{
        const obj = JSON.parse(data)
        fs.writeFileSync(obj.filename, obj.content)
        res.write("Success")
        res.end()
    })
})
server.listen(8080)