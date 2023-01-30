//3. Script for Info Box (id="infoBox")
var openSpan = "<span id='boxinbox'>";
var closeSpan = "</span>"
var openHead = "<h2 id='infoHead'>";
var closeHead = "</h2>";
var openPara = "<p id='infoPara'>";
var closePara = "</p>";
var openLink = "<li id='infoLink'> Click This to Close";
var closeLink = "</li>";
var headNames = []; //To store caption/head names
var paraContent = []; //To store paragraph <p> contents
var box;
var boxList = []; //To store final content inside box

//3.1. Create a loop to create 12 Caption & Paragraph, then store in "boxList"
for (var i=0; i<12; i++) {
    headNames.push ("cat" + (i+1));
    paraContent.push ("This is " + headNames[i] + ". He is a male cat at age " + (i+1) + ".")
    box = openSpan + openHead + headNames[i] + closeHead + openPara + paraContent[i] + closePara + openLink + closeLink + closeSpan; 
    boxList.push(box);
}
//Display Caption & Paragraph in "infoBox"
document.getElementById("infoBox").innerHTML = boxList.join(" ")




//3.2. Make <div class='description' a button to display infoBox
document.getElementsByClassName("description").onclick = displayInfoBox;

function displayInfoBox() {
    document.getElementById()
}