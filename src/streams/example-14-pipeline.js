import { pipeline } from 'node:stream/promises'
import { createGzip } from 'node:zlib'
import { createReadStream, createWriteStream } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const filePath = join(__dirname, '../../public/index.html')

await pipeline(
  createReadStream(filePath),
  createGzip(),
  createWriteStream(`${filePath}.gz`)
)
console.log('Pipeline succeeded.')
