var bg, bgImg;
var sun,sunImg;
var mercury,mercuryImg;
var venus,venusImg;
var earth,earthImg;
var mars,marsImg;
var rocket,rocketImg;
var astroid,astroidImg,astroidGroup;

function preload()
{
	bgImg = loadImage("space.jpg")
	sunImg = loadImage("sun.png")
	mercuryImg = loadImage("mercury.gif")
	venusImg = loadImage("venus2.gif")
	earthImg = loadImage("earth.gif")
	marsImg = loadImage("mars.gif")
	rocketImg = loadImage("rocket.png")
	astroidImg = loadImage("astroid.png")
}

function setup() {
	createCanvas(windowWidth,windowHeight);

bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
	bg.addImage(bgImg)
	bg.scale = 5.5

sun = createSprite(150,300)
	sun.addImage(sunImg)
	sun.scale = 0.6

mercury = createSprite(350,325)
	mercury.addImage(mercuryImg)
	mercury.scale = 0.4

venus = createSprite(490,325)
	venus.addImage(venusImg)
	venus.scale = 0.5


rocket = createSprite(5,30)
	rocket.addImage(rocketImg)
	rocket.scale = 0.1

	astroidGroup = new Group();	
}


function draw() {
   background(0);
  
if (keyDown("UP_ARROW")){
rocket.y = rocket.y-25
}

if (keyDown("DOWN_ARROW")){
rocket.y = rocket.y+15
}

if (keyDown("LEFT_ARROW")){
	rocket.x = rocket.x-16
	}

if (keyDown("RIGHT_ARROW")){
	rocket.x = rocket.x+16
	}


	if(astroidGroup.isTouching(rocket)){
 

		for(var i=0;i<astroidGroup.length;i++){     
			 
		 if(astroidGroup[i].isTouching(rocket)){
			  astroidGroup[i].destroy()
			  } 
		}
	   }	

	spawnObstacles();
  drawSprites();
}

function spawnObstacles(){
	if(frameCount%50===0){
  
	  //giving random x and y positions for zombie to appear
	  astroid = createSprite(random(900,1600),random(100,400),40,40)
  
	  astroid.addImage(astroidImg)
	  astroid.scale = 0.15
	  astroid.velocityX = -3
	  
	  astroid.lifetime = 400
	 
	  astroidGroup.add(astroid)  
	 
	}
  
  }

