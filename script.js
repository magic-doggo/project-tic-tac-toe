// const players = [
//     {
//         name: playerOneName,
//         sign: "X"
//     },
//     {
//         name: playerTwoName,
//         sign: "O"
//     }
// ]

// let activePlayer = players[0]
// const switchPlayerTurn = () => {
//     if (activePlayer = players[0]) {
//         activePlayer = players[1]
//     }
//     else {
//         activePlayer = players[0]
//     }
// }

// let container = document.getElementById("container")

function gameBoard() {
    return {cells: ["X", "O", "asd", 4, null, null, null, null, null]}
}

const gameObject = gameBoard() //works without let? should add it
console.log(gameObject.cells)

function createBoard() { //or maybe do without this function?
    gameObject.cells.forEach(pasta => {
        let newCell = document.createElement("div")
        document.getElementById("container").appendChild(newCell)
        newCell.addEventListener("click", placeToken)

        function placeToken(){
            console.log(pasta)
            newCell.textContent = pasta //wont be needed when match starts? or will it?
        }
        // } //could i run the updateBoard() function here, to run every time a cell is clicked(token placed), only of cell is not x/o
    })
}

createBoard()