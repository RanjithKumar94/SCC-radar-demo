// ======================================
// SCC Radar Controller
// ======================================


console.log("Controller JS loaded");



// Test aircraft

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
// Draw Controller Aircraft
// ======================================

function drawControllerAircraft(){


    controllerAircraft.forEach(ac=>{


        // Aircraft blip

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



        // Label position

        const labelX =
        ac.x + 12;


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



        // Level

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



        // Heading and speed

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



    // Shared radar

    drawBackground();

    drawRoutes();

    drawRunway();

    drawTrafficCircuit();

    drawCentreline();

    drawCCB();



    // Controller aircraft

    drawControllerAircraft();



    requestAnimationFrame(

        drawControllerRadar

    );


}

// ======================================
// Controller Level Assignment
// ======================================

document.getElementById("sendLevel").onclick = function(){


    const level =
    document.getElementById("assignedLevel").value;


    if(level === "")
        return;


    controllerAircraft[0].assignedLevel =
    "FL" + level;


    console.log(
        "Assigned level:",
        controllerAircraft[0].callsign,
        controllerAircraft[0].assignedLevel
    );


};

// Start

drawControllerRadar();
