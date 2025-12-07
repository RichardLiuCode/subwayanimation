const ctx1 = document.getElementById("subwayTrainInside").getContext("2d");


ctx1.fillStyle = "aliceblue";
ctx1.fillRect(0, 0, 1000, 500)
ctx1.fillStyle = "rgba(159, 156, 156, 1)"
ctx1.fillRect(0, 400, 1000, 100)



// Open doors hole
ctx1.globalCompositeOperation = "destination-out";
ctx1.beginPath()
ctx1.roundRect(450, 60, 210, 340, 10)
ctx1.fillRect(450, 70, 210, 330, 10)
ctx1.fill()
ctx1.globalCompositeOperation = "source-over";

// Open windows hole
ctx1.globalCompositeOperation = "destination-out";
ctx1.beginPath()
ctx1.roundRect(830, 60, 230, 140, 10)
ctx1.roundRect(50, 60, 230, 140, 10)
ctx1.fill();
ctx1.globalCompositeOperation = "source-over"
ctx1.strokeStyle = "lightgray"
ctx1.lineWidth = "5"
ctx1.stroke();
/*------------------------------------------*/
const ctx2 = document.getElementById("doorsAndWindows").getContext("2d");
ctx2.fillStyle="rgba(196, 210, 228, 1)"
ctx2.fillRect(450, 60, 105, 340)
ctx2.fillRect(555, 60, 105, 340)
/*------------------------------------------*/
const ctx = document.getElementById("mainDisplay").getContext("2d");

let tunelLightPosition = -40;
setInterval(function () {
    ctx.clearRect(0, 0, 1000, 500)

    // Background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1000, 500);

    // The light in the tunel 
    ctx.fillStyle = "rgba(252, 245, 192, 1)";
    ctx.fillRect(tunelLightPosition, 120, 150, 14)
    tunelLightPosition = tunelLightPosition + 5;
    tunelLightPosition = tunelLightPosition + 5;
    tunelLightPosition = tunelLightPosition + 5;
    tunelLightPosition = tunelLightPosition + 5;
    if (tunelLightPosition >= 1500) {
        tunelLightPosition = -200;
    }

    // draw train car
    ctx.drawImage(document.getElementById("doorsAndWindows"), 0, 0, 1000, 500)
    ctx.drawImage(document.getElementById("subwayTrainInside"), 0, 0, 1000, 500)
}, 5)