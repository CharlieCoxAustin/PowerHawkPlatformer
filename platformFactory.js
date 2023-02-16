class PlatformFactory
{
    platformArray;
    ourPlayer;

    constructor(newPlayer)
    {
        this.platformArray = [];
        this.ourPlayer = newPlayer;
    }

    addPlatform(newPlatform)
    {
        this.platformArray.push(newPlatform);
    }

    createPlatform(newX, newY, newLength, newHeight)
    {
        this.platformArray.push(new Platform(newX, newY, newLength, newHeight));
    }

    createRockPlatform(newX, newY, newLength, newHeight)
    {
        this.platformArray.push(new RockPlatform(newX, newY, newLength, newHeight));
    }

    draw()
    {
        for(let i = 0; i < this.platformArray.length; ++i)
        {
            this.platformArray[i].draw();
        }
    }

    screenScroll()
    {
        for(let i = 0; i < this.platformArray.length; ++i)
        {
            this.platformArray[i].screenScroll(this.ourPlayer.getX(), this.ourPlayer.getXVelocity());
        }
    }

    checkForCollision()
    {
        for(let i = 0; i < this.platformArray.length; ++i)
        {
            this.platformArray[i].checkForCollision(this.ourPlayer);
            if(this.ourPlayer.getOnPlatform() == true)
            {
                break;
            }
        }
    }

}