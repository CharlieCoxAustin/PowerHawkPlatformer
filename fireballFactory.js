class FireballFactory
{
    fireballArray;
    ourPlayer;
    thrownBool;
    throwableImage;

    constructor(player, thePicture)
    {
        this.fireballArray = [];
        this.ourPlayer = player;
        this.thrownBool = false;
        this.throwableImage = thePicture;
        
        window.addEventListener("keydown", this.shootFireball.bind(this));
        window.addEventListener("keyup", this.upHandler.bind(this));
        
    }

    upHandler(event)
    {
        if(event.key == "t")
        {
            this.thrownBool = false;
        }
    }

    shootFireball(event)
    {
        let x;
        let y;

        if(event.key == "t" && this.thrownBool == false)
        {
            x = this.ourPlayer.getX();
            y = this.ourPlayer.getY();
            this.fireballArray.push(new Fireball(x + 75, y - 25, this.throwableImage));
            console.log("new throwable!");
            this.thrownBool = true;
        }
        
    }

    draw()
    {
        for(let i = 0; i < this.fireballArray.length; ++i)
        {
            this.fireballArray[i].draw();
        }
    }

    checkDistance()
    {
        for(let i = 0; i < this.fireballArray.length; ++i)
        {
            let currentX = this.fireballArray[i].getX();
            let currentY = this.fireballArray[i].getY();
            if(currentX >= window.innerWidth + 50 || currentY >= window.innerHeight + 50)
            {
                this.fireballArray.splice(i, 1);
                console.log("splicing throwables. throwables size: " + this.fireballArray.length);
            }
        }
    }
}