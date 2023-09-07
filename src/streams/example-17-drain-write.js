import { createWriteStream } from 'node:fs'

const stream = createWriteStream('./drain-write.txt')
function write (data, cb) {
  if (!stream.write(data)) {
    stream.once('drain', cb)
  } else {
    process.nextTick(cb)
  }
}

// Wait for cb to be called before doing any other write.
write('hello', () => {
  console.log('Write completed, do more writes now.')
})
