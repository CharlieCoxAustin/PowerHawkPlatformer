class FastBadGuy extends BadGuy
{

    constructor(picture, hp, xValue, yValue, newWidth, newHeight, player, fireballs)
    {
        super(picture, hp, xValue, yValue, newWidth, newHeight, player, fireballs);
    }

    executeMoves()
    {

        let playerXLocation = this.ourPlayer.getX();
        let playerYLocation = this.ourPlayer.getY();
        if(playerXLocation >= this.x)
        {
            this.x -= (this.xVelocity - 3);
        }
        else if(playerXLocation < this.x)
        {
            this.x += (this.xVelocity - 3);
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