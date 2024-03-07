const players = [
    {
        name: "alex",
        sign: "X"
    },
    {
        name: "not alex",
        sign: "O"
    }
]

let activePlayer = players[0]
const switchPlayerTurn = function() {
    if (activePlayer == players[0]) {
        activePlayer = players[1];
    }
    else {
        activePlayer = players[0];
    }
}

function gameBoard() {
    return {cells: [null, null, null, null, null, null, null, null, null]}
}

const gameObject = gameBoard()
console.log(gameObject.cells)

function createBoard() {
    gameObject.cells.forEach((cell, index, cellsArray) => {
        let newCell = document.createElement("div")
        document.getElementById("container").appendChild(newCell)
        
        newCell.addEventListener("click", placeToken)
        function placeToken(){
            if (cellsArray[index] == null) {
                cellsArray[index] = activePlayer.sign;
                newCell.textContent = activePlayer.sign;
                console.log(gameObject.cells);
                checkWinner();
                console.log(checkWinner())
                switchPlayerTurn();
            }
            else return;
        }
    })
}

createBoard()
console.log(activePlayer.name)
// 123
// 456
// 789
console.log(gameObject.cells[1])

function checkWinner() {
    let winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let i = 0; i < winningCombinations.length; i++){
        const[a, b, c] = winningCombinations[i] //destructuring assignment
        if (gameObject.cells[a] == gameObject.cells[b] && gameObject.cells[b] == gameObject.cells[c] && gameObject.cells[a] != null) {
            // console.log("winnnerasd")
            return true;
        }
        else {
            // console.log("no winnerasdasd")
            return false;
        }
    }
}   

