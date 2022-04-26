const canvas = document.getElementById("canvas");
const back = document.getElementById("background");
back.style.display = "none";
const girl = document.getElementById("girl");
girl.style.display = "none";
const ladder = document.getElementById("ladder");
ladder.style.display = "none";
const plank = document.getElementById("plank");
plank.style.display = "none";
const gold = document.getElementById("gold");
gold.style.display = "none";
const ctx = canvas.getContext("2d");
let rect = canvas.getBoundingClientRect();
const cmpStackGame = new CanvasComponent(canvas);
['load', 'resize'].forEach(event => {
    window.addEventListener(event, () => {
        main();
    }), false;
});
var ladders = [];
var ladderCount = 0;
var curruntLadder;
var planks = Array();
var Top = -1;
var prevLadderCount = 0;
canvas.addEventListener("mousedown", mouseDown, false);
function mouseDown(e) {
    var i = 0;
    var [canvasX, canvasY] = cmpStackGame.getCursorPosition(e);
    // console.warn("x: "+canvasX+" y= "+canvasY);
    //  console.warn("MOUSEDOWN PREVLADDER:"+prevLadderCount);
    //console.log("Top down "+curruntLadder.top);
    // console.warn("current top=  " +curruntLadder.top)
    let pt = new Point(canvasX, canvasY);
    // console.warn(" prev ladder count:" + prevLadderCount)
    // console.warn(" prev ladder top:" + ladders[prevLadderCount].top)
    console.warn(" prev count " + prevLadderCount);
    console.warn(" prev top " + ladders[prevLadderCount].top);
    for (i = 0; i < planks.length; i++) {
        if (planks[i].isinside(pt)) {
            if (planks[i].status != "putted") {
                console.warn(" if");
                planks[i].isDragable = true;
            }
            //else if(i==Top){
            // else if(((i==curruntLadder.top)&& ( checkPlankForCorrectPosition(ladders[prevLadderCount],planks[i]))) ||(((i==ladders[prevLadderCount].top-1) && ( checkPlankForCorrectPosition(ladders[prevLadderCount],planks[i]))))){
            else if (i == ladders[prevLadderCount].top - 1) {
                if (i == ladders[prevLadderCount].top - 1) {
                    console.warn(" 2nd condition");
                }
                console.warn(i + "=i else");
                planks[i].isDragable = true;
            }
            //   console.warn(" else")  
        }
    }
    //console.log("Current Ladder TOP:"+curruntLadder.top)
}
canvas.addEventListener('mousemove', e => {
    var [canvasX, canvasY] = cmpStackGame.getCursorPosition(e);
    let pt = new Point(canvasX, canvasY);
    for (let i = 0; i < planks.length; i++) {
        if (planks[i].isDragable) {
            let pt1 = new Point(pt.x - planks[i].width / 2, pt.y - planks[i].height / 2);
            putPlank(planks[i], pt1);
        }
    }
});
var isLadderFull = false;
canvas.addEventListener('mouseup', e => {
    var [canvasX, canvasY] = cmpStackGame.getCursorPosition(e);
    let pt = new Point(canvasX, canvasY);
    //  console.warn("x: "+canvasX+" y= "+canvasY);
    //console.log("mouse down 3 "+curruntLadder.top);
    for (let i = 0; i < planks.length; i++) {
        //  console.log("Previous ladderCount"+prevLadderCount);
        if (planks[i].isDragable) {
            if (planks[i].status == "putted") {
                // console.log("Previous ladderCount"+prevLadderCount);
                // console.log("X1:"+curruntLadder.top)
                Top--;
                // console.log("X2:"+curruntLadder.top)
                ladders[prevLadderCount].top--;
                // console.log("X3:"+curruntLadder.top)
                // console.log("top--");
                //   console.log("X4:"+curruntLadder.top)
                console.log(ladders[prevLadderCount].top);
                //  console.log("X5:"+curruntLadder.top)
                planks[i].status = "outside";
            }
            // console.log("X0:"+curruntLadder.top)
            if (!checkPlankForCorrectPosition(curruntLadder, planks[i])) {
                planks[i].p = planks[i].originalPoints;
                //console.log("if");
            } //wrong position
            else {
                //  console.log("else")
                planks[i].p = curruntLadder.correctPositions[curruntLadder.top];
                if (planks[i].status != "putted")
                    planks[i].status = "putted";
                Top++;
                if (curruntLadder.top == 5)
                    prevLadderCount = ladderCount;
                if (curruntLadder.top > 5) {
                    isLadderFull = true;
                    curruntLadder = ladders[++ladderCount];
                }
                //if(curruntLadder.top<=5)
                curruntLadder.top++;
                //console.log("Top++ "+curruntLadder.top);
                if (curruntLadder.top > 5) {
                    isLadderFull = true;
                    curruntLadder = ladders[++ladderCount];
                }
            }
            planks[i].isDragable = false;
        }
    }
    updateStackGameCanvas();
});
//# sourceMappingURL=GameApp.js.map