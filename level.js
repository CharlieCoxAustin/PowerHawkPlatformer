class Level
{
    theBackgroundFactory;
    theFireballFactory;
    thePlatformFactory;
    theVictoryBox;
    player;
    theBadGuyFactory;

    constructor(playerX, playerY, playerImage, endingX, endingY)
    {   
        this.player = new Character(playerX,playerY,0,0,playerImage);
        this.theBackgroundFactory = new BackgroundFactory(this.player);
        this.theFireballFactory = new FireballFactory(this.player, "charlieThrowableChickenWing-01.png");
        this.thePlatformFactory = new PlatformFactory(this.player);
        this.theVictoryBox = new VictoryBox(endingX, endingY, this.player);
        this.theBadGuyFactory = new BadGuyFactory(this.player); 
    }

    create() //add all the stuff to the various containers
    {

    }

    executeMoves() //have all the containers execute moves if they have them.
    {
        this.player.executeMoves();
        this.theBadGuyFactory.executeMoves();
    }

    screenScroll() //have all the containers scroll if they scroll
    {
        this.theBackgroundFactory.screenScroll();
        this.theVictoryBox.screenScroll();
        this.thePlatformFactory.screenScroll();
    }

    draw() //have all the containers draw
    {
        this.theBackgroundFactory.draw();
        this.thePlatformFactory.draw();
        this.theVictoryBox.draw();
        this.theBadGuyFactory.draw();
        this.theFireballFactory.draw();
        this.player.draw();
    }

    checkDistance() //have the containers that check distance check distances
    {
        this.theFireballFactory.checkDistance();
    }

    checkForCollision()//have all containers that can collide check for collisions.
    {
        this.thePlatformFactory.checkForCollision();
    }

    checkForDeath()//have player and badguys check for death
    {
        this.theBadGuyFactory.checkForDeath();
    }

    checkForVictory()//have the victory box check for victory
    {
        if(this.theVictoryBox.checkForWin() == true)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    checkIfFallen() //check to see if player is dead
    {
        if(this.player.checkIfFallen() == true)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    checkIfKilled()
    {
        console.log("check if killed: ");
        let currentX = this.player.getX() + 75;
        let currentY = this.player.getY() + 75;
        for(let i = 0; i < this.theBadGuyFactory.badGuyArray.length; ++i)
        {
            let badGuyX = this.theBadGuyFactory.badGuyArray[i].getX();
            let badGuyY = this.theBadGuyFactory.badGuyArray[i].getY();
            let badGuyHeight = this.theBadGuyFactory.badGuyArray[i].getHeight();
            let badGuyWidth = this.theBadGuyFactory.badGuyArray[i].getWidth();
            console.log("bad guy x and y= " + badGuyX + " " + badGuyY);
            if(currentX >= badGuyX && currentX <= badGuyX + badGuyWidth)
            {
                if(currentY >= badGuyY && currentY <= badGuyY + badGuyHeight)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }
        console.log("currentX and Y = " + currentX + " " + currentY);

    }



}