// JavaScript Document
function Ball()
{
	
	//player's location
	this.x = canvas.width/2;
	this.y = canvas.height/2;
	
	//player's dimensions
	this.width = 100;
	this.height = 100;
	
	//player's velocity or speed on each axis
	this.vx = 0;
	this.vy = 0;
	
	//player's color
	this.color = "Orange";
	this.force=1;
	
	//This draws the player to the screen
	this.draw = function()
	{
		context.save();
		context.fillStyle = this.color;
		context.beginPath();
		context.translate(this.x,this.y)//translate to new 0,0 coordinates
		context.arc(0,0,this.width/2,0,360*Math.PI/180,true)
		context.closePath();
		context.fill();
		context.restore();//restores original coordinates 0,0

		
	}	
	
	//This changes the player's position
	this.move = function()
	{
		this.x += this.vx;
		this.y += this.vy;
		
	}
}
