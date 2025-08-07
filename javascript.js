document.addEventListener("DOMContentLoaded", function () {
  const iframe = document.querySelector("iframe");
  const reloadBtn = document.getElementById("reload-btn");
  const fullscreenBtn = document.getElementById("fullscreen-btn");

  reloadBtn.addEventListener("click", function () {
    iframe.src = iframe.src; // Reload the iframe
  });

  fullscreenBtn.addEventListener("click", function () {
    if (!document.fullscreenElement) {
      iframe.requestFullscreen().catch(err => {
        alert(`Error attempting to enter fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  });
});
