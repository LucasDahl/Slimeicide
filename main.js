const gameEngine = new GameEngine();

// Load the assets
const ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./sprites/SlimeSheet.png")
ASSET_MANAGER.queueDownload("./sprites/SlimeBallSheet.png")

ASSET_MANAGER.downloadAll(() => {

    // Get teh canvas and the context.
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

    // Add the Character
    gameEngine.addEntity(new Player(gameEngine));

    // Put the context into the game engine
	gameEngine.init(ctx);

    // Start the game engine.
	gameEngine.start();
});
