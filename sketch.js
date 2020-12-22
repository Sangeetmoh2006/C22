const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world
var ground, ball
function setup() {
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world
  var groundoptions = {
    isStatic: true
  }
  var balloptions = {
    restitution: 1.0
  }
  ground=Bodies.rectangle(200,390,200,20,groundoptions)
  ball=Bodies.circle(200,100,30,balloptions)
  World.add(world, ground)
  World.add(world, ball)
  console.log(ground)
}

function draw() {
  background("black");  
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 400, 20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 30, 30)
}