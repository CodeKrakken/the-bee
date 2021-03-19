const canvas = document.getElementById('bee-canvas')
const ctx = canvas.getContext('2d')

createSection()
ctx.beginPath()
ctx.arc(xBase + 80, yBase + 10, 18, 0, Math.PI)
ctx.fillStyle = 'rgb(255,255,255)'
ctx.fill()