const popupOpen = document.querySelector("#popup-open");
const popupClose = document.querySelector("#popup-close");
const popup = document.querySelector("#popup");
const popupContent = document.querySelector("#popup-content");

const close = () => {
  popup.classList.remove("visible");
  popupContent.classList.remove("scale");
}

popupOpen.addEventListener('click', () => {
  popup.classList.add("visible");
  popupContent.classList.add("scale");
});

popupClose.addEventListener('click', () => close());


window.onclick = function(event) {
  if (event.target == popup) {
      close();
  }
}