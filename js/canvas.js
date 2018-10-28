var canvas = document.querySelector('canvas');



//style for canvas width and height for the 

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// draw something on the canvas 
var c = canvas.getContext('2d');

var random_rgba_str = function () {

	var r_comp =  Math.random() * 10 * 40;
	var g_comp =  Math.random() * 10 * 40;
	var b_comp =  Math.random() * 10 * 40;
	var a_comp =  Math.random();

	return 'rgba('+ r_comp + ',' + g_comp + ',' + b_comp + ',' + a_comp + ' )';
}



/* 
	function to move animated ball on the canvas 

	*/

function Circle (pos_x, pos_y, x_vel, y_vel, radius_of_circle) {

	this.pos_x = pos_x;
	this.pos_y = pos_y;

	this.x_vel = x_vel;
	this.y_vel = y_vel;

	this.radius_of_circle = radius_of_circle;

	this.draw = function () {
		
		c.beginPath();
		c.arc( this.pos_x, this.pos_y, this.radius_of_ball, 0, Math.PI * 2, false);

		//c.strokeStyle = random_rgba_str();
		c.stroke();

		console.log('draw funtion');
	};

	this.update =  function () {
		this.draw();
		console.log('update funtion');
	}

}


/* 
	important variables 


	var x_pos_ball = Math.random() * innerWidth;
	var y_pos_ball = Math.random() * innerHeight;

	// radius of the ball used.
	var radius_of_ball = 30;

	// velocities variable to be defined for the ball.
	dx = 7;
	dy = 7; */

var circle = new Circle(200, 200, 4, 4, 30);


function ball () {

	// var x_pos_ball = Math.random() * innerWidth;
	// var y_pos_ball = Math.random() * innerHeight;

	// // radius of the ball used.
	// var radius_of_ball = 30;

	// // velocities variable to be defined for the ball.
	// dx = 7;
	// dy = 7;


	function pinball() {

		requestAnimationFrame(pinball);

		// clearing all previous rectangle to create proper motin visible.
		c.clearRect(0,0, innerWidth, innerHeight);

		// c.beginPath();
		// c.arc( x_pos_ball, y_pos_ball, radius_of_ball, 0, Math.PI * 2, false);

		// //c.strokeStyle = random_rgba_str();
		// c.stroke();

		//javascript circle object for ball

		circle.update();

		// ball movement within canvas
		if (x_pos_ball + radius_of_ball > innerWidth || x_pos_ball - radius_of_ball < 0 )	{
			dx = -dx;
		}

		if ( y_pos_ball + radius_of_ball > innerHeight || y_pos_ball - radius_of_ball <	 0) {
			dy = -dy;
		}

		x_pos_ball += dx;
		y_pos_ball += dy;
	}

	// call for the ball animation function
	pinball();

}

 ball();

// many balls

// for ( var i = 0 ; i < 1; i ++ ) {
// 	ball();
// } 



/*
Section is to draw rectangle on the canvas 

c.fillStyle = 'rgba(0,0,255,0.6)';
c.fillRect(100, 100, 100, 100);

*/

// for ( var i = 0; i < 10; i++){
// 	var x_pos = Math.random() * window.innerWidth;
// 	var y_pos =  Math.random() * window.innerHeight;

// 	var width = Math.random() * x_pos;
// 	var height = Math.random() * y_pos;

// 	c.fillStyle = random_rgba_str();
// 	c.fillRect(x_pos, y_pos, width, height);
// }

/* Draw line on the board 
	We must specify the begin for the new component otherwise it remain connected to last element draw.
	c.beginPath();
	c.moveTo( 300, 400);
	c.lineTo( 400, 200);
	c.strokeStyle = 'green';
	c.stroke();
*/

// for ( var i = 0 ; i < 10; i++ ){
// 	var move_x = Math.random() * window.innerHeight * 10;
// 	var move_y = Math.random() * window.innerWidth * 10;

// 	var line_x = Math.random() * move_x;
// 	var line_y = Math.random() * move_y;

// 	c.beginPath();
// 	c.moveTo(move_x, move_y);
// 	c.lineTo(line_x, line_y);
// 	c.strokeStyle = random_rgba_str();
// 	c.stroke();

// }

/* 
	Draw Arcs/Circles on the Canvas

	c.beginPath();
	c.arc(300,300, 30, 0, Math.PI * 2, false);
	c.strokeStyle = 'rgba(255, 0, 0, 0.4)';
	c.stroke();
*/



// for ( var i = 0; i < 100; i++) {
// 	var x_pos = Math.random() * window.innerWidth;
// 	var y_pos = Math.random() * window.innerHeight;

// 	var radius = Math.random() * 10 * 24;

// 	var start_angle = 0;   /* for circles */
// 	//var start_angle = Math.PI * x_pos; // in radian i.e. float number
// 	var end_angle = Math.PI * 2;  // in radian i.e. float number

// 	var clock_wise = false;

// 	c.beginPath();
// 	c.arc(x_pos, y_pos, radius, start_angle, end_angle, clock_wise);
	
// 	c.strokeStyle = random_rgba_str();
// 	c.stroke();

// }




// to if the script is linked to the html file
console.log(canvas);




