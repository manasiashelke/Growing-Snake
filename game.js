import { update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'


const body = document.getElementById("body")
const gameBoard = document.getElementById('game-board')
const container = document.getElementById("container")
const startBtn = document.getElementById("startBtn")
const dropbtn = document.getElementsByClassName("dropbtn")
const refreshBtn = document.getElementById("refreshBtn")
const dropdown_content = document.querySelector('.dropdown_content');
const easy_level = document.getElementById("easy_level")
const medium_level = document.getElementById("medium_level")
const hard_level = document.getElementById("hard_level");
const popWindow = document.getElementById("popWindow")
const popUp = document.getElementById("popUp")
const ok = document.getElementById("ok")
const helpBtn = document.getElementById("helpBtn")
const help = document.getElementById("help")
const back = document.getElementById("back")

let lastRenderTime = 0
let gameOver = false
let SNAKE_SPEED;



function main(currentTime) {
    if (gameOver) {
        popUp.style.display = "flex"
        popWindow.style.display = "block"
        gameBoard.style.display = "none"
        refreshBtn.style.display = "none"
            // if (confirm('You lost. Press ok to restart.')) {
            //   window.location = 'index.html'
            // }
        return
    }


    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return


    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}


startBtn.addEventListener('click', function() {
    gameBoard.style.display = "grid"
    gameBoard.style.backgroundColor = "rgba(255, 255, 255,0.2)"
    container.style.display = "none"
    refreshBtn.style.display = "inline-block"
})

refreshBtn.addEventListener('click', function() {
    window.location = 'index.html'
})



ok.addEventListener('click', function() {
    window.location = 'index.html'
})

startBtn.addEventListener('click', speed)

function speed() {
    const dropdown_content = document.querySelector('.dropdown_content');
    if (dropdown_content.previousElementSibling.textContent == "Select Level") {
        console.log(dropdown_content.previousElementSibling.textContent)
        SNAKE_SPEED = 4;
    }
    if (dropdown_content.previousElementSibling.textContent == "Easy") {
        console.log(dropdown_content.previousElementSibling.textContent)
        SNAKE_SPEED = 3;
    }

    if (dropdown_content.previousElementSibling.textContent == "Medium") {
        console.log(dropdown_content.previousElementSibling.textContent)
        SNAKE_SPEED = 5;
    }
    if (dropdown_content.previousElementSibling.textContent == "Hard") {
        console.log(dropdown_content.previousElementSibling.textContent)
        SNAKE_SPEED = 8;
    }

}



easy_level.addEventListener('click', function() {

    dropdown_content.previousElementSibling.textContent = easy_level.textContent
        // dropdown_content.style.display="none";

})


medium_level.addEventListener('click', function() {

    dropdown_content.previousElementSibling.textContent = medium_level.textContent
        // dropdown_content.style.display="none";

})


hard_level.addEventListener('click', function() {

    dropdown_content.previousElementSibling.textContent = hard_level.textContent
        // dropdown_content.style.display="none";

})

helpBtn.addEventListener('click', function(){
help.style.display = "block"
})

back.addEventListener('click', function(){
    help.style.display = "none"
    })

