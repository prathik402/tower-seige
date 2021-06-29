const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint 
var engine, world;
var square1
var square2



function preload() {
    
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    var canvas = createCanvas(1200,400);
    square1 = new Box(500,500,30,30)
}



function draw(){
background("black")




square1.display();





drawSprites()
}
