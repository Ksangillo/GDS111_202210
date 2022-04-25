var w = false;
var a = false;
var s = false;
var d = false;
var dd = false;
var aa = false;
var dashd;
var dasha;

document.addEventListener("keydown", press );
document.addEventListener("keyup", release );

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

	if(e.keyCode == 68 )
	{
		d = true;
	}


}

function release(e)
{
	//---This logs key codes into the browser's console.
	//console.log(e.keyCode);
	
	if(e.keyCode == 87)
	{
		w = false;
	}
	if(e.keyCode == 65)
	{
		a = false;
		aa=true;
		clearTimeout(dasha);//delete any remaing time
		dasha= setTimeout(function(){aa=false;}, 300);//set time after key release
	}
	if(e.keyCode == 83)
	{
		s = false;
	}
	if(e.keyCode == 68)
	{
		d = false;
		dd = true;
		clearTimeout(dashd);//delete any remaing time
		dashd= setTimeout(function(){dd=false;}, 300);//set time after key release
	}
	

	
}
