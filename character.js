class Character{

    x;
    y;
    xVelocity;
    yVelocity;
    characterSprite;
    roar;
    music;
    leftBool;
    rightBool;
    spaceBool;
    roarBool;
    onPlatform;
    jumped;
    spriteFrame;
    frameCounter;

    //700
    //900

    constructor(cx,cy,cxv,cyv,csprite) //takes an x and y coordinate, x and y velocity, and a spritesheet
    {
        this.x = cx;
        this.y = cy;
        this.xVelocity = cxv;
        this.yVelocity = cyv;
        this.characterSprite = new Image();
        this.characterSprite.src = csprite;
        this.roar = new Audio();
        this.roar.src = "godzilla.wav";
        this.music = new Audio();
        this.music.src="Booty Call Baseball.mp3";
        this.leftBool = false;
        this.rightBool = false;
        this.spaceBool = false;
        this.roarBool = false;
        this.onPlatform = false;
        this.jumped = false;
        this.spriteFrame = 1;
        this.frameCounter = 0;

        

        window.addEventListener("keydown", this.keyHandler.bind(this));
        window.addEventListener("keyup", this.upHandler.bind(this));
        

    }

    executeMoves()
    {
        //debug statement
        
        if(this.leftBool == true)
        {
            this.leftFunction();
        }
        
        if(this.rightBool == true)
        {
            this.rightFunction();
        }
        
        if(this.spaceBool == true)
        {
            this.spaceFunction();
        }
        
        if(this.roarBool == true)
        {
            this.roarFunction();
        }
        
        if(this.onPlatform == false)
        {
            this.gravity();
        }
        else if(this.onPlatform == true)
        {
            this.jumped = false;
        }
        else
        {
            this.y = 700;
            this.yVelocity = 0;
        }

        this.passiveMove();

        if(this.y < 0) //keeps player from leaving top of screen
        {
            this.y == 0;
            this.yVelocity = 0;
        }

        if(this.onPlatform == true && this.yVelocity >= 0)
        {
            this.setYVelocity(0);
        }
        
    }

    runRight()
    {
        if(this.spriteFrame == 0)
            {
                c.drawImage(this.characterSprite,  0, 0, 298, 225, this.x, this.y + this.yVelocity, 150, 150);
            }
            else if(this.spriteFrame == 1)
            {  //237!!!!!! WINNER
                c.drawImage(this.characterSprite,  299, 0,  298, 225, this.x, this.y + this.yVelocity - 5, 150, 150);
            }
            else if(this.spriteFrame == 2)
            { //520!!!!! WINNER
                c.drawImage(this.characterSprite,  597, 0, 298, 225, this.x, this.y + this.yVelocity - 10, 150, 150);
            }
            else if(this.spriteFrame == 3)
            {  //770!!!!! WINNER
                c.drawImage(this.characterSprite,  299, 0,  298, 225, this.x, this.y + this.yVelocity - 5, 150, 150);
            }
            else if(this.spriteFrame == 4)
            {
                c.drawImage(this.characterSprite,  0, 0,  298, 225, this.x, this.y + this.yVelocity, 150, 150);
            }
            else if(this.spriteFrame == 5)
            {
                c.drawImage(this.characterSprite,  895, 0,  298, 225, this.x, this.y + this.yVelocity - 5, 150, 150);
            }
            else if(this.spriteFrame == 6)
            {
                c.drawImage(this.characterSprite,  1193, 0,  298, 225, this.x, this.y + this.yVelocity - 10, 150, 150);
            }
            else if(this.spriteFrame == 7)
            {
                c.drawImage(this.characterSprite,  895, 0,  298, 225, this.x, this.y + this.yVelocity - 5, 150, 150);
            }
    }

    runLeft()  //currently the same as run right
    {
        if(this.spriteFrame == 0)
            {
                c.drawImage(this.characterSprite,  0, 299, 298, 225, this.x, this.y + this.yVelocity, 150, 150);
            }
            else if(this.spriteFrame == 1)
            {  //237!!!!!! WINNER
                c.drawImage(this.characterSprite,  299, 299,  298, 225, this.x, this.y + this.yVelocity - 5, 150, 150);
            }
            else if(this.spriteFrame == 2)
            { //520!!!!! WINNER
                c.drawImage(this.characterSprite,  597, 299, 298, 225, this.x, this.y + this.yVelocity - 10, 150, 150);
            }
            else if(this.spriteFrame == 3)
            {  //770!!!!! WINNER
                c.drawImage(this.characterSprite,  299, 299,  298, 225, this.x, this.y + this.yVelocity - 5, 150, 150);
            }
            else if(this.spriteFrame == 4)
            {
                c.drawImage(this.characterSprite,  0, 299,  298, 225, this.x, this.y + this.yVelocity, 150, 150);
            }
            else if(this.spriteFrame == 5)
            {
                c.drawImage(this.characterSprite,  895, 299,  298, 225, this.x, this.y + this.yVelocity - 5, 150, 150);
            }
            else if(this.spriteFrame == 6)
            {
                c.drawImage(this.characterSprite,  1193, 299,  298, 225, this.x, this.y + this.yVelocity - 10, 150, 150);
            }
            else if(this.spriteFrame == 7)
            {
                c.drawImage(this.characterSprite,  895, 299,  298, 225, this.x, this.y + this.yVelocity - 5, 150, 150);
            }
    }

    jumpRight()
    {
        c.drawImage(this.characterSprite,  299, 597, 298, 225, this.x, this.y + this.yVelocity, 150, 150);
    }

    jumpLeft()
    {
        c.drawImage(this.characterSprite,  0, 597, 298, 225, this.x, this.y + this.yVelocity, 150, 150);
    }

    standStillLeft()
    {
        c.drawImage(this.characterSprite,  0, 299, 298, 225, this.x, this.y + this.yVelocity, 150, 150);
    }

    standStillRight()
    {
        c.drawImage(this.characterSprite,  0, 0, 298, 225, this.x, this.y + this.yVelocity, 150, 150);
    }

    draw()
    {
        ++this.frameCounter;
        if(this.frameCounter >= 3)
        {
            ++this.spriteFrame;
            this.frameCounter = 0;
        }
        if(this.spriteFrame >= 8)
        {
            this.spriteFrame = 0;
        }
        
        if(this.x <= 700 && this.x >= 300)
        {  //add conditions for if he's standing still, running left, running right, or jumping(in the air at all, really)
            
            if(this.xVelocity == 0 && this.onPlatform == true) //condition for standing still
            {
                //c.drawImage(this.characterSprite, 0, 0, 200, 235, this.x, this.y + this.yVelocity, 150, 150);
                this.standStillLeft();
            }
            else if(this.onPlatform == false) //condition for being in the air.
            {
                if(this.xVelocity <= 0)
                {
                    this.jumpLeft();
                }
                else
                {
                    this.jumpRight();
                }
            }
            else if(this.onPlatform == true && this.xVelocity > 0) // condition for running right.
            {
                this.runRight();
            }
            else if(this.onPlatform == true && this.xVelocity < 0) //condition for running left
            {
                this.runLeft();
            }
        }
        else if(this.x > 700 && this.xVelocity > 0) //condition for edge of character's zone moving right.
        {
            if(this.onPlatform == true)
            {
            this.runRight();
            }
            else
            {
                this.jumpRight();
            }
        }
        else if(this.x >= 700 && this.onPlatform == false)
        {
            this.jumpRight();
        }
        else if(this.x < 300) //condition for edge of character's zone moving left.
        {
            if(this.onPlatform == false)
            {
                if(this.xVelocity <= 0)
                {
                    this.jumpLeft();
                }
                else
                {
                    this.jumpRight();
                }
            }
            else if(this.onPlatform == true && this.xVelocity < 0)
            {    
                this.runLeft();
            }
            else if(this.onPlatform == true && this.xVelocity == 0)
            {
                this.standStillLeft();
            }
        }
        else
        {
            this.standStillLeft();
        }
    }

    makeRoar()
    {
        this.roar.play();
    }

    getFrameCounter()
    {
        return this.frameCounter;
    }

    getSpriteFrame()
    {
        return this.spriteFrame;
    }

    getJumped()
    {
        return this.jumped;
    }

    getRoar()
    {
        return this.roar;
    }

    getX()
    {
        return this.x;
    }

    getY()
    {
        return this.y;
    }

    getXVelocity()
    {
        return this.xVelocity;
    }

    getYVelocity()
    {
        return this.yVelocity;
    }

    getCharacterSprite()
    {
        return this.characterSprite;
    }

    getOnPlatform()
    {
        return this.onPlatform;
    }

    setFrameCounter(newCount)
    {
        this.frameCounter = newCount;
    }

    setSpriteFrame(newFrame)
    {
        this.spriteFrame = newFrame;
    }

    setJumped(newValue)
    {
        this.jumped = newValue;
    }

    setOnPlatform(newBool)
    {
        this.onPlatform = newBool;
    }

    setRoar(newRoar)
    {
        this.roar = newRoar;
    }

    setX(newX)
    {
        this.x = newX;
    }

    setY(newY)
    {
        this.y = newY;
    }

    setXVelocity(newXV)
    {
        this.xVelocity = newXV;
    }

    setYVelocity(newYV)
    {
        this.yVelocity = newYV;
    }

    setCharacterSprite(newSprite)
    {
        this.characterSprite = newSprite;
    }


    //this is the key handler, and I'm changing it to make multiple keys work at once.
    keyHandler(event)
    {
        //this.music.play();
        if(event.key == " ")
        {
            
            if(this.jumped == false)
            {
                this.spaceBool = true;
                //this.spaceFunction();
            }
            this.jumped = true;
        }
        else if(event.key == "ArrowUp")
        {
            
            
        }
        else if(event.key == "ArrowDown")
        {
            
            
        }
        else if (event.key == "ArrowLeft")
        {
            
            this.leftBool = true;
            
        }
        else if(event.key == "ArrowRight")
        {
            
            this.rightBool = true;
            
        }
        else if(event.key == "Backspace")
        {
            
            
        }
        else if(event.key == "r")
        {
            this.makeRoar();
        }

        event.preventDefault();
    }

    

    upHandler(event)
    {
        //this.music.play();
        if(event.key == " ")
        {
            
            this.spaceBool = false;
            
        }
        else if(event.key == "ArrowUp")
        {
            
            
        }
        else if(event.key == "ArrowDown")
        {
            
            
        }
        else if (event.key == "ArrowLeft")
        {
            
            this.leftBool = false;
            
        }
        else if(event.key == "ArrowRight")
        {
            
            this.rightBool = false;
            
        }
        else if(event.key == "Backspace")
        {
            
            
        }
        else if(event.key == "r")
        {
            
            this.roarBool = false;
        }

        event.preventDefault();
    }

    rightFunction()
    {
        if(this.xVelocity <= 4)
        {
            this.xVelocity += 2;
        }
        
        if(this.x < 700)
        {
            this.x += this.xVelocity;
        }
        
    }

    leftFunction()
    {
        if(this.xVelocity >= -4)
        {
            this.xVelocity -= 2;
        }
        if(this.x > 300)
        {
            this.x += this.xVelocity;
        }
        
    }

    spaceFunction()
    {
        if(this.Y <= 0)  
        {
            this.yVelocity == 0;
            this.Y == 0;
        }
        else
        {
            this.yVelocity -= 22;
            this.y += this.yVelocity;
        }
        this.spaceBool = false;
    }

    upFunction()
    {

    }

    downFunction()
    {

    }

    gravity()
    {
        if(this.yVelocity <= 15)
        {
            this.yVelocity += 1;
        }
        this.y += this.yVelocity;
    }

    passiveMove()
    {
        if(this.x < 700 && this.x > 300)
        {
            this.x += this.xVelocity;
        }

        if(this.xVelocity != 0) 
        {
            if(this.xVelocity > 0)
            {
               this.xVelocity -= 1;
            }
            else
            {
                this.xVelocity += 1;
            }
        }

        if(this.onPlatform == true)
        {
            this.jumped = false;
        }

        console.log("player's YV = " + this.yVelocity);
    }


}