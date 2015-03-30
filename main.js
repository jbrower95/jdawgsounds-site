//Get references to the text based buttons we're using
var tap_button = document.getElementById("tap_button");
var northofhome_button = document.getElementById("northofhome_button");
var contribution_button = document.getElementById("contribution_button");
var odyssey_button = document.getElementById("odyssey_button");

//Get references to the iframes that we want to show or hide
var tap = document.getElementById("tap");
var northofhome = document.getElementById("northofhome");
var contribution = document.getElementById("contribution");
var odyssey = document.getElementById("odyssey");

//Initially set all of the displays to none to hide the iframes
tap.style.display="none";
northofhome.style.display="none";
contribution.style.display="none";
spenser.style.display="none";

//set the click handlers for the buttons
tap_button.onclick = function(){
		contribution.style.display = "none";
 		northofhome.style.display = "none";
		spenser.style.display="none";
		tap.style.display = "block";
	}

northofhome_button.onclick = function(){
		contribution.style.display = "none";
		tap.style.display = "none";
		spenser.style.display="none";
		northofhome.style.display = "block";
	}
contribution_button.onclick = function(){
		northofhome.style.display = "none";
		spenser.style.display="none";
		tap.style.display = "none";
		contribution.style.display = "block";
	}
odyssey_button.onclick = function(){
		northofhome.style.display = "none";
		contribution.style.display="none";
		tap.style.display = "none";
		odyssey.style.display = "block";
	}

//When the document opens, it should try to click the contribution button.
//TODO: get this working
document.onload = function(){
			document.getElementById('contribution_button').click();
			contribution.click();
}

//A function for scrolling down using JQuery.
function scrollDown() {
		var height = window.innerHeight ||
            		html.clientHeight  ||
             		body.clientHeight  ||
            		screen.availHeight;
  		$('html,body').stop().animate({
    		scrollLeft: '+=' + 0,
    		scrollTop: '+=' + height
  		});
}