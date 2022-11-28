//The setup function only happens once
var tree=2;

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
background(random(0,255),tree,230);
  tree=tree+1;
}

//The draw function happens over and over again
function draw() {
  
   //blue background
  fill("red");
  rect(mouseX,175,50,50);
  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  fill(255,255,120,random(0,255)); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/2,height/2,100,100); // center of canvas, 20px dia

}
