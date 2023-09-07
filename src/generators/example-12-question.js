import http from 'node:http'
import fs from 'node:fs'

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === 'GET') {
      const readStream = fs.createReadStream('./test.txt', { encoding: 'utf8' })

      res.setHeader('Content-Type', 'text/plain; charset=utf-8')
      res.writeHead(200)

      for await (const chunk of readStream) {
        res.write(chunk)
      }

      res.end()
    } else {
      res.writeHead(405)
      res.end()
    }
  } catch (err) {
    res.writeHead(500)
    res.end()
  }
})

// Запускаем сервер на порту 3000
server.listen(3000, () => {
  console.log('Сервер запущен на порту 3000')
})
