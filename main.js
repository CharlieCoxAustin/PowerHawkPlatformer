

var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
c = canvas.getContext("2d");

console.log("running");
console.log(canvas);

let theLevel;
let levelNum = 1;

function init(levelNum)
{
    let playerImage = new Image();
    playerImage.src = "joeSpriteSheet-01.png";
    switch(levelNum)
    {
        case 1:
        {
            theLevel = new LevelOne(500, 500, playerImage, 5460, 400);
            break; 
        }
        case 2:
        {
            theLevel = new LevelTwo(500, 500, playerImage, 5460, 400);
            break; 
        }
        case 3:
        {
            theLevel = new LevelThree(500, 500, playerImage, 5460, 400);
            break;
        }
    }
    
    
    //theLevel = new LevelOne(500, 500, playerImage, 5460, 400);
    theLevel.create();
}

init(levelNum);

function animate()
{
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    if(theLevel.checkIfFallen() == true) //this should be exported to a function in character class
    {
        init(levelNum);
    }
    
    theLevel.executeMoves();
    theLevel.checkDistance();
    theLevel.screenScroll();
    theLevel.checkForCollision();
    theLevel.checkForDeath();
    if(theLevel.checkForVictory())
    {
        levelNum++;
        if(levelNum >= 4)
        {
            levelNum = 1;
        }
        init(levelNum);
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