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


function gameBoard() {
    return {cells: [null, null, "asd", null, null, null, null, null, null]}
}

gameObject = gameBoard()
console.log(gameObject.cells)

gameObject.cells.forEach(pasta => {
    let newCell = document.createElement("div")
    document.body.appendChild(newCell)
    newCell.textContent = "asdasd"
    newCell.addEventListener("click", placeToken)
    function placeToken(){
        console.log(pasta)
    }
})
