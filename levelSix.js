class LevelSix extends Level
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
        this.theVictoryBox = new VictoryBox(5375, 425, this.player);
        this.theTimer = new gameTimer(60);
        
    }

    create()
    {
        
        this.thePlatformFactory.createPlatform(300, 700, 850, 250);
        this.thePlatformFactory.createPlatform(1100, 700, 350, 250);
        this.thePlatformFactory.createPlatform(1400, 700, 350, 250);
        this.thePlatformFactory.createPlatform(1700, 700, 350, 250);
        this.thePlatformFactory.createPlatform(2000, 700, 350, 250);
        this.thePlatformFactory.createPlatform(2300, 700, 350, 250);
        this.thePlatformFactory.createPlatform(2600, 700, 350, 250);
        this.thePlatformFactory.createPlatform(2900, 700, 350, 250);
        this.thePlatformFactory.createPlatform(3200, 700, 350, 250);
        this.thePlatformFactory.createPlatform(3500, 700, 350, 250);
        this.thePlatformFactory.createPlatform(3800, 700, 350, 250);
        this.thePlatformFactory.createPlatform(4100, 700, 350, 250);
        this.thePlatformFactory.createPlatform(4400, 700, 350, 250);
        this.thePlatformFactory.createPlatform(4700, 700, 350, 250);
        this.thePlatformFactory.createPlatform(5000, 700, 350, 250);

        this.thePlatformFactory.createPlatform(5400, 700, 250, 150);
        this.theBadGuyFactory.createBreedingBadGuy("chickenSpriteSheet-01.png", 1, 1000, 300, 200, 200, this.player, this.theFireballFactory.fireballArray);
        this.theBadGuyFactory.createBreedingBadGuy("chickenSpriteSheet-01.png", 1, 1000, 500, 200, 200, this.player, this.theFireballFactory.fireballArray);
        this.theBadGuyFactory.createBreedingBadGuy("chickenSpriteSheet-01.png", 1, 1000, 700, 200, 200, this.player, this.theFireballFactory.fireballArray);
        this.theBadGuyFactory.createBreedingBadGuy("chickenSpriteSheet-01.png", 1, 1000, 100, 200, 200, this.player, this.theFireballFactory.fireballArray);
        this.theBadGuyFactory.createBreedingBadGuy("chickenSpriteSheet-01.png", 1, 2000, 100, 200, 200, this.player, this.theFireballFactory.fireballArray);
        this.theBadGuyFactory.createBreedingBadGuy("chickenSpriteSheet-01.png", 1, 3000, 500, 200, 200, this.player, this.theFireballFactory.fireballArray);
        this.theBadGuyFactory.createBreedingBadGuy("chickenSpriteSheet-01.png", 1, 4000, 300, 200, 200, this.player, this.theFireballFactory.fireballArray);
        this.theBadGuyFactory.createBreedingBadGuy("chickenSpriteSheet-01.png", 1, 5000, 700, 200, 200, this.player, this.theFireballFactory.fireballArray);
        
        

        this.theBackgroundFactory.createBackground("desertBackground-01.png", 0, -100, 5500, 1100);
    
    }
}