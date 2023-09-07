process.stdin.setEncoding('utf8')
process.stdin.on('readable', () => {
  const chunk = process.stdin.read()
  process.stdout.write(chunk)
})
process.stdout.write('Имя? ')
