/* const Acceleration = (e) => {
window.addEventListener("deviceorientation", (e)=>{
const x = Math.round(e.beta);
const y = Math.round(e.gamma);
const z = Math.round(e.alpha);

document.write(" Axis-X: " + x);
document.write(" Axis-y: " + y);
document.write(" Axis-z: " + z)

});
}

const InitFun = () => {
  Acceleration();
  requestAnimationFrame(InitFun);
} */

let sensor = new Accelerometer();
sensor.start();

sensor.addEventListener("reading", ()=>{
  let docx = document.getElementById("x");
  let docy = document.getElementById("y");
  let docz = document.getElementById("z");
  docx.innerHTML = "Acceleration along X-axis: " + sensor.x;
  docy.innerHTML = "Acceleration along Y-axis: " + sensor.y;
  docz.innerHTML = "Acceleration along Z-axis: " + sensor.z;
  
  if(sensor.y < 0) {
    navigator.vibrate(10000);
  }
});

sensor.addEventListener("error", (event) =>{
  console.log(event.error.name, event.error.message);
})

sensor.addEventListener("error", (event) =>{
  const errDoc = document.querySelector(".error-message");
  errDoc.innerHTML = "No readable sensors detected";
})

// sensor.onerror = event => document.write(event.error.name, event.error.message);