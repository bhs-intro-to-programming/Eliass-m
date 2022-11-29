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
  return Math.max ((numP - numCh), 0)
}

const probabilityAllHeads = (numFlips) => {
  return 1 / (2**numFlips)
}

const futureHour = (curHour, hoursAfter) => {
  return curHour + (hoursAfter % 24)
}

const presentsBudget = (friends, avgPrice) => {
  return friends * avgPrice
}

const prePresent = (budget, presents) => {
  return budget/presents
}

const wrapingCombos = (numWrapping, numRibbons, numBows) => {
  return numWrapping * numRibbons * numBows
}