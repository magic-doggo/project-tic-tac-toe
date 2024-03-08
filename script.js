let nrTokensPlaced = 0
let winner = document.getElementById("winner")
let container = document.getElementById("container")
let newGame = document.getElementById("start")
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
        newCell.classList.add("squareClass")
        newCell.addEventListener("click", placeToken)
        function placeToken(){
            if (cellsArray[index] == null) {
                cellsArray[index] = activePlayer.sign;
                newCell.textContent = activePlayer.sign;
                nrTokensPlaced += 1;
                console.log(nrTokensPlaced)
                if (checkWinner() == true) {
                    displayWinner()
                    let cellz = document.querySelectorAll(".squareClass");
                    cellz.forEach(myFunction);
                    function myFunction (cell){
                    cell.classList.add("disabled");
                    }
                    return
                }
                if (nrTokensPlaced == 9){
                    // console.log("draw")
                    winner.innerText = "Draw"
                }
                switchPlayerTurn();
            }
            else return; //do i really need this
        }
    })
}

createBoard()
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
            return true;
        }
    }
}   

function displayWinner() {
    winner.innerText = `The winner is ${activePlayer.name}`    
}

function StartNewGame() {
    removeAllChildNodes(container);
    nrTokensPlaced = 0;
    gameObject.cells = [null, null, null, null, null, null, null, null, null];
    winner.textContent = "";
    activePlayer = players[0];
    createBoard();
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
newGame.addEventListener("click", StartNewGame)

const submitNamesButton = document.getElementById("submit")
submitNamesButton.addEventListener("click", changeNames)
function changeNames(event){
    event.preventDefault();
    players[0].name = document.getElementById("player1").value;
    players[1].name = document.getElementById("player2").value;
    document.getElementById("player1Name").innerText = `Player one's name is ${players[0].name}`
    document.getElementById("player2Name").innerText = `Player two's name is ${players[1].name}`
    document.querySelector("form").reset();
}