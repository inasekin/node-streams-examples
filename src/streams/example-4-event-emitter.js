import { createServer } from 'node:http'

const server = createServer((request, response) => {
  let body = []
  request.on('data', (chunk) => {
    body.push(chunk)
  })
    .on('end', () => {
      body = Buffer.concat(body).toString()
      response.end(body)
    })
})

server.listen(8080)
