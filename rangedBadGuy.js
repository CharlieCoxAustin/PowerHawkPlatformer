class RangedBadGuy extends BadGuy
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
    attackCounter;

    constructor(picture, hp, xValue, yValue, newWidth, newHeight, player, fireballs)
    {
        super();
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
        this.attackCounter = 0;
    }
   
    executeMoves()
    {
        this.rangedAttack();
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

    rangedAttack()
    {
        this.attackCounter++;
        if(this.attackCounter >= 150)
        {
            this.fireBallArray.push(new BadGuyFireBall(this.x + 25, this.y, "egg-01.png", false));
            this.attackCounter = 0;
        }
    }
}