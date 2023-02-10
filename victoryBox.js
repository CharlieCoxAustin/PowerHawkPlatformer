class VictoryBox
{
    x;
    y;
    ourPlayer;

    constructor(newX, newY, thePlayer)
    {   this.x = newX;
        this.y = newY;
        this.ourPlayer = thePlayer;

    }

    checkForWin()
    {
        let playerX = this.ourPlayer.getX();
        let playerY = this.ourPlayer.getY();

        if(playerX >= this.x && playerY >= this.y)
        {
            
            c.font = "48px serif";
            c.fillText("You win!", this.x,this.y - 150);
            return true;
        }
        else
        {
            return false;
        }
    }

    draw()
    {
        //c.beginPath();
        //c.lineWidth = "10";
        //c.strokeStyle = "Red";
        //c.rect(this.x, this.y, 300, 300);
        //c.stroke();
        let myPicture = new Image();
        myPicture.src = "pixelDoor-01.png"
        c.drawImage(myPicture, this.x, this.y, 300, 300);
    }

    screenScroll()
    {
        if(this.ourPlayer.getX() >= 700 && this.ourPlayer.getXVelocity() > 0)
        {
            this.scrollLeft();
        }
        else if(this.ourPlayer.getX() <= 300 && this.ourPlayer.getXVelocity() < 0)
        {
            this.scrollRight();
        }
    }

    scrollLeft()
    {
        this.x -= this.ourPlayer.getXVelocity();
    }

    scrollRight()
    {
        this.x -= this.ourPlayer.getXVelocity();
    }
}