class Snake {
  constructor(x, y, d, color) {
    this.body = [];
    this.body[0] = createVector(x, y);
    this.angle = Math.PI / 2;
    this.d = d;
    this.collided = false;
    this.color = color;
  }
  setDir(dir) {
    this.angle = this.angle + dir;
  }
  updateSnake() {
    if (!this.collided) {
      let head = this.body[0];
      head.x = head.x + 3 * Math.sin(this.angle);
      head.y = head.y + 3 * Math.cos(this.angle);
    }
  }
  keyEvent(keyL, keyR) {
    if (keyIsDown(keyL)) {
      this.setDir(0.1);
    }
    if (keyIsDown(keyR)) {
      this.setDir(-0.1);
    }
  }
  collision() {
    let head = this.body[0];
    let checkx1 = head.x + (this.d / 2) * Math.sin(this.angle);
    let checky1 = head.y + (this.d / 2) * Math.cos(this.angle);
    let checkx2 = head.x + (this.d / 2) * Math.sin(this.angle + Math.PI / 4);
    let checky2 = head.y + (this.d / 2) * Math.cos(this.angle + Math.PI / 4);
    let checkx3 = head.x + (this.d / 2) * Math.sin(this.angle - Math.PI / 4);
    let checky3 = head.y + (this.d / 2) * Math.cos(this.angle - Math.PI / 4);

    let c1 = get(int(checkx1), int(checky1));
    let c2 = get(int(checkx2), int(checky2));
    let c3 = get(int(checkx3), int(checky3));

    if (c1[0] !== 255 && c1[1] !== 255 && c1[2] !== 255) {
      this.collided = true;
      console.log("0");
    }
    if (c2[0] !== 255 && c2[1] !== 255 && c2[2] !== 255) {
      this.collided = true;
      console.log("+90");
    }
    if (c3[0] !== 255 && c3[1] !== 255 && c3[2] !== 255) {
      this.collided = true;
      console.log("-45");
    }
  }
  drawSnake() {
    if (!this.collided) {
      fill(this.color);
      noStroke();
      circle(this.body[0].x, this.body[0].y, this.d);
    }
  }
}
