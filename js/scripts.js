//3. Script for Info Box (id="infoBox")
var openSpan = "<div id='boxinbox'>";
var closeSpan = "</div>"
var openHead = "<h2 id='infoHead'>";
var closeHead = "</h2>";
var openPara = "<p id='infoPara'>";
var closePara = "</p><br></br><br></br>";
var openLink = "<a id='infoLink' onclick = 'closeInfoBox()'> Click This to Close";
var closeLink = "</a>";
var headNames = []; //To store caption/head names
var paraContent = []; //To store paragraph <p> contents
var box;
var boxList = []; //To store final content inside box
var x = document.getElementById("infoLink");

//3.1. Create a loop to create 12 Caption & Paragraph, then store in "boxList"
for (var i=0; i<12; i++) {
    headNames.push ("cat" + (i+1));
    paraContent.push ("This is " + headNames[i] + ". He is a male cat at age " + (i+1) + ".")
    box = openSpan + openHead + headNames[i] + closeHead + openPara + paraContent[i] 
    + closePara + openLink + closeLink + closeSpan; 
    boxList.push(box);
}
//Display Caption & Paragraph in "infoBox"
document.getElementById("infoBox").innerHTML = boxList.join(" ")




//3.2. Make <p id='myBtn'> a button to display infoBox
function displayInfoBox() {
    document.getElementById("boxinbox").style.display = "inline";
}

// document.getElementById("boxinbox").onclick = function displayInfoBox() {};
// function displayInfoBox() {
//     for (var i = 0; i < 12; i++) {
//       getElementById("boxinbox").innerHTML = boxList[i];
//       getElementById("boxinbox").style.display = "inline";
//     }
// }

//3.3. Make <a id='infoLink'> a button to close infoBox
function closeInfoBox() {
    document.getElementById("boxinbox").style.display = "none";
}


