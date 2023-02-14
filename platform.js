class Platform
{
    x;
    y;
    length;
    height;
    thePicture;

    constructor(newX, newY, newLength, newHeight)
    {
        this.x = newX;
        this.y = newY;
        this.length = newLength;
        this.thePicture = new Image();
        this.height = newHeight;
        this.thePicture.src = "pixelPlatformGrass-01.png";

        
    }

    draw()
    {
        c.drawImage(this.thePicture,0,400,2100,1100, this.x, this.y, this.length, this.height);
    }

    setX(newX)
    {
        this.x = newX;
    }

    setY(newY)
    {
        this.y = newY;
    }

    setLength(newLength)
    {
        this.length = newLength;
    }

    getX()
    {
        return this.x;
    }

    getY()
    {
        return this.y;
    }

    getLength()
    {
        return this.length;
    }

    screenScroll(xCoord, XV)
    {
        if(xCoord >= 700 && XV > 0)
        {
            this.scrollLeft(XV);
        }
        else if(xCoord <= 300 && XV < 0)
        {
            this.scrollRight(XV);
        }
    }

    scrollLeft(XV)
    {
        let currentX = this.getX();
        currentX -= XV;
        this.setX(currentX);
    }

    scrollRight(XV)
    {
        let currentX = this.getX();
        currentX -= XV;
        this.setX(currentX);
    }

    checkForCollision(ourPlayer)
    {
        let playerX = ourPlayer.getX() + 75;
        let playerY = ourPlayer.getY() + 130;
        let playerYV = ourPlayer.getYVelocity();

        if((playerX >= this.x && playerX <= this.x + this.length) && (playerY <= this.y + 8 && playerY >= this.y - 8))
        {
            if(playerYV >= 0)
            {
                ourPlayer.setOnPlatform(true);
            }
        }
        else
        {
            ourPlayer.setOnPlatform(false);
        }
    }





}