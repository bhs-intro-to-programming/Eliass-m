const countTens = (tens) => {
  let tens = 0
  for (let i = 0; i < tens.length; i++){
    console.log(tens[i])
    if (tens[i] == 10){
      tens++
    }
  }
  return tens
};

//const sum = (arraysum) => {
//  let tens = 0
//  for (let i = 0; i < arrayTens.length; i++){
//    console.log(arrayTens[i])
//    if (arrayTens[i] == 10){
//    tens++
//    }
//  }
//  return tens
//};


//const anyOverOneHundred = 