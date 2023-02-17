class StreetPlatform extends Platform
{
    constructor(newX, newY, newLength, newHeight)
    {
        super(newX, newY, newLength, newHeight);
        this.thePicture = new Image();
        this.thePicture.src = "streetPlatform-01.png";
    }

    draw()
    {
        c.drawImage(this.thePicture,0,400,2100,1600, this.x, this.y, this.length, this.height);
    }


}