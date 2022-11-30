const findFnord = (s) => {
  return s.indexOf('fnord')
}

const stringContains = (s1, s2) => {
  return !(s1.indexOf(s2) === -1) 
}

const firstAndLast = (s) => {
  return s[0] + s[s.length -1]
}

const swapFrontAndBack = (s) => {
  return s.substring(s.length/2, s.length) + s.substring(0, s.length/2)
}

const simplePigLatin = (s, index) => {
  return s.substring(0, index) + s.substring(index, s.length) + 'ay'
}