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
	
	//This draws the player to the screen
	this.draw = function()
	{
		context.fillStyle = this.color;
		context.beginPath();
		context.arc(this.x,this.y,this.width/2,0,360*Math.PI/180,true)
		context.closePath();
		context.restore();
		context.fill();
		

		
	}	
	
	//This changes the player's position
	this.move = function()
	{
		this.x += this.vx;
		this.y += this.vy;
		
	}
}
