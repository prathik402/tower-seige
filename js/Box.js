class Box{
 constructor(x,y,width,height){
 var options = {
 isStatic: true,
 density: 1,
 friction: 1     
 }
 
 this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);   
      x= this.x
      y= this.y
      this.Visibility = 255;
 }   
 display(){
    var pos =this.body.position;
    
    fill("red");
    World.remove(world, this.body);
    push();
    this.Visiblity = this.Visiblity - 5;
    tint(255,this.Visiblity);
    pop();
    square(pos.x, pos.y, this.width, this.height);
  }
}
