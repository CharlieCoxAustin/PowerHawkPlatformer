class Level
{
    theBackgroundFactory;
    theFireballFactory;
    thePlatformFactory;
    theVictoryBox;
    player;
    theBadGuyFactory;
    theTimer;

    constructor(playerX, playerY, playerImage, endingX, endingY)
    {   
        this.player = new Character(playerX,playerY,0,0,playerImage);
        this.theBackgroundFactory = new BackgroundFactory(this.player);
        this.theFireballFactory = new FireballFactory(this.player, "charlieThrowableChickenWing-01.png");
        this.thePlatformFactory = new PlatformFactory(this.player);
        this.theVictoryBox = new VictoryBox(endingX, endingY, this.player);
        this.theBadGuyFactory = new BadGuyFactory(this.player); 
        this.theTimer = new gameTimer(60);
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
        this.theTimer.draw();
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
        if(this.player.checkIfFallen(this.theFireballFactory) == true)
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
        
        let currentX = this.player.getX();
        let currentY = this.player.getY();
        for(let i = 0; i < this.theBadGuyFactory.badGuyArray.length; ++i)
        {
            let badGuyX = this.theBadGuyFactory.badGuyArray[i].getX();
            let badGuyY = this.theBadGuyFactory.badGuyArray[i].getY();
            let badGuyHeight = this.theBadGuyFactory.badGuyArray[i].getHeight();
            let badGuyWidth = this.theBadGuyFactory.badGuyArray[i].getWidth();
            
            if(!this.theBadGuyFactory.badGuyArray[i].getDeadBool())
            {
                if(currentX >= badGuyX - 25 && currentX <= badGuyX + badGuyWidth - 50)
                {
                    if(currentY >= badGuyY - 25 && currentY <= badGuyY + badGuyHeight - 25)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
            }
        }

        //return false;
        

    }



}