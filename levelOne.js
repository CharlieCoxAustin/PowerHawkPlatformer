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
        this.theFireballFactory = new FireballFactory(this.player, "charlieThrowableChickenWing-01.png");
        this.thePlatformFactory = new PlatformFactory(this.player);
        this.theBadGuyFactory = new BadGuyFactory(this.player); 
        this.theVictoryBox = new VictoryBox(5460, 400, this.player);
        this.theTimer = new gameTimer(60);
        
    }

    create()
    {
        this.thePlatformFactory.createRockPlatform(1100, 600, 150, 150);
        this.thePlatformFactory.createRockPlatform(1200, 400, 150, 150);
        this.thePlatformFactory.createRockPlatform(300, 700, 850, 250);
        this.thePlatformFactory.createRockPlatform(1500, 700, 850, 150);
        this.thePlatformFactory.createRockPlatform(2500, 400, 150, 150);
        this.thePlatformFactory.createRockPlatform(2800, 200, 350, 150);
        this.thePlatformFactory.createRockPlatform(3200, 700, 150, 150);
        this.thePlatformFactory.createRockPlatform(3100, 200, 150, 150);
        this.thePlatformFactory.createRockPlatform(3400, 300, 150, 150);
        this.thePlatformFactory.createRockPlatform(3500, 700, 450, 150);
        this.thePlatformFactory.createRockPlatform(3800, 200, 150, 150);
        this.thePlatformFactory.createRockPlatform(3900, 700, 150, 150);
        this.thePlatformFactory.createRockPlatform(4100, 200, 150, 150);
        this.thePlatformFactory.createRockPlatform(4200, 700, 150, 150);
        this.thePlatformFactory.createRockPlatform(4500, 200, 150, 150);
        this.thePlatformFactory.createRockPlatform(4600, 700, 150, 150);
        this.thePlatformFactory.createRockPlatform(4900, 200, 250, 150);
        this.thePlatformFactory.createRockPlatform(4800, 700, 50, 150);
        this.thePlatformFactory.createRockPlatform(5200, 200, 150, 150);
        this.thePlatformFactory.createRockPlatform(5100, 700, 150, 150);
        this.thePlatformFactory.createRockPlatform(5400, 700, 250, 150);
        this.theBadGuyFactory.createBreedingBadGuy("chickenSpriteSheet-01.png", 1, 2000, 300, 200, 200, this.player, this.theFireballFactory.fireballArray);
        

        this.theBackgroundFactory.createBackground("spaceBackground-01.png", 0, -100, 5500, 1100);
    
    }



}