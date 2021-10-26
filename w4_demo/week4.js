//RIDDLE JAVASSCRIPT FILE

//JS is a scripting language that can change stuff on the HTML page; it is not a markup language so it will follow more fundemental logic related to other computer programming styles

//VARIABLE- variable sort data (info) to be used in the script or program they are freindly names to refer to info as//
//ex think about variable as the contact names in your phome: you don't need to remeber eveyones number just their name;phone get the number through the name

//eachvariable will store he answer to a riddle question//
//js requires vars to be declared as such//

var store1="Time"//question1//
var store2="the POST OFFICE"//question2//
var store3="NOON"//question3//

//***VARIABLE NAMES MUST BE UNIQUE! They are also cASE sENSTIVE ***//
//                                     total != Total != TOTAL



//FUNCTONS - perform tasks; they have a set of processes assigned to them, and when they are CALLED their tasks are performed

//function below will talk to the HML DOM (DOCUMENT OBJECT MODEL) and get specific elements by their id, then push info to their innerHTML (inbetween the open and close of the tag)

function answer1() {

    document.getElementById("question1").innerHTML = store1;
}

function answer2() {

    document.getElementById("question2").innerHTML = store2;
}
function answer3() {

    document.getElementById("question3").innerHTML = store3;
}

