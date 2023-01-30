const gameEngine = new GameEngine();

// Load the assets
const ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./sprites/SlimeSheet.png")
ASSET_MANAGER.queueDownload("./sprites/SlimeBallSheet.png")

// Properties
this.slimeBallLimit = 16;
this.NumberOfPlayers = 1;
this.playerColors = [];

ASSET_MANAGER.downloadAll(() => {

    // Get teh canvas and the context.
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

    // Add the Character
    player = new Player(gameEngine, "red");
    gameEngine.addEntity(player);
    gameEngine.player = player;

    // Generate SlimeBalls for each player
    for(i = 0; i < this.NumberOfPlayers; i++) {
        for(j = 0; j < this.slimeBallLimit; j++) {
            x = Math.floor(Math.random() * PARAMS.CANVAS_WIDTH)
            y = Math.floor(Math.random() * PARAMS.CANVAS_HEIGHT)
            gameEngine.addEntity(new SlimeBall(gameEngine, x, y, "red"));
        }
    }


    // Put the context into the game engine
	gameEngine.init(ctx);

    // Start the game engine.
	gameEngine.start();
});
