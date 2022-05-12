
var canvas;
var context;
var interval = 1000/60;
var player1; 
var p1Wins = 0;
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
canvas.style.backgroundColor="black";

//--------Instinuated Objects-----------------------------------------------------//
player1 = new GameObject(context, canvas);
player1.x = canvas.width/2;
player1.y = canvas.height - 25;
player1.width = 50;
player1.height= 50;
player1.color = ("#ffff00");
player1.force = 2;

var total = 5;
var pt = [];
var c = [];
var colors= [];
var currentState = 0;
var states = [];

//---------------Set Friction and Gravity-----------------//
var frictionX = .87;	
var frictionY = .87;
var gravity = 1;
//--------------------------------------------------------//


for(var i = 0; i < total; i++)
	{
		
		c[i] = new GameObject({width:20, height:20});
		c[i].color = "red";

		c[i].x = Math.random() * canvas.width;
		c[i].y = Math.random() * -canvas.height;
		c[i].vy += rand(5,5) ;

		pt[i] = new GameObject({width:20, height:20});
		pt[i].color = "green";

		pt[i].x = Math.random() * canvas.width;
		pt[i].y = Math.random() * -canvas.height;
		pt[i].vy += rand(5,5) ;
	}

//---------------------------------------------------------------------------------//


//-------functions called------------------------//
function reset()// reset all the particles to the top of the screen after the red circle collision condition is meet
{
	
	for(var i = 0; i < total; i++)
	{
		
	
		c[i].color = "red";
		c[i].x = Math.random() * canvas.width;
		c[i].y = Math.random() * -canvas.height;
		

		
		pt[i].color = "green";
		pt[i].x = Math.random() * canvas.width;
		pt[i].y = Math.random() * -canvas.height;

		
		
	}
	
}

function oldColor()//changes the players back to default color
{
	player1.color = ("#ffff00");


}
//---------------------------------------------//




timer = setInterval(animate, interval);
function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);
	states[currentState]();
}


states[0]= function()
{
	//------Calls Controls for game------------------//
	if(d)//if (d=true), (!s) means  d=false
	{
		
		player1.x += 2;
		player1.vx += player1.ax * player1.force;
		
	}
	if(a)
	{
		
		player1.x += -2;
		player1.vx += player1.ax * -player1.force;
	}
	
	player1.vx *= frictionX;
	
	player1.x += player1.vx;

	//----------------------------------------------//

	
     //Paddle Canvas Collision----------------------------------------------//
	 if(player1.x < 0 + player1.width/2)//left collison
	 {
		player1.x = 0 + player1.width/2
		player1.vx = 0;

	 }

	 if(player1.x > canvas.width - player1.width/2)//right collision
	 {
		player1.x = canvas.width - player1.width/2
		player1.vx = 0;

	 }
	//-------------------------------------------------------------------//


	//----------Displays score-------------------------------------------//
	context.save()
    context.font = "30px arial black"
    context.fillStyle = ("#555555")
    context.fillText("Score:"+ p1Wins.toString(),50, 50)
    context.restore();
	////----------------------------------------------------------------//


	//---Draws Objects to the canvas-----------------------//
	for(var p = 0; p < pt.length; p++)
	{	

		
		if(player1.hitTestObject(c[p]))//red circle collision condition
		{
			
			p1Wins = 0;
			player1.color = "Red";
			setTimeout(oldColor,500);
			pt[p].y = 0;
			c[p].y = 0;
			reset()
			
		}

		
		if(player1.hitTestObject(pt[p]))//green square condition
		{
			p1Wins++;
			player1.color = "Green";
			setTimeout(oldColor,500);
			pt[p].y = 0;
			c[p].y = 0;
			
		}
		

		if(pt[p].y >= canvas.height || c[p].y >= canvas.height)//resets particle back to top of canvas
		{
			pt[p].y = 0;
			c[p].y = 0;
		}

		pt[p].move();
		c[p].move();
		pt[p].drawRect();
		c[p].drawCircle();
		
	}	
		player1.drawRect();
	//-----------------------------//

}


