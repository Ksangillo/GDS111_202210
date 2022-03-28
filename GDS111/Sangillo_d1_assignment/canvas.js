var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

var tracing = new Image()
tracing.src = "images/shapes.png"

    tracing.onload = function(){

        ctx.drawImage(tracing, 0, 0, 800, 800)

        //square
        ctx.fillStyle="yellow"
        ctx.strokeStyle = "black"
        ctx.lineWidth ="5"
        ctx.fillRect(85, 302, 100, 100)
        ctx.strokeRect(85, 302, 100, 100)




        //line
        ctx.fillStyle ="none"
        ctx.strokeStyle = "rgb(255,0,0)"
        ctx.linewidth = "5"
        ctx.moveTo(85,680) 
        ctx.lineTo(280,550)
        ctx.stroke()
        

        //circle
        ctx.fillStyle= "#ffff00"
        ctx.strokeStyle ="red"
        ctx.lineWidth = "5"
        ctx.beginPath()
        ctx.arc(385, 440, 70, 0, (3 * Math.PI), false)
        ctx.lineTo(460,445)
        ctx.closePath()
        ctx.fill()

        //hexagon
        ctx.fillStyle = "#ff00dd"
        ctx.strokeStyle = "#00ffff"
        ctx.lineWidth = "5"

        ctx.beginPath()        
        ctx.moveTo(555, 310) 
        ctx.lineTo(665, 280) 
        ctx.lineTo(725, 380)
        ctx.lineTo(650,465)
        ctx.lineTo(550,420)
        ctx.closePath()     
        ctx.fill()
        ctx.stroke()

        //star
        ctx.fillStyle = "ffff00"
        ctx.strokeStyle = "rgb(32,32,32"
        ctx.lineWidth = "5"

        ctx.beginPath()        
        ctx.moveTo(635, 500) 
        ctx.lineTo(665,550) 
        ctx.lineTo(730,568)
        ctx.lineTo(685,615)
        ctx.lineTo(695,680)
        ctx.lineTo(635,652)
        ctx.lineTo(575,680)
        ctx.lineTo(580,615)
        ctx.lineTo(540,565)
        ctx.lineTo(600,550)
        ctx.closePath()     
        ctx.fill()
        ctx.stroke()
        
        






































    }