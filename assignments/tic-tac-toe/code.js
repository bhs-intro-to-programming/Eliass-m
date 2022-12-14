// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.
const cordArray = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]
let turn = "X";

const drawBoard = () => {
  for (let i = 0; i < 2; i++) {
    const x = (i + 1) * width / 3
    drawLine(x, 0, x, height, 'black', 3)
  }
  for (let i = 0; i < 2; i++) {
    const x = (i + 1) * height / 3
    drawLine(0, x, width, x, 'black', 3)
  }
}
drawBoard()


const won = (turn) => {
  if (cordArray[0][0] === turn && cordArray[0][1] === turn && [0][2] === turn) {
    winner = { winner: turn, winType: 'horizontal', winLocate: 'top' }
  } else if (cordArray[1][0] === turn && cordArray[1][1] === turn && [1][2] === turn) {
    winner = { winner: turn, winType: 'horizontal', winLocate: 'mid' }
  } else if (cordArray[2][0] === turn && cordArray[2][1] === turn && [2][2] === turn) {
    winner = { winner: turn, winType: 'horizontal', winLocate: 'low' }
  } else if (cordArray[0][0] === turn && cordArray[1][0] === turn && [2][0] === turn) {
    winner = { winner: turn, winType: 'vertical', winLocate: 'left' }
  } else if (cordArray[0][1] === turn && cordArray[1][1] === turn && [2][1] === turn) {
    winner = { winner: turn, winType: 'vertical', winLocate: 'mid' }
  } else if (cordArray[0][2] === turn && cordArray[1][2] === turn && [2][2] === turn) {
    winner = { winner: turn, winType: 'vertical', winLocate: 'right' }
  } else if (cordArray[0][0] === turn && cordArray[1][1] === turn && [2][2] === turn) {
    winner = { winner: turn, winType: 'diagonal', winLocate: 'lToR' }
  } else if (cordArray[0][2] === turn && cordArray[1][1] === turn && [2][0] === turn) {
    winner = { winner: turn, winType: 'diagonal', winLocate: 'rToL' }
  }
  return winner
}
let turns = 0
registerOnclick = (x, y) => {

  const spacingHeight = height / 3
  const box_y = Math.floor(y / spacingHeight)

  const spacingWidth = width / 3
  const box_x = Math.floor(x / spacingWidth)
  
  if (cordArray[box_y][box_x] === '' && identify){}
}



const yRow = (height) => {
  let rowHeight = height / 3;
  Math.floor(y / rowHeight)
}

const xRow = (width) => {
let rowWidth = width / 3;
Math.floor(x / rowWidth)
}