// Setup code goes here
function setup() {
  createCanvas(1200, 800);
  print("Red Bottle-Meow");
 }


// Draw code goes here
function draw() {
  background(59,200,200);

  // deform pointing
  let t = map(mouseX, 0, width, -5, 5);
  curveTightness(t);
  beginShape();
  curveVertex(10, 364);
  curveVertex(10, 364);
  curveVertex(83, 362);
  curveVertex(83, 399);
  curveVertex(25, 395);
  curveVertex(25, 395);
  endShape();



  //tail
  noFill();
  strokeWeight(20);
  strokeJoin(MITER);
  beginShape();
  vertex(275, 550);
  vertex(380, 450);
  vertex(440, 450);
  endShape();

  //body

  fill(250,0,0)
  stroke('purple');
  strokeWeight(3);
  rect(215,390,120,180,30);
  circle(245, 430, 20);
  circle(309, 454, 30);
  circle(248, 507, 20);
  circle(280, 523, 10);
  circle(307, 538, 10);
  circle(281, 485, 10);
  circle(302, 415, 15);


  //ear 1
  noFill();
  strokeWeight(12);
  strokeJoin(MITER);
  beginShape();
  vertex(215, 265);
  vertex(255, 310);
  endShape();

  //ear 2
  noFill();
  strokeWeight(12);
  strokeJoin(MITER);
  beginShape();
  vertex(335, 265);
  vertex(295, 310);
  endShape();

  //Head
  fill(250,0,0)
  stroke('purple');
  strokeWeight(3);
  rect(200,300,150,100, 20);

  // eye 
  stroke('purple'); 
  strokeWeight(10); 
  point(242, 330);
  point(302, 330);

  // mouth
  noFill();
  strokeWeight(2);
  strokeJoin(MITER);
  beginShape();
  vertex(242, 385);
  vertex(272, 355);
  vertex(302, 385);
  endShape();
}

function mousePressed(){
 	print("mousePressed X:  " + mouseX + "  Y:  " + mouseY);
}

