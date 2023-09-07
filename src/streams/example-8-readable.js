import stream from 'node:stream'

const readable = (function () {
  const data = []
  const $ = new stream.Readable({ objectMode: true, read () {} })
  $.push({ a: 1 })
  $.push({ b: 2 })
  return $
})()
readable.on('data', (data) => {
  console.log(data)
})
