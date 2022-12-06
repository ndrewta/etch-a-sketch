//const container = document.querySelector('#container')

function makeRows(x) {
    let rows = ""
    for (let i = 0; i < x; i++) {
        rows += "auto "
    }
    container.style.setProperty('grid-template-columns', rows)
}

function makeSquares(x) {
    for (let i = 0; i < (x * x); i++) {
        let squares = document.createElement('div')
        squares.setAttribute('class', 'squares')
        container.appendChild(squares)
    }
}

function makeGrid(x) {
    makeRows(x)
    makeSquares(x)
}

makeGrid(16)