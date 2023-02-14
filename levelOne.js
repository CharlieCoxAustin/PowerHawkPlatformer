class LevelOne extends Level
{
    theBackgroundFactory;
    theFireballFactory;
    thePlatformFactory;
    theVictoryBox;
    player;
    theBadGuyFactory;

    constructor(playerX, playerY, playerImage, endingX, endingY)
    {
        super(playerX, playerY, playerImage, endingX, endingY);
        this.player = new Character(500,500,0,0,"charlieSpriteSheet-01.png");
        this.theBackgroundFactory = new BackgroundFactory(this.player);
        this.theFireballFactory = new FireballFactory(this.player);
        this.thePlatformFactory = new PlatformFactory(this.player);
        this.theBadGuyFactory = new BadGuyFactory(this.player); 
        this.theVictoryBox = new VictoryBox(5460, 400, this.player);
        
    }

    create()
    {
        this.thePlatformFactory.createPlatform(1100, 600, 150, 150);
        this.thePlatformFactory.createPlatform(1200, 400, 150, 150);
        this.thePlatformFactory.createPlatform(300, 700, 850, 250);
        this.thePlatformFactory.createPlatform(1500, 700, 850, 150);
        this.thePlatformFactory.createPlatform(2500, 400, 150, 150);
        this.thePlatformFactory.createPlatform(2800, 200, 350, 150);
        this.thePlatformFactory.createPlatform(3200, 700, 150, 150);
        this.thePlatformFactory.createPlatform(3100, 200, 150, 150);
        this.thePlatformFactory.createPlatform(3400, 300, 150, 150);
        this.thePlatformFactory.createPlatform(3500, 700, 450, 150);
        this.thePlatformFactory.createPlatform(3800, 200, 150, 150);
        this.thePlatformFactory.createPlatform(3900, 700, 150, 150);
        this.thePlatformFactory.createPlatform(4100, 200, 150, 150);
        this.thePlatformFactory.createPlatform(4200, 700, 150, 150);
        this.thePlatformFactory.createPlatform(4500, 200, 150, 150);
        this.thePlatformFactory.createPlatform(4600, 700, 150, 150);
        this.thePlatformFactory.createPlatform(4900, 200, 250, 150);
        this.thePlatformFactory.createPlatform(4800, 700, 50, 150);
        this.thePlatformFactory.createPlatform(5200, 200, 150, 150);
        this.thePlatformFactory.createPlatform(5100, 700, 150, 150);
        this.thePlatformFactory.createPlatform(5400, 700, 250, 150);
        this.theBadGuyFactory.createBadGuy("wasp.png", 1, 2000, 300, 200, 200, this.player, this.theFireballFactory.fireballArray);
        this.theBackgroundFactory.createBackground("hauntedHouseBackground-01.png", 0, -100, 5500, 1100);
    
    }



}