import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'


let lastRenderTime = 0
let gameOver = false

const gameBoard = document.getElementById('game-board')

function main(currentTime) {
  if (gameOver) {
    if (confirm('You lost. Press ok to restart.')) {
      window.location = 'index.html'
    }
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


const container = document.getElementById("container")
const startBtn = document.getElementById("startBtn")
const dropbtn = document.getElementsByClassName("dropbtn")
const dropdown_content = document.querySelector('.dropdown_content');
const easy_level = document.getElementById("easy_level")
const medium_level = document.getElementById("medium_level")
const hard_level = document.getElementById("hard_level");





startBtn.addEventListener('click', function(){ 
  // console.log(container)
gameBoard.style.display ="grid"
gameBoard.style.backgroundColor ="rgba(255, 255, 255,0.1)"


container.style.display ="none"


snake_speed()


})

export function snake_speed(){
  const dropdown_content = document.querySelector('.dropdown_content');
  // if(  dropdown_content.previousElementSibling.textContent == "Select Level"){
    // console.log(dropdown_content.previousElementSibling.textContent)
  //   return 4;
  // }
  if(  dropdown_content.previousElementSibling.textContent == "Easy"){
    console.log(dropdown_content.previousElementSibling.textContent)
    return 3;
  }
  
  // if(dropdown_content.previousElementSibling.textContent == "Medium"){
  //   console.log(dropdown_content.previousElementSibling.textContent)
  //   return 5;
  // }
  // if( dropdown_content.previousElementSibling.textContent == "Hard"){
  //   console.log(dropdown_content.previousElementSibling.textContent)
  //   return 8;
  // }
}



easy_level.addEventListener('click', function(){
  // console.log(easy_level.textContent)
  // console.log(dropdown_content.previousElementSibling.textContent)
  dropdown_content.previousElementSibling.textContent =easy_level.textContent
  // console.log(dropdown_content.previousElementSibling.textContent)
  // dropdown_content.style.display="none";
// var flag = 1
})


medium_level.addEventListener('click', function(){
  // console.log(medium_level.textContent)
  // console.log(dropdown_content.previousElementSibling.textContent)
  dropdown_content.previousElementSibling.textContent =medium_level.textContent
  
  // dropdown_content.style.display="none";
// var flag = 2
})


hard_level.addEventListener('click', function(){
  // console.log(hard_level.textContent)
  // console.log(dropdown_content.previousElementSibling.textContent)
  dropdown_content.previousElementSibling.textContent =hard_level.textContent
  // dropdown_content.style.display="none";
  // var flag=3
})

