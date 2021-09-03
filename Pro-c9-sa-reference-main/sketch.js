var box;

function setup(){
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
}


function draw(){
  background("black");

if(keyIsDown(UP_ARROW)){
  box.y = box.y-2
}
if(keyIsDown(DOWN_ARROW)){
  box.y = box.y+2
}
if(keyIsDown(RIGHT_ARROW)){
  box.x = box.x+2
}
if(keyIsDown(LEFT_ARROW)){
  box.x = box.x-2
}

  drawSprites();
}


