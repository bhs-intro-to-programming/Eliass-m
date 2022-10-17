const countTens = (arrayTens) => {
  let tens = 0
  for (let i = 0; i < arrayTens.length; i++){
    console.log(arrayTens[i])
    let j = arrayTens[i]
    if (j == 10){
      console.log(j)
      tens++
    
    }
  }
  return tens
};




//const anyOverOneHundred = 