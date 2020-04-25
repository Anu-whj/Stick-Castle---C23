//creates three constants, which are present in the Matter Physics Engine.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//creates two variables.
var engine, world;

//creates the variables for the castle.  
var ground;
var secrectangles1, secrectangles2;
var primaryrectangle;
var toprectangle;

function setup() {
  //creates the canvas.
  var canvas = createCanvas(400, 400);

  //creates the Engine in the engine variable.
  //creates the world in the world variable. 
  engine = Engine.create();
  world = engine.world;
  
  //container variables for the rectangles in the castle and the ground for the castle.
  secrectangles1 = new Secrectangles(55,300,50,250);
  secrectangles2 = new Secrectangles(345,300,50,250);

  primaryrectangle = new Secrectangles(200,300,250,150);

  toprectangle = new Secrectangles(200,250,140,120);
  
  ground = new Ground(200, 390, 400, 20);

}
function draw() {
  //gives the background colour.
  //updates the Engine.
  background(0);
  Engine.update(engine);
  
  //displays the castle.
  secrectangles1.display();
  secrectangles2.display();
  primaryrectangle.display();
  toprectangle.display();
  ground.display();

  //draws the triangles, the door and the windows of the castle.
  triangle(7, 130, 49, 60, 93, 130);
  triangle(307, 130, 349, 60, 393, 130);
  triangle(113, 110, 200, 15, 287, 110);

  line(200, 377, 200, 300);
  fill("black");
  line(170, 377, 170, 300);
  fill("black");
  line(230, 377, 230, 300);
  fill("black");
  line(170, 300, 230, 300);
  fill("black");

  rect(50, 180, 20, 40);
  rect(350, 180, 20, 40);
  rect(200, 160, 50, 20);
}