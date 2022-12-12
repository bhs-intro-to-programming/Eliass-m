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
  return array[0] == array[1] && array[0] == array[2]
}

const extractColumn = (array, index) => {
  return array(index)
}