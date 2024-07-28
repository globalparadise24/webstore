kaboom();

loadSprite("bean", "https://kaboomjs.com/sprites/bean.png");

scene("game", () => {
    const player = add([
        sprite("bean"),
        pos(80, 40),
        area(),
        body()
    ]);

    keyDown("left", () => {
        player.move(-120, 0);
    });

    keyDown("right", () => {
        player.move(120, 0);
    });

    keyDown("up", () => {
        player.jump();
    });
});

start("game");
