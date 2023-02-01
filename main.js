const gameEngine = new GameEngine();

// Load the assets
const ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./sprites/SlimeSheet.png")
ASSET_MANAGER.queueDownload("./sprites/SlimeBallSheet.png")

// Properties
this.slimeBallLimit = 16;
this.numberOfPlayers = 1;
this.playerColors = [];

ASSET_MANAGER.downloadAll(() => {

    // Get teh canvas and the context.
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

    // Add the Character
    player = new Player(gameEngine, 464, 332, "red",);
    gameEngine.addEntity(player);
    gameEngine.player = player;


    // Put the context into the game engine
	gameEngine.init(ctx);

    // Start the game engine.
	gameEngine.start();
});

// ====================
// Methods
// ====================

// CHange the players color
function changeColor() {
    gameEngine.player.changeColor();
}


// Get the username for the player
function getUsername() {
    this.username = document.getElementById("userName").value;
}

// Spawn slimes
function spawnSlimes() {

    // Remove all slimeballs
    if(gameEngine.entities.length > this.numberOfPlayers) {
        this.despawnSlimes();
    }

    // Reset the player score
    gameEngine.player.score = 0;

    // Change the title of the button
    document.getElementById("start").innerHTML = "Restart";

    // Generate SlimeBalls for each player
    for(i = 0; i < this.numberOfPlayers; i++) {
        for(j = 0; j < this.slimeBallLimit; j++) {
            x = Math.floor(Math.random() * PARAMS.CANVAS_WIDTH)
            y = Math.floor(Math.random() * PARAMS.CANVAS_HEIGHT)
            gameEngine.addEntity(new SlimeBall(gameEngine, x, y, "red"));
        }
    }
}

// Remove all current slimeballs from the game
function despawnSlimes() {

    for(i = 0; i < gameEngine.entities.length; i++) {

        let entity = gameEngine.entities[i];

        if(entity instanceof SlimeBall) {
            entity.removeFromWorld = true;
        }
    }
}
