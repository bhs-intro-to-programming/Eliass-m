// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.
let turn = "X";

registerOnclick((x, y) => {

  const spacingHeight = height / 3
  const box_y = Math.floor(y / spacingHeight)

  const spacingWidth = width / 3
  const box_x = Math.floor(x / spacingWidth)
  drawText(turn, box_x * (spacingWidth) + width / 6 - 50, box_y * (spacingHeight) + height / 6 + 50, 'black', Math.min(width, height) * 0.3);
  turn = turn === "X" ? turn = "O" : turn = "X";

});

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

const yRow = (height) => {
  let rowHeight = height / 3;
  Math.floor(y / rowHeight)
}

const xRow = (width) => {
  let rowWidth = width / 3;
  Math.floor(x / rowWidth)
}


