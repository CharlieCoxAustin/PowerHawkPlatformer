class gameBackground{

    picture;
    bgx;
    bgy;
    bgwidth;
    bgheight;

    constructor(aPicture,x,y, w, h)
    {
        this.picture = new Image();
        this.picture.src = aPicture;
        this.bgx = x;
        this.bgy = y;
        this.bgwidth = w;
        this.bgheight = h;

        

    }

    draw()
    {
        c.drawImage(this.getPicture(), this.bgx,this.bgy,this.bgwidth, this.bgheight);
    }

    screenScroll(xCoord, XV)
    {
        if(xCoord >= 700 && XV > 0)
        {
            this.scrollLeft(3);
        }
        else if(xCoord <= 300 && XV < 0)
        {
            this.scrollRight(-3);
        }
    }

    scrollLeft(XV)
    {
        let currentX = this.getX();
        currentX -= XV;
        this.setX(currentX);
    }

    scrollRight(XV)
    {
        let currentX = this.getX();
        currentX -= XV;
        this.setX(currentX);
    }

    getPicture()
    {
        return this.picture;
    }

    getX()
    {
        return this.bgx;
    }
    getY()
    {
        return this.bgy;
    }
    getWidth()
    {
        return this.bgwidth;
    }
    getHeight()
    {
        return this.bgheight;
    }

    setPicture(newPic)
    {
        this.picture = newPic;
    }

    setX(newX)
    {
        this.bgx = newX;
    }

    setY(newY)
    {
        this.bgy = newY;
    }
    setWidth(newWidth)
    {
        this.bgwidth = newWidth;
    }
    setHeight(newHeight)
    {
        this.bgheight = newHeight;
    }

}