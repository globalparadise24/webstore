let particles = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvas-container");
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(240);
  particles.forEach(p => {
    p.update();
    p.show();
  });
}

class Particle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.r = random(4, 32);
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-1, 1.5);
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x > width || this.x < 0) {
      this.xSpeed *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.ySpeed *= -1;
    }
  }

  show() {
    noStroke();
    fill(0, 50);
    ellipse(this.x, this.y, this.r * 2);
  }
}
