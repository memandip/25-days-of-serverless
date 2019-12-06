const http = require('http')

http
    .createServer((req, res) => {
        if (req.url !== '/' && req.url !== '/favicon.ico') {
            res.writeHead(302, {
                'Location': '/'
            })
            res.end()
        } else {
            let dreidelSideTexts = ['נ', 'ג', 'ה', 'ש']
            let index = Math.ceil(Math.random() * dreidelSideTexts.length - 1)
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
            res.write(`${dreidelSideTexts[index]}`)
            res.end()
        }
    })
    .listen(8000, () => console.log('Server listening on port 8000'))