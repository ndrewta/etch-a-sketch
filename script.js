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
    }
}

function updateGrid() {
    interactionState = false
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

function draw(event) {
let square = event.target

    if (!square.style.backgroundColor) {
        if (interactionState) {
            if (rgbState) {
                square.style.backgroundColor = rgb()
            } else {
                square.style.backgroundColor = "black"
            }
        }
    }

}

function rgb() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')'
    return rgb
}

function switchRgb() {
    if (!rgbState) {
        rgbState = true
        rgbBtn.textContent = "Disable RGB"
    } else {
        rgbState = false
        rgbBtn.textContent = "Enable RGB"
    }
}

let interactionState = false
let rgbState = false

const container = document.querySelector('#container')

const inputContainer = document.createElement('div')
inputContainer.setAttribute('id', 'input-container')
container.appendChild(inputContainer)

const rgbBtn = document.createElement('button')
rgbBtn.setAttribute('id', 'rgb-btn')
rgbBtn.textContent = "Enable RGB"
inputContainer.appendChild(rgbBtn)

const updateBtn = document.createElement('button')
updateBtn.setAttribute('id', 'update-btn')
updateBtn.textContent = "Reset grid size"
inputContainer.appendChild(updateBtn)

const input = document.createElement('input')
input.setAttribute('id', 'input')
input.value = "16"
inputContainer.appendChild(input)

const canvas = document.createElement('div')
canvas.setAttribute('id','canvas')
container.appendChild(canvas)

document.getElementById('update-btn').addEventListener('click', updateGrid)
document.getElementById('rgb-btn').addEventListener('click', switchRgb)
document.getElementById('input').addEventListener('click', e => e.target.value = "")
canvas.addEventListener('mousedown', setInteractionStateTrue)
canvas.addEventListener('mouseup', setInteractionStateFalse)
canvas.addEventListener('mousemove', e => draw(e))

makeGrid(16)