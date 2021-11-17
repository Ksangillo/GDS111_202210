var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

var tracing = new Image()
tracing.src = "images/shapes.png"

    tracing.onload = function(){

        ctx.drawImage(tracing, 0, 0, 800, 800)

        //square
        ctx.fillStyle="yellow"
        ctx.strokeStyle = "(black, 5px wide)"
        ctx.fillRect(85, 302, 100, 100)
        

        //circle
        ctx.fillStyle= "#ffff00"
        ctx.strokeStyle ="red 5px wide"
        ctx.beginPath()
        ctx.arc(385, 440, 65, 0,  (2 * Math.PI), false)
        closePath(320,442)
        ctx.fill()

        //hexagon
        






































    }