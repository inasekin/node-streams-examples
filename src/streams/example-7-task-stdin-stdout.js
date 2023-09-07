process.stdin.setEncoding('utf8')
process.stdin.on('readable', () => {
  const chunk = process.stdin.read()
  process.stdout.write(`your name is ${chunk}`)
})
process.stdout.write('enter your name\n')
