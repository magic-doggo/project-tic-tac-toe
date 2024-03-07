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
// const getActivePlayer = () => activePlayer;


function gameBoard() {
    return {cells: [null, null, null, null, null, null, null, null, null]}
}

const gameObject = gameBoard()
console.log(gameObject.cells)

function createBoard() {
    gameObject.cells.forEach((pasta, index, cellsArray) => {
        let newCell = document.createElement("div")
        document.getElementById("container").appendChild(newCell)
        
        newCell.addEventListener("click", placeToken)
        function placeToken(){
            if (cellsArray[index] == null) {
                cellsArray[index] = activePlayer.sign;
                newCell.textContent = activePlayer.sign;
                console.log(gameObject.cells);
                switchPlayerTurn();
            }
            else return;
        }
    })
}

createBoard()
console.log(activePlayer.name)