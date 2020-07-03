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




  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
   
  for (var j =40; j <= width; j=j+50 ){
    plinkos.push(new Plinko(j,70));
  }
  for (var j =15; j <= width-10; j=j+50 ){
    plinkos.push(new Plinko(j,150));
  }
  for (var j =40; j <= width; j=j+50 ){
    plinkos.push(new Plinko(j,230));
  }
  for (var j =15; j <= width-10; j=j+50 ){
    plinkos.push(new Plinko(j,300));
  }



 // Engine.run(engine);
 World.add(world,ground);
}

function draw() {
  background(0);  
  Engine.update(engine);
    


 
  for(var i=0; i < divisions.length; i++) {
     divisions[i].display(); 
  }

  for(var i=0; i < plinkos.length; i++) {
      plinkos[i].display(); 
  }
  for(var i=0; i < plinkos.length; i++) {
    plinkos[i].display(); 
  }
  for(var i=0; i < plinkos.length; i++) {
    plinkos[i].display(); 
  }

  for(var i=0; i < plinkos.length; i++) {
    plinkos[i].display(); 
  }
  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  if (frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
  }
  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }


  ground.display();
}