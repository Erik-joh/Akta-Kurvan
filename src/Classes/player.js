class Player {
  constructor(keyL, keyR, color, startX, startY, name) {
    this.keyL = keyL;
    this.keyR = keyR;
    this.color = color;
    this.startX = startX;
    this.startY = startY;
    this.snake = new Snake(this.startX, this.startY, 6, this.color);
    this.score = 0;
    this.name = name; 
  }
  reset() {
    this.snake = new Snake(this.startX, this.startY, 6, this.color);
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
