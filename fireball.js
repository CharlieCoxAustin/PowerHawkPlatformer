class Fireball
{
    fireX;
    fireY;
    fireXV;
    fireYV;
    picture;
    sound;
    angle;
    
    constructor(x,y, image)
    {
        this.fireXV = 25;
        this.fireYV = -10;
        this.fireX = x;
        this.fireY = y;
        this.picture = new Image();
        this.picture.src = image;
        this.sound = new Audio();
        this.sound.src = "explosion.wav";
        this.angle = 1;

        this.sound.volume = .1;
        this.sound.play();

    }

    draw()
    {
        //c.drawImage(this.picture, this.fireX + this.fireXV, this.fireY, 125, 125);
        this.fireX += this.fireXV;
        this.gravity();
        c.save();
        c.translate(this.fireX, this.fireY);
        c.rotate(this.angle * (Math.PI/4));
        c.drawImage(this.picture, -63, -63, 125, 125);
        c.restore();
        this.angle++;
    }

    gravity()
    {
        this.fireYV += 1;
        this.fireY += this.fireYV;
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

    setYV(newYV)
    {
        this.fireYV = newYV;
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