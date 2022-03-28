// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
var ball;




	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	ball = new Ball();
	
	//------Declare the Player's speed on the x and y axis------
	ball.vx = 4;
	ball.vy = 4;
	//----------------------------------------------------
	
	timer = setInterval(animate, interval);


function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//----Movement Using the Player's move() function----
	ball.move();
	//---------------------------------------------------
	
	//--------------Bounce of Right----------------------
	if(ball.x > canvas.width - ball.width/2 ) 
	{
		this. color = "red";
		ball.vx = -ball.vx;//reverses the direction
		ball.vx= 1 + ball.vx;//ball increases speed x
		
		
	}
	//-------------Bounce of Left-----------------------
	else if(ball.x < 0 + ball.width/2 )
	{
		ball.vx = -ball.vx;
		ball.vx= 1 + ball.vx;//ball increases speed y
		
	}
	else if (ball.y > canvas.height - ball.height/2)
	{

		ball.vy = -ball.vy
		ball.vy1= 1 + ball.vy;
	}
	else if (ball.y < 0 + ball.height/2)
	{

		ball.vy = -ball.vy
		ball.vy= 1 + ball.vy;
	}
	
	//---------------------------------------------------
	
	ball.draw();
	
}
