
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var interval = 1000/60;
var timer = setInterval(animate, interval);

var fX = .85;//declare friciton
var fY = .97;
var gravity = 1;//declares gravity


//-----------instinate Objects--------------------------------------//
player = new GameObject({x:150, y:canvas.height - 150});
var jCount = 0;
var colorCount = 0;


platform0 = new GameObject();
platform0.width = canvas.width;
platform0.height = 100;
platform0.x = platform0.width/2;
platform0.y = canvas.height;
platform0.color = "#66ff33";

platform1 = new GameObject();
platform1.width = 300;
platform1.height = 300;
platform1.x = canvas.width/2;
platform1.y = canvas.height/2 + 200;
platform1.color = "#FF0000";
//--------------------------------------------------------------------//



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
	
	//---Animated Controls--------------------------------------------------------//
	if(w && player.canJump && player.vy >= 0)// animates movement
	{

		player.canJump = false;
		player.vy = player.jumpHeight;
		
		
		
	
	
	}
	if(w && ww && !player.canJump && jCount == 0)
	{
		
		ww = false;
		player.vy = player.jumpHeight;
		jCount++;//jump count
		console.log(ww)
	}

	
	
	if(a)
	{
		
		player.vx += -player.ax * player.force;

		if(aa)
		{
			aa = false;
			player.vx += -50;
			
		}
		if(space)//teleport left
		{
			space = false;
			player.x = player.x - canvas.width/2;


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

		if(space)// teleport right 
		{
			space = false;
			player.x = player.x + canvas.width/2;


		}
	

	}


	player.vx *= fX;//friction
	player.vy *= fY;
	
	player.vy += gravity;
	//gravity

	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);/////

	
		
		
		
//-----------------------------------------------------------//
	

while(platform0.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
		jCount = 0;
		console.log(ww)
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

	while(platform1.hitTestPoint(player.bottom()) && player.vy >=0 && platform1.color == "#FF0000")//when the color is red the collision will be applied
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
		jCount = 0;
		console.log(ww)
	}
	while(platform1.hitTestPoint(player.left()) && player.vx <=0 && platform1.color == "#FF0000")
	{
		player.x++;
		player.vx = 0;
	}
	while(platform1.hitTestPoint(player.right()) && player.vx >=0 && platform1.color == "#FF0000")
	{
		player.x--;
		player.vx = 0;
	}
	while(platform1.hitTestPoint(player.top()) && player.vy <=0 && platform1.color == "#FF0000")
	{
		player.y++;
		player.vy = 0;
	}

	

	/*-----------Use for State Machine ---------------------------------
	//states[currentState]();
	-------------------------------------------------------------------*/
player.drawRect()	
platform0.drawRect();
platform1.drawRect();

	
}




