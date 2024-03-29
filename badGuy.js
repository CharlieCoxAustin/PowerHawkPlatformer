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
    spawned;
    currentFrame;
    gameFrame;

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
        this.spawned = false;
        this.currentFrame = 0;
        this.gameFrame = 0;
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
            
            if(fireballX >= this.x + 25 && fireballX <= this.x + this.width - 25)
            {
                if(fireballY >= this.y + 50 && fireballY <= this.y + this.height)
                {
                    if(this.deadBool == false && !this.fireBallArray[i].getEvilBool())
                    {
                        this.deadBool = true;
                        this.fireBallArray[i].setXV(-5);
                        this.fireBallArray[i].setYV(-5);
                        let deathSound = new Audio();
                        deathSound.src = "punch.wav";
                        deathSound.volume = .1;
                        deathSound.play();
                    }
                }
            }
        }
    }

    getX()
    {
        return this.x;
    }

    getY()
    {
        return this.y;
    }

    getWidth()
    {
        return this.width;
    }

    getHeight()
    {
        return this.height;
    }

    getDeadBool()
    {
        return this.deadBool;
    }

    setSpawned(newSpawned)
    {
        this.spawned = newSpawned;
    }

    getSpawned()
    {
        return this.spawned;
    }
}