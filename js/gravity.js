var canvas = document.querySelector('canvas');
console.log(canvas);

var c = canvas.getContext('2d');

var color = [
'#4B0120',
'#B07310',
'#132A3D',
'#EAEBBC',
'#125243'
];



function Ball (x, y, radius) {

	this.x = x;
	this.y = y;
	this.radius = radius;
	//is.color = color[Math.floor(Math.random() * 5 + 1)];

	
	this.draw = function () {

		c.beginPath();

		c.arc(this.x, this.y, this.radius, 0, Math.PI* 2, false);
		//fillStyle = this.color;
		c.fill();
		c.stroke();
	}

	this.update = function () {

		this.draw();
	}

}

var ballArray = [];
var noOfBall = 20;


function init() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
    ballArray = [];
	ballRadius = 50;

	x_pos = Math.random() * ( innerWidth - ballRadius * 2) + ballRadius;
	y_pos = Math.random() * ( innerHeight- ballRadius * 2) + ballRadius;

	for (var i = 0; i < noOfBall; i++){
		ballArray.push(new Ball(x_pos, y_pos, ballRadius));
	}

}

init();

//r ball = new Ball(200, 200, 30);

function gravityAnimation() {

	requestAnimationFrame(gravityAnimation);

//clearRect(0, 0, innerWidth, innerHeight);
	for (var i = ballArray.length- 1; i >= 0; i--) {
		ballArray[i].update();
	}

//all.update();
	
}

gravityAnimation();