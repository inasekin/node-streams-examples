import fs from 'node:fs/promises'
import pipeline from 'node:stream/promises'

async function run () {
  await pipeline(
    fs.createReadStream('lowercase.txt'),
    async function * (source) {
      for await (const chunk of source) {
        yield String(chunk).toUpperCase()
      }
    },
    fs.createWriteStream('uppercase.txt')
  )
  console.log('Pipeline succeeded.')
}
run().catch(console.error)
