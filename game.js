var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;
var lastPressed = false;

function keyup(event) {
	var player = document.getElementById('player');
	if (event.keyCode == 37) {
		leftPressed = false;
		lastPressed = 'left';
	}
	if (event.keyCode == 39) {
		rightPressed = false;
		lastPressed = 'right';
	}
	if (event.keyCode == 38) {
		upPressed = false;
		lastPressed = 'up';
	}
	if (event.keyCode == 40) {
		downPressed = false;
		lastPressed = 'down';
	}

	player.className = 'character stand ' + lastPressed;
}


function move() {
	var player = document.getElementById('player');
	var positionLeft = player.offsetLeft;
	var positionTop = player.offsetTop;
	if (downPressed) {
		var newTop = positionTop+1;

		var element = document.elementFromPoint(player.offsetLeft, newTop+32);
		if (element.classList.contains('sky') == false) {
			player.style.top = newTop + 'px';	
		}

		if (leftPressed == false) {
			if (rightPressed == false) {
				player.className = 'character walk down';
			}
		}
	}
	if (upPressed) {
		var newTop = positionTop-1;

		var element = document.elementFromPoint(player.offsetLeft, newTop);
		if (element.classList.contains('sky') == false) {
			player.style.top = newTop + 'px';	
		}
		
		if (leftPressed == false) {
			if (rightPressed == false) {
				player.className = 'character walk up';
			}
		}
	}
	if (leftPressed) {
		var newLeft = positionLeft-1;

		var element = document.elementFromPoint(newLeft, player.offsetTop);
		if (element.classList.contains('sky') == false) {
			player.style.left = newLeft + 'px';	
		}


		player.className = 'character walk left';
	}
	if (rightPressed) {
		var newLeft = positionLeft+1;
		
		var element = document.elementFromPoint(newLeft+32, player.offsetTop);
		if (element.classList.contains('sky') == false) {
			player.style.left = newLeft + 'px';		
		}

		player.className = 'character walk right';
	}

}


function keydown(event) {
	if (event.keyCode == 37) {
		leftPressed = true;
	}
	if (event.keyCode == 39) {
		rightPressed = true;
	}
	if (event.keyCode == 38) {
		upPressed = true;
	}
	if (event.keyCode == 40) {
		downPressed = true;
	}
}


function myLoadFunction() {
	timeout = setInterval(move, 10);
	document.addEventListener('keydown', keydown);
	document.addEventListener('keyup', keyup);
}


document.addEventListener('DOMContentLoaded', myLoadFunction);

function startbuttonhideonclick(){
		this.style.visibility= 'hidden';
		timeout = setInterval(move, 10);
	document.addEventListener('keydown', keydown);
	document.addEventListener('keyup', keyup);
	hideload()
	spaceshiptop()
}
/*function is made to hide the satrt button and the stop  the player to move until the start button is click*/ 

function hideload() {
	var start =document.getElementsByClassName('start');
	start[0].addEventListener('click', startbuttonhideonclick);
	const getRandomleft = (min, max) => Math.floor(Math.random()*1200);


	
}
/*function myLoadFunction is made to call the Function Startbuttonhideonclick*/

document.addEventListener('DOMContentLoaded', hideload);


function spaceshiptop(){

const getRandomleft = (min, max) => Math.floor(Math.random()*1200);

setInterval(() => {
   document.getElementById('alien').style.left= getRandomleft(0 , 900-500) +'px'; 
   document.getElementById('alien').style.top='10.5px';

}, 1200); /*move in every 1.2 seconds*/
}
/*functionspaceshiptop is made to move the space ship to the top of the screen*/  
document.addEventListener('DOMContentLoaded', hideload);

function stars(){
var sun = document. getElementsByClassName ('bomb');
var base = 0;
var cd = setInterval (earth, 2);

function earth(){
  if (base===70) {base=0}
    else{
     base++;
    sun[0].style. top = base +'3%';
}
}
}
function myLoadevent8(){
	var start =document.getElementsByClassName('start')[0];
	start.addEventListener('click',stars);;
	explodesan();
	

}

document.addEventListener('DOMContentLoaded',myLoadevent8);

var getRandomtop =(min, max) => Math.floor(Math.random()*200);

function explodesan(){
	var bombexpo = document.getElementsByClassName('explosion')[0];
	setInterval(() => {
		bombexpo.style.left = document.getElementById('alien').style.top;
		bombexpo.style.top =getRandomtop(0,500-100) +'px';
		bombexpo.style.marginTop ='500px';
	},2000);
}