
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	bg=loadImage('images/GamingBackground.png');
}

function setup() {
	createCanvas(1600, 500);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(800,height-10,1600,10)
	box1=new Box(900,100);
	box2=new Box(900,100);
	box3=new Box(900,100);
	box4=new Box(900,100);
	box5=new Box(900,100);
	box6=new Box(900,100);
	box7=new Box(900,100);
	
	box8=new Box(850,100);
	box9=new Box(850,100);
	box10=new Box(850,100);
	box11=new Box(850,100);
	box12=new Box(850,100);
	box13=new Box(850,100);
	box14=new Box(850,100);

	box15=new Box(800,100);
	box16=new Box(800,100);
	box17=new Box(800,100);
	box18=new Box(800,100);
	box19=new Box(800,100);
	box20=new Box(800,100);
	box21=new Box(800,100);

	ball=new Ball(500,200,150);

	rope=new Catapult(ball.body,{x:500,y:50});
monster=new Monster(1000,200,150);




	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);

 ground.display();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();
 box12.display();
 box13.display();
 box14.display();
 box15.display();
 box16.display();
 box17.display();
 box18.display();
 box19.display();
 box20.display();
 box21.display();


ball.display();
 rope.display();
 monster.display();



  
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}



