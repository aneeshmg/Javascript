console.log("file loaded...")

const canvas = document.getElementById("game-canvas")
const ctx = canvas.getContext("2d")

ctx.scale(20, 20)

const matrix = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0]
]

// TODO: parked, as there is something wrong with arena[o.y]
function collide(arena, player) {
    const [m, o] = [player.matrix, player.pos]
    for (let y = 0; y < m.length; ++y) {
        //console.log('collide?',arena[y + o.y])
        for (let x = 0; x < m[y].length; ++x) {
            // to check if there is a collision
            console.log('m[y][x]', m[y][x])
            console.log('arena[y + o.y]', o.y)
            //console.log('arena[y + o.y][x + o.x]', arena[y + o.y][x + o.x])
            if (m[y][x] !== 0 &&
                (arena[y + o.y] && arena[y + o.y][x + o.x] !== 0)) {
                //console.log('collision')
                return true;
            }
        }
    }
    //console.log('no collision')
    return false;
}

function createMatrix(height, width) {
    let matrix = []
    while (height--) {
        // create new array of length=width
        matrix.push(new Array(width).fill(0))
    }
    return matrix
}

function draw() {
    ctx.fillStyle = "#000000"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    drawMatrix(player.matrix, player.pos)
}

const arena = createMatrix(12, 20)

function drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value != 0) {
                ctx.fillStyle = "red"
                ctx.fillRect(
                    x + offset.x,
                    y + offset.y,
                    1, 1)
            }
        })
    })
}

function merge(arena, player) {
    player.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                arena[y + player.pos.y][x + player.pos.x] = value
            }
        })
    })
}

function playerDrop() {
    player.pos.y++;
    if (collide(arena, player)) {
        player.pos.y--;
        merge(arena, player)
        // when player (/object) hits bottom, start (next) from top
        console.log('reset')
        player.pos.y = 0
    }
    dropCounter = 0
}

let dropCounter = 0
let dropInterval = 1000

let lastTime = 0

function update(time = 0) {
    const deltaTime = time - lastTime
    lastTime = time
    dropCounter += deltaTime
    if (dropCounter > dropInterval) {
        playerDrop()
    }
    draw()
    requestAnimationFrame(update)
}



const player = {
    matrix: matrix,
    pos: {
        x: 5,
        y: 5
    }
}

document.addEventListener("keydown", event => {
    switch (event.keyCode) {
        case 37:
            player.pos.x--
                break
        case 39:
            player.pos.x++
                break
        case 40:
            playerDrop()
    }
})

update()