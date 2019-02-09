/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const cols = getCols(board);
  const subBoxs = getSubBoxs(board);

  return [board, cols, subBoxs].every(v => v.every(validate));
};

var getCols = function(board) {
  const cols = []
  for (let i = 0; i < 9 ; i++) {
    const col = [];

    board.forEach(v => {
      col.push(v[i])
    })
    cols.push(col)
  }
  return cols;
}

var getSubBoxs = function(board) {
  const cols = [];
  for (let i = 0;i<9;i+=3) {
    for (let j=0;j<9;j+=3) {
      const col = [];
      for (let m =0;m<3;m++) {
        for (let n=0;n<3;n++) {
          col.push(board[i+m][j+n]);
        }
      }
      cols.push(col);
    }
  }
  return cols;
}

var validate = function(arr) {
  arr = arr.filter(v => v !== '.');
  return new Set(arr).size === arr.length;
}