class BackgroundFactory{

    backGroundArray;
    ourPlayer;

    constructor(newPlayer)
    {
        this.backGroundArray = [];
        this.ourPlayer = newPlayer;
    }

    screenScroll()
    {
        for(let i = 0; i < this.backGroundArray.length; ++i)
        {
            this.backGroundArray[i].screenScroll(this.ourPlayer.getX(), this.ourPlayer.getXVelocity());
        }
    }

    draw()
    {
        for(let i = 0; i < this.backGroundArray.length; ++i)
        {
            this.backGroundArray[i].draw();
        }

    }

    addBackGround(newBG)
    {
        this.backGroundArray.push(newBG);
    }

    createBackground(aPicture,x,y, w, h)
    {
        let newBackground = new gameBackground(aPicture,x,y, w, h);
        this.backGroundArray.push(newBackground);
    }

}