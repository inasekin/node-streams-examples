const GeneratorFunction = Object
  .getPrototypeOf(function * () {})
  .constructor
const g = new GeneratorFunction('a', 'yield a * 2 yield a / 2')
for (a of g(2)) { console.log(a) } // что будет в консоли?
