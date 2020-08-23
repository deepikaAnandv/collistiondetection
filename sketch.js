var fixedRect,movingRect
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 150);
  fixedRect.shapeColor="purple";
  movingRect=createSprite(300,200,150,50);
  movingRect.shapeColor="purple";
}

function draw() {
  background(255,255,255);  
  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;

  if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    &&movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2){
    movingRect.shapeColor="pink";
    fixedRect.shapeColor="pink";
  }else{
  movingRect.shapeColor="purple";
  fixedRect.shapeColor="purple";
  }
  drawSprites();
}