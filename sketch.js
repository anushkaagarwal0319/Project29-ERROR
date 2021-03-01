
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	
  ground = new Ground(650, 500, 1300, 100)
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here

  ground.display();
  
}

