//namespacing
const Engine = Matter.Engine;//it makes the logics of nature which has to be followed
const World= Matter.World; // it is the one where logics of engine will be implemented
const Bodies = Matter.Bodies;// they are the objects who follow those logics

// variables to define physical world
var engine, world;
//variables for objects to be made
var ground, ball;

function setup(){
    var canvas = createCanvas(800,400);
    //creating engine
    engine = Engine.create();
    //creating world inside engine
    world = engine.world;
//properties needed by the object
    var ground_options ={
        //making ground stops from falling
        isStatic: true
    }
// creating bodies inside world which follows physics engine
    ground= Bodies.rectangle(400,770,800,20,ground_options);
    // adding body into world
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0 //bouncinesss
    }
    
    var ballnew_options ={
        restitution: 0.8
    }

    ball = Bodies.circle(100,100,20, ball_options);
    World.add(world,ball);

    ballnew = Bodies.circle(300,100,20, ballnew_options);
    World.add(world,ballnew);

    console.log(ground);
}

function draw(){
    background("yellow");
    // to run the physics engine
    Engine.update(engine);
    // to offset the object position
    rectMode(CENTER);
    fill("green");
    // display the object created
    rect(ground.position.x,ground.position.y,800,20);

    ellipseMode(RADIUS);
    fill("red");
    ellipse(ball.position.x, ball.position.y, 20, 20);

    ellipseMode(RADIUS);
    fill("red");
    ellipse(ballnew.position.x, ballnew.position.y, 20, 20);
}


