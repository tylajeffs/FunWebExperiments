let mouseX = 0;
let mouseY = 0;
let flashlight = document.getElementById("flashlight");

//Detect touch devices
const isTouchDevice = () => {
  try {
    //create touch event, if it fails it is a desktop
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
};

console.log(isTouchDevice());

function getMousePosition(e) {
  //get the mouse position
  mouseX = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
  mouseY = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
  //set the flashlight to the mouse position
  flashlight.style.setProperty("--Xpos", mouseX + "px");
  flashlight.style.setProperty("--Ypos", mouseY + "px");
}

document.addEventListener("mousemove", getMousePosition);
document.addEventListener("touchmove", getMousePosition);
