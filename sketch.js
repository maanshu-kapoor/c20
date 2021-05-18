//creating variable
var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  //creating sprites and giving shape color
 fixedRect= createSprite(200, 200, 50, 80);
 fixedRect.shapeColor="green";
 movingRect=createSprite(400,200,80,30)
 movingRect.shapeColor="green";
}

function draw() {
  background(255,255,255);
  //movingRect move
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;  

  console.log(movingRect.x-fixedRect.x)
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  drawSprites();
}