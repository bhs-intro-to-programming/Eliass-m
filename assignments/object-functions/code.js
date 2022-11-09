const getX = (o) => {
  return o.x
}

const point = (x, y) => {
  return {"x" : x , "y" : y}
}

const emptyObject = () => {
  return {}
}

const distance = (p1, p2) => {
  return Math.sqrt ((p1.x - p2.x)**2 + (p1.y - p2.y)**2)
}

const midpoint = (p1, p2) => {
  return {"x" : (p1.x + p2.x)/2 , "y" : (p1.y + p2.y)/2}
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
    titles.push(arrayBooks[i].title)
    pages += arrayBooks[i].pages
  }
  return {"titles" : titles, "pages" : pages}
}