
var canvas = document.getElementById("canvas");

var context = canvas.getContext("2d");

var interval = 1000/60;
var timer = setInterval(animate, interval);

var player = new GameObject({width:50, height:50, angle:0, x:canvas.width/2, y:canvas.height-100, force:1, color:"gray"})
var jCount = 0;
var escCount= 0;
var movers =
[
	new GameObject({x:-50, y:200, width:50, height:50, color:"blue", vx:5}),
	new GameObject({x:-150, y:200, width:50, height:50, color:"orange", vx:5})
]




//This is used to move the level elements
var level = new Level();
//This generates a tile based level.
level.generate(level.l1,50,50);		

var fx = .85;
var fy = .97;
var gravity = 1;
var shield = new GameObject({width:50, height:50, angle:0, x:canvas.width/2, y:canvas.height-100, force:1, color:"gray"})
var shield1 = new GameObject({width:50, height:50, angle:0, x:canvas.width/2, y:canvas.height-100, force:1, color:"gray"})
var shield2 = new GameObject({width:50, height:50, angle:0, x:canvas.width/2, y:canvas.height-100, force:1, color:"gray"})

//Used to move the player and level back so that it appears as though the level moved and not the player.
var offset = {x:player.vx, y:player.vy};

var states =[];
var currentState = "menu";
var angle = 5;


function changeStates(stateName)
{
	currentState = stateName;
}

states["menu"]=function()
{
	
	for(var i = 0; i < movers.length; i++)
	{
		if(movers[1].x > canvas.width + 50 )
		{
			movers[0].vx = -5;
			movers[0].y = canvas.height - 200;
			movers[1].vx = -5;
			movers[1].y = canvas.height - 200;
			
		}
		movers[i].x += movers[i].vx;
		movers[i].drawRect();
	

		
	}

	context.save();
	context.fillstyle = "black"
	context.font = "bold 40px Arial"
	context.textAlign = "center";
	context.fillStyle = "green";
	context.fillText("HighJumper",canvas.width/2, 50)

	context.fillStyle = "red";
	context.font = "bold 25px Arial"
	context.textAlign = "center";
	context.fillText("(Developer:Kyle Sangillo)",canvas.width/2, 110)
	
	context.fillStyle = "orange";
	context.fillRect(canvas.width/2-150, canvas.height/2-50, canvas.width/2-200, 50)

	
	context.fillStyle = "red";
	context.font = "bold 20px Arial"
	context.textAlign = "center";
	context.fillText("Press Enter to start game",canvas.width/2, canvas.height/2-20)
	context.restore();

	

	
if(enter)
{
	changeStates("game");
}


}


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


	if(v)//shield
	{
		shield.x = player.x/2-60;
		shield.width = player.width/2;
		shield.height = player.height;
		angle-=9;
		var radians = angle * Math.PI/180;

		shield.x = player.x + Math.cos(radians) * 180/3;
		shield.y = player.y + Math.sin(radians) * 180/3;



		shield1.x = player.x/2-60;
		shield1.width = player.width/2;
		shield1.height = player.height;
		
		shield1.x = player.x + Math.cos(radians) * -180/3;
		shield1.y = player.y + Math.sin(radians) * -180/3;


		shield.drawRect();
		shield1.drawRect();
			
	}	
	
	
	
		
	player.vx *= fx;
	player.vy *= fy;
	
	player.vy += gravity;
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);
	
	
	//--------------------------------------------------------Collision code for tiles---------------------------------//
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
		//---------follows player--------------------------------------------------//
		var dx = player.x - level.turret[i].x - level.turret[i].world.x;
		var dy = player.y - level.turret[i].y - level.turret[i].world.y;
		var dist = Math.sqrt(dx * dx + dy * dy);
			
		var radians = Math.atan2(dy, dx);
		level.turret[i].angle = radians;
	
		 level.turret[i].vx = Math.cos(level.turret[i].angle * Math.PI) * 3;
		 level.turret[i].vy = Math.sin(level.turret[i].angle * Math.PI) * 3;
		//------------------------------------------------------------------------//
		
			level.turret[i].move();
		
		
		//Hit top
		while(level.turret[i].hitTestPoint(player.top()))// collsion with the turret and player
		{
			
			level.turret[i].y++;
			
		}
		//Hit right
		while(level.turret[i].hitTestPoint(player.right()))
		{
			
			level.turret[i].x++;
			
		}
		//Hit left
		while(level.turret[i].hitTestPoint(player.left()))
		{
			
			level.turret[i].x--;
			
		}
		//Hit bottom
		while(level.turret[i].hitTestPoint(player.bottom())  )
		{
			level.turret[i].y--;
			
		}

		if(v)
		{
		//Hit top
		while(level.turret[i].hitTestPoint(shield.top()))//shield collision with turret
		{
			
			level.turret[i].y--;
			
		}
		//Hit right
		while(level.turret[i].hitTestPoint(shield.right()))
		{
			level.turret[i].vx--;
			level.turret[i].x++;
			
		}
		//Hit left
		while(level.turret[i].hitTestPoint(shield.left()))
		{
			
			level.turret[i].x--;
			
		}
		//Hit bottom
		while(level.turret[i].hitTestPoint(shield.bottom()))
		{
			
			
			level.turret[i].x--;
			
		}

		//Hit top
		while(level.turret[i].hitTestPoint(shield1.top()))//shield1 collision with turret
		{
				
			level.turret[i].y--;
				
		}
		//Hit right
		while(level.turret[i].hitTestPoint(shield1.right()))
		{
			level.turret[i].vx--;
			level.turret[i].x++;	
		}
			//Hit left
		while(level.turret[i].hitTestPoint(shield1.left()))
		{
			level.turret[i].x--;	
		}
		//Hit bottom
		while(level.turret[i].hitTestPoint(shield1.bottom()))
		{
			level.turret[i].x--;
		}

		}

		level.turret[i].drawRect();
		
	}


	for(var i = 0; i < level.grid.length; i++)//player collsion with grid
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


	if(esc)
	{
		escCount++;
		context.save();
		context.fillStyle = "tan";
		context.font = "bold 15px Arial"
		context.textAlign = "center";
		context.fillRect(canvas.width/2 -170, canvas.height/2 -200, 450, 300);
		context.fillStyle = "black";
		context.fillText("INSTRUCTIONS:", canvas.width/2+20 , canvas.height/2-180)
		context.fillStyle = "black";
		context.fillText("* Press W to Jump or Twice to Double Jump.", canvas.width/2 , canvas.height/2-150)
		context.fillText("* Press A or D to move Left or Right.", canvas.width/2-29, canvas.height/2 -120)
		context.fillText("* Press A or D Twice to Dash.", canvas.width/2-54, canvas.height/2 -90)
		context.fillText("* Press C to swap colors to pass through objects.", canvas.width/2+19, canvas.height/2-60)
		context.fillText("* Green means you can pass through/Red means solid.", canvas.width/2+38, canvas.height/2-30)
		context.fillText("* Hold V for shield to push enemies away.", canvas.width/2-10, canvas.height/2-5)
		context.restore();
	
	}
	
	

	context.save();
	context.fillStyle ="black";
	context.font = "bold 25px Arial"
	context.textAlign = "left";
	context.fillText("Hold Esc for Instructions.", canvas.width/2-450, canvas.height/2-350)
	context.restore();



}




//--------------------------------------------Animation Loop-------------------------------------------
function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	states[currentState]();
}


