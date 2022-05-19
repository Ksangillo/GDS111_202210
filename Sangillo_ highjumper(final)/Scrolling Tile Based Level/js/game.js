
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var interval = 1000/60;
var timer = setInterval(animate, interval);

var player = new GameObject({width:50, height:50, angle:0, x:canvas.width/2, y:canvas.height-100, force:1, color:"gray"})
var jCount = 0;

//This is used to move the level elements
var level = new Level();
//This generates a tile based level.
level.generate(level.l1,50,50);		

var fx = .85;
var fy = .97;
var gravity = 1;
var shield = new GameObject({width:50, height:50, angle:0, x:canvas.width/2, y:canvas.height-100, force:1, color:"gray"})

//Used to move the player and level back so that it appears as though the level moved and not the player.
var offset = {x:player.vx, y:player.vy};

var states =[];
var currentState = "game";
var angle = 5;


//When moving the level, we first move the player as usual. Then we utilize an offset object to keep track of how much the collision detection affects the player's position. Then we move both the player and the level back the total number of pixels that the player moved over one loop of animation.

states["game"] = function()
{
	if(w && player.canJump && player.vy >= 0)// animates movement
	{

		player.canJump = false;
		player.vy = player.jumpHeight;	
	}
	if(w && ww && !player.canJump && jCount == 0 )
	{

		ww = false;
		player.vy = player.jumpHeight;
		jCount++;//jump count	
	}
	
	if(a)
	{
		
		player.vx += -player.ax * player.force;

		if(aa)
		{
			aa = false;
			player.vx += -25;
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
			player.vx += 25;
		}

		if(space)// teleport right 
		{
			space = false;
			player.x = player.x + canvas.width/2;
		}
	}


	if(v)
	{
		shield.x = player.x/2 - 60;
		shield.width = player.width/2;
		shield.height = player.height;
		angle-=3;
		var radians = angle * Math.PI/180;
	
		shield.x = player.x + Math.cos(radians) * 150/2;
		shield.y = player.y + Math.sin(radians) * 150/2;

		shield.drawRect();
	}	
	
		
	player.vx *= fx;
	player.vy *= fy;
	
	player.vy += gravity;
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);

	
	//--------------------------------------------------------Collision code for tiles---------------------------------//
	for(var i = 0; i < level.grid.length; i++)
	{
		
		level.grid[i].drawRect();
		//Hit top
		while(level.grid[i].hitTestPoint(player.top()) && player.vy <= 0 )
		{
			player.vy = 0;
			player.y++;
			offset.y++;
		}
		//Hit right
		while(level.grid[i].hitTestPoint(player.right()) && player.vx >= 0)
		{
			player.vx = 0;
			player.x--;
			offset.x--;
		}
		//Hit left
		while(level.grid[i].hitTestPoint(player.left()) && player.vx <= 0)
		{
			player.vx = 0;
			player.x++;
			offset.x++;
		}
		//Hit bottom
		while(level.grid[i].hitTestPoint(player.bottom()) && player.vy >= 0)
		{
			player.y--;
			player.vy = 0;
			player.canJump = true;
			jCount = 0;
			offset.y--;
		}
		
	}
	

	for(var i = 0; i < level.obsticle.length; i++)
	{
		level.obsticle[i].drawRect();
		//Hit top
		while(level.obsticle[i].hitTestPoint(player.top()) && player.vy <= 0 && level.obsticle[i].color == "#FF0000" )
		{
			player.vy = 0;
			player.y++;
			offset.y++;
		}
		//Hit right
		while(level.obsticle[i].hitTestPoint(player.right()) && player.vx >= 0 && level.obsticle[i].color == "#FF0000")
		{
			player.vx = 0;
			player.x--;
			offset.x--;
		}
		//Hit left
		while(level.obsticle[i].hitTestPoint(player.left()) && player.vx <= 0 && level.obsticle[i].color == "#FF0000")
		{
			player.vx = 0;
			player.x++;
			offset.x++;
		}
		//Hit bottom
		while(level.obsticle[i].hitTestPoint(player.bottom()) && player.vy >= 0 && level.obsticle[i].color == "#FF0000")
		{
			player.y--;
			player.vy = 0;
			player.canJump = true;
			jCount = 0;
			offset.y--;
		}
		
	}


	for(var i = 0; i < level.turret.length; i++)
	{
		
		
		//Hit top
		while(level.turret[i].hitTestPoint(player.top())  )
		{
			player.vy = 0;
			player.y++;
			offset.y++;
		}
		//Hit right
		while(level.turret[i].hitTestPoint(player.right())  )
		{
			player.vx = 0;
			player.x--;
			offset.x--;
		}
		//Hit left
		while(level.turret[i].hitTestPoint(player.left())  )
		{
			player.vx = 0;
			player.x++;
			offset.x++;
		}
		//Hit bottom
		while(level.turret[i].hitTestPoint(player.bottom())  )
		{
			player.y--;
			player.vy = 0;
			offset.y--;
		}


		//Hit top
		while(level.turret[i].hitTestPoint(shield.top()))
		{
			level.turret[i].vy = 0;
			level.turret[i].y--;
			
		}
		//Hit right
		while(level.turret[i].hitTestPoint(shield.right()))
		{
			level.turret[i].vx --;
			level.turret[i].x++;
			
		}
		//Hit left
		while(level.turret[i].hitTestPoint(shield.left()))
		{
			level.turret[i].vx = 0;
			level.turret[i].x--;
			
		}
		//Hit bottom
		while(level.turret[i].hitTestPoint(shield.bottom()))
		{
			
			level.turret[i].vx = 0;
			level.turret[i].x--;
			
		}

		//---------follows player--------------------------------------------------//
		/*var dx = player.x - level.turret[i].x;
		var dy = player.y - level.turret[i].y;
		var dist = Math.sqrt(dx * dx + dy * dy);
		
		var radians = Math.atan2(dy, dx);
		level.turret[i].angle = radians * 180/Math.PI;

		 level.turret[i].x = level.turret[i].x;
		 level.turret[i].y = level.turret[i].y;
		level.turret[i].vx = Math.cos(level.turret[i].angle * Math.PI) * 5 ;
		level.turret[i].vy = Math.sin(level.turret[i].angle * Math.PI) * 5;*/

		//------------------------------------------------------------------------//
	
		
		level.turret[i].drawRect();
	
	}
	//----------------------------------------------------------------------------------------------------------------------//
	

	
	
	
		
	//Moves the level and the player back the total number of pixels traveled over one animation loop.
	var dx = canvas.width/2-player.x;
	var dy = canvas.height/2-player.y;
	level.x += dx *.05;//when player dashes
	level.y += dy *.05;//when player jumps
	player.x +=dx *.05;//when player dashes
	player.y +=dy *.05;//when player jumps

	
	
	//Draws the player
	player.drawRect();
	
	//player.drawDebug();

}


//--------------------------------------------Animation Loop-------------------------------------------
function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	states[currentState]();
}


