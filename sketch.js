var fixedRect, movingRect;
var rect3,rect4,rect5
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect3 = createSprite(200, 400, 50, 80);
  rect3.shapeColor = "yellow";
  rect4 = createSprite(100, 400, 50, 80);
  rect4.shapeColor = "pink";
  rect5 = createSprite(300, 400, 50, 80);
  rect5.shapeColor = "orange";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(istouching(rect4,movingRect)){
    movingRect.shapeColor=("red")
   rect4.shapeColor=("red")
  }
else{
  movingRect.shapeColor=("green")
  rect4.shapeColor=("green") 
}

  drawSprites();
}
