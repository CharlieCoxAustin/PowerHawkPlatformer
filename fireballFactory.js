class FireballFactory
{
    fireballArray;
    ourPlayer;

    constructor(player)
    {
        this.fireballArray = [];
        this.ourPlayer = player
        
        window.addEventListener("click", this.shootFireball.bind(this)
        //this.fireballArray.push(new Fireball(player.getX() + 125, player.getY() - 50));
        );
    }

    shootFireball()
    {
        let x = this.ourPlayer.getX();
        let y = this.ourPlayer.getY();

        this.fireballArray.push(new Fireball(x + 75, y - 25));
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