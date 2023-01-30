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
        this.num = 0;
        this.color = ["red", "orange", "yellow", "green", "blue", "white", "purple", "pink"];

        // Get the spriteshhett
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/SlimeBallSheet.png");

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

        // Change the slime ball color with c for now
        if(this.game.keys["c"] || this.game.keys["C"]) {
            this.changeColor();
        }

    };

    // This method will draw the Character.
    draw(ctx) {

        // Draw the animations
        this.animations[this.index].drawFrame(this.game.clockTick, ctx, this.x, this.y,  PARAMS.SCALE);
    };

        // Change the slime ball color
        changeColor() {

            // Make sure the num doesn go out of bounds
            if(this.num === (this.color.length - 1)) {
                this.num = 0;
            }
    
            // Properties
            this.num += 1;
            this.newColor = this.color[this.num];
    
            switch(this.newColor) {
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
    
            // Get the new animations for the new color
            this.animations = [];
            this.getAnimations();
        }
}