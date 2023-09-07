// function * gen1 () {
//     yield 10
//     yield 20
//     yield 30
//   }

// function * gen () {
//   yield 1
//   yield* gen1()
//   yield 2
//   yield 3
// }
// for (const iterator of gen()) {
//   console.log(iterator)
// }

function * greet () {
  try {
    const name = yield Promise.resolve()
    console.log(name)
  } catch (error) {
    console.error(error)
  }
}

const g = greet()

g.next().then((response) => {
  g.next(response)
}).catch((error) => {
  g.throw(error)
})
