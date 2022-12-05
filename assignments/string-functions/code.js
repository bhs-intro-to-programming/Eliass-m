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
  return s.substring(index, s.length) + s.substring(0, index) + 'ay'
}

const isAllUpperCase = (s) => {
  return s === s.toUpperCase()
}

const sameIgnoringCase = (s1, s2) => {
  return s1.toLowerCase() === s2.toLowerCase()
}

const firstHalf = (s) => {
  return s.substring(0, s.length/2)
}

const secondHalf = (s) => {
  return s.substring(s.length/2, s.length)
}

const upDown = (s) => {
  return s.toUpperCase() + s.toLowerCase()
}

const everyOther = (s) => {
  return s[0] + s[2] + s[4]
}

const upDownLastCharacter = () => {
  
}