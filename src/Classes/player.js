class Player {
  constructor(keyL, keyR, color, startX, startY) {
    this.keyL = keyL;
    this.keyR = keyR;
    this.color = color;
    this.startX = startX;
    this.startY = startY;
    this.snake = new Snake(this.startX, this.startY, 10, this.color);
  }
  Update() {
    if (!this.snake.collided) {
      this.snake.drawSnake();
      this.snake.keyEvent(this.keyL, this.keyR);
      this.snake.updateSnake();
      this.snake.collision();
    }
  }
}
