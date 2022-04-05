
var canvas;
var context;
var interval = 1000/60;
var player1; 
var prevY1;
var prevY2;
var prevyX;

canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");

//
player1 = new GameObject();
player1.x= 60;
player1.width = 30;
player1.height= 150;

ball = new GameObject();
ball.width= 50;
ball.vx = 4;
ball.vy = 0;

LTblock = new GameObject(canvas.width , canvas.height, 30, 50);
LTblock.x= 60;
LTblock.y = -30;

LBblock = new GameObject(canvas.width , canvas.height, 30, 50,"#00ff00");
LBblock.x= 60;
LBblock.y = 830;
//


timer = setInterval(animate, interval);

function animate()//
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	if(s)//if (d=true), (!s) means  d=false
	{
		
		player1.y += 4;
	}
	if(w)
	{
		
		player1.y += -4;
	}

	if(LTblock.hitTestObject(player1))//collision Left Top
	{
		player1.y = prev1Y;
		
	}
	else
	{
		prev1Y = player1.y;
	}

	if(LBblock.hitTestObject(player1))//collision Left Bottom
	{
		player1.y = prevY2;
		
	}
	else
	{
		prevY2 = player1.y ;
	}
	if(ball.hitTestObject(player1))
	{
		ball.vx = -ball.vx;
		ball.vx= 1 + ball.vx;
		ball.color="purple";
	}

	



	
	//---------------------BALL-------------------------------//
	ball.move();

	//-----------Losing Condition------------------//
	


	/*
	
	if(ball.x < canvas.width/2-ball,width/2)
	{
		
		ball.x =  canvas.width/2 - ball.width/2;
		ball.vx = -ball.vx;

	}
	if(ball.x < 0  + ball.width/2)
	{
		ball.x =  canvas.width/2 - ball.width/2;
		ball.vx = -ball.vx;

	}

	*/

     //ball hits top



	

//----------------------------------------------------//
	//--------------Bounce of Right----------------------
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
	
	if (ball.y > canvas.height - ball.height/2)
	{

		ball.color="yellow";
		ball.vy = -ball.vy;
		
	}
	 if (ball.y < 0 + ball.height/2)
	{
		ball.color="cyan";
		ball.vy = -ball.vy;
		
	}

	
	//---------------------------------------------------
	
	ball.drawCircle();
	player1.drawRect();
	
	
	
}//

