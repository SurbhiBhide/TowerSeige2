const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;

function preload(){

  polygon_img=loadImage("polygon.png");

}

function setup() {
  createCanvas(900,450);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(450,435,900,20);
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new BlockLayer1(285,275,30,40);
  block2 = new BlockLayer1(315,275,30,40);
  block3 = new BlockLayer1(345,275,30,40);
  block4 = new BlockLayer1(375,275,30,40);
  block5 = new BlockLayer1(405,275,30,40);
  block6 = new BlockLayer1(435,275,30,40);
  block7 = new BlockLayer1(465,275,30,40);
  block8 = new BlockLayer1(495,275,30,40);

  //level two
  block9 = new BlockLayer2(315,235,30,40);
  block10 = new BlockLayer2(345,235,30,40);
  block11 = new BlockLayer2(375,235,30,40);
  block12 = new BlockLayer2(405,235,30,40);
  block13 = new BlockLayer2(435,235,30,40);
  block14 = new BlockLayer2(465,235,30,40);

  //level three
  block15 = new BlockLayer3(345,195,30,40);
  block16 = new BlockLayer3(375,195,30,40);
  block17 = new BlockLayer3(405,195,30,40);
  block18 = new BlockLayer3(435,195,30,40);

  //top
  block19 = new BlockLayer4(375,155,30,40);
  block20 = new BlockLayer4(405,155,30,40);


  //stand2
  block21 = new BlockLayer5(625,175,30,40);
  block22 = new BlockLayer5(655,175,30,40);
  block23 = new BlockLayer5(685,175,30,40);
  block24 = new BlockLayer5(715,175,30,40);
  block25 = new BlockLayer5(745,175,30,40);
  block26 = new BlockLayer5(775,175,30,40);

//level2
 block27 = new BlockLayer6(655,135,30,40);
 block28 = new BlockLayer6(685,135,30,40);
 block29 = new BlockLayer6(715,135,30,40);
 block30 = new BlockLayer6(745,135,30,40);

 //level3
 block31 = new BlockLayer7(685,95,30,40);
 block32 = new BlockLayer7(715,95,30,40);

  //polygon holder with slings
  polygon = Bodies.circle(100,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:150,y:160});

}
function draw() {
  background('black'); 
 
  Engine.update(engine);
  
  fill("rgb(135, 205, 236)");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();

  fill("rgb(0,219,204)");
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();

  fill("rgb(0,214,139)");
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  fill("rgb(59,211,0)");
  block19.display();
  block20.display();

  fill("rgb(226,173,255)");
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();

  fill("rgb(255,127,223)");
  block27.display();
  block28.display();
  block29.display();
  block30.display();

  fill("rgb(255,2,200)");
  block31.display();
  block32.display();

  slingShot.display();

  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  fill("white");
  ground.display();
  stand1.display();
  stand2.display();

  noStroke();
  textSize(22);
  textFont("Showcard Gothic Regular");
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",100,30);
  textSize(22);
  text("Press Space to get a second Chance to Play!!",100 ,400);
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){

  if(keyCode === 32){
    Matter.Body.setPosition(polygon,{x:100,y:200});
    slingShot.attach(this.polygon);
  }

  /*if(keyCode === 82 ||
    keyCode === 114){
      Matter.Body.setPosition(block1,{x:285, y:275});
      Matter.Body.setPosition(block2,{x:315, y:275});
      Matter.Body.setPosition(block3,{x:345, y:275});
      Matter.Body.setPosition(block4,{x:375, y:275});
      Matter.Body.setPosition(block5,{x:405, y:275});
      Matter.Body.setPosition(block6,{x:435, y:275});
      Matter.Body.setPosition(block7,{x:465, y:275});
      Matter.Body.setPosition(block8,{x:495, y:275});
 }*/
  
}
