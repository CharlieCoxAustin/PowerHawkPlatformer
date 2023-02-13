class Fireball
{
    fireX;
    fireY;
    fireXV;
    picture;
    sound;
    
    constructor(x,y)
    {
        this.fireXV = 15;
        this.fireX = x;
        this.fireY = y;
        this.picture = new Image();
        this.picture.src = "charlieThrowableChickenWing-01.png";
        this.sound = new Audio();
        this.sound.src = "explosion.wav";

        this.sound.play();

    }

    draw()
    {
        c.drawImage(this.picture, this.fireX + this.fireXV, this.fireY, 125, 125);
        this.fireX += this.fireXV;
    }

    setX(newX)
    {
        this.fireX = newX;
    }

    setY(newY)
    {
        this.fireY = newY;
    }

    setXV(newXV)
    {
        this.fireXV = newXV;
    }

    setPicture(newPic)
    {
        this.picture = newPic;
    }

    getPicture()
    {
        return this.picture;
    }

    getX()
    {
        return this.fireX;
    }

    getY()
    {
        return this.fireY;
    }

    getXV()
    {
        return this.fireXV;
    }




}