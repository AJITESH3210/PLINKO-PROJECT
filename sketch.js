const World= Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,790,800,20);

 // Engine.run(engine);
 World.add(world,ground);
}

function draw() {
  background(0);  
  Engine.update(engine);
  
  ground.display();
}
