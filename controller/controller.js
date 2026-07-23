
const canvas = document.getElementById("radar");
const ctx = canvas.getContext("2d");


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
