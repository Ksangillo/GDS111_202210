
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
player1.y = canvas.height - 25;
player1.width = 50;
player1.height= 50;
player1.color = ("#ffff00");
player1.force = 2;

var total = 12;
var pt = [];
var colors= ["white", "#88ff88"]


for(var i=0; i < total; i++)
	{
		pt[i] = new GameObject({width:10, height:10});
		pt[i].x = Math.random() * canvas.width;

		var randomColor = Math.round(Math.random());
		pt[i].color = colors[randomColor]

		pt[i].x = Math.random() * canvas.width;
		pt[i].y = Math.random() * canvas.height;
		pt[i].vy = Math.random() * 10 + 5;
	}
//------------------------------------------------------------------------------//


timer = setInterval(animate, interval);
function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	

	
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
		player1.vx=0;

	 }

	 if(player1.x > canvas.width - player1.width/2)//right collision
	 {
		player1.x = canvas.width - player1.width/2
		player1.vx = 0;

	 }
	//-------------------------------------------------------------------//

	//---Draws-----------------------//
	
	player1.drawRect();
	for(var p = 0; p < pt.length; p++)
	{	
		pt[p].x += pt[p].vx;
		pt[p].y += pt[p].vy;

		pt[p].color = colors[randomColor]
		pt[p].x = Math.random() * canvas.width;
		pt[p].y = Math.random() * canvas.height;
		pt[p].vy = Math.random() * 10 + 5;
		pt[p].drawRect();
	}
	
	///------------------------------//

	

}
