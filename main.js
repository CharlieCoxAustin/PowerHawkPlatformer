

var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
c = canvas.getContext("2d");

console.log("running");
console.log(canvas);

let theLevel;

function init()
{
    let playerImage = new Image();
    playerImage.src = "joeSpriteSheet-01.png";
    theLevel = new LevelOne(500, 500, playerImage, 5460, 400);
    theLevel.create();
}

init();

function animate()
{
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    if(theLevel.player.getY() > 1000) //this should be exported to a function in character class
    {
        init();
    }
    
    theLevel.executeMoves();
    theLevel.checkDistance();
    theLevel.screenScroll();
    theLevel.checkForCollision();
    theLevel.checkForDeath();
    if(theLevel.checkForVictory())
    {
        init();
    }
    
    theLevel.draw();

}

function victoryAnimate()
{
    console.log("Victory animate!");
    requestAnimationFrame(victoryAnimate);
    c.clearRect(0,0,innerWidth,innerHeight);
    theBackgroundFactory.draw();

}

animate();