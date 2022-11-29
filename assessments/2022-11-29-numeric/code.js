const totalEggs = (hardB, softB) => {
  return hardB + softB
}

const chocolatesPerPerson = (numCh, numP) => {
  return (numCh - (numCh % numP))/numP
}

const extraChocolates = (numCh, numP) => {
  return numCh % numP
}

const leftOut = (numCh, numP) => {
  if (numP > numCh){
    return numP - numCh
  } else return 0
}