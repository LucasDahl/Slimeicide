// This is the character class
class Player {

    // This is the constructor for the character
    constructor(game) {

        // Properties
        this.game = game;
        this.speed = 50;
        this.x = 0;
        this.y = 0;
        this.index = 0;
        this.canvasWidth = 927;
        this.canvasHeight = 664;
        this.color = ["red", "orange", "yellow", "green", "blue", "white", "purple", "pink"];
        this.sheetX = 0;
        this.sheetY = 0;
        this.num = 0;

        // Get the spriteshhett
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/SlimeSheet.png");


        // Get the animations
        this.animations = [];
        this.getAnimations();
    };

    // This method will get all the animations.
    getAnimations() {

        // looking right idle
        this.animations[0] =  new Animator(this.spritesheet, 0, this.sheetY, 32, 32, 1, 1000, true);

        // Moving right 
        this.animations[1] =  new Animator(this.spritesheet, 0, this.sheetY, 32, 32, 2,  0.5, true);

        // Left Idle
        this.animations[2] =  new Animator(this.spritesheet, 64, this.sheetY, 32, 32, 1,  1000, true);

        // Moving left
        this.animations[3] =  new Animator(this.spritesheet, 64, this.sheetY, 32, 32, 2,  0.5, true);

        // Back Idle
        this.animations[4] =  new Animator(this.spritesheet, 128, this.sheetY, 32, 32, 1,  1000, true);

        // Moving back
        this.animations[5] =  new Animator(this.spritesheet, 128, this.sheetY, 32, 32, 2,  0.5, true);

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

        // Let the player change the color
        if(this.game.keys["c"] || this.game.keys["C"]) {
            this.changeColor();
        }
        

    };

    // This method will draw the Character.
    draw(ctx) {
        // Draw the animations
        this.animations[this.index].drawFrame(this.game.clockTick, ctx, this.x, this.y, PARAMS.SCALE);
    };


    // Change the player color
    changeColor() {

        // Make sure the num doesn go out of bounds
        if(this.num === (this.color.length - 1)) {
            this.num = 0;
        }

        // Properties
        this.num += 1;
        this.newColor = this.color[this.num];

        // Create the correct color SlimeBall
        switch(this.newColor) {
            case "red":
                this.sheetY = 0;
                break;
            case "orange":
                this.sheetY = 32;
                break;
            case "yellow":
                this.sheetY = 64;
                break;
            case "green":
                this.sheetY = 96;
                break;
            case "blue":
                this.sheetY = 128;
                break;
            case "white":
                this.sheetY = 160;
                break;
            case "purple":
                this.sheetY = 192;
                break;
            case "pink":
                this.sheetY = 224;
                break;
            default:
                this.sheetY = 256;
                break;
        }

        // Get the new animations for the new color
        this.animations = [];
        this.getAnimations();
    }
}