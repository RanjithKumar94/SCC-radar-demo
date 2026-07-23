// ======================================
// Controller Radar
// ======================================


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


    controllerAircraft.forEach(ac=>{


        // aircraft dot

        ctx.fillStyle="#00FF00";

        ctx.beginPath();

        ctx.arc(
            ac.x,
            ac.y,
            5,
            0,
            Math.PI*2
        );

        ctx.fill();



        // label position

        const labelX =
        ac.x + 15;


        const labelY =
        ac.y - 15;



        ctx.fillStyle="#00FF00";

        ctx.font="14px Consolas";

        ctx.textAlign="left";



        // Callsign

        ctx.fillText(

            ac.callsign,

            labelX,

            labelY

        );



        // Level line

        let levelText;


        if(ac.assignedLevel !== ""){

            levelText =
            "FL" +
            ac.level +
            "  " +
            ac.assignedLevel;

        }

        else{

            levelText =
            "FL" +
            ac.level;

        }



        ctx.fillText(

            levelText,

            labelX,

            labelY + 16

        );



        // Heading + speed

        ctx.fillText(

            ac.heading +
            "  " +
            ac.speed,

            labelX,

            labelY + 32

        );


    });


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
