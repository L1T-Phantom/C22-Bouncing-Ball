  // Renaming the Engine module of matter.js library --> NameSpacing  
  const Engine = Matter.Engine;
  const Bodies = Matter.Bodies;
  const World = Matter.World;

 // declaring engine variable
  var engine;
  var ground;
  var ball;
function setup() {
  createCanvas(800,400);

  // creating an engine for our application to make physics simulations

  engine = Engine.create();
  world =  engine.world;

  // JSON -- Java script object notation
  // Json has key : value pairs inside flower braces
  // We can tune or change the attributes to any value other than default values
  var ground_options ={
    isStatic : true
  }

  ground = Bodies.rectangle(400,380,800,20,ground_options);
  World.add(world,ground);
  
  var ball_options = {
    restitution: 1
  }

  ball = Bodies.circle(100,100,20,ball_options);
  World.add(world,ball);

  console.log(ball);
 
}

function draw() {
  background("lightblue"); 

  Engine.update(engine)
  
  // console.log(ground.position.x);
  // console.log(.position.y);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  
 //circle(ball.position.x,ball.position.y,20);
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,20,20);
}