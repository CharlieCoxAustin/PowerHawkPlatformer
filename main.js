

var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth - 150;
canvas.height = window.innerHeight - 150;
c = canvas.getContext("2d");
a = new Audio();
a.src="explosion.wav";


console.log("running");
console.log("width and height: " + window.innerWidth + " " + window.innerHeight);
console.log(canvas);

let theLevel;
let levelNum = 4;
let newLevel;

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
        case 4:
        {
            theLevel = new LevelFour(500, 500, playerImage, 5460, 400); 
            break;
        }
        case 5:
        {
            theLevel = new LevelFive(500, 500, playerImage, 5460, 400); 
            break;
        }  
        case 6:
        {
            theLevel = new LevelSix(500, 500, playerImage, 5460, 400); 
            break;
        }
        case 7:
        {
            theLevel = new LevelSeven(500, 500, playerImage, 5460, 400); 
            break;
        }
        case 8:
        {
            theLevel = new LevelEight(500, 500, playerImage, 5460, 400); 
            break;
        }
        case 9:
        {
            theLevel = new LevelNine(500, 500, playerImage, 5460, 400); 
            break;
        } 
        case 10:
        {
            theLevel = new LevelTen(500, 500, playerImage, 5460, 400); 
            break;
        } 
        case 11:
        {
            theLevel = new LevelEleven(500, 500, playerImage, 5460, 400); 
            break;
        } 
        case 12:
        {
            theLevel = new LevelTwelve(500, 500, playerImage, 5460, 400); 
            break;
        }         
    }
    
    theLevel.create();
}

init(levelNum);

function animate()
{
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    if(theLevel.checkIfFallen() == true || theLevel.checkIfKilled() == true) //this should be exported to a function in character class
    {
        //need to find a way to not stack audio things.
        cancelAnimationFrame(animate);
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
        if(levelNum >= 13) //if the level number is higher than the number of levels, it restarts.
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