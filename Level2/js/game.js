var canvas;
var context;
var interval = 1000/60;
var player1; 


canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");

player1 = new GameObject();
player1.x= 70;
player1.width = 50;
player1.height= 160;
ball = new GameObject();

timer = setInterval(animate, interval);

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
   
	if(w)//if (d=true), (!d) means  d=false
	{
		console.log("Moving Up");
		player1.y += 2;
	}
	if(s)
	{
		console.log("Moving Down");
		player1.y += -2;
	}
	
	
	


	player1.drawRect();
    
	
}

