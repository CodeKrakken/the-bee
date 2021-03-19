const canvas = document.getElementById('bee-canvas')
const ctx = canvas.getContext('2d')


ctx.beginPath()
ctx.arc(200, 200, 60, 0, 2 * Math.PI)
ctx.fillStyle = 'rgb(255, 255, 0)'
ctx.fill()