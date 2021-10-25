const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
var ballimg;
var backgroundimg;
var rabbitimg;
var rabbit;
var cut;

function preload() {
  ballimg = loadImage("melon.png");
  backgroundimg = loadImage("background.png");
  rabbitimg = loadImage("Rabbit-01.png");
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);
  rabbit = createSprite(250, 600, 10, 10);
  rabbit.addImage(rabbitimg);
  rabbit.scale = 0.25; 
  // imageMode(CENTER); 
  cut = createImg("img.png");
  cut.position(225, 10);
  cut.size(50, 50);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  //background(backgroundimg);
  imageMode(CENTER);
  image(backgroundimg, width/2, height/2, width, height);
  drawSprites();
  rope.show();
  image(ballimg, fruit.position.x, fruit.position.y, 100, 100);
  Engine.update(engine);
  ground.show();

  cut.mouseClicked(drop);
 
   
}

function drop() {
  rope.break();
  fruit_con.detach();
  fruit_con = null;
  //fruit = null;
}
