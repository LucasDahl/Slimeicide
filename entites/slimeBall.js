// This is the slime ball class for the player to collect
class SlimeBall {

    // This is the constructor for the character
    constructor(game, x, y, color) {

        // Properties
        this.x = x;
        this.y = y;
        this.color = color;

        // Get the spriteshhett
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/SlimeBallSheet.png");

        // Get the animations
        this.animations = [];
        this.getAnimations();
    };

    // This method will get all the animations.
    getAnimations() {

        // Hover
        this.animations[0] =  new Animator(this.spritesheet, 0, 0, 16, 16, 4, 0.2);

    };

    // This is the update method called on each frame.
    update() {

    };

    // This method will draw the Character.
    draw(ctx) {

        // Draw the animations
        this.animations[this.index].drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}