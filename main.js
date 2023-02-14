

var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
c = canvas.getContext("2d");

console.log("running");
console.log(canvas);
let theBackgroundFactory;
let theFireballFactory;
let thePlatformFactory;
let theVictoryBox;
let player;
let theBadGuyFactory;

function init()
{
    player = new Character(500,500,0,0,"charlieSpriteSheet-01.png");
    theBackgroundFactory = new BackgroundFactory(player);
    theBackgroundFactory.createBackground("hauntedHouseBackground-01.png", 0, -100, 5500, 1100);
    


    theFireballFactory = new FireballFactory(player);


    thePlatformFactory = new PlatformFactory(player);
    thePlatformFactory.createPlatform(1100, 600, 150, 150);
    thePlatformFactory.createPlatform(1200, 400, 150, 150);
    thePlatformFactory.createPlatform(300, 700, 850, 250);
    thePlatformFactory.createPlatform(1500, 700, 850, 150);
    thePlatformFactory.createPlatform(2500, 400, 150, 150);
    thePlatformFactory.createPlatform(2800, 200, 350, 150);
    thePlatformFactory.createPlatform(3200, 700, 150, 150);
    thePlatformFactory.createPlatform(3100, 200, 150, 150);
    thePlatformFactory.createPlatform(3400, 300, 150, 150);
    thePlatformFactory.createPlatform(3500, 700, 450, 150);
    thePlatformFactory.createPlatform(3800, 200, 150, 150);
    thePlatformFactory.createPlatform(3900, 700, 150, 150);
    thePlatformFactory.createPlatform(4100, 200, 150, 150);
    thePlatformFactory.createPlatform(4200, 700, 150, 150);
    thePlatformFactory.createPlatform(4500, 200, 150, 150);
    thePlatformFactory.createPlatform(4600, 700, 150, 150);
    thePlatformFactory.createPlatform(4900, 200, 250, 150);
    thePlatformFactory.createPlatform(4800, 700, 50, 150);
    thePlatformFactory.createPlatform(5200, 200, 150, 150);
    thePlatformFactory.createPlatform(5100, 700, 150, 150);
    thePlatformFactory.createPlatform(5400, 700, 250, 150);

    theVictoryBox = new VictoryBox(5460, 400, player);

    theBadGuyFactory = new BadGuyFactory(player);
    theBadGuyFactory.createBadGuy("wasp.png", 1, 2000, 300, 200, 200, player, theFireballFactory.fireballArray);
}

init();

function animate()
{
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    if(player.getY() > 1000)
    {
        init();
    }
    player.executeMoves();
    theBadGuyFactory.executeMoves();
    
    theBackgroundFactory.screenScroll();
    theVictoryBox.screenScroll();
    theBackgroundFactory.draw();

    thePlatformFactory.checkForCollision();
    thePlatformFactory.screenScroll();
    thePlatformFactory.draw();
    
    
    if(theVictoryBox.checkForWin() == true)
    {
        cancelAnimationFrame(animate);
        init();
    }
    else
    {
        theFireballFactory.draw();
        theVictoryBox.draw();
        player.draw();
    }

    theBadGuyFactory.draw();
    
    theBadGuyFactory.checkForDeath();
}

function victoryAnimate()
{
    console.log("Victory animate!");
    requestAnimationFrame(victoryAnimate);
    c.clearRect(0,0,innerWidth,innerHeight);
    theBackgroundFactory.draw();

}

animate();