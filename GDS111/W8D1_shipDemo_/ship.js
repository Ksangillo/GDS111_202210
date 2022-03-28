//JS file to create a ship in HTML canvas
function Ship(){

    // use "this" keywrd references the current object you are inside if (in the code block) EVERYTHING in Javascript is an object SO when we say "this" we are talking about Ship()

    this.x = 100//x-axis coord start postion
    this.y = 100 //y-axis postion 
    this.color = "black"//outline color
    this.fillStyle ="orange" //interior color


    //velocity varaible for the x and y axis
    this.vx = 0
    this.vy = 0

    //acceleration varaibles for  the x and y axis
    this.ax = 1
    this.ay = 1


    //function "move" that will add velocity to the position of the ship
    this.move = function(){


        this.x += this.vx //adds velocity value of to x coord point
        this.y += this.vy //adds velocity value to y coord point


    }


    this.draw = function() {


        /*
        //Drawing this ship to the canvas (Triangle)    
        //--------------------------------------------
        //save the current state of the canvas
        context.save()

        //move the point of origin 0,0 to the ship's x and y coords
        context.translate(this.x, this.y)

        //DRAW THE SHIP
        context.lineStyle = this.color
        context.fillStyle = this.fillStyle


        //start point at current spot designated on line 32
        context.beginPath()


        //draw the triangle!(ship)
        context.moveTo(25,0)//relative to (100,100) not (0,0)
        context.lineTo(-25,25)
        context.lineTo(-25,-25)

        context.closePath()

        context.stroke()
        context.fill()
        context.restore()
        */ 


        //Image as the ship (X-wing)
        var imageObj = new Image()
        imageObj.src = "images/Banshee.png"//PNG FOR TRANSPARENCY

        //save the current state of the canvas
        context.save()

        //move the point of origin 0,0 to the ship's starting x and y coords
        context.translate(this.x, this.y)


        //draw the image to the canvas context
        //drawImage(image, destination, x coord of top left corner, y coord of the top left corner, width of image, and height of image)
        //Resource: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderContext2D/draw image  | https://www.w3schools.com/tags
        context.drawImage(imageObj, -100, -50, 200, 100)
        context.restore()
    

    }//Ship.draw()



}//Ship()
