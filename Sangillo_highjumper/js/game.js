
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var interval = 1000/60;
var timer = setInterval(animate, interval);

var fX = .85;//declare friciton
var fY = .97;

var gravity = 1;//declares gravity
player = new GameObject({x:150, y:canvas.height - 150});


platform0 = new GameObject();
platform0.width = canvas.width + 100;
platform0.height = 100;
platform0.x = platform0.width/2;
platform0.y = canvas.height;
platform0.color = "#66ff33";





/*------------Use this if you want to implement States---------------//
var currentState = 1;
var states = [];

states[""] = function()
{

}
*///----------------------------------------------------------------------//

//-------------------------AnimationLoop--------------------------------

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);
	
	
	if(w && player.canJump && player.vy == 0)// animates movement
	{
		player.canJump = false;
		player.vy += player.jumpHeight;

		if(ww)
		{
			ww = false;
			player.canJump = true;
			player.vy += player.jumpHeight;
			
		}
	}

	if(a)
	{
		player.vx += -player.ax * player.force;

		if(aa)
		{
			aa = false;
			player.vx += -50;
		}
	}
	if(d)
	{
		player.vx += player.ax * player.force;

		if(dd)
		{
			dd = false;
			player.vx += 50;
		}
	}

	player.vx *= fX;//friction
	player.vy *= fY;
	
	player.vy += gravity;
	//gravity

	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);/////

	
while(platform0.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform0.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	

	/*-----------Use for State Machine ---------------------------------
	//states[currentState]();
	-------------------------------------------------------------------*/
player.drawRect()	
platform0.drawRect();
	
}



