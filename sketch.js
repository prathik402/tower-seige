const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint 
var engine, world;
var square1
var square2
var square3
var square4
var square5
var ground1
var square6
var square7
var sqaure8
var square9



function preload() {
    
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    var canvas = createCanvas(700,700);
    square1 = new Box(225,500,30,30);
    square2 = new Box(255,500,30,30);
    square3 = new Box(285,500,30,30);
    square4 = new Box(315,500,30,30);
    square5 = new Box(345,500,30,30);
    ground1 = new Ground(300,535,200,10)
    square6 = new Box(270,485,30,30);
    square7 = new Box(300,485,30,30);
    square8 = new Box(330,485,30,30);
    square9 = new Box(300,455,30,30);
}



function draw(){
background("black")




square1.display();
square2.display();
square3.display();
square4.display();
square5.display();
ground1.display();
square6.display();
square7.display();
square8.display();
square9.display();





drawSprites()

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
    slingshot.fly();
  }
  
  
}
