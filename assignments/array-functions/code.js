const countTens = (array) => {
  let tens = 0
  for (const element of array) {
    if (element === 10) {
      tens++
    }
  } return tens
}