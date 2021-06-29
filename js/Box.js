class Box{
 constructor(){
 var options = {
 isStatic: true,
 density: 1,
 friction: 1     
 }
 this.body = Bodies.square(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);   
 }   
 display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("red");

    square(pos.x, pos.y, this.width, this.height);
  }
}
