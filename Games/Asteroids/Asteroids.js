"use strict";
let field = []
let bullets = []
let ship;
let score
let hiScore = 0
let scoreBox
let hiScoreBox
let isGameOver

// TODO: major refactoring

function setup() {
    createCanvas(640, 480)

    ship = new Ship(randomColor(), randomColor())

    score = 0

    scoreBox = document.getElementById('score-value')
    hiScoreBox = document.getElementById('hi-score-value')
    scoreBox.innerText = score;
    hiScoreBox.innerText = hiScore;

    isGameOver = false
}

function draw() {
    background(0)

    handleKeys()

    if (frameCount % 30 === 0) {
        if (random() > 0.7) {
            let r = random()
            let x = r > 0.5 ? random(width) : random() > 0.5 ? 0 : width
            let y = r < 0.5 ? random(height) : random() > 0.5 ? 0 : height
            field.push(new Asteroid(x, y, noise(frameCount) * 100, randomColor()))
        }
    }


    for (let i = field.length - 1; i >= 0; i--) {
        field[i].update()
        field[i].draw()

        for (let j = bullets.length - 1; j >= 0; j--) {

            if (bullets[j].hits(field[i])) {

                field.splice(i, 1)
                bullets.splice(j, 1)
                score++
                break
            }
        }
    }

    for (let i = bullets.length - 1; i >= 0; i--) {
        if (bullets[i].onscreen) {

            bullets[i].update()
            bullets[i].draw()
        } else {
            bullets.splice(i, 1)
        }
    }
    ship.update()
    ship.draw()

    // Uncomment to show score on screen
    // noStroke()
    // fill(255)
    // textSize(30)
    // textAlign("LEFT")
    // text(score, 50, 100)

    scoreBox.innerText = score;
}

function keyPressed() {
    switch (keyCode) {
        case 32:
            ship.shoot(bullets)
            break;
    }
}

function handleKeys() {
    if (keyIsDown(LEFT_ARROW))
        ship.rot(-0.025)
    if (keyIsDown(RIGHT_ARROW))
        ship.rot(0.025)

    // Uncomment below for awesome shooting!
    // if (keyIsDown(32))
    //     ship.shoot(bullets)
}

function endGame() {

    noLoop()
    // noStroke looks kinda cool
    // noStroke()
    fill(255)
    textSize(80)
    // TODO: fix this (alignment not in center - something to do with improper use of 'translate')

    if (score > hiScore) {
        hiScore = score
        hiScoreBox.innerText = hiScore
    }

    text("Game over", width / 2 - 200, height / 2 + 100)
    // if (!isGameOver) {

    //     if (confirm("Spaceshuttle destroyed!!\nRestart game?")) {
    //         setup()
    //         draw()
    //         loop()
    //         // break
    //     } else {
    //         noLoop()
    //         isGameOver = true
    //     }
    // }

}

function randomColor() {
    return color(Math.random() * 255, Math.random() * 255, Math.random() * 255)
}

/* Asteroid code */
function Asteroid(x, y, size, color) {

    this.pos = createVector(x, y)

    this.size = size
    this.color = color

}

Asteroid.prototype.update = function () {

    let path = createVector(width / 2, height / 2).sub(this.pos)
    path.setMag(5 - log(this.size))

    this.pos.add(path)

    // TODO: tune this
    let d = dist(this.pos.x, this.pos.y, width / 2, height / 2)

    if (d < this.size / 2)
        endGame()
}

Asteroid.prototype.draw = function () {

    fill(0)
    stroke(this.color)
    strokeWeight(1)
    ellipse(this.pos.x, this.pos.y, this.size)

}

/* Ship code */
function Ship(bodyColor, edgeColor) {

    this.bodyColor = bodyColor
    this.edgeColor = edgeColor

    this.angle = 0
    this.angleVelocity = 0
}

Ship.prototype.update = function () {

    this.angle += this.angleVelocity
    this.angleVelocity *= 0.7
}

Ship.prototype.draw = function () {

    fill(this.bodyColor)
    strokeWeight(2)
    stroke(this.edgeColor)

    push()
    translate(width / 2, height / 2)
    rotate(this.angle)

    // TODO: get a proper equi triangle!
    beginShape()
    vertex(0, -30)
    vertex(15, 15)
    vertex(-15, 15)
    endShape(CLOSE)

    pop()
}

Ship.prototype.rot = function (delta) {

    this.angleVelocity += delta
}

Ship.prototype.shoot = function (arr) {

    arr.push(new Lazer(-this.angle + PI, 0, 5))
}



/* Lazer code */
function Lazer(angle, radius, speed) {

    this.x = null
    this.y = null

    this.angle = angle
    this.radius = radius
    this.speed = speed

    this.onscreen = true
}

Lazer.prototype.update = function () {

    this.radius += this.speed

    this.x = this.radius * sin(this.angle)
    this.y = this.radius * cos(this.angle)


    this.onscreen = (this.radius < width)

}

Lazer.prototype.draw = function () {

    stroke(randomColor())
    strokeWeight(3)

    push()

    translate(width / 2, height / 2)
    point(this.x, this.y, 1)

    pop()
}

Lazer.prototype.hits = function (asteroid) {

    let d = dist(this.x + width / 2, this.y + height / 2, asteroid.pos.x, asteroid.pos.y)

    return d < asteroid.size / 2
}