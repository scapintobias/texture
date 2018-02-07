var spacing = 50;

function setup() {
  createCanvas(900, 600);

  noLoop();
}

function draw() {
  background(0);

  noFill();
  for (var x=0; x<=width; x+=spacing) {
    for (var y=0; y<=height; y+=spacing) {
      stroke(random(255), 100, 0);
      
      if (y % (spacing*2) == 0) {
        ellipse(x, y, 100, 100);
      } else {
        ellipse(x + spacing/2, y, 100, 100);
      }
    }
  }
}

function mousePressed() {
  redraw();
}