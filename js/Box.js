class Box{
 constructor(x,y,width,height){
 var options = {
 isStatic: true,
 density: 1,
 friction: 1     
 }
 this.image = loadImage("polygon.png")
 this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);   
      x= this.x
      y= this.y
 }   
 display(){
    var pos =this.body.position;
    imageMode(CENTER);
    image(this.image,this.x,this.y);
    fill("red");

    square(pos.x, pos.y, this.width, this.height);
  }
}
