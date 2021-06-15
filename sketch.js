var bg,bath,brush,drink,eat,gym,move,sleep;
var astronaut,iss;

function preload(){

  bg=loadImage("iss.png");
  bath=loadAnimation("bath1.png","bath2.png");
  brush=loadImage("brush.png");
  drink=loadAnimation("drink1.png","drink2.png");
  eat=loadAnimation("eat1.png","eat2.png");
  gym=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  move=loadAnimation("move.png","move1.png");
  sleep=loadImage("sleep.png");

}


function setup() {
  createCanvas(800,400);

  iss=createSprite(200,200);
  iss.addImage("iss",bg);

  astronaut= createSprite(300,230);
  astronaut.addImage("astronaut",sleep);
  astronaut.scale=0.1;

  createEdgeSprites();
 
}

function draw() {
  background(0,255,255); 
  
  astronaut.bounceOff("edges");
  
  if(keyDown("UP_ARROW")){
    astronaut.addImage("brushing",brush);
    astronaut.y=350;
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
    astronaut.y=350;
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.y=350;
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.y=350;
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }

  if(keyDown("m")){
    astronaut.addAnimation("moving",move);
    astronaut.y=350;
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }

  drawSprites();
}