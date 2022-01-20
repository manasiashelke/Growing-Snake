import { getInputDirection } from "./input.js"
import { snake_speed } from "./game.js"

export const SNAKE_SPEED = snake_speed()
const snakeBody = [{ x: 11, y: 11 }]
let newSegments = 0

export function update() {
  addSegments()

  const inputDirection = getInputDirection()
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] }
  }

  snakeBody[0].x += inputDirection.x
  snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard) {
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)
  })
}

export function expandSnake(amount) {
  newSegments += amount
}

export function onSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false
    return equalPositions(segment, position)
  })
}

export function getSnakeHead() {
  return snakeBody[0]
}

export function snakeIntersection() {
  return onSnake(snakeBody[0], { ignoreHead: true })
}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
  }

  newSegments = 0
}

// const dropbtn = document.getElementsByClassName('dropbtn')
// const startBtn = document.getElementById('startBtn')

// startBtn.addEventListener('click', snake_speed)

// function snake_speed(){
  // const startBtn = document.getElementById('startBtn')
  // const dropbtn = document.getElementsByClassName('dropbtn');
//   const dropbtn = document.querySelector('.dropbtn')
//   console.log(dropbtn.textContent)
//   if(dropbtn.textContent == "Levels"){
//     console.log(dropbtn.textContent)
//     return 3;
    
//   }
//   if(dropbtn.textContent == "Medium"){
//     return 5;
    
//   }
//   if(dropbtn.textContent == "Hard"){
//     return 8;
    
//   }
// }
