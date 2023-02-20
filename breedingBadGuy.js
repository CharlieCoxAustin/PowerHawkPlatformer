class BreedingBadGuy extends BadGuy
{
    constructor(picture, hp, xValue, yValue, newWidth, newHeight, player, fireballs, baddieArray)
    {
        super(picture, hp, xValue, yValue, newWidth, newHeight, player, fireballs);
        this.badGuyArray = baddieArray;
        this.hasBred = false;
        this.facingRight = false;
    }

    executeMoves()
    {

        let playerXLocation = this.ourPlayer.getX();
        let playerYLocation = this.ourPlayer.getY();
        if(playerXLocation >= this.x)
        {
            this.x -= (this.xVelocity - 1);
            this.facingRight = true;
        }
        else if(playerXLocation < this.x)
        {
            this.x += (this.xVelocity - 1);
            this.facingRight = false;
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
                this.badGuyArray.push(new FastBadGuy("mosquitoSpriteSheet-01.png", this.hitPoints, -150, Math.random() * 700, this.width, this.height, this.ourPlayer, this.fireBallArray));
                this.badGuyArray.push(new SmartBadGuy("chickenSpriteSheet-01.png", this.hitPoints, window.innerWidth +50, Math.random() * 700, this.width, this.height, this.ourPlayer, this.fireBallArray));
                this.badGuyArray.push(new BreedingBadGuy("chickenSpriteSheet-01.png", this.hitPoints, window.innerWidth +50, Math.random() * 700, this.width, this.height, this.ourPlayer, this.fireBallArray, this.badGuyArray));
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

    draw()
    {

        if(this.gameFrame == 4)
        {
            this.currentFrame++;
            this.gameFrame = 0;
        }
        else
        {
            this.gameFrame++;
        }

        if(this.currentFrame >= 6)
        {
            this.currentFrame = 0;
        }
        if(this.facingRight == false)
        {
            switch(this.currentFrame)
            {
                case 0:
                {
                    c.drawImage(this.thePicture, 0, 0, 298, 225, this.x, this.y, this.width, this.height);
                    break;
                }
                case 1:
                {
                    c.drawImage(this.thePicture, 299, 0, 298, 225,this.x, this.y, this.width, this.height);
                    break;
                }
                case 2:
                {
                    c.drawImage(this.thePicture, 597, 0, 298, 225, this.x, this.y, this.width, this.height);
                    break;
                }
                case 3:
                {
                    c.drawImage(this.thePicture, 895, 0, 298, 225, this.x, this.y, this.width, this.height);
                    break;
                }
                case 4:
                {
                    c.drawImage(this.thePicture, 597, 0, 298, 225, this.x, this.y, this.width, this.height);
                    break;
                }
                case 5:
                {
                    c.drawImage(this.thePicture, 299, 0, 298, 225, this.x, this.y, this.width, this.height);
                    break;
                }
            }
        }
        else if(this.facingRight == true)
        {
            switch(this.currentFrame)
            {
                case 0:
                {
                    c.drawImage(this.thePicture, 0, 299, 298, 225, this.x, this.y, this.width, this.height);
                    break;
                }
                case 1:
                {
                    c.drawImage(this.thePicture, 299, 299, 298, 225,this.x, this.y, this.width, this.height);
                    break;
                }
                case 2:
                {
                    c.drawImage(this.thePicture, 597, 299, 298, 225, this.x, this.y, this.width, this.height);
                    break;
                }
                case 3:
                {
                    c.drawImage(this.thePicture, 895, 299, 298, 225, this.x, this.y, this.width, this.height);
                    break;
                }
                case 4:
                {
                    c.drawImage(this.thePicture, 597, 299, 298, 225, this.x, this.y, this.width, this.height);
                    break;
                }
                case 5:
                {
                    c.drawImage(this.thePicture, 299, 299, 298, 225, this.x, this.y, this.width, this.height);
                    break;
                }
            }
        }
    }
}