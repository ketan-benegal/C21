var fixed,moving
var box


function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
  moving=createSprite(100, 200, 100, 50);
  fixed.shapeColor="Blue"
  moving.shapeColor="Blue"

  box=createSprite(300,200,30,30)
  box.shapeColor="pink"
}

function draw() {
  background(0);
  moving.x=mouseX
  moving.y=mouseY 
  if (isTouching(box,moving)) {
   box.shapeColor="Red"
  moving.shapeColor="Red"
  }
  else {
    box.shapeColor="Blue"
    moving.shapeColor="Blue"
  
  }
  drawSprites();
}

