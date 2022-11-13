const countTens = (array) => {
  let tens = 0
  for (const element of array) {
    if (element === 10) {
      tens++
    }
  } return tens
}

const sum = (array) => {
  let total = 0
  for (const element of array) {
    total += element
  } return total
}

const evens = (array) => {
  let newArr = []
  for (const element of array) {
    if (element % 2 === 0) {
      newArr.push(element)
    }
  } return newArr
}

const anyOverOneHundred = (array) => {
  let huns = 0
  for (const element of array) {
    if (element > 100) {
      huns = 1
    }
  }
    if (huns === 1) return true
    else return false
}