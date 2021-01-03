var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;


export default class GameManager{

    constructor(engine,render){
        this.render = render;
        this.engine = engine;

        this.bodies = [];
    }

    update(){
        // run the engine
        Engine.run(this.engine);
    }

    draw(){
        Render.run(this.render);


    }

    addBox(x,y,w,h,...options){
        console.log(options);
        var box = Bodies.rectangle(x, y, w, h, options);
        World.add(this.engine.world, [box]);

    }
}