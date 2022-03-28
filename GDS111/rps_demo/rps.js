//RPS Part1 JS -- WD61 class//

//create an Array that will store the images being used
//Array: it's just like a variable (so it's a data storage device) But it can contain more than one value

var pics = new Array()//creates an empty array

//assign value to array -- "population"
//[#] denotes index --> it's like a house number and array is the street name; array name + index gives access to the indiv value
  pics[0] = "images/rock.jpg"
  pics[1] = "images/paper.jpg"
  pics[2] = "images/scissors.jpg"

var pics2= new Array()

  pics2[0] = "images/rock2.jpg"
  pics2[1] = "images/paper2.jpg"
  pics2[2] = "images/scissors2.jpg"


  //create arreay holding the button elements
  //document.querySelectorAll grabs all of one element type
  var btn= document.querySelectorAll("button")//stores data in the console
  console.log(btn)//used for testing,  



  //make the buttons clickable and runable ALSO for the game
  //add event listeners to each button
 btn[0].addEventListener("click", function (e) {play (0) })
 btn[1].addEventListener("click", function (e) {play (1) })
 btn[2].addEventListener("click", function (e) {play (2) })


//arrays that store the player & computer options (one array for each)
//Player ID-pID//
var pId = new Array("rock_p","paper_p", "scissors_p") 
//pID[1} = "paper_p"
// Computer ID= cID
var cId = new Array ("rock_c","paper_c", "scissors_c") 

//create a function that will swap the regular images with the highlighted ones (series 2 pics)
function swap(id, image){

    //access the image elements by ID from the HTML document
    document.getElementById(id).src = image

}

//play function
function play(id){

    //seting up the stored image paths (src) in JS to match the HTML ones
    //swap() CALLS the function --> this gets its code to run!
    //values supplied inside of () are passed into the parameter variables
    swap(pId[0], pics[0])
    swap(pId[1], pics[1])
    swap(pId[2], pics[2])

    swap(cId[0], pics[0])
    swap(cId[1], pics[1])
    swap(cId[2], pics[2])

    //store the game choices to variables (player & computer)
    var p_choice = id

    //ramdomize the computer's choices 2.9 helps!
    var c_choice = Math.floor(Math.random() * 2.999999)
    alert(rps[pChoice] + " " + rps[cChoice]) 
    

    //swap the starting images with the highlighted ones
    swap(pId[p_choice], pics2[p_choice])
    swap(cId[c_choice], pics2[c_choice])

    //SWITCH TIME - switch statements give us the option to determine a set of code to run based on a pedetermined case value

    switch(p_choice){
        //cases need to be built for *every* option p_choice can be!



            //Rock
            case 0://case for when p_choice ==0
                if(c_choice ==0){  //alert the user that there has been a draw
                alert("Bloody hell let's call it a DRAW!")
                showResults("Rock!","Rock!", "Its a Draw!")
                //callshowResults() and pass correct values for:pChoice, cCHoice, results
               


            }
            else if (c_choice == 1) {//comp is paper

                alert("You LOST to the computer!")
                showResults("Rock!","Paper!", "You LOST!")
            }
            else {//comp is scissors

                alert("You WIN with your ROCK!")
                showResults("Rock!","Scissors!", "You Won!")
            }

            //break statements breaks us out of the switch/case
            break
                
            //Paper
            case 1:
                if (c_choice == 1) {//comp is paper


                    //alert the user that there has been a draw
                    alert("Bloody hell let's call it a DRAW!")
                    showResults("Paper!","Paper!", "It's a Draw!")
                }
                else if (c_choice == 2) {//comp is scissors
        
                    alert("You LOST to the computer!")
                    showResults("Paper!","Scissors!", "I Win You Lose")
                }
                else {//comp is rock
        
                    alert("You WIN with your Paper!")
                    showResults("Paper!","Rock!", "You Win!")
                }

                break
            //Scissors
            case 2:
                if (c_choice == 2) {//comp is scissors

                    //alert the user that there has been a draw
                    alert("Bloody hell let's call it a DRAW!")
                    showResults("Scissors","Scissors!", "Its a Draw!")
                }
                else if (c_choice == 0) {//comp is rock
        
                    alert("You LOST to the computer!")
                    showResults("Scissors!","Rock!", "You LOST!")
                }
                else {//comp is paper
        
                    alert("You WIN with your Scissors!")
                    showResults("Scissors!","Paper!", "You Win!")
                }
                 break
                

        }//switch statement




    }//play()

//function that write the results back to the HTML page
function showResults(pChoice, cChoice, results){


    document.getElementById("pChoice").innerHTML = pChoice
    document.getElementById("cChoice").innerHTML = cChoice
    document.getElementById("results").innerHTML = results

}


