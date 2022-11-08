const getX = (o) => {
  return o.x
}

const point = (x, y) => {
  return {"x" : x , "y" : y}
}

const emptyObject = () => {
  return {}
}

const distance = (o1, o2) => {
  return Math.sqrt ((o1.x - o2.x)**2 + (o1.y - o2.y)**2)
}

const midpoint = (o1, o2) => {
  return {"x" : (o1.x + o2.x)/2 , "y" : (o1.y + o2.y)/2 , }
}

const sumSalaries = (arrayO) => {
  let sum = 0
  for (let i = 0; i < arrayO.length; i++){
    sum += arrayO[i].salary
  }
return sum
}

const newHighScore = (curHigh, scoresArray) => {
  let newHigh = curHigh
  for (let i = 0 ; i < scoresArray.length; i++){
    if (scoresArray[i].score > newHigh){
      newHigh = scoresArray[i].score
    }
  }
  return newHigh
}

const summarizeBooks = (arrayBooks) => {
  let titles = []
  let pages = 0
  for(let i = 0; i < arrayBooks.length; i++){
    titles
    pages += arrayBooks[i].pages
  }
  return {"titles" : titles, "pages" : pages}
}