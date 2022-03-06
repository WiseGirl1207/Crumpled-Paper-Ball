var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
	}
	
	ball = Bodies.circle(200, 600, 15, ball_options)
	World.add(world, ball);

	ground = new Ground(width/2,670,width,20);
	leftSide = new Ground(600, 600, 20, 120);
	rightSide = new Ground(900, 600, 20, 120);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 15, 15);

  rightSide.show()
  leftSide.show();
  ground.show();

  drawSprites();

}



function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, {x:200, y:600}, {x:30, y:-50});
	}
}