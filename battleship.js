var squares = document.querySelectorAll(".square");
var pickedSquare = randomSquare();
var livesDisplay = document.getElementById("lives");
var message = document.getElementById("message");
var messageDisplay = document.getElementById("message").textContent;
var resetButton = document.getElementById("reset");
var closeButton = document.getElementById("close");
var infoButton = document.getElementById("info");
var infoBox = document.getElementById("infoBox");

var lives = 3;

var gameOver = false;

// picking one random square as a target
function randomSquare() {
	var random = Math.floor(Math.random() * squares.length);
	return squares[random];
}

// info button logic 
infoButton.addEventListener("click", function() {
	infoBox.classList.add("visible");
})

// close info dialog box button logic
closeButton.addEventListener("click", function() {
	infoBox.classList.remove("visible");
})

// reset button logic
resetButton.addEventListener("click", function() {
	gameOver = false;
	pickedSquare = randomSquare();
	lives = 3;
	livesDisplay.textContent = lives;
	message.textContent = messageDisplay;
	message.classList.remove("hit", "miss");
	squares.forEach(function(colors) {
		colors.style.background = ("gray");
	})
})



// loop through squares to add click event
for (var i=0; i < squares.length; i++) {
	squares[i].addEventListener("click", function() {
		//check if game is not over yet and 
		if(gameOver != true) {
			if(this === pickedSquare) {
				message.classList.remove("miss");
				message.classList.add("hit");
				message.textContent = "hit!";
				this.style.background = "#5cb85c";
				gameOver = true;
			} else {
				lives--;
				message.classList.add("miss");
				message.textContent = "miss...";
				this.style.background = ("#d1d1d1");
					//end game when lives parameter reches 0
					if (lives === 0) {
						gameOver = true;
					}
			} 
		livesDisplay.textContent = lives;
		}
	});
}

