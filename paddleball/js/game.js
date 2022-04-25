
var canvas;
var context;
var interval = 1000/60;
var player1; 
var p1Wins = 0;
//---------------Set Friction and Gravity-----------------
var frictionX = .97;	
var frictionY = .97;
var gravity = 1;
//--------------------------------------------------------
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

//--------Instinuated Objects-----------------------------------------------------//
player1 = new GameObject(context, canvas);
player1.x = canvas.width/2;
player1.y = 550;
player1.width = 250;
player1.height= 40;
player1.color = ("#00ffff");
player1.force = 2;


ball = new GameObject(context, canvas);
ball.x = canvas.width/2;
ball.y = canvas.height/2;
ball.color=("#ff00ff")
ball.force = 5;
ball.width = 80;
ball.height = 80;
ball.vx = 5;
ball.vy = 0;
//------------------------------------------------------------------------------//


timer = setInterval(animate, interval);
function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//------Calls Controls for game------------------//
	if(d)//if (d=true), (!s) means  d=false
	{
		
		player1.x += 5;
		player1.vx += player1.ax * player1.force;
		
	}
	if(a)
	{
		
		player1.x += -5;
		player1.vx += player1.ax * -player1.force;
	}
	
	player1.vx *= frictionX;
	
	player1.x += player1.vx;

	//----------------------------------------------//
	ball.vy *= frictionY;
	ball.vx *= frictionX;

	ball.vy += gravity;
	
	ball.y += Math.round(ball.vy);
	ball.x += Math.round(ball.vx);

	//-------Ball Collision with Paddle------------------------------------------------//

	if(ball.hitTestObject(player1))//ball hit middle
	{
		ball.y = player1.y - player1.height/2 - ball.height/2;
		ball.vy = -35;
		
		//player1.color="purple";
		p1Wins++;
	
	
		if(ball.x < player1.x - player1.width/6 ) //inner 1/6 left
		{
		
		ball.vx = -ball.force;
		//player1.color="green";
		
		}
		
		if(ball.x < player1.x - player1.width/3) //outer 1/3 left
		{
		
		ball.vx = -ball.force * 5;
		//player1.color="green";
		
		}
		
		if(ball.x > player1.x + player1.width/6) //inner 1/3 right
		{
		ball.vx = ball.force;
		//player1.color="orange";
		
		}

		if(ball.x > player1.x + player1.width/3) //outer 1/6 right
		{
		ball.vx = ball.force * 5;
		
		//player1.color="orange";
		
		}
				

	
	}
	//-------------------------------------------------------------------------------------//

	//----------Displays score-------------------------------------------//
	context.save()
    context.font = "16px arial black"
    context.fillStyle = ("#555555")
    context.fillText("score:"+ p1Wins.toString(),80, 25)
    context.restore();
	////----------------------------------------------------------------//

//---------------------BALL--------------------------------------------------------------//
		
	//-----------Losing Condition------------------//
	/*
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
	*/
	//----------------------------------------------//


     //Paddle Canvas Collision----------------------------------------------//
	 if(player1.x < 0 + player1.width/2)//left collison
	 {
		player1.x = 0 + player1.width/2
		player1.vx=0;

	 }

	 if(player1.x > canvas.width - player1.width/2)//right collision
	 {
		player1.x = canvas.width - player1.width/2
		player1.vx=0;

	 }
	//-------------------------------------------------------------------//


	//--------------Bounce of Right----------------------
	if(ball.x > canvas.width - ball.width/2 ) //right side
	{
		ball.x = canvas.width - ball.width/2
		ball.vx = -ball.vx;//reverses the direction
		
		//ball.color="red";//changes color cause of var ball
		
		
	}
	

	//-------------Bounce of Left-----------------------
	 if (ball.x < 0 + ball.width/2 )//left side
	{
		//ball.color="black";
		ball.x = 0 + ball.width/2
		ball.vx = -ball.vx;
		
	
		
	}
	
	
	if (ball.y > canvas.height - ball.height/2)//Bottom bounce
	{
		ball.y = canvas.height - ball.height/2;
		ball.vy = -ball.vy * .67
		//ball.color="yellow";
		p1Wins=0;
	
	}


	 if (ball.y < 0 + ball.height/2)//top bounce
	{
		ball.y = 0 + ball.height/2;
		ball.vy = ball.vy * .67;
		//ball.color="cyan";
		

	}
	//---------------------------------------------------------//
	
	
	//---Draws-----------------------//
	player1.drawRect();
	ball.drawCircle();
	context.save();//line
	context.strokeStyle = "black";
	context.beginPath();
	context.moveTo(player1.x,player1.y)
	context.lineTo(ball.x,ball.y)
	context.lineWidth = 2;
	context.stroke();
	context.restore();
	///------------------------------//

}//ball.x=player1.x + player1.width/2 + ball.width/2 prevents the ball from sinking into a collision.

