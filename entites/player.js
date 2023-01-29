// This is the character class
class Player {

    // This is the constructor for the character
    constructor(game, color) {

        // Properties
        this.game = game;
        this.speed = 50;
        this.x = 0;
        this.y = 0;
        this.index = 0;
        this.canvasWidth = 927;
        this.canvasHeight = 664;
        this.color = color;

        // Get the spriteshhett
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/SlimeSheet.png");

        // Get the animations
        this.animations = [];
        this.getAnimations();
    };

    // This method will get all the animations.
    getAnimations() {

        // looking right idle
        this.animations[0] =  new Animator(this.spritesheet, 0, 0, 32, 32, 1, 1000, true);

        // Moving right 
        this.animations[1] =  new Animator(this.spritesheet, 0, 0, 32, 32, 2,  0.5, true);

        // Left Idle
        this.animations[2] =  new Animator(this.spritesheet, 64, 0, 32, 32, 1,  1000, true);

        // Moving left
        this.animations[3] =  new Animator(this.spritesheet, 64, 0, 32, 32, 2,  0.5, true);

        // Back Idle
        this.animations[4] =  new Animator(this.spritesheet, 128, 0, 32, 32, 1,  1000, true);

        // Moving back
        this.animations[5] =  new Animator(this.spritesheet, 128, 0, 32, 32, 2,  0.5, true);

    }

    // This is the update method called on each frame.
    update() {

        // // Dont let the player go off screen(x direction)
        if(this.x > this.canvasWidth) {
            this.x = this.canvasWidth;
        }

        if(this.x < 0) {
            this.x = 0;
        }

        // Dont let the player go off screen(y direction)
        if(this.y > this.canvasHeight) {
            this.y = this.canvasHeight;
        }

        if(this.y < 0) {
            this.y = 0;
        }

        // Update based on player movement.
        if (this.game.keys["d"] || this.game.keys["D"]) {
            this.x += this.speed * this.game.clockTick;
           this.index = 1;
        } else if (this.game.keys["a"] || this.game.keys["A"]) {
            this.x -= this.speed * this.game.clockTick;
           this.index = 3;
        } else if (this.game.keys["w"] || this.game.keys["W"]) {
            this.y -= this.speed * this.game.clockTick;
            this.index = 5;
        } else if (this.game.keys["s"] || this.game.keys["S"]) {
            this.y += this.speed * this.game.clockTick;
            this.index = 1;
        } else {

            // If the player is not pressing a key
            if(this.index == 1) {
                this.index = 0;
            } else if(this.index == 3) {
                this.index = 2;
            } else if(this.index == 5) {
                this.index = 4;
            } 
        }
    };

    // This method will draw the Character.
    draw(ctx) {
        // Draw the animations
        this.animations[this.index].drawFrame(this.game.clockTick, ctx, this.x, this.y, PARAMS.SCALE);
    };
}