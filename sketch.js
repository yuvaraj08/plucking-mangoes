
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,tree,mango1,mango2,mango3;
var ground,stone;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	

	engine = Engine.create();
	world = engine.world;

    //Create the Bodies Here.
	boy=new Launcher(200,150,10,10);
	tree=new Tree(300,100,20,20);
	mongo1=new Launchobj(310,130,10,10);
	mongo2=new Launchobj(315,135,10,10);
	mongo3=new Launchobj(320,140,10,10);
	ground=new Ground(400,400,10,10);
	stone=new Stone(210,155,20,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  boy.display();
  mongo1.display();
  mongo2.display();
  mongo3.display();
  ground.display();
  tree.display();
  stone.display();
    
  drawSprites();
 
}

function mouseDragged(){
Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    stone.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(stone.body,{x:210,y:155});
       boy.attach(stone.body);
    }
}



