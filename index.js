const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  //Normaliza a URL e remove queryString e a barra final
  const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
  switch (path) {
    case '':

      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('Homepage')

      break
    case '/about':
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('About')
      break

    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' })
      res.end('Not Found')
      break;
  }
})

server.listen(port, () => console.log(
  `Express started on http://localhost:${port};` + ` press Ctrl-C to terminate.....`))


