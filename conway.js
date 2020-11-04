/* Basil Khan - CS375 - Conway's Game of Life */


var grid;
var newGrid =[]

function returnStatus(index){
    for (var i = 0; i < newGrid.length; i++){
      if (i === index[0]){
        for (var j = 0 ; j < newGrid[0].length; j++){
          if (j === index[1]){
            return grid[i][j]
          }
        }
      }
    }
}

function updateStatus(index, value){
      for (var i = 0; i < newGrid.length; i++){
      if (i === index[0]){
        for (var j = 0 ; j < newGrid[0].length; j++){
          if (j === index[1]){
            newGrid[i][j] = value
          }
        }
      }
    }

}

function aboveIndex(index){
  let row = index[0]
  let column = index[1]
  var above = [(row - 1),column]
  return above
}

function belowIndex(index){
  let row = index[0]
  let column = index[1]
  var below = [(row + 1), column]
  return below
}

function leftIndex(index){
  let row = index[0]
  let column = index[1]
  var left = [row, (column - 1)]
  return left
}

function rightIndex(index){
  let row = index[0]
  let column = index[1]
  var right = [row, (column + 1)]
  return right
}

function upperLeftIndex(index){
  let row = index[0]
  let column = index[1]
  var upperLeft = [(row - 1),(column - 1)]
  return upperLeft
}

function upperRightIndex(index){
  let row = index[0]
  let column = index[1]
  var upperRight = [(row - 1),(column + 1)]
  return upperRight
}

function bottomLeftIndex(index){
  let row = index[0]
  let column = index[1]
  var bottomLeft = [(row + 1), (column - 1)]
  return bottomLeft
}


function bottomRightIndex(index){
  let row = index[0]
  let column = index[1]
  var bottomRight = [row + 1, column + 1]
  return bottomRight
}


function countStatus(index){
  var numAlive = 0;
  var numDead = 0;
  
  var above = aboveIndex(index)
  var below = belowIndex(index)
  var left = leftIndex(index)
  var right = rightIndex(index)
  var upperLeft = upperLeftIndex(index)
  var upperRight = upperRightIndex(index)
  var bottomLeft = bottomLeftIndex(index)
  var bottomRight = bottomRightIndex(index)

  var aboveTemp = returnStatus(above)
   if (aboveTemp === true){
    numAlive += 1;
  }
  else if (aboveTemp === false && aboveTemp !== null){
    numDead += 1;
  }
  var belowTemp = returnStatus(below)
  if (belowTemp === true && belowTemp !== null){
    numAlive += 1;
  }
  else if (belowTemp === false){
    numDead += 1;
  }
  var leftTemp = returnStatus(left)
  if (leftTemp === true && leftTemp !== null){
    numAlive += 1;
  }
  else if (leftTemp === false){
    numDead += 1;
  }
  var rightTemp = returnStatus(right)
  if (rightTemp === true && rightTemp !== null){
    numAlive += 1;
  }
  else if (rightTemp === false){
    numDead += 1;
  }
  var upperLeftTemp = returnStatus(upperLeft)
  if (upperLeftTemp === true && upperLeftTemp !== null){
    numAlive += 1;
  }
  else if (upperLeftTemp === false){
    numDead += 1;
  }
  var upperRightTemp = returnStatus(upperRight)
  if (upperRightTemp === true && upperRightTemp !== null){
    numAlive += 1;
  }
  else if (upperRightTemp === false){
    numDead += 1;
  }
  var bottomLeftTemp = returnStatus(bottomLeft)
  if (bottomLeftTemp === true && bottomLeftTemp !== null ){
    numAlive += 1;
  }
  else if (bottomLeftTemp === false){
    numDead += 1;
  }
  var bottomRightTemp = returnStatus(bottomRight)
   if (bottomRightTemp === true && bottomRightTemp !== null){
    numAlive += 1;
  }
  else if (bottomRightTemp === false){
    numDead += 1;
  }
  return [numAlive,numDead]
}


function updatedGrid(){
  for (var i = 0; i < newGrid.length; i++){

    for (var j = 0 ; j < newGrid[0].length; j++){
      var index =[i,j]
      var keepCount = countStatus(index)
      if (keepCount[0] == 2 && returnStatus(index) == true) { updateStatus(index, true)
      }
      else if (keepCount[0] == 3){
      updateStatus(index, true)
      }
      else {
      updateStatus(index, false)
      }
          }
        }
}

function cloneGrid(){
  newGrid = JSON.parse(JSON.stringify(grid));
}

function stepBoard(myBoolean){
  grid = myBoolean;
  cloneGrid()
  updatedGrid()
  return newGrid
}

