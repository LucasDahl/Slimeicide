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
        this.currentColor = color;
        this.boudningBoxXOffset = 10;
        this.boundingBoxYOffset = 15;
        this.color = ["red", "orange", "yellow", "green", "blue", "white", "purple", "pink"];

        // Get the spriteshhett
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/SlimeBallSheet.png");

        // Update the bounding box
        this.updateBB();

        // Get the animations
        this.animations = [];
        this.getAnimations();

        // Randomly change the color
        this.changeColor();

    };

    // This method will get all the animations.
    getAnimations() {

        // Hover
        this.animations[0] =  new Animator(this.spritesheet, this.sheetX, this.sheetY, 16, 16, 4, 0.2, true);

    };

     // The slime balls bounding box
     updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x + this.boudningBoxXOffset, this.y + this.boundingBoxYOffset, PARAMS.SLIME_BALL_WIDTH - (2 * this.boudningBoxXOffset), PARAMS.SLIME_BALL_HEIGHT - this.boundingBoxYOffset);
    };

    // This is the update method called on each frame.
    update() {

        // Change the slime ball color with c for now
        if(Math.random() < 0.025) {
            this.changeColor();
        }

        // Update the bounding box
        this.updateBB();

    };

    // This method will draw the Character.
    draw(ctx) {

        // Draw the animations
        this.animations[this.index].drawFrame(this.game.clockTick, ctx, this.x, this.y,  PARAMS.SCALE);

        // Draw BB box
        // ctx.strokeStyle = 'Red';
        // ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
    };

    // Change the slime ball color
    changeColor() {

        // Properties
        this.num = Math.floor(Math.random() * (this.color.length));
        this.newColor = this.color[this.num];
    
        switch(this.newColor) {
            case "red":
                this.sheetY = 1;
                break;
            case "orange":
                this.sheetY = 17;
                break;
            case "yellow":
                this.sheetY = 33;
                break;
            case "green":
                 this.sheetY = 49;
                break;
           case "blue":
                this.sheetY = 65;
                break;
            case "white":
                this.sheetY = 81;
                break;
            case "purple":
                this.sheetY = 97;
                break;
            case "pink":
                this.sheetY = 113;
                break;
            default:
                this.sheetY = 129;
                break;
            }

            // Set the current color
            this.currentColor = this.newColor;
    
            // Get the new animations for the new color
            //this.animations = [];
            this.getAnimations();
        }
}