try {
  /* b */ throw new EvalError('error')
} catch (error) {
  console.log('1. EvalError === /*b*/ throw new EvalError(\'error\')')
  console.log(error instanceof EvalError)
}

try {
  /* d */ eval('hoo bar')
} catch (error) {
  console.log('2. SyntaxError === /*d*/ eval(\'hoo bar\')')
  console.log(error instanceof SyntaxError)
}

try {
  /* f */ [].length = 'Wat?'
} catch (error) {
  console.log('3. RangeError === /*f*/ [].length = \'Wat?\'')
  console.log(error instanceof RangeError)
}

try {
  /* a */ const a = undefinedVariable
} catch (error) {
  console.log('4. ReferenceError === /*a*/ var a = undefinedVariable')
  console.log(error instanceof ReferenceError)
}

try {
  /* e */ undefined.not()
} catch (error) {
  console.log('5. TypeError === /*e*/ undefined.not()')
  console.log(error instanceof TypeError)
}

try {
  /* c */ decodeURIComponent('%')
} catch (error) {
  console.log('6. URIError === /*c*/ decodeURIComponent(\'%\')')
  console.log(error instanceof URIError)
}
