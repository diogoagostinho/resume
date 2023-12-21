const switchButton = document.getElementById("holo");
const containerBackground = document.getElementById("container_background");

switchButton.addEventListener("click", backgroundSwitch);

function backgroundSwitch() {
  if (switchButton.src.endsWith("holo_button.jpg")) {
    containerBackground.className = "left__container holographic";
    switchButton.src = "img/white.jpg";
  } else if (switchButton.src.endsWith("white.jpg")) {
    containerBackground.className = "left__container";
    switchButton.src = "img/holo_button.jpg";
  }
}
