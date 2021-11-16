//define a variable to acess canvas properties by ID name from HTML
var canvas = document.getElementById("canvas")

//define the drawing context of the canvas element
var ctx = canvas.getContext("2d") //canvas var is the object!

//create a new image to eventually add to the canvas this is instead of using a <img> in html doc
var galaxy = new Image()
//galaxy is now a image object and we can acess any the image attributes (properties) that we might need
galaxy.src = "images/galaxy.jpeg"//we can access .src because galaxy is an image object!


//now, "write" he image to the canvas page! an event must occur for this to happen...
galaxy.onload = function(){

    //DRAWING AN IMAGE TO THE CANVAS
    //context.drawImage(imgObject, x ,y width, height)
    ctx.drawImage(galaxy, 0, 0, 800, 600) //-x moves left -y move up +x moves right +y moves down
    
    //DRAW A RECTANGLE
//start with styling choices
ctx.fillStyle ="rgb(0,0,255)" //solid fill of the shape
ctx.strokeStyle ="red"      //the outline color
ctx.lineWidth = "5"           //width, in pixels, of the stroke

//use .fillRECT and .strokeRECT once style
ctx.fillRect(30, 30, 100, 100)///x, y height , width
ctx.strokeRect(30, 30, 100, 100)//context.strokeRect(x, y, width, height)
                            //GOTTA MATCH fillRect if applying to same rectangle


//DRAW A LINE

//first need to move the "drawing cursor" to the starting point(x,y) of the line
ctx.moveTo(0,0) //start postion
//next, draw a line to the ending point(x,y) of the line
ctx.lineTo(800,600)//end position
//ctx.strokeStyle ="red"      //changing the strokeStyle and lineWidth before drawing will make sure it dosen't retain the previous stroke
//ctx.lineWidth = "5"
ctx.stroke()       //draws the line

//draw opposite line
ctx.moveTo(800, 0)
ctx.lineTo(0, 600)

ctx.stroke()


//DRAW A CIRCLE
//requires a context.beginPath(), then context.arc(x, y, radius,startAngle,endAngle, isCounterClockwise)
//starting x y is the center of the circle radius is half of the diameter
//isCounterClockwise is a BOOLEAN --> TRUE or FALSE
ctx.beginPath()
ctx.arc(400, 300, 50, 0, (3 * Math.PI), false)
ctx.lineTo(450, 250)
ctx.closePath()
ctx.fill()          //fills the above shape

//DRAW IRREGULAR SHAPE! :D
//set up the styling first!
ctx.fillStyle = "#55ddef"
ctx.strokeStyle = "yellow"
ctx.lineWidth = "2"

ctx.beginPath()         //begin for new shape
ctx.moveTo(650, 100) //starting point
ctx.lineTo(700, 140) //draws line to this next point
ctx.lineTo(675, 200)
ctx.lineTo(625,200)
ctx.lineTo(600,140)
ctx.closePath()     //reunite previous end point (600, 140) with starting point
ctx.fill()
ctx.stroke()


//DRAW ANOTHER IMAGE TO THE CANVAS
//create an instance of the image
var mario = new Image()
//links to the source of the image file
mario.src ="images/mario.png"


//callback function loads the image and draws it to the canavas each time the page loads
mario.onload = function(){

    ctx.drawImage(mario, 600, 300 ,40, 80)

}
}