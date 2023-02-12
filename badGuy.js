class BadGuy
{
    hitPoints;
    thePicture;
    x;
    y;
    originalY;
    xVelocity;
    yVelocity;
    width;
    height;
    deadBool;
    ourPlayer;
    fireBallArray;
    upBool;

    constructor(picture, hp, xValue, yValue, newWidth, newHeight, player, fireballs)
    {
        this.thePicture = new Image();
        this.thePicture.src = picture;
        this.hitPoints = hp;
        this.x = xValue;
        this.y = yValue;
        this.originalY = yValue;
        this.xVelocity = -1;
        this.yVelocity = 0;
        this.width = newWidth;
        this.height = newHeight;
        this.deadBool = false;
        this.ourPlayer = player;
        this.fireBallArray = fireballs;
        this.upBool = false;
    }

    draw()
    {
        c.drawImage(this.thePicture, this.x, this.y, this.width, this.height);
    }

    hover()
    {
        if(this.upBool == false)
        {
            if(this.y < this.originalY + 35)
            {
                this.y++;
            }
            else
            {
                this.upBool = true;
            }
        }
        else if(this.upBool == true)
        {
            if(this.y > this.originalY - 35)
            {
                this.y--;
            }
            else
            {
                this.upBool = false;
            }
        }
    }

    executeMoves()
    {
        this.x += this.xVelocity;
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

    die()
    {
        this.yVelocity++;
        this.y += this.yVelocity;
    }

    checkForDeath()
    {
        for(let i = 0; i < this.fireBallArray.length; ++i)
        {
            let fireballX = this.fireBallArray[i].getX();
            let fireballY = this.fireBallArray[i].getY();
            
            if(fireballX >= this.x && fireballX <= this.x + this.width)
            {
                if(fireballY >= this.y && fireballY <= this.y + this.height - 75)
                {
                    this.deadBool = true;
                }
            }
        }
    }
}