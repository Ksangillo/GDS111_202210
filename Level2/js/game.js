
var canvas;
var context;
var interval = 1000/60;
var player1; 
var prevY1;
var prevY2;

canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");

//
player1 = new GameObject();
player1.x= 60;
player1.width = 30;
player1.height= 160;

ball = new GameObject();

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
		
		player1.y += 2;
	}
	if(w)
	{
		
		player1.y += -2;
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
	
	













	
	


	player1.drawRect();
	LTblock.drawRect();
	LBblock.drawRect();
	
	
}//

