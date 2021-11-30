//JS files that runs the game and connects the fuctionality of ship.js and controls.js to the HTML

var canvas
var context

//variable for the animation timer
var timer

var ship//the ship!

var friction//slows down velocity

//function to ready the canvas ans starting postion of the ship
$(document).ready(function(e){


    //assign the canavas element to the canvas var
    canvas = $("#canvas")//JQuery verzion of document.getElementById("#canvas")

    context = canvas.get(0).getContext("2d")

    ship = new Ship()//Ship() was defined in ship.js

    //friction and POWER
    friction = 0.95
    ship.power = 1 
    timer = setInterval("animate();", 33) //33 100 miliseconds= 1 second?




})//end of Ready()


//LET"S DO STUFF!
function animate() {

    context.clearRect(0,0, canvas.width(), canvas.height())


    //check to see if the keyCode values are up and down [conects to the controls.js]
    if(up) {//if the current value of "up" is TRUE

        //when up key is TRUE (which means we are presssing the key down)
        ship.vy -= ship.ax * ship.power//shortcut

        // line 45 talks about ship.vy = ship.vy - (ship.ax * ship.power)
        //ship"s velocity is y axis is LOWERED by its current acceleration and power


    }
    if(down){//current value of "right" is TRUE


        ship.vy += ship.ax * ship.power


    }


    if(right){//current value of "right" is TRUE


        //add acelleration (moving right! )
        ship.vx += ship.ax * ship.power


    }

    if(left){//current value of "right" is TRUE


        //subtract aceleration
        ship.vx -= ship.ax * ship.power


    }



    //apply friction to the velocity -- realsitic slow down, speed increases are never instant
    ship.vx *= friction
    ship.vy *= friction


    //move and redraw the ship! .fucntions() are from ship.js [ship()]
    ship.move()
    ship.draw()

    if(ship.x > canvas.width()+25){


        //if the current ship x coord is greater than (beyond) the canvas width + 25 (size of the ship)

        //move ship X coord 
        ship.x = -25





    }

    if(ship.y > canvas.height()+25){


        //if the current ship y coord is greater than (beyond) the canvas width + 25 (size of the ship)

        //move ship y coord 
        ship.y = +25


    }
    


}// close of animate function
