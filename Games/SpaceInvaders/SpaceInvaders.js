let shuttle
let aliens = []
let score

function setup() {
    createCanvas(600, 400)
    shuttle = new Saucer(width / 2, height - 20, 20, 3, rCol(), false)

    aliens = initFleet(10, 3, 20)
    score = 0

    textAlign(CENTER)
}

function draw() {
    background(51)

    let deltaY = random(0.02)
    for (let i = aliens.length - 1; i >= 0; i--) {

        if (aliens[i].intact) {

            aliens[i].move(sin(frameCount * 0.01) * 0.3, deltaY)

            aliens[i].update(aliens.concat(shuttle))
            aliens[i].draw()
        } else {

            score += (aliens[i].enemy) ? aliens[i].shape : 0
            aliens.splice(i, 1)
        }
    }

    shuttle.update(aliens.concat(shuttle))
    shuttle.draw()

    if (!shuttle.intact) {
        endGame()
    }

    textSize(30)
    fill(255)
    noStroke()
    text(score, width / 2, 30)
}

function keyPressed() {

    if (keyCode === 32) {
        shuttle.shoot()
    }
}

function rCol() {
    return color(random(255), random(255), random(255))
}

function initFleet(fleetWidth, fleetHeight, size) {
    let fleet = []

    const xOffset = (width - (size * fleetWidth * 2)) / 2
    const yOffset = height / 2

    for (let x = 0; x < fleetWidth; x++) {
        for (let y = 0; y < fleetHeight; y++) {
            fleet.push(new Saucer(x * size * 2 + size, yOffset - (y * size * 2), size, Math.floor(random(3, 12)), rCol(), true))
        }
    }

    return fleet
}

function Saucer(x, y, size, shape, color, enemy) {
    this.pos = createVector(x, y)
    this.size = size
    this.shape = shape
    this.color = color
    this.enemy = enemy
    this.velocity = createVector(0, 0)
    this.accleration = createVector(0, 0)

    this.lazers = []
    this.intact = true //TODO: rename to destroyed
}

Saucer.prototype.update = function (allShips) {

    this.velocity.add(this.accleration)
    this.pos.add(this.velocity)

    // reset
    this.accleration = createVector(0, 0)
    this.velocity.mult(0.7)

    for (let i = this.lazers.length - 1; i >= 0; i--) {

        if (this.lazers[i].onScreen) {

            this.lazers[i].update()
            this.lazers[i].draw()
        } else {

            this.lazers.splice(i, 1)
            continue;
        }

        for (let j = 0; j < allShips.length; j++) {

            if(this.lazers[i].hits(allShips[j]) && this.lazers[i].enemy !== allShips[j].enemy) {

                allShips[j].intact = false
                // this.lazers.splice(i, 1)
            }

        }

    }
}

Saucer.prototype.draw = function () {

    stroke(255)
    strokeWeight(3)
    fill(this.color)

    let step = TWO_PI / this.shape
    beginShape()
    for (let i = PI; i < TWO_PI + PI; i += step)
        vertex((sin(i) * this.size) + this.pos.x, (cos(i) * this.size) + this.pos.y)

    endShape(CLOSE)
}

Saucer.prototype.destroy = function () {

    this.intact = false
}




Saucer.prototype.shoot = function () {

    this.lazers.push(new Lazer(this.pos.x, this.pos.y, this.enemy ? 5 : -5, rCol(), this.enemy))
}

Saucer.prototype.move = function (x, y) {

    this.accleration = createVector(x, y)

}

function Lazer(x, y, yV, color, enemy) {
    this.pos = createVector(x, y)
    this.yV = yV
    this.color = color
    this.enemy = enemy

    this.onScreen = true
}

Lazer.prototype.update = function () {

    this.pos.y += this.yV
    this.onScreen = !(this.pos.y < 0 || this.pos.y > height)
}

Lazer.prototype.draw = function () {

    stroke(this.color)
    strokeWeight(5)

    point(this.pos.x, this.pos.y)
}

Lazer.prototype.hits = function (saucer) {

    let distance = dist(this.pos.x, this.pos.y, saucer.pos.x, saucer.pos.y)

    return distance < saucer.size
}

function endGame() {
    noLoop()
    textSize(100)
    fill(255)
    noStroke()

}