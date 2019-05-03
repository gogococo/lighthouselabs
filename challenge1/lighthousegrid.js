const GRID = [
  ["", "", "", "^", "", "", "", "", "", ""],
  ["", "", "v", "", "~", "", "", "", "", ""],
  ["", "v", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "v", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "^", "~", "~", "", "", "", "^", "", ""],
  ["", "^", "", "~", "~", "", "", "", "", ""],
  ["", "^", "", "", "~", "~", "", "", "", ""],
];

const SYMBOLS = {
  rock: "^",
  current: "~",
  ship: "v",
};

function countRows() {
  return GRID.length;
}

function countColumns(){
  var firstRow = GRID[0]
  return firstRow.length
}

function gridSize(){
  var width = countColumns();
  var height = countRows();
  return width + ' x ' + height;
}

function totalCells(){
  return countColumns() * countRows();
}

function convertRow(coordinate){
  var rowNumber = coordinate.slice(1, 3) - 1;
  return rowNumber;
}


function convertLetter(letter){
  return parseInt(letter, 36) - 10;
}

function convertColumn(coordinate){
  var columnLetter = coordinate.slice(0,1);
  return convertLetter(columnLetter);
}

function lightCell(coordinate) {
  if (convertColumn(coordinate) >= countColumns()) {
    console.log('Column letter is invalid');
    return false
  }
  if (convertRow(coordinate) >= countRows()) {
    //console.log('Row number is invalid');
    return false
  }
  var row = GRID[convertRow(coordinate)];
  return row[convertColumn(coordinate)];
}

function isRock(coordinate){
  return lightCell(coordinate) === SYMBOLS.rock;
}

function isCurrent(coordinate){
  return lightCell(coordinate) === SYMBOLS.current;
}

function isShip(coordinate){
  return lightCell(coordinate) === SYMBOLS.ship;
}

function lightRow(rowNumber){
  return GRID[rowNumber-1];
}

function lightColumn(columnLetter){
  var column = [];
  var columnNumber = convertLetter(columnLetter);
  for (var i = 0; i < GRID.length; i++){
    var row = GRID[i]
    column.push(row[columnNumber]);
  }
  return column;
}

const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"];

function indexToLetter(i){
  return LETTERS[i];
}

function indexToNumber(j){
  return j + 1;
}

function getCoordinate(i, j){
  var letter = indexToLetter(i);
  var number = indexToNumber(j);
  return letter + number;
}

function allRocks() {
  var rocks = [];
  for (var i = 0; i < GRID.length; i++){
    for (var j = 0; j < GRID[0].length; j++){
      if (GRID[i][j] === SYMBOLS.rock) {
        var coordinate = getCoordinate(j, i);
        rocks.push(coordinate);
       }
      }
    }
    return rocks;
}

function allCurrents() {
  var currents = [];
  for (var i = 0; i < GRID.length; i++){
    for (var j = 0; j < GRID[0].length; j++){
      if (GRID[i][j] === SYMBOLS.current) {
        var coordinate = getCoordinate(j, i);
        currents.push(coordinate);
       }
      }
    }
    return currents;
}

function allShips() {
  var ships = [];
  for (var i = 0; i < GRID.length; i++){
    for (var j = 0; j < GRID[0].length; j++){
      if (GRID[i][j] === SYMBOLS.ship) {
        var coordinate = getCoordinate(j, i);
        ships.push(coordinate);
       }
      }
    }
    return ships;
}

function firstRock() {
  var all_rocks = allRocks();
  return first = all_rocks[0];
}
