function setup() {
  createCanvas(windowWidth, windowHeight);
  background(169,158,223);

  rect(300,100,50,100);
  triangle(30, 75, 58, 20, 86, 75);

  push();
  fill(255,0,0);
  translate(300, 100);
  rotate(15);
  rect(0,100,20,100);
  rect(0,0,200,100);
  pop();
}

  function old_setup(){
  rect(10,10,200,100,20,20);
  ellipse(100, 300, 140, 100);

  let rectX = 400;
  let rectY = 250;
  let rectH = 100;
  let rectW = 2 * rectH;
  
  strokeWeight(5);
  fill(94,80,248);
  stroke("#E2C7D4");
  rect(rectX,rectY,rectW,rectH);

  fill(226,220,245);
  stroke(191, 104, 190);
  ellipse(rectX + rectW/2,rectY + rectW/2,rectW,rectH);
  triangle(30, 75, 58, 20, 86, 75);
  
}

function draw() {
}
