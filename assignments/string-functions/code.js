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

const simplePigLatin = (s, num) => {
  return s.substring(num, s.length) + s.substring(0, num) + 'ay'
}

const isAllUpperCase = (s) => {
  if (s === s.toUpperCase()){
    return true
  }
  return false
}

const sameIgnoringCase = (s1, s2) => {
  return s1.toLowerCase() === s2.toLowerCase()
}

const firstHalf = (s) => {
  return s.substring(0, s.length/2)
}