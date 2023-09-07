const iterable = {
  [Symbol.iterator] () {
    let step = 0
    const iterator = {
      next () {
        if (step <= 2) {
          step++
        }
        switch (step) {
          case 1:
            return { value: 'hello', done: false }
          case 2:
            return { value: 'world', done: false }
          default:
            return { value: undefined, done: true }
        }
      }
    }
    return iterator
  }
}

// const it = iterable[Symbol.iterator]()

// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

for (const word of iterable) {
  console.log(word)
}
