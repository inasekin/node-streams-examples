const iterator = {
  counter: 0,
  next: function () {
    if (this.counter >= 3) {
      return {
        done: true
      }
    }

    return {
      value: this.counter++,
      done: false
    }
  },
  [Symbol.iterator]: function () { return this }
}

const it = iterator[Symbol.iterator]()

for (const i of Array.from({ length: 5 })) {
  console.log(i, it.next())
}
