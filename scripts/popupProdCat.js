const modalListCatalog = ({ modal, btnOpen, btnClose, time = 150 }) => {
  const buttonElem = document.querySelector(btnOpen);
  const modalElem = document.querySelector(modal);
  const btnCloseCatalog = document.querySelector(btnClose);

  modalElem.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity ${time}ms ease-in-out;
    `;

  const closeModal = (event) => {
    const target = event.target;

    if (target === modalElem || event.code === "Escape") {
      modalElem.style.opacity = 0;

      setTimeout(() => {
        modalElem.style.visibility = "hidden";
      }, time);
      window.removeEventListener("keydown", closeModal);
      btnCloseCatalog.style.display = "none";
    }
  };

  const closeCatalog = () => {
    if (
      modalElem.style.visibility !== "hidden" &&
      btnCloseCatalog.style.display !== "none"
    ) {
      modalElem.style.visibility = "hidden";
      modalElem.style.opacity = 0;
      btnCloseCatalog.style.display = "none";
    }
  };

  const openModal = () => {
    modalElem.style.visibility = "visible";
    modalElem.style.opacity = 1;

    if (btnCloseCatalog.style.display !== "flex") {
      btnCloseCatalog.style.display = "flex";
    }

    window.addEventListener("keydown", closeModal);
  };

  buttonElem.addEventListener("click", openModal);
  modalElem.addEventListener("click", closeModal);
  btnCloseCatalog.addEventListener("click", closeCatalog);
};

modalListCatalog({
  modal: ".popupProductCatalog",
  btnOpen: ".btn-cat",
  btnClose: ".btn-cat-icon-close",
});
