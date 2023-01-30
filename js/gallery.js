//2. Script for Cats Photos
var photos = []; //Declare an empty array to store image element
var fileNames = []; //To store image file names
var imageList = []; //To store html list that contain an image
var image; //To store the assemble image list codes
var buttons = []; //To store the list of description button
var openDiv = "<div class='column'>";
var closeDiv = "</div>"
var openList = "<li class='photo'>"; //Declare a variable to contain open list tag
var closeList = "</li>"; //Declare a variable to contain close list tag
var opencaption = "<div class='caption'>";
var closecaption = "</div>";   
var openDesc = "<div id='description'>";  
var closeDesc = "</div>";


//Create a loop to create 12 images starting with index of 0
for (var i=0; i<12; i++) {
    fileNames.push ("cat" + (i+1)); //Create image file name and store in the array
    photos.push("<img src='images/" + fileNames[i] + ".jpg'>"); //Assembl file name into image element

    image = openDiv + openList + photos[i] + closeList + opencaption + 
    fileNames[i] + closecaption + openDesc + "<p id = 'myBtn' onclick='displayInfoBox()'>This is " + fileNames[i] + "</p>" + 
    closeDesc + closeDiv; //Assemble image element from array with list elements and store in a variable
    
    imageList.push(image); //Store(push) the assembled list codes into an array
}

//Display all six image codes stored in the array
document.getElementById("album").innerHTML = imageList.join(" ");