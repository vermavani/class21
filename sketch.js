var fixedRect, movingRect;
var rect1, rect2, rect3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1 = createSprite(700,300,50,80)
  rect1.shapeColor = "red";
  rect1.debug = true;

  rect2 = createSprite(900,500,50,80)
  rect2.shapeColor = "purple";
  rect2.debug = true;

  rect3 = createSprite(600,200,50,80)
  rect3.shapeColor = "orange";
  rect3.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  if(isTouching(rect2,movingRect)){
    rect2.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";

  }
  else{
    rect2.shapeColor = "pink";
    movingRect.shapeColor = "pink";
  }
  
  
  drawSprites();
}

function isTouching(object1, object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {

      return true;

 
  }
  else {
    return false;

  }


  
}