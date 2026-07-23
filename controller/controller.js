console.log("NEW CONTROLLER FILE RUNNING");


function drawControllerRadar(){

    console.log("RADAR LOOP RUNNING");


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


    requestAnimationFrame(drawControllerRadar);

}


drawControllerRadar();
