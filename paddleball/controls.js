//Define Booleans for each key
var d = false;
var a = false;
var up = false;
var down = false;
//Add Event Listeners
document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

//Event Functions
function press(e)
{
	//---This logs key codes into the browser's console.
	//console.log("Pressed" + e.keyCode);
	
	if(e.keyCode == 68)
	{
		d = true;
	}
	if(e.keyCode == 65)
	{
		a = true;
	}
	
}

function release(e)//happens when finger is lifted
{
	//---This logs key codes into the browser's console.
	//console.log("Released" + e.keyCode);
	
	if(e.keyCode == 68)
	{
		d = false;
	}
	if(e.keyCode == 65)
	{
		a = false;
	}
	
}
