class Canvas
{
    canvas; 
    c;

    constructor()
    {   
        this.canvas = document.querySelector("canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.height;
        this.c = this.canvas.getContext("2d");
    }




}