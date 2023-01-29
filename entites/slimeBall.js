// This is the slime ball class for the player to collect
class SlimeBall {

    // This is the constructor for the character
    constructor(game, x, y, color) {

        // Properties
        this.game = game;
        this.x = x;
        this.y = y;
        this.index = 0;
        this.color = color;
        this.sheetX = 0;
        this.sheetY = 0;

        // Get the spriteshhett
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/SlimeBallSheet.png");

        // Create the correct color SlimeBall
        switch(this.color) {
            case "red":
                this.sheetY = 0;
                break;
            case "orange":
                this.sheetY = 16;
                break;
            case "yellow":
                this.sheetY = 32;
                break;
            case "green":
                this.sheetY = 48;
                break;
            case "blue":
                this.sheetY = 64;
                break;
            case "white":
                this.sheetY = 80;
                break;
            case "purple":
                this.sheetY = 96;
                break;
            case "pink":
                this.sheetY = 112;
                break;
            default:
                this.sheetY = 128;
                break;
        }

        // Get the animations
        this.animations = [];
        this.getAnimations();
    };

    // This method will get all the animations.
    getAnimations() {

        // Hover
        this.animations[0] =  new Animator(this.spritesheet, this.sheetX, this.sheetY, 16, 16, 4, 0.2, true);

    };

    // This is the update method called on each frame.
    update() {

    };

    // This method will draw the Character.
    draw(ctx) {

        // Draw the animations
        this.animations[this.index].drawFrame(this.game.clockTick, ctx, this.x, this.y,  PARAMS.SCALE);
    };
}