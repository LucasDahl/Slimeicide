// This is the character class
class Player {

    // This is the constructor for the character
    constructor(game) {

        // Properties
        this.game = game;
        this.speed = 50;
        this.x = 0;
        this.y = 0;
        this.index = 6;
        this.canvasWidth = 1000;
        this.canvasHeight = 732;

        // Get the spriteshhett
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/");
        this.animator = new Animator(this.spritesheet, 0, 32, 32, 32, 7, 0.2);

        // Get the animations
        this.animations = [];
        this.getAnimations();
    };

    // This method will get all the animations.
    getAnimations() {

    }

    // This is the update method called on each frame.
    update() {

    };

    // This method will draw the Character.
    draw(ctx) {

        // Draw the animations
        this.animations[this.index].drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}