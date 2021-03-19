const canvas = document.getElementById('bee-canvas')
const ctx = canvas.getContext('2d')
const black = 'rgb(0, 0, 0)'
const yellow = 'rgb(255, 255, 0)'
const xBase = 200
const yBase = 200

function randomNumber(upperLimit) {
  return Math.random() * upperLimit
}

function drawCircle(xAxis, yAxis, colour) {
  ctx.beginPath()
  ctx.arc(xAxis, yAxis, 60, 0, 2 * Math.PI)
  ctx.fillStyle = colour
  ctx.fill()
}

function drawRandomColouredCircle(xAxis, yAxis) {
  ctx.beginPath()
  ctx.arc(xAxis, yAxis, 60, 0, 2 * Math.PI)
  randomRed = randomNumber(255)
  randomGreen = randomNumber(255)
  randomBlue = randomNumber(255)
  colour = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
  ctx.fillStyle = colour
  ctx.fill()
}

 drawCircle(xBase, yBase, yellow)
 drawCircle(xBase + 20, yBase, black)
 drawCircle(xBase + 40, yBase, yellow)
 drawCircle(xBase + 60, yBase, black)
 drawRandomColouredCircle(xBase + 80, yBase)