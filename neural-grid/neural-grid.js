export function startNeuralActivity(){
  // Prevent multiple initializations
  if (window.neuralActivityStarted) return;
  window.neuralActivityStarted = true;

  document.addEventListener("keydown", pulse);
  document.addEventListener("click", (e) => pulse(e));
}

function pulse(event){
  const node = document.createElement("div");

  node.style.position = "fixed";
  node.style.width = "6px";
  node.style.height = "6px";
  node.style.borderRadius = "50%";
  node.style.background = "#00ff9c";
  node.style.boxShadow = "0 0 12px #00ff9c";
  node.style.pointerEvents = "none";
  node.style.zIndex = "9999";
  node.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";

  // Use click coordinates if available, otherwise random
  if (event && event.clientX && event.clientY) {
    node.style.left = event.clientX + "px";
    node.style.top = event.clientY + "px";
  } else {
    node.style.left = Math.random() * window.innerWidth + "px";
    node.style.top = Math.random() * window.innerHeight + "px";
  }

  document.body.appendChild(node);

  // Animate and remove
  requestAnimationFrame(() => {
    node.style.opacity = "0";
    node.style.transform = "scale(2)";
  });

  setTimeout(() => {
    if (node.parentNode) {
      node.remove();
    }
  }, 500);
}
