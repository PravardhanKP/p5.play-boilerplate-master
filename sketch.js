function setup() {
  createCanvas(800,400);
 a= createSprite(400, 200, 50, 50);
 b= createSprite(200,400,30,30);
a.shapeColor="cyan"
b.shapeColor="red"
}

function draw() {
  background(255,255,255); 
  b.x=mouseX
  b.y=mouseY 
  if(a.x-b.x<a.width/2+b.width/2&&b.x-a.x<b.width/2+a.width/2&&a.y-b.y<a.height/2+b.height/2&b.y-a.y<b.height/2+a.height/2){
    a.shapeColor="red"
    b.shapeColor="cyan"
  }
  else{
    a.shapeColor="cyan"
    b.shapeColor="red" 
  }
  drawSprites();
}