/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton and more credit for a skeleton with a
// reasonable argument list. To get full credit you need to write a correct
// function but you can get partial credit for a function that is basically
// correct even if contains small mistakes.

const firstHalf = (s) => {
  return s.substring (0, (s.length / 2))
}

const secondHalf = (s) => {
  return s.substring ((s.length / 2), s.length)
}

const upDown = (s) => {
  return s.toUpperCase() + s.toLowerCase()
}

const firstFewEveryOther = (s) => {
  if (s.length >= 5) {
  return s.substring(0, 1) + s.substring(2, 3) + s.substring(4, 5)
  }
}

const upDownLastCharacter = (s) => {
  if (s.length >= 1) {
  return s.toUpperCase(s.length) + s.toLowerCase(s.length)  
  }
}

const firstAndLast = (s) => {
  if (s.length >=2) {
    return s.substring (0) + s.substring (s.length)
  }
}