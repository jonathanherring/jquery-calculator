var $screen = $('#screen')

var $clear = $('#clear')

var $equals = $('#equals')

var $zero = $('#zero')

var $buttons = $('.buttons')

var $operator = $('.operator')

console.log($buttons.contents());
var current = ''
var prev = 0


$buttons.contents().on('click', function() {
  var x = parseInt(this.innerHTML);

  $screen.html($screen.html().replace(/[^÷+x\d.-]/g, ''))

  if (x === 1) {
    $screen.append(1);
    current += '1'
  } else if (x === 2) {
    $screen.append(2);
    current += '2'
  } else if (x === 3) {
    $screen.append(3)
    current += '3'
  } else if (x === 4) {
    $screen.append(4)
    current += '4'
  } else if (x === 5) {
    $screen.append(5)
    current += '5'
  } else if (x === 6) {
    $screen.append(6)
    current += '6'
  } else if (x === 7) {
    $screen.append(7)
    current += '7'
  } else if (x === 8) {
    $screen.append(8)
    current += '8'
  } else if (x === 9) {
    $screen.append(9)
    current += '9'
  }

})

$zero.on('click', function() {
  $screen.append(0)
  current += '0'
})


$operator.on('click', function() {
  var xy = this.innerHTML
  if (xy === '÷') {
    $screen.append('÷')
    current += '/'
  } else if (xy === 'x') {
    $screen.append('x')
    current += '*'
  } else if (xy === '-') {
    $screen.append('-')
    current += '-'
  } else if (xy === '+') {
    $screen.append('+')
    current += '+'
  }

})

$clear.on('click', function() {
  $screen.empty()
  current = ''
})

var ticked = 0
$equals.on('click', function() {
  console.log(eval(current));

  if (eval(current) === Infinity && ticked === 0) {
    $screen.empty()
    $screen.append('Error')
    current = ''
    ticked += 1
    console.log(ticked);
}

else if (eval(current) === Infinity && ticked === 1) {
  $screen.empty()
  $screen.append('Infinity')
  current = ''
  ticked += 1

}

else if (eval(current) === Infinity && ticked === 2) {
  $screen.empty()
  $screen.append('how big ur mom is')
  current = ''
  ticked += 1
}

else if (eval(current) === Infinity && ticked === 3) {
  $screen.empty()
  $screen.append('literally doesnt exist')
  current = ''
  ticked += 1
}

else if (eval(current) === Infinity && ticked === 4) {
  $screen.empty()
  $screen.append('u cant divide by 0')
  current = ''
  ticked += 1
}

else if (eval(current) === Infinity && ticked === 5) {
  $screen.empty()
  $screen.append('OMG take a hint')
  current = ''
  ticked += 1
}
else if (eval(current) === Infinity && ticked === 6) {
  $screen.empty()
  $screen.append('...')
  current = ''
  ticked += 1
}

else if (eval(current) === Infinity && ticked === 7) {
  $screen.empty()
  $screen.append('Really?')
  current = ''
  ticked += 1
}

else if (eval(current) === Infinity && ticked === 8) {
  $screen.empty()
  $screen.append('guess u are lonely')
  current = ''
  ticked += 1
}

else if (eval(current) === Infinity && ticked === 9) {
  $screen.empty()
  $screen.append('Ill tell you a joke')
  current = ''
  ticked += 1
}

else if (eval(current) === Infinity && ticked === 10) {
  $screen.empty()
  $screen.append('What did the calculator')
  current = ''
  ticked += 1
}

else if (eval(current) === Infinity && ticked === 11) {
  $screen.empty()
  $screen.append('say as it was leaving?')
  current = ''
  ticked += 1
}


else if (eval(current) === Infinity && ticked === 12) {
  $screen.empty()
  $screen.append('"Calc-u-lator!"')
  current = ''
  $buttons.removeClass()
}


   else {
    $screen.empty()
    $screen.append(eval(current))
  }

})
