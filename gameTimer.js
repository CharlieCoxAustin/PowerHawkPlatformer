class gameTimer
{
    theTime;
    drawTimer;
    constructor(gameTime)
    {
        this.theTime = gameTime;
        this.drawTimer = 0;
    }

    draw()
    {
        this.drawTimer++;
        if(this.drawTimer >=75)
        {
            this.drawTimer = 0;
            this.theTime--;
        }
        c.font = "40px serif";
        c.fillStyle = "red";
        c.fillText(this.theTime, 50, 50);
    }

    getTime()
    {
        return this.theTime;
    }
}