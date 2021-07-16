const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1, stand2;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12;
var b13,b14,b15,b16,b17,b18;
var polygon, polygonimg;
var slingshot;


function preload() {
polygonimg = loadImage("polygon.png")

}

function setup(){
    engine = Engine.create();
    world = engine.world;

    var canvas = createCanvas(1000,600);


    
    stand1 = new Ground(370,420,250,20)
    stand2 = new Ground(700,250,150,20)

    b1 = new Box(300,300,30,50)
    b2 = new Box(335,300,30,50)
    b3 = new Box(370,300,30,50)
    b4 = new Box(405,300,30,50)
    b5 = new Box(440,300,30,50)
    b6 = new Box(317.5,250,30,50)
    b7 = new Box(352.5,250,30,50)
    b8 = new Box(387.5,250,30,50)
    b9 = new Box(422.5,250,30,50)
    b10 = new Box(335,200,30,50)
    b11 = new Box(370,200,30,50)
    b12 = new Box(405,200,30,50)
    b13 = new Box(665,100,30,50)
    b14 = new Box(700,100,30,50)
    b15 = new Box(735,100,30,50)
    b16 = new Box(682.5,50,30,50)
    b17 = new Box(717.5,50,30,50)
    b18 = new Box(700,0,30,50)

    polygon = Bodies.circle(50,200,20)
    World.add(world, polygon)
    
    slingshot = new SlingShot(this.polygon,{x:100, y:400})

}

function draw(){
    Engine.update(engine);
    background("black")

    fill("white")
    text("Press space to retry",20,20)
    imageMode(CENTER)
    image(polygonimg,polygon.position.x,polygon.position.y,50,50)

    stand1.display()
    stand2.display()


    fill("purple")
    b1.display()
    b2.display()
    b3.display()
    b4.display()
    b5.display()

    fill("blue")
    b6.display()
    b7.display()
    b8.display()
    b9.display()

    fill("pink")
    b10.display()
    b11.display()
    b12.display()

    fill("purple")
    b13.display()
    b14.display()
    b15.display()

    fill("blue")
    b16.display()
    b17.display()

    fill("pink")
    b18.display()


    drawSprites()
}


function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32)
    {
        slingshot.attach(polygon)
    }
}