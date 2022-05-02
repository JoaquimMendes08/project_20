
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600, 500);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	parado = {
		isStatic: true
	}

	solo = Bodies.rectangle(300, 490, 600, 20, parado);
	World.add(world, solo);

	

	mexendo = {
		restitution: 1
	}

	parede = Bodies.rectangle(200, 150, 30, 100, mexendo);
	World.add(world, parede);

	tijolo = Bodies.rectangle(200, 150, 100, 30, mexendo);
	World.add(world, tijolo);

	pedra = Bodies.rectangle(400, 130, 100, 30, mexendo);
	World.add(world, pedra);

	wall = Bodies.rectangle(400, 130, 30, 100, mexendo);
	World.add(world, wall);

	bola = Bodies.circle(300, 100, 20, mexendo);
	World.add(world, bola);

	redBall = Bodies.circle(300, 50, 20, mexendo);
	World.add(world, redBall);

	blueBall = Bodies.circle(300, 20, 20, mexendo);
	World.add(world, blueBall);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background("pink");

  fill("cyan");
  rect(solo.position.x, solo.position.y, 600, 20);
  
  fill("orange");
  rect(tijolo.position.x, tijolo.position.y, 100, 30);

  fill("grey");
  rect(pedra.position.x, pedra.position.y, 100, 30);

  fill("purple");
  rect(parede.position.x, parede.position.y, 30, 100);

  fill("white");
  rect(wall.position.x, wall.position.y, 30, 100);

  fill("red");
  ellipse(redBall.position.x, redBall.position.y, 40);

  fill("blue");
  ellipse(blueBall.position.x, blueBall.position.y, 40);

  fill("black");
  ellipse(bola.position.x, bola.position.y, 40);

  drawSprites();
 
}



