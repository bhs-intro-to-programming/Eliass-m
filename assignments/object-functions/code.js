const getX = (o) => {
  return o.x
}

const point = (x, y) => {
  return { "x": x, "y": y }
}

const emptyObject = () => {
  return {}
}

const distance = (o1, o2) => {
  return Math.sqrt((o1.x - o2.x) ** 2 + (o1.y - o2.y) ** 2)
}

const midpoint = (o1, o2) => {
  return { "x": (o1.x + o2.x) / 2, "y": (o1.y + o2.y) / 2 }
}

const sumSalaries = (array) => {
  let sum = 0
  for (let i = 0; i < array.length; i++){
    sum += array[i].salary
  }
  return sum
}

const newHighScore = (curHigh, array) => {
  let highS = curHigh
  for (let i = 0; i < array.length; i++){
    if (highS < array[i].score){
      highS = array[i].score
    }
  }
  return highS
}