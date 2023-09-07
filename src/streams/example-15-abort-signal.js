import { pipeline } from 'node:stream/promises'
import { createReadStream, createWriteStream } from 'node:fs'
import { createGzip } from 'node:zlib'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const filePath = join(__dirname, '../../public/index.html')

const ac = new AbortController()
const { signal } = ac
setImmediate(() => ac.abort())
try {
  await pipeline(
    createReadStream(filePath),
    createGzip(),
    createWriteStream(`${filePath}.gz`),
    { signal }
  )
} catch (err) {
  console.error(err) // AbortError
}
