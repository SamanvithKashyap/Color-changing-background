
var r = 0;
var g = 50;
var b = 255;



function setup(){
 createCanvas(1200,400);

}


function draw(){
  r = map(mouseX,0,1200,0,255);
  g = map(mouseX,0,1200,0,50);
  b = map(mouseY,0,100,0,400)

  background(r,g,b);

  fill(b,g,r);
  ellipse(mouseX,mouseY,20,20);
}