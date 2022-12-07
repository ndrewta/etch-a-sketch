function updateRows(x) {
    let rows = ""
    for (let i = 0; i < x; i++) {
        rows += "auto "
    }
    gridDiv.style.setProperty('grid-template-columns', rows)
}

function makeSquares(x) {
    for (let i = 0; i < (x * x); i++) {
        let squares = document.createElement('div')
        squares.setAttribute('class', 'squares')
        gridDiv.appendChild(squares)
    }
}

function updateGrid() {
    const input = document.getElementById('input').value
    document.getElementById('input').value = ""    

    while (gridDiv.hasChildNodes()) {
        gridDiv.removeChild(gridDiv.firstChild)
    }

    if (input <= 16) {
        makeGrid(16)
    } else if (input <= 100) {
        makeGrid(input)
    } else if (input > 100) {
        makeGrid (100)
    }
}

function makeGrid(x) {
    updateRows(x)
    makeSquares(x)
}

const container = document.querySelector('#container')

const inputContainer = document.createElement('div')
inputContainer.setAttribute('id', 'input-container')
container.appendChild(inputContainer)

const btn = document.createElement('button')
btn.setAttribute('id', 'btn')
btn.textContent = "Update grid size"
inputContainer.appendChild(btn)

const input = document.createElement('input')
input.setAttribute('id', 'input')
input.value = " Input between 16-100"
inputContainer.appendChild(input)


const gridDiv = document.createElement('div')
gridDiv.setAttribute('id','grid')
container.appendChild(gridDiv)

document.getElementById('btn').addEventListener('click', updateGrid)
document.getElementById('input').addEventListener('click', e => e.target.value = "")

makeGrid(16)