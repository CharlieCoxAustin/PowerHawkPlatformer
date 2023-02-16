class BadGuyFactory
{
    badGuyArray;
    ourPlayer;
    ourPicture;

    constructor(player)
    {
        this.badGuyArray = [];
        this.ourPlayer = player;


    }

    createBadGuy(picture, hp, xValue, yValue, newWidth, newHeight, player, fireballs)
    {
        this.badGuyArray.push(new BadGuy(picture, hp, xValue, yValue, newWidth, newHeight, player, fireballs));
    }

    createSmartBadGuy(picture, hp, xValue, yValue, newWidth, newHeight, player, fireballs)
    {
        this.badGuyArray.push(new SmartBadGuy(picture, hp, xValue, yValue, newWidth, newHeight, player, fireballs));
    }

    createFastBadGuy(picture, hp, xValue, yValue, newWidth, newHeight, player, fireballs)
    {
        this.badGuyArray.push(new FastBadGuy(picture, hp, xValue, yValue, newWidth, newHeight, player, fireballs));
    }

    createBreedingBadGuy(picture, hp, xValue, yValue, newWidth, newHeight, player, fireballs)
    {
        this.badGuyArray.push(new BreedingBadGuy(picture, hp, xValue, yValue, newWidth, newHeight, player, fireballs, this.badGuyArray));
    }

    draw()
    {
        for(let i = 0; i < this.badGuyArray.length; ++i)
        {
            this.badGuyArray[i].draw();
        }
    }

    hover()
    {
        for(let i = 0; i < this.badGuyArray.length; ++i)
        {
            this.badGuyArray[i].hover();
        }
    }

    executeMoves()
    {
        for(let i = 0; i < this.badGuyArray.length; ++i)
        {
            this.badGuyArray[i].executeMoves();
            if(this.badGuyArray[i].getY() >= 2000)
            {
                this.badGuyArray.splice(i, 1);
            }
        }
    }

    checkForDeath()
    {
        for(let i = 0; i < this.badGuyArray.length; ++i)
        {
            this.badGuyArray[i].checkForDeath();
        }
    }

    die()
    {
        for(let i = 0; i < this.badGuyArray.length; ++i)
        {
            this.badGuyArray[i].die();
        }
    }

    getBadGuy(i)
    {
        return this.badGuyArray[i];
    }




}