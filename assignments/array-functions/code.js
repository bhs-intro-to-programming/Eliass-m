const countTens = (array) => {
  let tens = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 10) {
      tens++
    }
  }
  return tens
};

const sum = (array) => {
  let add = 0
  for (const element of array) {
    add += element
  }
  return element
}

//const anyOverOneHundred = 