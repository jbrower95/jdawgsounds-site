var tap_button = document.getElementById("tap_button");
var northofhome_button = document.getElementById("northofhome_button");
var contribution_button = document.getElementById("contribution_button");
var spenserlee_button = document.getElementById("spenserlee_button");

var tap = document.getElementById("tap");
var northofhome = document.getElementById("northofhome");
var contribution = document.getElementById("contribution");
var spenser = document.getElementById("spenser");

tap.style.display="none";
northofhome.style.display="none";
contribution.style.display="none";
spenser.style.display="none";
//set the click handlers for the buttons
tap_button.onclick = function(){
		contribution.style.display = "none";
 		northofhome.style.display = "none";
		spenser.style.display="none";
		//whitehorizon.style.display = "none";
		tap.style.display = "block";
	}

northofhome_button.onclick = function(){
		contribution.style.display = "none";
		tap.style.display = "none";
		spenser.style.display="none";
		//whitehorizon.style.display = "none";
		northofhome.style.display = "block";
	}
contribution_button.onclick = function(){
		northofhome.style.display = "none";
		spenser.style.display="none";
		tap.style.display = "none";
		//whitehorizon.style.display = "none";
		contribution.style.display = "block";
	}
spenserlee_button.onclick = function(){
		northofhome.style.display = "none";
		contribution.style.display="none";
		tap.style.display = "none";
		//whitehorizon.style.display = "none";
		spenser.style.display = "block";
	}
document.onload = function(){
			document.getElementById('contribution_button').click();
			contribution.click();
}


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