var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,basket1,ground;
var basket2, basket3;
var d ;

function preload(){
	 d = loadImage("dustbin.png");
}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	paper = new Paper(200,200);
	basket1 = new Basket(700,625,20,150);
	basket2 = new Basket(550,625,20,150);
	basket3 = new Basket(625,675,150,20);
	ground = new Ground();
	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
	
	Engine.run(engine);
  
}


function draw() {
  background(688,688,688);
  Engine.update(engine);
 paper.display();
 basket1.display();
 basket2.display();
 basket3.display();
 ground.display();

 image(d,520,500,200,200);
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:47,y:-64});
	}
}


