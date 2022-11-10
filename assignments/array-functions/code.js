const countTens = (numArr) => {
  let tens = 0
  for (const element of numArr){
    if (element === 10){
      tens += 1
    }
  } return tens
}

const sum = (numArr) => {
  let total = 0
  for (const element of numArr){
    total += total
  } return total
}