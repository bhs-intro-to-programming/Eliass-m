const totalEggs = (hardB, softB) => {
  return hardB + softB
}

const chocolatesPerPerson = (numCh, numP) => {
  return (numCh - (numCh % numP))/numP
}

const extraChocolates = (numCh, numP) => {
  return numCh % numP
}