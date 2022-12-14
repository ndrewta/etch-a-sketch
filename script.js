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
    let value = document.getElementById('slider').value

    while (canvas.hasChildNodes()) {
        canvas.removeChild(canvas.firstChild)
    }
    makeGrid(value)
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
let l = colorLightness

    if (!square.style.backgroundColor) {
        if (interactionState) {
            if (rgbState) {
                square.style.backgroundColor = rgb(l)
            } else {
                square.style.backgroundColor = 'black'
            }
        }
    }

}

function rgb(l) {
    let h = Math.floor(Math.random() * 360)
    let s = Math.floor(Math.random() * 101)
    
    colorLightness -= 5
    if (!colorLightness) {
        colorLightness = 50
    }
    let value = 'hsl(' + h + ', ' + s + '%, ' + l + '%)'
    return value
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

function updateSliderValue() {
    sliderValue.textContent = slider.value + 'x' + slider.value
    updateGrid()
}


let interactionState = false
let rgbState = false
let colorLightness = 50

const container = document.querySelector('.container')
const title = document.createElement('h1')
title.textContent = 'Etch-A-Sketch'
container.appendChild(title)

const sliderContainer = document.createElement('div')
sliderContainer.setAttribute('id', 'slider-container')
container.appendChild(sliderContainer)

const btnContainer = document.createElement('div')
btnContainer.setAttribute('id', 'btn-container')
container.appendChild(btnContainer)

const rgbBtn = document.createElement('button')
rgbBtn.setAttribute('id', 'rgb-btn')
rgbBtn.textContent = "Enable RGB"
btnContainer.appendChild(rgbBtn)

const updateBtn = document.createElement('button')
updateBtn.setAttribute('id', 'update-btn')
updateBtn.textContent = "Reset grid size"
btnContainer.appendChild(updateBtn)

const canvas = document.createElement('div')
canvas.setAttribute('id','canvas')
container.appendChild(canvas)

const slider = document.createElement('input')
slider.type = 'range'
slider.min = 16
slider.max = 100
slider.value = 16
slider.setAttribute('id', 'slider')
sliderContainer.appendChild(slider)

const sliderValue = document.createElement('p')
sliderValue.setAttribute('id', 'slider-value')
sliderValue.textContent = slider.value + 'x' + slider.value
sliderContainer.insertBefore(sliderValue, slider)

document.getElementById('update-btn').addEventListener('click', updateGrid)
document.getElementById('rgb-btn').addEventListener('click', switchRgb)
document.getElementById('slider').addEventListener('change', updateSliderValue)
canvas.addEventListener('mousedown', setInteractionStateTrue)
canvas.addEventListener('mouseup', setInteractionStateFalse)
canvas.addEventListener('mousemove', e => draw(e))

makeGrid(16)