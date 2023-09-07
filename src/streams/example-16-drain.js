import { createWriteStream } from 'node:fs'

// Write the data to the supplied writable stream one million times.
// Be attentive to back-pressure.
function writeOneMillionTimes (writer, data, encoding, callback) {
  let i = 1_000_000
  write()
  function write () {
    let ok = true
    do {
      i--
      if (i === 0) {
        // Last time!
        writer.write(data, encoding, callback)
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding)
      }
    } while (i > 0 && ok)
    if (i > 0) {
      // Had to stop early!
      // Write some more once it drains.
      writer.once('drain', () => {
        console.log('catch drain', i)
        write()
      })
    }
  }
}

const ws = createWriteStream('./drain.txt')
writeOneMillionTimes(ws, '0000')
