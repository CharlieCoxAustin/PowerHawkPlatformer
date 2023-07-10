class BadGuyFireBall extends Fireball
{
    
    fireX;
    fireY;
    fireXV;
    fireYV;
    picture;
    sound;
    angle;
    directionBool;
    evilBool;
    
    constructor(x,y, image, direction)
    {
        super(x, y, image, direction);
        this.evilBool = true;
        if(direction == true)
        {
            this.fireXV = 25;
        }
        else
        {
            this.fireXV = -25;
        }
        this.fireYV = -10;
        this.fireX = x + 25;
        this.fireY = y + 125;
        this.picture = new Image();
        this.picture.src = image;
        this.sound = a;
        this.angle = 1;
        
        this.sound.src = "cluck.wav";
        this.sound.volume = .1;
        this.sound.play();
    }

    setEvilBool(value)
    {
        this.evilBool = value;
    }

    getEvilBool()
    {
        return this.evilBool;
    }

}