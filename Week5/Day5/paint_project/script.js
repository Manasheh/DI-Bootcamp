const container = document.querySelector('#container')
const colors = document.querySelector('#colors')
const grids = document.querySelector('#grids')
const colorList = [
    "red", "blue", "green", "yellow",
    "orange", "purple", "pink", "cyan",
    "magenta", "lime", "teal", "brown",
    "navy", "maroon", "olive", "indigo",
    "turquoise", "violet"
];



//for buttons
const resetBtn = document.createElement('button')
resetBtn.textContent = 'Button'
resetBtn.classList.add('resetBtn')
resetBtn.style.width = '80%'
resetBtn.style.padding = '10px'
resetBtn.style.borderRadius = '5px'
resetBtn.style.marginTop = '10px'

// display center
colors.append(resetBtn)
colors.style.display = 'flex'
colors.style.flexDirection = 'column'
colors.style.alignItems = 'center'

resetBtn.addEventListener('click', function () {
    const smallGrids = document.querySelectorAll('.smallGrid')
    smallGrids.forEach(item => {
        item.style.backgroundColor = 'transparent'
    })
})


// create the color grid container

const colorContianer = document.createElement('div')
colorContianer.style.paddingTop = '10px'
colorContianer.style.height = '90%'
colorContianer.style.gap = '7px'
colorContianer.classList.add('colorContainer')
colorContianer.style.display = 'flex'
colorContianer.style.justifyContent = 'center'
colorContianer.style.alignItems = 'center'
colorContianer.style.flexWrap = 'wrap'
colors.appendChild(colorContianer)


// function to make the color grid

function smallGrids() {
    for (let i = 0; i < 4800; i++) {
        const smallGrid = document.createElement('div')
        smallGrid.classList.add('smallGrid')
        smallGrid.style.width = '10px'
        smallGrid.style.height = '10px'
        smallGrid.style.border = '1px solid lightgray'
        smallGrid.style.margin = '0'
        smallGrid.style.padding = '0'
        grids.appendChild(smallGrid)
    }
}
smallGrids()
grids.style.display = 'flex'
grids.style.flexWrap = 'wrap'

function colorGrids() {
    for (let i = 0; i < 18; i++) {
        const grid = document.createElement('div')
        grid.style.width = '80px'
        grid.style.height = '80px'
        // grid.style.border = '1px solid lightgray'
        colorContianer.appendChild(grid)
        grid.style.backgroundColor = colorList[i]
        grid.classList.add('color')
        grid.addEventListener('click', function () {
            displayColor(colorList[i])
        })
    }
}
colorGrids()

function displayColor(color) {
    const smallGrids = document.querySelectorAll('.smallGrid');
    let isMouseDown = false;
    document.addEventListener('mousedown', function() {
        isMouseDown = true;
    });
    document.addEventListener('mouseup', function() {
        isMouseDown = false;
    });
    smallGrids.forEach(item => {
        item.addEventListener('mousemove', function() {
            if (isMouseDown) {
                item.style.backgroundColor = color;
            }
        });
    });
}
displayColor()




















