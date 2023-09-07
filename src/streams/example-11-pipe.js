import { createServer } from 'node:http'
import { createReadStream } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const filePath = join(__dirname, '../../public/index.htm')

const server = createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/html')
  res.statusCode = 200
  const readStream = createReadStream(filePath, 'utf8')

  readStream.on('error', (error) => {
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/plain')
    res.end('Internal Server Error')
  })

  readStream.pipe(res)
})

server.listen(8080, () => {
  console.log('Server is running on http://localhost:8080')
})
