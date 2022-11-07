const getX = (o) => {
  return o.x
}

const point = (x , y) => {
  return {"x" : x, "y" : y}
}

const emptyObject = () => {
  return {}
}

const distance = (o1, o2) => {
  return Math.sqrt ((o1.x - o2.x)**2  + (o1.y - o2.y)**2)
}