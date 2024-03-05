// const Gameboard = {
//     gameboard: []
// }

// const players = [
//     {
//         name: playerOneName,
//         sign: 1
//     },
//     {
//         name: playerTwoName,
//         sign: 2
//     }
// ]
// let container = document.getElementById("container")

function gameBoard() {
    return {cells: ["X", "O", "asd", 4, null, null, null, null, null]}
}

gameObject = gameBoard()
console.log(gameObject.cells)

function updateBoard() {
    gameObject.cells.forEach(pasta => {
        let newCell = document.createElement("div")
        document.getElementById("container").appendChild(newCell)
        newCell.textContent = pasta

        newCell.addEventListener("click", placeToken) //maybe put this somewhere else?
        function placeToken(){
            console.log(pasta)
        } //could i run the updateBoard() function here, to run every time a cell is clicked(token placed), only of cell is not x/o
        console.log(pasta)
    })
}

updateBoard()