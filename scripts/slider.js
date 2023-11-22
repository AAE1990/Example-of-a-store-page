const slider = ({ ElementsImgSileder, ArrowIconUp, ArrowIconDown }) => {
  let offset = 0;
  const sliderLine = document.querySelector(ElementsImgSileder);

  document.querySelector(ArrowIconUp).addEventListener("click", function () {
    offset = offset + 1480;
    if (offset > 4440) {
      offset = 0;
    }
    sliderLine.style.left = -offset + "px";
  });

  document.querySelector(ArrowIconDown).addEventListener("click", function () {
    offset = offset - 1480;
    if (offset < 0) {
      offset = 4440;
    }
    sliderLine.style.left = -offset + "px";
  });

  /* small dots for switch */
  document.querySelector(".r1").addEventListener("click", function () {
    offset = offset + 1480;
    if (offset > 0) {
      offset = 0;
    }
    sliderLine.style.left = -offset + "px";
  });

  document.querySelector(".r2").addEventListener("click", function () {
    offset = offset + 1480;
    if (offset > 0) {
      offset = 1480;
    }
    sliderLine.style.left = -offset + "px";
  });

  document.querySelector(".r3").addEventListener("click", function () {
    offset = offset + 1480;
    if (offset > 0) {
      offset = 2960;
    }
    sliderLine.style.left = -offset + "px";
  });

  document.querySelector(".r4").addEventListener("click", function () {
    offset = offset + 1480;
    if (offset > 0) {
      offset = 4440;
    }
    sliderLine.style.left = -offset + "px";
  });
};

slider({
  ElementsImgSileder: ".slider-line",
  ArrowIconUp: ".up-icon",
  ArrowIconDown: ".back-icon",
});
