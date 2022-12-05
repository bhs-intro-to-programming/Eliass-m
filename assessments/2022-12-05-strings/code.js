const upToX = (s) => {
  return s.substring (0, s.indexOf('x'))
}

const charactersAround = (s, index) => {
  return s[index -1] + s[index +1]
}

const middle = (s) => {
  return s.substring(s.length / 4, s.length - (s.length/4))
}

const pair = (s1, s2) => {
  return s1 + ' and ' + s2
}

const containsX = (s) => {
  if (s.indexOf('x') === -1){
    return false
  } else return true
}

const slug = (s1, s2, s3) => {
  return (s1 + '-' + s2 + '-' + s3).toLowerCase()
}

const capitalize = (s) => {
  return s[0].toUpperCase() + s.substring(1, s.length).toLowerCase()
}

const capitalizeName = (s) => {
  return s.substring(0, s.indexOf(' ')).capitalize()
}