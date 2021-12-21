let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i <random(60); i++) {
    let x = random(width);
    let y = random(height);
    let r = random(40, 100);
    bubbles.push(new Bubble(x, y, r));
  }
}
function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }
}
function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
    bubbles[i].move();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.rc=random(255);
    this.gc=random(255);
    this.bc=random(255);
  }

  clicked(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      this.rc=random(255);
      this.gc=random(255);
      this.bc=random(255);
    }
  }

  show() {
    fill(this.rc, this.gc, this.bc);
    stroke(255);
    strokeWeight(4);
    ellipse(this.x, this.y, this.r * 2);
  }

  move() {
    this.x += random(-10, 10);
    this.y += random(-10, 10);
  }
}
