
var canvas;
var context;
var interval = 1000/60;
var player1; 
var player2;
var p1Wins = 0;
var p2Wins = 0;
var img;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
img = document.getElementById("ric");

//--------Instinuated Objects-----------------------------------------------------//
player1 = new GameObject(context, canvas);
player1.x= 60;
player1.width = 30;
player1.height= 150;

player2 = new GameObject(context, canvas);
player2.x= 960;
player2.width = 30;
player2.height= 150;

ball = new GameObject(context, canvas);
ball.width= 50;
ball.vx = 6;
ball.vy = 6;
//------------------------------------------------------------------------------//


timer = setInterval(animate, interval);
function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//------Calls Controls for game------------------//
	if(w)//if (d=true), (!s) means  d=false
	{
		
		player1.y += -6;
	}
	if(s)
	{
		
		player1.y += 6;
	}
	if(up)//if (d=true), (!s) means  d=false
	{
		
		player2.y += -6;
	}
	if(down)
	{
		
		player2.y += 6;
	}
	//----------------------------------------------//


	//-------Ball Collision with Paddle------------------------------------------------//
	if(ball.hitTestObject(player1))//ball hit middle
	{
		
		ball.vx = -ball.vx+1;
		player1.color="purple";
	}
	
	if(ball.hitTestObject(player1))//ball  hits top
	{
		
		if(ball.y < player1.y - player1.height/6) //one sixth of the paddle's height)
		{
		ball.vx = 6;//positive speed;
		ball.vy = -6; //negative speed;
		player1.color="green";
		}
	}

	if(ball.hitTestObject(player1))//ball hits bottom
	{
		
		if(ball.y > player1.y ) //one sixth of the paddle's height)
		{
		ball.vx = 6;//positive speed;
		ball.vy = 6; //negative speed;
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
		ball.vx = -6;//positive speed;
		ball.vy = -6; //negative speed;
		player2.color="green";
		}
	}

	if(ball.hitTestObject(player2))//ball hits bottom
	{
		//ball hits top
		if(ball.y > player2.y ) //one sixth of the paddle's height)
		{
		ball.vx = -6;//positive speed;
		ball.vy = 6; //negative speed;
		player2.color="orange";
		}
	}
	//-------------------------------------------------------------------------------------//

	//----Displays Net-----------------//
	context.save();
	context.strokeStyle = "Yellow";
	context.beginPath();
	context.moveTo(canvas.width/2,0)
	context.lineTo(canvas.width/2,800)
	context.lineWidth = 5;
	context.stroke();
	context.restore();
	///------------------------------//
	

	//----------Displays score-------------------------------------------//
	context.font = "30px Georgia";
	context.fillText("Player 1 | Player 2", 396, 30);

	context.save()
    context.font = "20px Georgia "
    context.fillStyle = "black"
    context.fillText( p1Wins.toString()+"-" + p2Wins.toString(),496, 60)
    context.restore();
	////----------------------------------------------------------------//

//---------------------BALL--------------------------------------------------------------//
		ball.move();
	//-----------Losing Condition------------------//
	if(ball.x > canvas.width - ball.width/2)//resets right
	{
		ball.x = canvas.width/2 - ball.width/2
		p2Wins++;//for scoring
	}

	if(ball.x < 0 - ball.width/2)//resets left
	{
		
		ball.x = canvas.width/2 - ball.width/2
		p1Wins++;//for scoring
	}
	//----------------------------------------------//


     //Paddle Canvas Collision----------------------------------------------//
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
	//-------------------------------------------------------------------//


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
	
	if (ball.y > canvas.height - ball.height/2)/////Bounce of top & Bottom
	{

		ball.color="yellow";
		ball.vy = -ball.vy;
	
	}
	 if (ball.y < 0 + ball.height/2)
	{
		ball.color="cyan";
		ball.vy = -ball.vy;
		
	}
	//---------------------------------------------------------//
	
	
	
	player1.drawRect();
	player2.drawRect();
	//ball.drawCircle();
	ball.drawBall(img, 80, 80);

	
}

