import { createServer } from 'node:http'

const server = createServer((request, response) => {
  response.write('<html>')
  response.write('<body>')
  response.write('<h1>Hello, World!</h1>')
  response.write('</body>')
  response.write('</html>')
  response.end()
})

server.listen(8080)
