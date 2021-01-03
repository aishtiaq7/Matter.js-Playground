import GameManager from './src/GameManager.js';


let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    canvas: canvas,
    engine: engine
});

var gameManager = new GameManager(engine,render);

// create two boxes and a ground
// var circleA = Bodies.circle(300,0,20);
gameManager.addBox(400,200,80,80, {isStatic:false});
gameManager.addBox(450, 50,80,80, {isStatic:false});
gameManager.addBox(400,610,810,60, {isStatic:true});

// var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
// World.add(engine.world, [ground]); 


let lastTime = 0;
function gameLoop(timeStamp){
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp; 


   gameManager.update();

   gameManager.draw();

    // requestAnimationFrame(gameLoop);
    
}

gameLoop();


