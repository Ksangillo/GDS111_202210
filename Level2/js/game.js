
var canvas;
var context;
var interval = 1000/60;
var player1; 
var player2;



canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

//--------Instinuated Objects-----------------------------------------------------//
player1 = new GameObject();
player1.x= 60;
player1.width = 30;
player1.height= 150;


player2 = new GameObject();
player2.x= 960;
player2.width = 30;
player2.height= 150;

ball = new GameObject();
ball.width= 50;
ball.vx = 6;
ball.vy = 0;

//


timer = setInterval(animate, interval);

function animate()//
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	if(w)//if (d=true), (!s) means  d=false
	{
		
		player1.y += -5;
	}
	if(s)
	{
		
		player1.y += 5;
	}
	if(up)//if (d=true), (!s) means  d=false
	{
		
		player2.y += -5;
	}
	if(down)
	{
		
		player2.y += 5;
	}

	

	if(ball.hitTestObject(player1))//ball hit middle
	{
		
		ball.vx = -ball.vx+1;
		player1.color="purple";
	}
	
	
	if(ball.hitTestObject(player1))
	{
		//ball hits top
		if(ball.y < player1.y - player1.height/6) //one sixth of the paddle's height)
		{
		ball.vx = 4;//positive speed;
		ball.vy = -4; //negative speed;
		player1.color="green";
		}
	}
	if(ball.hitTestObject(player1))//ball hits bottom
	{
		//ball hits top
		if(ball.y > player1.y ) //one sixth of the paddle's height)
		{
		ball.vx = 4;//positive speed;
		ball.vy = 4; //negative speed;
		player1.color="orange";
		}
	}
	if(ball.hitTestObject(player2))//ball hit middle
	{
		
		ball.vx = -ball.vx-1;
		player2.color="purple";
	}
	
	
	if(ball.hitTestObject(player2))
	{
		//ball hits top
		if(ball.y < player2.y - player2.height/6) //one sixth of the paddle's height)
		{
		ball.vx = -4;//positive speed;
		ball.vy = -4; //negative speed;
		player2.color="green";
		}
	}
	if(ball.hitTestObject(player2))//ball hits bottom
	{
		//ball hits top
		if(ball.y > player2.y ) //one sixth of the paddle's height)
		{
		ball.vx = -4;//positive speed;
		ball.vy = 4; //negative speed;
		player2.color="orange";
		}
	}
	
	//---------------------BALL-------------------------------//
		ball.move();
	//-----------Losing Condition------------------//
	
	
	if(ball.x > canvas.width - ball.width/2)//resets right
	{
		
		ball.x = canvas.width/2 - ball.width/2
	}

	if(ball.x < 0 - ball.width/2)//resets left
	{
		
		ball.x = canvas.width/2 - ball.width/2
	}
	









	//----------------------------------------------//

     //Paddle Canvas Collision
	 if(player1.y < 0 + player1.height/2)//top collision
	 {
		player1.y = 0 + player1.height/2

	 }

	 if(player1.y > canvas.height - player1.height/2)//bottom collision
	 {
		player1.y = canvas.height - player1.height/2

	 }


	 if(player2.y < 0 + player2.height/2)//top collsion
	 {
		player2.y = 0 + player2.height/2

	 }

	 if(player2.y > canvas.height - player2.height/2)//bottom collision
	 {
		player2.y = canvas.height - player2.height/2

	 }
	
	
//----------------------------------------------------//
	//--------------Bounce of Right----------------------
	/*
	if(ball.x > canvas.width - ball.width/2 ) 
	{
		ball.x = canvas.width - ball.width/2
		ball.vx = -ball.vx;//reverses the direction
		ball.vx= 1 + ball.vx;//ball increases speed x
		ball.color="red";//changes color cause of var ball
		
	}
	
	//-------------Bounce of Left-----------------------
	 if (ball.x < 0 + ball.width/2 )
	{
		ball.color="black";
		ball.vx = -ball.vx;
		ball.vx= 1 + ball.vx;//ball increases speed y
		
	}
	*/
	
	if (ball.y > canvas.height - ball.height/2)
	{

		ball.color="yellow";
		ball.vy = -ball.vy;
		ball.vx= 1 + ball.vx;
	}
	 if (ball.y < 0 + ball.height/2)
	{
		ball.color="cyan";
		ball.vy = -ball.vy;
		ball.vx= 1 + ball.vx;
	}
	//---------------------------------------------------------//
	
	ball.drawCircle();
	player1.drawRect();
	player2.drawRect();
	
	
}//

