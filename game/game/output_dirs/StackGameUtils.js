function setHeightAndWidthCanvas() {
    canvas.width = screen.width * 0.80;
    canvas.height = screen.height * 0.80;
}
function setBackgroudOfCanvas() {
    back.height = canvas.height;
    back.width = canvas.width;
    ctx.drawImage(back, 0, 0, canvas.width, canvas.height);
}
function setgirlOnCanvas() {
    /*  var startX = canvas.width/23;
     var startY = canvas.height-300;  */
    var startX = 54;
    var startY = 391;
    // console.log("x= "+startX+"   y= "+startY);
    ctx.drawImage(girl, startX, startY, girl.width - 80, girl.height - 100);
}
function setplanks() {
    /* var startX = canvas.width*0.245;
    var startY = canvas.height*0.8;  */
    var startX = 301;
    var startY = 553;
    for (let i = 0; i < 6; i++) {
        planks[i] = new Plank(new Point(startX, startY), plank);
        startX += plank.width + 20;
        planks[i].draw();
    }
}
function drawPlanks() {
    for (let i = 0; i < 6; i++) {
        planks[i].draw();
    }
}
function putPlank(plank, pt) {
    plank.p = pt;
    updateStackGameCanvas();
    plank.draw();
}
function setladderOnCanvas() {
    /*  var startX = canvas.width/11;
     var startY = canvas.height/3.3;  */
    var startX = 112;
    var startY = 209;
    // console.log("x= "+startX+"   y= "+startY);
    ladders[0] = new Ladder(canvas, ctx, new Point(startX, startY), ladder);
    ladders[0].draw();
    // startX = canvas.width/3;
    startX = 409;
    ladders[1] = new Ladder(canvas, ctx, new Point(startX, startY), ladder);
    ladders[1].draw();
    //startX = canvas.width/1.7;
    startX = 772;
    //console.log("x= "+startX+"   y= "+startY);
    ladders[2] = new Ladder(canvas, ctx, new Point(startX, startY), ladder);
    ladders[2].draw();
    ladders[0].correctPositions = [new Point(290, 490),
        new Point(290, 445),
        new Point(290, 400),
        new Point(290, 355),
        new Point(290, 310),
        new Point(290, 263)];
    ladders[1].correctPositions = [new Point(586, 490),
        new Point(586, 445),
        new Point(586, 400),
        new Point(586, 355),
        new Point(586, 310),
        new Point(586, 263)];
    ladders[2].correctPositions = [new Point(950, 490),
        new Point(950, 445),
        new Point(950, 400),
        new Point(950, 355),
        new Point(950, 310),
        new Point(950, 263)];
    curruntLadder = ladders[ladderCount];
}
function drawLadderOnCanvas() {
    for (let i = 0; i < ladders.length; i++) {
        ladders[i].draw();
    }
}
function checkPlankForCorrectPosition(ladder, plank) {
    if (ladder.top == 6)
        ladder.top = 5;
    if (ladder.isinside(plank.p, plank))
        return true;
    return false;
}
function updateStackGameCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setBackgroudOfCanvas();
    setgirlOnCanvas();
    drawLadderOnCanvas();
    drawPlanks();
}
function main() {
    setHeightAndWidthCanvas();
    setBackgroudOfCanvas();
    setgirlOnCanvas();
    setladderOnCanvas();
    setplanks();
}
//# sourceMappingURL=StackGameUtils.js.map