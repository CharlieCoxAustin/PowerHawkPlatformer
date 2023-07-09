class FloatingObject extends gameBackground
{
    picture;
    bgx;
    bgy;
    bgwidth;
    bgheight;
    originalY;
    upBool;

    constructor(aPicture,x,y, w, h)
    {
        super(aPicture,x,y, w, h);
        this.picture = new Image();
        this.picture.src = aPicture;
        this.bgx = x;
        this.bgy = y;
        this.bgwidth = w;
        this.bgheight = h;
        this.originalY = y;
        this.upBool = true;

    }

    draw()
    {
        if (this.upBool == false)
        {
           if(this.bgy > this.originalY + 35)
           {
              this.bgy--;
              this.upBool = true;
           }
           else
           {
              this.bgy++;
           }
        }
        else
        {
            if(this.bgy <= this.originalY - 35)
            {
                this.bgy++;
                this.upBool = false;
            }
            else
            {
                this.bgy--;
            }
        }

        c.drawImage(this.picture, this.bgx,this.bgy,this.bgwidth, this.bgheight);
    }

    screenScroll(xCoord, XV)
    {
        if(xCoord >= 700 && XV > 0)
        {
            this.scrollLeft(XV);
        }
        else if(xCoord <= 300 && XV < 0)
        {
            this.scrollRight(XV);
        }
    }





}