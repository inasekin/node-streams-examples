import fs from 'node:fs'

// for await (const k of readable) {
//   data += k
// }
const readStream = fs.createReadStream('./test.txt', { encoding: 'utf8' })
async function print () {
  for await (const chunk of readStream) {
    console.log(chunk)
  }
}
print()
