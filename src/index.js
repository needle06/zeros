function countFives(n) {
  let counter = 0;
  while (n % 5 == 0) {
    n /= 5
    counter++
  }
  return counter;
}

function countTwos(n) {
  let counter = 0;
  while (n % 2 == 0) {
    n /= 2
    counter++
  }
  return counter;
}

function countTwosForFactorial(n) {
  if (n === 1) {
    return 0
  }
  return countTwos(n) + countTwosForFactorial(n - 1)
}

function countFivesForFactorial(n) {
  if (n === 1) {
    return 0
  }
  return countFives(n) + countFivesForFactorial(n - 1)
}

function countTwosForDoubleFactorial(n) {
  if (n === 1) {
    return 0
  }
  if (n === 2) {
    return 1;
  }
  return countTwos(n) + countTwosForDoubleFactorial(n - 2)
}

function countFivesForDoubleFactorial(n) {
  if (n === 1) {
    return 0
  }
  if (n === 2) {
    return 0;
  }
  return countFives(n) + countFivesForDoubleFactorial(n - 2)
}

module.exports = function zeros(expression) {
  let twos = 0;
  let fives = 0;

  let parsedString = expression.split('*');
  for (let i = 0; i < parsedString.length; i++) {
    if (parsedString[i].includes("!!")) {
      twos += countTwosForDoubleFactorial(parseInt(parsedString[i]))
      fives += countFivesForDoubleFactorial(parseInt(parsedString[i]))
    } else {
      twos += countTwosForFactorial(parseInt(parsedString[i]))
      fives += countFivesForFactorial(parseInt(parsedString[i]))
    }
  }
  return Math.min(twos, fives)
}