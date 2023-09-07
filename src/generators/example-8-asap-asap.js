async function get (n) {
  return new Promise(r => setTimeout(() => r(n), n * 100))
}
async function * asyncGenerator (arr) {
  let anyResolve
  arr.map(get).forEach(async request => {
    const anyResult = await request
    anyResolve(anyResult)
  })
  while (true) {
    yield await new Promise((resolve) => {
      anyResolve = resolve
    })
  }
}
(async function () {
  for await (const num of asyncGenerator([4, 3, 0, 1, 5])) {
    console.log(num)
  }
})()
