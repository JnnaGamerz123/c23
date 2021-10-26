class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.top=loadImage("assets/canon.png");
    this.bottom=loadImage("assets/cannonBase.png");

  }
  display(){
    push ();
    imageMode(CENTER);
    image (this.top,this.x,this.y,this.width,this.height);
    pop ();
    image(this.bottom,70,20,200,200);
    noFill();
  }
}
