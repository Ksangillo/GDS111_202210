var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')
var timer = requestAnimationFrame(main)
var ship
var numAsteroids = 20
var asteroids = []
var gameOver = true
var gameStates = []
var currentState = 0
var score = 0
var highScore = 0
var invincible
var powerup
//For Game Menu--------------------------
var menuSprite = new Image()
menuSprite.src ="images/Menu.png"
menuSprite.onload = function() {
    

}

//----------------------------------------Image Sprites For Game---------------------------------------------------------//
var shipSprite = new Image()
shipSprite.src ="images/spaceship.png"
shipSprite.onload = function(){


}
//FOR ASTEROID IMAGES____ belongs in astroid draw in the asteroid
var asteroidSprite = new Image()
asteroidSprite.src = "images/asteroid.png"
asteroidSprite.onload = function(){


}
   
   //For Endscreen-------------------------
   var endSprite = new Image()
   endSprite.src ="images/endscreen.jpeg"
   endSprite.onload = function() {
   
   
   }
   var screenSprite = new Image()
   screenSprite.src ="images/gamescreen.jpg"
   screenSprite.onload = function() {
   
   
   }






//utility functions
function randomRange(high, low){
    return Math.random() * (high-low) + low
}

function gameStart(){
    //For Loop to create the instances of Asteroids
    for(var i = 0; i < numAsteroids; i++){
        asteroids[i] = new Asteroid()
        
    }

    //Create an instance of the PlayerShip
    ship = new PlayerShip()

}

//Constructor Function for Asteroid Class
function Asteroid(){
    this.radius = randomRange(5,12)
    this.x = randomRange(canvas.width - this.radius, this.radius) + canvas.width
    this.y = randomRange(canvas.height - this.radius, this.radius) 
    this.vx =randomRange(-5,-10)
    this.vy = randomRange(10, 5)
    //this.color = "red"

    this.drawAsteroid = function(){
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = this.color
        
        ctx.drawImage(asteroidSprite, this.x- this.radius, this.y - this.radius, this.radius*2,this.radius*2)
        console.log("astroidSprite drawImage()")
        ctx.closePath()
        ctx.fill()
        ctx.restore()
        

    }

}



//Setup Keyboard Event Handlers 
document.addEventListener("keydown", pressKeyDown)
document.addEventListener("keyup", pressKeyUp)

function pressKeyDown(e){
    if (!gameOver) {
        if (e.keyCode == 87) {
            ship.up = true
        }
        if (e.keyCode == 65) {
            ship.left = true
        }
        if (e.keyCode == 68) {
            ship.right = true
        }
        if (e.keyCode == 83) {
            ship.down = true
        }
    }

    if(gameOver){

        //checking for Enter
        if(e.keyCode == 13){
            if(currentState == 2){
                //game over screen reatarts game
                currentState = 0
                //resets number of asteroids
                numAsteroids = 20
                //empties asteroids array
                asteroids = []
                //resets score
                score = 0
                gameStart()
                main()
            }
            else{
                //main screen starts game 
                gameStart()
                currentState = 1
                gameOver = false
                main()
                scoreTimer()
                console.log("space")

            }
            
        }
    }
    
}

function pressKeyUp(e){
    if(!gameOver){
        if (e.keyCode == 87) {
            ship.up = false
        }
        if (e.keyCode == 65) {
            ship.left = false
        }
        if (e.keyCode == 68) {
            ship.right = false
        }
        if (e.keyCode == 83) {
            ship.down = false
        } 
    }
    
}

//constructor function
function PlayerShip(){
    this.x = canvas.width/2
    this.y = canvas.height/2
    this.w = 20
    this.h = 20
    this.vx = 0
    this.vy = 0
    this.up = false
    this.down = false
    this.left = false
    this.right = false
    this.flamelength = 30

    this.drawShip = function(){
       ctx.save()
        ctx.translate(this.x, this.y)
        if(this.up || this.left || this.right){
            ctx.save()
            //Changes the drawing values to animate the flame
            if(this.flamelength == 10){
                this.flamelength = 20
                ctx.fillStyle = "yellow"
            }else{
                
                this.flamelength = 10
                ctx.fillStyle = "orange"
            }
            ctx.beginPath()
            ctx.moveTo(0, this.flamelength)
            ctx.lineTo(-30, 4)
            ctx.lineTo(-2, 0)
            ctx.lineTo(0,this.flamelength)
            ctx.closePath()
            ctx.fill()
            ctx.restore()

        }
        //----------------------------------------------------
        //ctx.fillStyle = "red"
        //ctx.beginPath()
        //ctx.moveTo(0, -10)
        //ctx.lineTo(10, 10)
        //ctx.lineTo(-10, 10)
        //ctx.lineTo(0, -10)
        //ctx.closePath()
        //ctx.fill();
        //ctx.restore()
        //---------------------------------------------------
        ctx.drawImage(shipSprite, -20, -20, 50, 50)
        console.log("shipSprite drawImage()")

        //---If invincible ---- do somthing
        ctx.restore()
        
       

        
    }

    this.move = function(){
        this.x += this.vx
        this.y += this.vy

        //bottom boundary of screen
        if(this.y > canvas.height - this.h){
            this.y = canvas.height - this.h
            this.vy = 0
        }
        //top boundary of screen
        if(this.y < this.h){
            this.y = this.h
            this.vy = 0
        }

        //right boundary of screen
        if(this.x > canvas.width - this.w){
            this.x = canvas.width - this.w
            this.vx = 0
        }
        //left boundary of screen
        if(this.x < this.w){
            this.x = this.w
            this.vx = 0
        }
    }
      
}
    

//Main Screen
gameStates[0] = function(){
    ctx.save()
    ctx.drawImage(menuSprite, -25, -28, 900, 900)
    console.log("menu drawImage()")
    ctx.restore()
    ctx.save()
    ctx.font = "30px Audiowide"
    ctx.fillStyle = "red"
    ctx.textAlign = "center"
    ctx.fillText("Asteroid Avoider", canvas.width/2, canvas.height/2-30)
    ctx.font = "15px Audiowide"
    ctx.fillText("Press Enter to Start", canvas.width/2, canvas.height/2 + 20)
    ctx.restore()
    

}

//Game Screen
gameStates[1] = function(){
    ctx.save()
    ctx.drawImage(screenSprite, -25, -28, 800, 700)
    console.log("screen drawImage()")
    ctx.restore()

    //code for displaying score
    ctx.save()
    ctx.font = "15px Audiowide"
    ctx.fillStyle = "red"
    ctx.fillText("Score: " + score.toString(), canvas.width - 150, 30)
    ctx.restore()

    //Vertical 
    if(ship.up){
        ship.vx = 10
    }else{
        ship.vx = -3
    }
    
    //Horizontal Movement
    if(ship.left){
        ship.vy = -3
    }else if(ship.right){
        ship.vy = 3
    }else{
        ship.vy = 0
    }

    //Loops through all asteroids and can check their position
    for(var i = 0; i < asteroids.length; i++){
        var dX = ship.x - asteroids[i].x
        var dY = ship.y - asteroids[i].y
        var distance = Math.sqrt((dX*dX)+(dY*dY))

        if(detectCollision(distance, (ship.h/2 + asteroids[i].radius))){
            console.log("hit asteroid")
            gameOver = true
            currentState = 2
            main()
            
        }


        if(asteroids[i].y > canvas.height + asteroids[i].radius){
            asteroids[i].y = randomRange(canvas.height - asteroids[i].radius, asteroids[i].radius) 
            asteroids[i].x = randomRange(canvas.height - asteroids[i].radius, asteroids[i].radius) - canvas.height
        }
        if(!gameOver ==true ){
            asteroids[i].x += asteroids[i].vx
            asteroids[i].drawAsteroid()
        }
    }
    if(!gameOver){
        ship.move()
        ship.drawShip()
    }

    while(asteroids.length < numAsteroids){
        asteroids.push(new Asteroid())
    }
}

//Game Over
gameStates[2] = function(){
    if(score > highScore){
        ctx.save()
        ctx.drawImage(endSprite, -25, -20, 900, 900)
        console.log("endscreen drawImage()")
        ctx.restore()
        //set a new high score
        highScore = score
        ctx.save()
        ctx.font = "30px Audiowide"
        ctx.fillStyle = "red"
        ctx.textAlign = "center"
        ctx.fillText("Game Over, your high score score was: " + score.toString() , canvas.width/2, canvas.height/2-60)
        ctx.fillText("Your new high score is: " + highScore.toString() , canvas.width/2, canvas.height/2-30)
        ctx.fillText("New Record", canvas.width/2, canvas.height/2)
        ctx.font = "15px Audiowide"
        ctx.fillText("Press Enter to Play Again", canvas.width/2, canvas.height/2 + 20)
        ctx.restore()

    }else{
        //keep same score new high score
        ctx.save()
        ctx.drawImage(endSprite, -25, -20, 900, 900)
        console.log("endscreen drawImage()")
        ctx.restore()
        ctx.save()
        ctx.font = "30px Audiowide"
        ctx.fillStyle = "Red"
        ctx.textAlign = "center"
        ctx.fillText("Game Over, your score was: " + score.toString() , canvas.width/2, canvas.height/2-60)
        ctx.fillText("Your high score is: " + highScore.toString() , canvas.width/2, canvas.height/2-30)
        ctx.font = "20px Audiowide"
        ctx.fillText("Press Enter to Play Again", canvas.width/2, canvas.height/2 + 20)
        ctx.restore()
    }
    
   
}

function main(){
    //clear canvas 
    //shipY-=1
    ctx.clearRect(0,0,canvas.width, canvas.height)

    gameStates[currentState]()

    if(!gameOver){
        timer = requestAnimationFrame(main)
    }
    
}

function detectCollision(distance, calcDistance){
    return distance < calcDistance
}

//Timer for Score
function scoreTimer(){
    if(!gameOver){
        score++
        //using modulus  that returns remainder of a decimal
        //checks to see if remainder is divisble by 5
        if(score % 2 == 0){
            numAsteroids += 5
            console.log(numAsteroids)
        }

        setTimeout(scoreTimer, 1000)
    }

}
