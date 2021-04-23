var IronMan; ironImg;
var bg, backgroundImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironImg= loadImage("images/iron.png");
 
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale=-0.9;
  IronMan=createSprite(200,505,20,50);
  IronMan.addImage(ironImg)
  IronMan.scale=0.5;
 
}

function draw() {
  if(keyDown("up")){
    IronMan.velocityY=-10;
  }
  if(keyDown("left")){
    IronMan.x=IronMan.x-5;
  }if(keyDown("right")){
    IronMan.x=IronMan.x+5;
  }
  IronMan.velocityY=IronMan.velocityY+0.5;
 
    
    drawSprites();
   
}

