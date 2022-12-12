const makeRow = () => {
  return ['','','']
}

const makeBoard = () => {
  return [['', '' ,''],
          ['', '' ,''],
          ['', '' ,'']]
}

const makeMove = (mark, row, column) => {
  return {'mark' : mark, 'row' : row, 'column' : column}
}

const placeMark = () => {

}

const allTheSame = (array) => {
  return array[0]
}