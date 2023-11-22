const sliderInCatalog = ({ ElementsImgSileder }) => {
  let offset = 0;
  const elementsSlider = document.querySelector(ElementsImgSileder);

  document.querySelector(".s1").addEventListener("click", function () {
    offset = offset + 345;
    if (offset > 0) {
      offset = 0;
    }
    elementsSlider.style.left = -offset + "px";
  });

  document.querySelector(".s2").addEventListener("click", function () {
    offset = offset + 345;
    if (offset > 0) {
      offset = 345;
    }
    elementsSlider.style.left = -offset + "px";
  });

  document.querySelector(".s3").addEventListener("click", function () {
    offset = offset + 345;
    if (offset > 0) {
      offset = 690;
    }
    elementsSlider.style.left = -offset + "px";
  });

  document.querySelector(".s4").addEventListener("click", function () {
    offset = offset + 345;
    if (offset > 0) {
      offset = 1035;
    }
    elementsSlider.style.left = -offset + "px";
  });

  /* arrow btn */
  document.querySelector(".up-icon-2").addEventListener("click", function () {
    offset = offset + 345;
    if (offset > 1035) {
      offset = 0;
    }
    elementsSlider.style.left = -offset + "px";
  });

  document.querySelector(".back-icon-2").addEventListener("click", function () {
    offset = offset - 345;
    if (offset < 0) {
      offset = 1035;
    }
    elementsSlider.style.left = -offset + "px";
  });
};

sliderInCatalog({
  ElementsImgSileder: ".forBannerCatalog",
});
