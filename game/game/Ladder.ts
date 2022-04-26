class Ladder{
    p:Point;
    height:number;
    width:number;
    image:HTMLImageElement;
    canvas:HTMLCanvasElement
    ctx :CanvasRenderingContext2D
    top:number;
    correctPositions:Point[];
    constructor(canvas:HTMLCanvasElement,
        ctx :CanvasRenderingContext2D,
        startpt:Point,image:HTMLImageElement){
        
        this.p=startpt;
       
        this.canvas=canvas
        this.ctx=ctx
        this.image=image;

        this.height=this.image.height;
        this.width=this.image.width;
        this.top=0;
    }
    draw(){
        this.ctx.drawImage(this.image,this.p.x,this.p.y,this.width,this.height)
    }


    isinside(pt:Point,plank:Plank){
       let offset=10;
        let ladderPoint=this.correctPositions[this.top];
      //  console.log("Top 3 "+curruntLadder.top);

       // console.log("Top ="+ this.top);
       // console.log("point ="+JSON.stringify( ladderPoint));
        if((pt.x>=ladderPoint.x-offset && pt.x<=ladderPoint.x+plank.width+offset) && (pt.y>=ladderPoint.y-offset && pt.y<=ladderPoint.y+plank.height+offset)){
           return true;
        }
    }
}