/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject({width:128,height:27}).makeSprite(buttonData)//turns into a sprite for a animated spritesheet for menu


var menuBackground = new GameObject();
menuBackground.img.src = "images/menu.jpg"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			
			gameStates.changeState(`level1`)
		}

		//Hover Effect Graffic
		startButton.color = `yellow`
		startButton.changeState(`hover`)
		
	}
	else
	{
		//Default Button Graphic
		startButton.color = `red`
		startButton.changeState('idle')//changes back to idle
	}
	
	menuBackground.drawStaticImage();
	startButton.play().drawSprite()//.drawsprite calls a sprite
}
	
	
