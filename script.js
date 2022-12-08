function updateRows(x) {
    let rows = ""
    for (let i = 0; i < x; i++) {
        rows += "auto "
    }
    canvas.style.setProperty('grid-template-columns', rows)
}

function makeSquares(x) {
    for (let i = 0; i < (x * x); i++) {
        let squares = document.createElement('div')
        squares.setAttribute('class', 'squares')
        canvas.appendChild(squares)
        draw(squares)
    }
}

function updateGrid() {
    let input = document.getElementById('input').value
      
    if (!input || input < 16) {
        input = 16
    }
    document.getElementById('input').value = input

    while (canvas.hasChildNodes()) {
        canvas.removeChild(canvas.firstChild)
    }
    if (input <= 100) {
        makeGrid(input)
    } else if (input > 100) {
        makeGrid (100)
        document.getElementById('input').value = 100
    }
}

function setInteractionStateTrue(e) {
    if (e.button == 0) {
        interactionState = true
        e.preventDefault()
    } else {
        interactionState = false
    }
}

function setInteractionStateFalse(e) {
    if (e.button == 0) {
        interactionState = false
    }
}

function makeGrid(x) {
    updateRows(x)
    makeSquares(x)
}

function draw(squares) {
    squares.addEventListener('mousemove', () => {
        if (interactionState) {
            squares.style.setProperty('background-color', 'black')
            }
        }
    )
}

let interactionState = false

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

const canvas = document.createElement('div')
canvas.setAttribute('id','canvas')
container.appendChild(canvas)

document.getElementById('btn').addEventListener('click', updateGrid)
document.getElementById('input').addEventListener('click', e => e.target.value = "")
canvas.addEventListener('mousedown', setInteractionStateTrue)
canvas.addEventListener('mouseup', setInteractionStateFalse)

makeGrid(16)