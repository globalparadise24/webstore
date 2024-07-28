// Matter.js - Ballpit Example
const Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

// Create an engine
const engine = Engine.create();

// Create a renderer
const render = Render.create({
    element: document.getElementById("canvas-container"),
    engine: engine,
    options: {
        width: 800,
        height: 600,
        wireframes: false
    }
});

// Create ground and walls
const ground = Bodies.rectangle(400, 590, 810, 20, { isStatic: true });
const wallLeft = Bodies.rectangle(10, 300, 20, 600, { isStatic: true });
const wallRight = Bodies.rectangle(790, 300, 20, 600, { isStatic: true });

// Create some balls
const balls = [];
for (let i = 0; i < 25; i++) {
    const ball = Bodies.circle(Math.random() * 760 + 20, Math.random() * 560 + 20, 20, {
        restitution: 0.7,
        render: {
            fillStyle: `hsl(${Math.random() * 360}, 100%, 50%)`
        }
    });
    balls.push(ball);
}

// Add all bodies to the world
Composite.add(engine.world, [ground, wallLeft, wallRight, ...balls]);

// Run the renderer
Render.run(render);

// Create runner
const runner = Runner.create();
Runner.run(runner, engine);
