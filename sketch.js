const World= Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var divisions = [];
var plinkos = [];
var particles = [];
var ground;
var divisionHeight = 300;

function setup() {
  createCanvas(480,700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,690,800,20);
  divisions = new Divisions(05,650,20,200)




 // Engine.run(engine);
 World.add(world,ground);
}

function draw() {
  background(0);  
  Engine.update(engine);
    
  
 // plinkos.display();
  divisions.display();
  ground.display();
}
