var starImg,bgImg;
var fairy,fairyVoice;
var star, starBody;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("")
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(300,490)
	fairy.addAnimation("fairyflying",fairyImg)
	fairy.scale=0.2

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= 0
  star.y= 0

  if(keyDown(Right_ARROW)){
	  fairy.velocityX=-6
  }else if (keyDown(LEFT_ARROW)){
	  fairy.veocityX=-6
  }else if (keyDown(DOWN_ARROW)){
	  star.velocityY=-3
  }
  if(star.y>470){
	  star.velocityX=0
  }
  console.log(star.y);

  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	
}
