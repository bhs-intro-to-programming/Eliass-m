const findFnord = (s) => {
  return s.indexOf('fnord')
}

const stringContains = (s1, s2) => {
  if (s1.indexOf(s2) === -1 ) {
    return false
  }
  return true
}

const firstAndLast = (s) => {
  return s[0] + s[s.length-1]
}

const swapFrontAndBack = (s) => {
  return s.substring(s.length/2, s.length) + s.substring(0, s.length/2)
}