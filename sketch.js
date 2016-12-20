
function setup() {
  createCanvas(360,640);
  
  //Deal with microphone
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  var volume = mic.getLevel();
  
  //If the volume is not enought, re-map it (set a higher newMax).
  var newMax = 5;
  volume = map(volume,0,1,0,newMax);
  
  startingColor= color(148,116,61);
  endingColor = color(255,80,44);
  
  background(174,220,231);
  push();  //Start with transformations
  //translate(width/2,height/2);
  var size = map(volume,0,1,30,60);
  //ellipse(0,0,size);
  pop();  //All transformation are now dropped and the coordinate system is resetted.
  
  push();  
  var sizeone = map(volume,0,1,20,80);
  pop();
  
  push();  
  var sizeoneone = map(volume,0,1,10,30);
  pop();
  
  push();  
  var sizetwo = map(volume,0,1,10,30);
  pop(); 
  
  push();  
  var sizetwotwo = map(volume,0,1,5,15);
  pop();
  
  push();  
  var size3 = map(volume,0,1,2,8);
  pop();
  
  push();  
  var size4 = map(volume,0,1,3,10);
  pop();
  
  push();  
  var size5 = map(volume,0,1,80,110);
  pop();
  
  push();  
  var size55 = map(volume,0,1,70,130);
  pop();
  
  push();  
  var size6 = map(volume,0,1,90,130);
  pop();
  
  push();  
  var size66 = map(volume,0,1,50,90);
  pop();
  
  push();  
  var newrotaz = PI/2;
  var  six = map(volume,0,1,0,newrotaz);
  pop();
  
  push();  
  var newrotaz = PI/6;
  var  six1 = map(volume,0,1,0,newrotaz);
  pop();
  
  push();
  var noseColor = 
        lerpColor (startingColor,endingColor,volume);
        //fill(noseColor);
        noStroke();
  pop();
  
  
  fill(181,144,85);
  noStroke();
  ellipse(width/2,((height/2)-25),size5,size55); //parte sopra 80 70
  ellipse(width/2,height/2,size6,size66); //parte bassa 90 50
  noStroke()
  fill(148,116,61);
  
    fill(255);
  noStroke()
  ellipse(((width/2)-16),((height/2)-30),sizeoneone,sizeone); //occhi 10,20
  ellipse(((width/2)+16),((height/2)-30),sizeoneone,sizeone); //occhi
  
  
  
  fill(0);
  noStroke();
  ellipse(((width/2)-16),((height/2)-25),sizetwotwo,sizetwo); //occhi 5,10
  ellipse(((width/2)+16),((height/2)-25),sizetwotwo,sizetwo); //occhi
  
  
  fill(noseColor) //148,116,61
  ellipse(width/2,((height/2)-9),size,20); //naso 30,20
  fill(noseColor)
  rect(((width/2)-1.5),height/2,size4,11) // sotto naso 
  noFill()
  strokeWeight(size3)
  stroke(noseColor)
  arc(width/2,((height/2)+7), 30, 10, TWO_PI, PI);// bocca
  
  noFill()
  strokeWeight(3)
  stroke(148,116,61)
  var arcLength = map(volume, 0, 1, 90, 120)
  angleMode(DEGREES);
  //arc(width/2,((height/2)-120), 120, 120, six, PI-six); // corno princ two_pi pi
  var xPosCorna = (height/2) -40 - size5;
  arc(width/2,xPosCorna, 120, 120, 90-arcLength, 90+arcLength); // corno princ two_pi pi
  angleMode(RADIANS);
  push();
  translate((width/2)-23,(height/2)-100);
  rotate(PI/6);
  var xPosCorna2 = (width/2)-23 - size5;
  var yPosCorna2 = (height/2)-100 + size5;
  arc(-xPosCorna2+90,-yPosCorna2+300, 30, 60, (TWO_PI+25)+six, PI-six); // corno sec (TWO_PI+25), PI
  pop();
  push();
  translate((width/2)+23,(height/2)-100);
  rotate(-PI/6);
  var xPosCorna3 = (width/2)+23 - size5;
  var yPosCorna3 = (height/2)-100 + size5;
  arc(-xPosCorna3+110,-yPosCorna3+300, 30, 60, (TWO_PI-25)+six, PI-six); // corno sec
  pop();
  
  
  
}