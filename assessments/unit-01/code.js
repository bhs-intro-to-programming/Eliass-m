// You will use this function in one of the problems. You don't need to change
// it or even worry about how exactly it works.

//const timesTable
//const emit = (a, b, product) => {
//  console.log(`${a} times ${b} is ${product}`);
//};

const averageWeight = (itemWeights, items) => {
  return itemWeights / items
}

const hypotenuse = (l1, l2) => {
  return Math.sqrt(l1**2 + l2**2)
}

const maxRadius = (width, height) => {
  if (height >= width) {
    return width/2
  } 
  else return height/2
}