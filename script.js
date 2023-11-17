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
