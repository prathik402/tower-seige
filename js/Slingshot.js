class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 1
        }
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
       

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(237,110,25)
            image(this.image,this.x,this.y);
            strokeWeight(7);
            line(pointA.x ,pointA.y, pointB.x, pointB.y);

            
        
            
        }
    }
}