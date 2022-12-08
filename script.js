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
        squares.addEventListener('mousemove', () => {
            if (primaryMouseButtonState) {
                squares.style.setProperty('background-color', 'black')
            }
        })
    }
}

function updateGrid() {
    let input = document.getElementById('input').value
      
    if (!input || input < 16) {
        input = 16
    }
    document.getElementById('input').value = input

    while (gridDiv.hasChildNodes()) {
        gridDiv.removeChild(gridDiv.firstChild)
    }
    if (input <= 100) {
        makeGrid(input)
    } else if (input > 100) {
        makeGrid (100)
    }
}

function setPrimaryMouseButtonStateTrue(e) {
    if (e.button == 0) {
        primaryMouseButtonState = true
    } else {
        primaryMouseButtonState = false
    }
}

function setPrimaryMouseButtonStateFalse(e) {
    if (e.button == 0) {
        primaryMouseButtonState = false
    }
}

function makeGrid(x) {
    updateRows(x)
    makeSquares(x)
}

let primaryMouseButtonState = false
let previousInput = 16

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
input.value = "16"
inputContainer.appendChild(input)

const gridDiv = document.createElement('div')
gridDiv.setAttribute('id','grid')
container.appendChild(gridDiv)

document.getElementById('btn').addEventListener('click', updateGrid)
document.getElementById('input').addEventListener('click', e => e.target.value = "")
document.addEventListener('mousedown', setPrimaryMouseButtonStateTrue)
document.addEventListener('mouseup', setPrimaryMouseButtonStateFalse)

makeGrid(16)