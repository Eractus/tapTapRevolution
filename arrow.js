class Arrow {
  constructor(direction) {
    this.direction = direction;
    this.width = 75;
    this.height = 75;
    this.y = 650;
    this.dy = 0;
    this.points = 50;
    this.combo = 1;
    this.drawArrow = this.drawArrow.bind(this);
    this.arrowParams(direction);
  }

  arrowParams(direction) {
    switch (direction) {
      case "left":
        this.directionImage = new Image();
        this.directionImage.src = "assets/leftArrowDynamic.png";
        this.shift = 0;
        this.x = 84.375;
        break;
      case "down":
        this.directionImage = new Image();
        this.directionImage.src = "assets/downArrowDynamic.png";
        this.shift = 300;
        this.x = 154.6875;
        break;
      case "up":
        this.directionImage = new Image();
        this.directionImage.src = "assets/upArrowDynamic.png";
        this.shift = 600;
        this.x = 225;
        break;
      case "right":
        this.directionImage = new Image();
        this.directionImage.src = "assets/rightArrowDynamic.png";
        this.shift = 900;
        this.x = 295.3125;
        break;
    }
  }

  drawArrow() {
    // this.directionImage.addEventListener("load", (e) => animate());
    let numFrames = 0;
    // console.dir(`initial call: ${this.direction}`);
    const animate = () => {
      // console.dir(`start animate: ${this.direction}`);
      numFrames ++;
      // ctx.clearRect(0, 0, this.width, this.height);
      ctx.drawImage(
        this.directionImage,
        this.shift,
        0,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width,
        this.height
      );
      // console.dir(`after draw: ${this.direction}`);
      this.y += this.dy;
      // console.dir(`after this.y: ${this.direction}`);
      if (numFrames === 15) {
        this.shift += this.width;
        numFrames = 0;
        this.shift = this.shift === 1200 ? 0 : this.shift;
      }
      // console.dir(`before requestAnimationFrame: ${this.direction}`);
      requestAnimationFrame(animate);
      // setTimeout(animate, 33);
    };
    animate();
  }
}
