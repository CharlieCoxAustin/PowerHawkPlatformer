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
        this.player = new Character(500,300,0,0,"charlieSpriteSheet-01.png");
        this.theBackgroundFactory = new BackgroundFactory(this.player);
        this.theFireballFactory = new FireballFactory(this.player, "charlieThrowableChickenWing-01.png");
        this.thePlatformFactory = new PlatformFactory(this.player);
        this.theBadGuyFactory = new BadGuyFactory(this.player); 
        this.theVictoryBox = new VictoryBox(5400, 440, this.player);
        this.theTimer = new gameTimer(60);
        
    }

    create()
    {

        this.thePlatformFactory.createStreetPlatform(300, 600, 850, 250);
        this.thePlatformFactory.createStreetPlatform(1500, 650, 850, 150);
        this.thePlatformFactory.createStreetPlatform(2500, 400, 150, 150);
        this.thePlatformFactory.createStreetPlatform(2800, 200, 350, 150);
        this.thePlatformFactory.createStreetPlatform(3300, 300, 150, 150);
        this.thePlatformFactory.createStreetPlatform(3500, 700, 450, 150);
        this.thePlatformFactory.createStreetPlatform(4200, 700, 150, 150);
        this.thePlatformFactory.createStreetPlatform(4500, 350, 150, 150);
        this.thePlatformFactory.createStreetPlatform(4800, 700, 50, 150);
        this.thePlatformFactory.createStreetPlatform(5100, 700, 150, 150);
        this.thePlatformFactory.createStreetPlatform(5400, 700, 250, 150);
        //this.theBadGuyFactory.createRangedBadGuy("chickenSpriteSheet-01.png", 1, 2000, Math.random() * 500, 200, 200, this.player, this.theFireballFactory.fireballArray);
        this.theBackgroundFactory.createBackground("cityBackground-01.png", 0, -100, 5500, 1100);
        this.theBackgroundFactory.createFloatingObject("doubleJump-01.png", 1200, 300, 350, 250);
    
    }



}