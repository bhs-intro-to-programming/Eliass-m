const countTens = (numArr) => {
  let tens = 0
  for (const element of numArr){
    if (element === 10){
      tens ++
    }
  } return tens
}

const sum = (numArr) => {
  let total = 0
  for (const element of numArr){
    total += element
  } return total
}

const evens = (numArr) => {
  let even = []
  for (const element of numArr){
    if (element % 2 === 0){
    even.push(element)
    }
  } return even
}

const anyOverOneHundred = (numArr) => {
  let n = 0
  for (const element of numArr){
  if (element > 100){
    n++
  } 
  if (n > 0){return true}
  else return false
  } 
}