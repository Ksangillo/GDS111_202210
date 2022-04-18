
var canvas;
var context;
var interval = 1000/60;
var player1; 
var p1Wins = 0;


canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
//---------------Set Friction and Gravity-----------------
var frictionX = .85;	
var frictionY = .97;
var gravity = 1;
//--------------------------------------------------------


//--------Instinuated Objects-----------------------------------------------------//
player1 = new GameObject(context, canvas);
player1.x= canvas.width/2;
player1.y=550;
player1.width = 250;
player1.height= 40;
player1.color=("#00ffff");
player1.force=2;



ball = new GameObject(context, canvas);
ball.x = canvas.width/2;
ball.y = canvas.height/2;
ball.force=1;
ball.width= 50;
ball.vx = 5;
ball.vy =0;


//------------------------------------------------------------------------------//


	
timer = setInterval(animate, interval);
function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//------Calls Controls for game------------------//
	if(d)//if (d=true), (!s) means  d=false
	{
		
		player1.x += 6;
		player1.vx += player1.ax * player1.force;
		
	}
	if(a)
	{
		
		player1.x += -6;
		player1.vx += player1.ax * -player1.force;
	}
	
	player1.vx *= frictionX;
	
	player1.x += player1.vx;

	//----------------------------------------------//


	//-------Ball Collision with Paddle------------------------------------------------//
	if(ball.hitTestObject(player1))//ball hit middle
	{
		
		ball.y=player1.y/2 - ball.height/2
		ball.vy = -35;
		player1.color="purple";
		p1Wins++;
	}
	
	if(ball.hitTestObject(player1))//ball  hits top
	{
		
		if(ball.y < player1.x - player1.height/6) //one sixth of the paddle's height)
		{
		ball.y=player1.y-player1.height/2 - ball.height/6
		ball.vx=ball.force;
		ball.vy = -35;
		player1.color="green";
		p1Wins++;
		}
			
	
		
	}

	if(ball.hitTestObject(player1))//ball hits bottom
	{
		
		if(ball.x > player1.width ) 
		{
		ball.y=player1.y+player1.height/2 - ball.height
		ball.vx=-ball.force;
		ball.vy = -35;
		player1.color="orange";
		p1Wins++;
		}
	}

	
	
	//-------------------------------------------------------------------------------------//

	//----------Displays score-------------------------------------------//
	context.save()
    context.font = "16px arial black"
    context.fillStyle = ("#555555")
    context.fillText("score:"+p1Wins.toString(),80, 25)
    context.restore();
	////----------------------------------------------------------------//

//---------------------BALL--------------------------------------------------------------//
		ball.move();
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

	 }

	 if(player1.x > canvas.width - player1.width/2)//right collision
	 {
		player1.x = canvas.width - player1.width/2

	 }


	//-------------------------------------------------------------------//


	//--------------Bounce of Right----------------------
	
	if(ball.x > canvas.width - ball.width/2 ) //right side
	{
		ball.x = canvas.width - ball.width/2
		ball.vx = -ball.vx;//reverses the direction
		ball.vy = -ball.vy * .67
		ball.color="red";//changes color cause of var ball
		
		
	}
	
	//-------------Bounce of Left-----------------------
	 if (ball.x < 0 + ball.width/2 )//left side
	{
		ball.color="black";
		ball.x = 0 + ball.width/2
		ball.vx = -ball.vx;
		ball.vy = -ball.vy * .67
	
		
	}
	
	
	if (ball.y > canvas.height - ball.height/2)//Bottom bounce
	{
		ball.y = canvas.height/2 - ball.height/2;
		ball.vy = -ball.vy * .67;
		ball.color="yellow";
		p1Wins=0;
	
	}
	 if (ball.y < 0 + ball.height/2)//top bounce
	{
		ball.y = 0 + ball.height/2;
		ball.vy = ball.vy * .67;
		ball.color="cyan";
		//ball.vy = -ball.vy;
		
		
	}
	//---------------------------------------------------------//
	
	ball.vy *= frictionY;
	//ball.vx *= frictionX;
	
	ball.vy += gravity;
	
	//ball.x += ball.vx;
	ball.y += ball.vy;
	
	
	player1.drawRect();
	ball.drawCircle();
	
	
	//----Draws Line-----------------//
	context.save();
	context.strokeStyle = "black";
	context.beginPath();
	context.moveTo(player1.x,player1.y)
	context.lineTo(ball.x,ball.y)
	context.lineWidth = 2;
	context.stroke();
	context.restore();
	///------------------------------//

}//ball.x=player1.x + player1.width/2 + ball.width/2 prevents the ball from sinking into a collision.

