class Snake {
  constructor(x, y, d, color) {
    this.body = [
      createVector(x, y),
      createVector(x, y),
      createVector(x, y),
      createVector(x, y),
      createVector(x, y),
      createVector(x, y),
      createVector(x, y),
    ];
    this.angle = Math.random() * (Math.PI * 2);
    this.d = d;
    this.collided = false;
    this.color = color;
    this.frameCounter = 1;
  }
  setDir(dir) {
    this.angle = this.angle + dir;
  }
  updateSnake() {
    if (!this.collided) {
      let head = this.body[0];
      for (let i = this.body.length - 1; i > 0; i--) {
        this.body[i].x = this.body[i - 1].x;
        this.body[i].y = this.body[i - 1].y;
      }
      head.x = head.x + 1.5 * Math.sin(this.angle);
      head.y = head.y + 1.5 * Math.cos(this.angle);
    }
  }
  keyEvent(keyL, keyR) {
    if (keyIsDown(keyL)) {
      this.setDir(0.05);
    }
    if (keyIsDown(keyR)) {
      this.setDir(-0.05);
    }
  }
  collision() {
    const head = this.body[0];

    const checkx1 = head.x + (this.d / 2) * Math.sin(this.angle);
    const checky1 = head.y + (this.d / 2) * Math.cos(this.angle);
    const checkx2 = head.x + (this.d / 2) * Math.sin(this.angle + Math.PI / 4);
    const checky2 = head.y + (this.d / 2) * Math.cos(this.angle + Math.PI / 4);
    const checkx3 = head.x + (this.d / 2) * Math.sin(this.angle - Math.PI / 4);
    const checky3 = head.y + (this.d / 2) * Math.cos(this.angle - Math.PI / 4);

    let pointsArray = [
      get(int(checkx1), int(checky1)),
      get(int(checkx2), int(checky2)),
      get(int(checkx3), int(checky3)),
    ];
    pointsArray.forEach((point) => {
      if (point[0] > 3 && point[1] > 3 && point[2] > 3) {
        this.collided = true;
      }
    });
  }
  drawSnake() {
    if (!this.collided && this.frameCounter < 110) {
      fill(this.color[0], this.color[1], this.color[2]);
      noStroke();
      circle(this.body[0].x, this.body[0].y, this.d);
    } else {
      fill(this.color[0], this.color[1], this.color[2]);
      noStroke();
      circle(this.body[0].x, this.body[0].y, this.d);

      fill(255, 255, 255, 255);

      fill(2, 2, 2, 255);

      circle(
        this.body[this.body.length - 1].x,
        this.body[this.body.length - 1].y,
        this.d + 1
      );
    }
    this.frameCounter++;
    if (this.frameCounter === 120) {
      this.frameCounter = 1;
    }
  }
}
