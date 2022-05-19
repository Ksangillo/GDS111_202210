var w = false;
var a = false;
var s = false;
var d = false;
var c = false;
var v =false;
var aa = false;
var dd = false;
var ww = false;
var cc = false;
var space = false;
var dashd;
var dasha;
var djump;
var tcooldown;
var cCooldown;




document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

function press(e)
{
	//---This logs key codes into the browser's console.
	console.log(e.keyCode);
	
	if(e.keyCode == 87)
	{
		w = true;
	}
	if(e.keyCode == 65)
	{
		a = true;
	}
	if(e.keyCode == 83)
	{
		s = true;
	}
	if(e.keyCode == 68)
	{
		d = true;
	}
	if(e.keyCode == 32)
	{
		space = true;
	}
	if(e.keyCode == 67)
	{
		c = true;
	}
	if(e.keyCode == 86)
	{
		v = true;
		
	}
}

function release(e)
{
	//---This logs key codes into the browser's console.
	//console.log(e.keyCode);
	
	if(e.keyCode == 87)
	{	
		w = false;
		if(jCount == 0)ww = true;//allows it double jump again once you hit the ground
		//clearTimeout(djump);//delete any remaing time
		
	}
	if(e.keyCode == 65)
	{
		a = false;
		clearTimeout(dasha);//delete any remaing time
		aa=true;
		dasha= setTimeout(function(){aa=false;}, 300);//set time after key release
	}
	if(e.keyCode == 83)
	{
		s = false;
	}
	if(e.keyCode == 68)
	{
		d = false;
		clearTimeout(dashd);//delete any remaing time
		dd = true;
		dashd= setTimeout(function(){dd=false;}, 300);//set time after key release
	}
	if(e.keyCode == 32)
	{
		clearTimeout(tcooldown);
		space = false;
		tcooldown = setTimeout(function(){space=false;}, 300)
	}

	if(e.keyCode == 67)//changes the color of obsticles
	{
		clearTimeout(cCooldown);
		c = false;
		cCooldown = setTimeout(function(){c=false;}, 1000)
		for(var i = 0; i < level.obsticle.length; i++)
		{
		if(level.obsticle[i].color == "#FF0000")
		{
			level.obsticle[i].color = "#66ff33";
		}
		
		else
			level.obsticle[i].color = "#FF0000";
		
	}
	}
	if(e.keyCode == 86)
	{

	v = false;
	
	}
		
	
	
}
