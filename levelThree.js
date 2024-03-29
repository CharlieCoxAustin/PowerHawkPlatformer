class LevelThree extends Level
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
        this.theVictoryBox = new VictoryBox(5460, 400, this.player);
        this.theTimer = new gameTimer(60);
        
    }

    create()
    {
        this.thePlatformFactory.createStreetPlatform(1200, 400, 150, 150);
        this.thePlatformFactory.createStreetPlatform(300, 700, 850, 250);
        this.thePlatformFactory.createStreetPlatform(1500, 700, 850, 150);
        this.thePlatformFactory.createStreetPlatform(2500, 400, 150, 150);
        this.thePlatformFactory.createStreetPlatform(2800, 500, 350, 150);
        this.thePlatformFactory.createStreetPlatform(3200, 700, 150, 150);
        this.thePlatformFactory.createStreetPlatform(3100, 200, 150, 150);
        this.thePlatformFactory.createStreetPlatform(3400, 300, 150, 150);
        this.thePlatformFactory.createStreetPlatform(3500, 700, 450, 150);
        this.thePlatformFactory.createStreetPlatform(3800, 200, 150, 150);
        this.thePlatformFactory.createStreetPlatform(4100, 200, 150, 150);
        this.thePlatformFactory.createStreetPlatform(4200, 700, 150, 150);
        this.thePlatformFactory.createStreetPlatform(4500, 200, 150, 150);
        this.thePlatformFactory.createStreetPlatform(4600, 700, 150, 150);
        this.thePlatformFactory.createStreetPlatform(4900, 200, 250, 150);
        this.thePlatformFactory.createStreetPlatform(4800, 700, 50, 150);
        this.thePlatformFactory.createStreetPlatform(5200, 200, 150, 150);
        this.thePlatformFactory.createStreetPlatform(5100, 700, 150, 150);
        this.thePlatformFactory.createStreetPlatform(5400, 700, 250, 150);
        
        this.theBadGuyFactory.createSmartBadGuy("chickenSpriteSheet-01.png", 1, 2000, 300, 200, 200, this.player, this.theFireballFactory.fireballArray);
        this.theBadGuyFactory.createSmartBadGuy("chickenSpriteSheet-01.png", 1, 1000, 500, 200, 200, this.player, this.theFireballFactory.fireballArray);
        this.theBadGuyFactory.createSmartBadGuy("chickenSpriteSheet-01.png", 1, 3000, 600, 200, 200, this.player, this.theFireballFactory.fireballArray);
        this.theBadGuyFactory.createSmartBadGuy("chickenSpriteSheet-01.png", 1, 4000, 200, 200, 200, this.player, this.theFireballFactory.fireballArray);
        this.theBadGuyFactory.createSmartBadGuy("chickenSpriteSheet-01.png", 1, 5000, 100, 200, 200, this.player, this.theFireballFactory.fireballArray);

        this.theBackgroundFactory.createBackground("cityBackground-01.png", 0, -100, 5500, 1100);
    
    }



}