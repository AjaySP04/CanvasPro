var canvas = document.querySelector('canvas');
console.log(canvas); // check if canvas is linked to script.

/* 
	canvas should cover whole screen width and height for a page respective to window dimensions
	*/
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/* Global Variabe limits for th balls */
var maxRadius = 50;
var no_of_balls = 700;

var colorArray = [
	'#0F1E32',
	'#013859',
	'#FFFFF8',
	'#EB3E4A',
	'#21BEDA'
];

/* 
	context variable for moving with content on canvas screen. 
*/
var c = canvas.getContext('2d');

/* 
	intractivity into the pinbalss we have created.
 	*/
//creating mouse object.
var mouse = {
	x: undefined,
	y: undefined
}

// add mouse move event listeners. 	
window.addEventListener('mousemove', function (event) {
	// recording cordinates of the mouse from event listener to our  object mouse.
	mouse.x = event.x;
	mouse.y = event.y;

	//console.log(mouse); // to check if the mouse object has all property of the event on browser console.
});

// add event listener for resize of the window.
window.addEventListener('resize', function () {
	 
	//canvas should cover whole screen width and height for a page respective to window dimensions
	
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	init(); // each time browser is resized the balls are created again
});


/* 
	Now for using ball we should write a resusable code.
	We are now creating a class Ball that will create ball each time we need a new ball.
	*/
function Ball( x_pos, y_pos, dx, dy, radius) {

	// instanciate variable for cordinate inside Ball for each unique ball.
	this.x_pos = x_pos;
	this.y_pos = y_pos;

	// velocity variable must be instanciate too.
	this.dx = dx;
	this.dy = dy;

	var start_angle = 0; // start angle as 0 on x axiss.
	var end_angle = Math.PI * 2; // for circle full circumference in radian.
	/* variable to decide arc movement it does not affect the circle.*/
	var counterClockwise = true; // for anti clock wise motion.
	var clockwise = false; // for clockwise motion

	// add radius to the ball.
	this.radius = radius;
	this.minRadius = radius;

	//add color to the ball
	this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

	this.draw = function () {
		/* create ball on the screen */
		c.beginPath();  // this will clear all previous connection to pther objects.

		/* 
			since we need to draw circle for the ball it could be achieved through 
			creating an arc with starting angle as 0 degree to full circumference will work.
			An arc takes arg as arc(x_pos, y_pos, radius, start_angle_rad, end_angle_rad, counterClockwise: bool (false))
		*/
		c.arc(this.x_pos, this.y_pos, this.radius, start_angle, end_angle, clockwise); // arc for the circle.
		// stroke style select color for the balls.
		//c.strokeStyle = random_rgba_str();

		c.fillStyle = this.color;
		c.stroke(); // this actually draws the shape on the screen.
		c.fill();
	}

	this.update = function () {

		// create ball
		this.draw();

		/* to add movement to the ball. */

		if (this.x_pos + this.radius > innerWidth || this.x_pos - this.radius < 0){
			this.dx = -this.dx;
		}

		if (this.y_pos + this.radius > innerHeight || this.y_pos - this.radius < 0){
			this.dy = -this.dy;
		} 

		/* add velocity to the ball by adding position cordinate change with time. */
		this.x_pos += this.dx;
		this.y_pos += this.dy;

		// intractivity on the hover of mouse movement.
		if ((mouse.x - this.x_pos < 50) && (mouse.x - this.x_pos > -50) &&
			(mouse.y - this.y_pos < 50) && (mouse.y - this.y_pos > -50)){

			if ( this.radius < maxRadius ) {
				this.radius += 1;
			}
			
		}
		else if ( this.radius > this.minRadius) {
			this.radius -= 1;
		}
	}
}

// using class to create new balls for pinballs object.
//var pinball2 = new Ball( x_pos, y_pos, dx, dy, radius_of_ball);
var pinball_box = [];

for (var i = 0; i < no_of_balls; i++) {
	/* important section:
	1. This declare the dimensions and position for the ball in the game.
	2. It will decide the position and velocity fo the ball. 
	3. clock wise or counter clockwise hardly matter when circle is concern.
	*/
	var radius_of_ball = (Math.random() * 3 + 1); // fix as we need the ball to be of same size.
	var x_pos = Math.random() * (innerWidth - 2 * radius_of_ball) + radius_of_ball; // random x position on the screen.
	var y_pos = Math.random() * (innerHeight - 2 * radius_of_ball) + radius_of_ball; //random y position on the screen.
	
	// random speed to decide when to move fast  or slow.
	var dx = (Math.random() - 0.5 );
	var dy = (Math.random() - 0.5 );
			
	// push balls on very time of creation.
	pinball_box.push(new Ball( x_pos, y_pos, dx, dy, radius_of_ball));
}
//console.log(pinball_box); // to check if the object is created.

function init() {
	/* 
	canvas should cover whole screen width and height for a page respective to window dimensions
	*/
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	pinball_box = [];

	for (var i = 0; i < no_of_balls; i++) {

		/* important section:-
		1. This declare the dimensions and position for the ball in the game.
		2. It will decide the position and velocity fo the ball. 
		3. clock wise or counter clockwise hardly matter when circle is concern.
		*/
		var radius_of_ball = (Math.random() * 3 + 1); // fix as we need the ball to be of same size.
		var x_pos = Math.random() * (innerWidth - 2 * radius_of_ball) + radius_of_ball; // random x position on the screen.
		var y_pos = Math.random() * (innerHeight - 2 * radius_of_ball) + radius_of_ball; //random y position on the screen.
		
		// random speed to decide when to move fast  or slow.
		var dx = (Math.random() - 0.5 );
		var dy = (Math.random() - 0.5 );
			
		// push balls on very time of creation.
		pinball_box.push(new Ball( x_pos, y_pos, dx, dy, radius_of_ball));
	}
// to check if the object is created.
//console.log(pinball_box);
}

/* main calling function to begin the game */
function playPinball() {

	function pinball() {

		// request fr the animation frame to start animation on the object on canvas.
		requestAnimationFrame(pinball);  // a must ine to add for recursive function call for pinball.

		// clearing screen is important to make animation feel on the screen.
		c.clearRect(0, 0, innerWidth, innerHeight);

		// using class to create new balls for pinballs object.
		//var pinball = new Ball( x_pos, y_pos, dx, dy, radius);
		//pinball.update();
		for (var i = pinball_box.length - 1; i >= 0; i--) {
			pinball_box[i].update();
		}

		// console.log('r/pinball'); // check if canvas is linked to script.
	}
	
	pinball(); //call the function pinball to get all the functionality of the ball.

console.log('r/playPinball'); // check if canvas is linked to script.
}

//call the play function to start the game.

playPinball();