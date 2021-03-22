var canvas = document.getElementById("myCanvas")    
var ctx = canvas.getContext("2d")
var colour = "blue"
var lineWidth = 5
var mouseEvent = ""
var lastx,lasty,currentx,currenty

canvas.addEventListener("mouseleave", ml)

function ml (e) {
console.log("Mouse Left The Canvas")
mouseEvent = "mouseLeave"
}

canvas.addEventListener("mouseup", mu)

function mu (e) {
    console.log("Mouse Left The Click")
    mouseEvent = "mouseUp"
}

canvas.addEventListener("mousedown", md)

function md (e) {
    console.log("The mouse has been clicked")
    mouseEvent = "mouseDown"
    colour = document.getElementById("color").value 
    lineWidth = document.getElementById("number").value 
}
 
canvas.addEventListener("mousemove", mm)

function mm (e) {
    currentx = e.clientX-canvas.offsetLeft
    currenty = e.clientY-canvas.offsetTop
    if (mouseEvent == "mouseDown") {
      ctx.beginPath()
      ctx.strokeStyle=colour
      ctx.lineWidth=lineWidth  
      ctx.moveTo(lastx, lasty)
      ctx.lineTo(currentx, currenty)
      ctx.stroke()
    }
lastx = currentx
lastx = currenty
}
