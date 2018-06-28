function amIOldEnough(age) {
  alert(age);
  if (age < 12) {
    return "No, sorry.";
  } else if (age < 18) {
    return "Only if you are accompanied by an adult.";
  } else {
    return "Yep, come on in!";
  }

}

function squareRoot(number) {
  "use strict";
  if (number < 0) {
    throw new Error("No seas guey ese no es un numero positivo mi compa")
  }
  return Math.sqrt(number);
}

function imaginarySquareRoot(number) {
  "use strict";
  try {
    return String(squareRoot(number));
  } catch(error) {
    return squareRoot(-number)+"i";
  }
}

function imaginarySquareRoot(number) {
  "use strict";
  try {
    var answer = String(squareRoot(number));
  } catch(error) {
    answer = squareRoot(-number)+"i";
  } finally {
    return "+ or -" + answer;
  }
}

function itSquareRoots4() {
  return squareRoot(4) === 2;
}

function factorsOf(n) {
  var factors = [];
  for (var i=1; i < n ; i++) {
    if (n/i === Math.floor(n/i)){
      factors.push(i);
    }
  }
  return factors;
}

