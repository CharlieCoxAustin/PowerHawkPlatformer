class BreedingBadGuy extends BadGuy
{
    constructor(picture, hp, xValue, yValue, newWidth, newHeight, player, fireballs, baddieArray)
    {
        super(picture, hp, xValue, yValue, newWidth, newHeight, player, fireballs);
        this.badGuyArray = baddieArray;
        this.hasBred = false;
    }

    executeMoves()
    {

        let playerXLocation = this.ourPlayer.getX();
        let playerYLocation = this.ourPlayer.getY();
        if(playerXLocation >= this.x)
        {
            this.x -= (this.xVelocity - 1);
        }
        else if(playerXLocation < this.x)
        {
            this.x += (this.xVelocity - 1);
        }

        if(playerYLocation >= this.originalY)
        {
            this.originalY += 1;
        }
        else if(playerYLocation < this.originalY)
        {
            this.originalY -= 1;
        }

        let playerX = this.ourPlayer.getXVelocity();
        if(this.ourPlayer.getX() >= 700 && this.ourPlayer.getXVelocity() > 0)
        {   
            this.x -= playerX;
        }
        else if(this.ourPlayer.getX() <= 300 && this.ourPlayer.getXVelocity() < 0)
        {   
            this.x -= playerX;
        }

        if(this.deadBool == true)
        {
            if(this.hasBred == false)
            {
                this.hasBred = true;
                this.badGuyArray.push(new FastBadGuy("wasp.png", this.hitPoints, -150, Math.random() * 700, this.width, this.height, this.ourPlayer, this.fireBallArray));
                this.badGuyArray.push(new SmartBadGuy("chicken-01.png", this.hitPoints, window.innerWidth +50, Math.random() * 700, this.width, this.height, this.ourPlayer, this.fireBallArray));
                this.badGuyArray.push(new BreedingBadGuy("chicken-01.png", this.hitPoints, window.innerWidth +50, Math.random() * 700, this.width, this.height, this.ourPlayer, this.fireBallArray, this.badGuyArray));
            }
            this.die();
        }
        else if(this.deadBool != true)
        {
            this.hover();
        }

        if(this.y > 1000)
        {
            delete this;
        }
    }
}