const upToX = (s) => {
  return s.substring (0, s.indexOf('x'))
}

const charactersAround = (s, index) => {
  return s[index -1] + s[index +1]
}

const middle = (s) => {
  return s.substring(s.length / 4)
}