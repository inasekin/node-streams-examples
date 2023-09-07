import { createServer } from 'node:http'

const server = createServer((req, res) => {
  // res.statusCode = 404
  res.writeHead(203)
  // res.end('ok')
})

server.listen(8080)
