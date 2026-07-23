
const canvas =
document.getElementById("radar");


const ctx =
canvas.getContext("2d");



ctx.fillStyle="#001100";

ctx.fillRect(
0,
0,
canvas.width,
canvas.height
);



ctx.fillStyle="#00ff66";

ctx.font="20px Arial";

ctx.fillText(
"SCC RADAR CONTROLLER",
250,
450
);
