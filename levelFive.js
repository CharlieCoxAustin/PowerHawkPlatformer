class LevelFive extends Level
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
        this.player = new Character(500,500,0,0,"rocketSpriteSheet-01.png");
        this.theBackgroundFactory = new BackgroundFactory(this.player);
        this.theFireballFactory = new FireballFactory(this.player, "rocketThrowableRecord-01.png");
        this.thePlatformFactory = new PlatformFactory(this.player);
        this.theBadGuyFactory = new BadGuyFactory(this.player); 
        this.theVictoryBox = new VictoryBox(5375, 425, this.player);
        this.theTimer = new gameTimer(60);
        
    }

    create()
    {
        
        this.thePlatformFactory.createPlatform(400, 700, 250, 250);
        this.thePlatformFactory.createPlatform(1000, 500, 150, 150);
        this.thePlatformFactory.createPlatform(1300, 300, 150, 150);
        this.thePlatformFactory.createPlatform(1600, 200, 150, 150);
        this.thePlatformFactory.createPlatform(1900, 200, 150, 150);
        this.thePlatformFactory.createPlatform(2200, 200, 150, 150);
        this.thePlatformFactory.createPlatform(2600, 300, 150, 150);
        this.thePlatformFactory.createPlatform(2750, 400, 100, 150);
        this.thePlatformFactory.createPlatform(2900, 500, 100, 150);
        this.thePlatformFactory.createPlatform(3050, 600, 100, 150);
        this.thePlatformFactory.createPlatform(3200, 700, 100, 150);
        this.thePlatformFactory.createPlatform(3350, 600, 100, 150);
        this.thePlatformFactory.createPlatform(3500, 500, 100, 150);
        this.thePlatformFactory.createPlatform(3650, 400, 100, 150);
        this.thePlatformFactory.createPlatform(3800, 300, 100, 150);
        this.thePlatformFactory.createPlatform(3950, 200, 100, 150);
        this.thePlatformFactory.createPlatform(4450, 600, 100, 150);
        this.thePlatformFactory.createPlatform(4600, 500, 100, 150);
        this.thePlatformFactory.createPlatform(4750, 400, 100, 150);
        this.thePlatformFactory.createPlatform(4900, 300, 100, 150);
        this.thePlatformFactory.createPlatform(5400, 700, 250, 150);
        this.theBadGuyFactory.createSmartBadGuy("chickenSpriteSheet-01.png", 1, 1000, 300, 200, 200, this.player, this.theFireballFactory.fireballArray);
        this.theBadGuyFactory.createSmartBadGuy("chickenSpriteSheet-01.png", 1, 1800, 300, 200, 200, this.player, this.theFireballFactory.fireballArray);
        this.theBadGuyFactory.createSmartBadGuy("chickenSpriteSheet-01.png", 1, 1800, 300, 200, 200, this.player, this.theFireballFactory.fireballArray);
        this.theBadGuyFactory.createSmartBadGuy("chickenSpriteSheet-01.png", 1, 2600, 300, 200, 200, this.player, this.theFireballFactory.fireballArray);
        this.theBadGuyFactory.createSmartBadGuy("chickenSpriteSheet-01.png", 1, 3400, 300, 200, 200, this.player, this.theFireballFactory.fireballArray);
        this.theBadGuyFactory.createSmartBadGuy("chickenSpriteSheet-01.png", 1, 4200, 300, 200, 200, this.player, this.theFireballFactory.fireballArray);
        this.theBadGuyFactory.createSmartBadGuy("chickenSpriteSheet-01.png", 1, 5000, 300, 200, 200, this.player, this.theFireballFactory.fireballArray);
        this.theBadGuyFactory.createSmartBadGuy("chickenSpriteSheet-01.png", 1, 5800, 300, 200, 200, this.player, this.theFireballFactory.fireballArray);

        this.theBackgroundFactory.createBackground("desertBackground-01.png", 0, -100, 5500, 1100);
    
    }
}