import { finished } from 'node:stream/promises'
import { createReadStream } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const filePath = join(__dirname, '../../public/index.html')

const readStream = createReadStream(filePath, 'utf8')

async function run () {
  await finished(readStream)
  console.log('Stream is done reading.')
}

run().catch(console.error)
readStream.resume()
