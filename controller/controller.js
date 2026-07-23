// ======================================
// Controller Radar
// ======================================

console.log("Controller aircraft code loaded");
let controllerAircraft = [

    {
        callsign:"ETH773",

        x:450,
        y:300,

        level:50,

        assignedLevel:"",

        heading:260,

        speed:220
    }

];



// ======================================
// Draw Controller Aircraft Label
// ======================================

function drawControllerAircraft(){

    console.log("DRAW AIRCRAFT RUNNING");


    ctx.fillStyle = "red";

    ctx.beginPath();

    ctx.arc(
        450,
        300,
        10,
        0,
        Math.PI * 2
    );

    ctx.fill();

}

// ======================================
// Controller Radar Loop
// ======================================

function drawControllerRadar(){


    ctx.clearRect(

        0,
        0,
        canvas.width,
        canvas.height

    );


    drawBackground();

    drawRoutes();

    drawRunway();

    drawTrafficCircuit();

    drawCentreline();

    drawCCB();



    drawControllerAircraft();



    requestAnimationFrame(
        drawControllerRadar
    );

}


drawControllerRadar();



function drawControllerRadar(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    drawBackground();

    drawRoutes();

    drawRunway();

    drawTrafficCircuit();

    drawCentreline();

    drawCCB();


    requestAnimationFrame(drawControllerRadar);

}


drawControllerRadar();
