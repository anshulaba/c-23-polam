const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var canvas;
var engine,world,object;

function setup()
{
  canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  
  var options = { restitution : 1.0 }

  object=Bodies.rectangle(200,100,50,50,options);
  World.add(world,object);

  console.log(object);

  
  var ball_options={ restitution : 1.0 }
  ball=Bodies.circle(200,300,20,ball_options);
  World.add(world,ball);



  var ground_options = { isStatic : true }

  ground=Bodies.rectangle(200,400,200,20,ground_options);
  World.add(world,ground);

}


function draw()
{
  background("gold");
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  rect(ground.position.x,ground.position.y,400,20);
}