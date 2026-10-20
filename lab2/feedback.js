const closeBtn = document.querySelector("#modal-close-btn");
const modalBg = document.querySelector("#modal-bg");

function hideModal(event) {
  modalBg.style.opacity = "0";
  modalBg.style.visibility = "hidden";
}

function showModal(event) {
  modalBg.style.opacity = "100%";
  modalBg.style.visibility = "visible";
}

function onModelCloseBtn(event) {
  hideModal();
}

hideModal();

closeBtn.addEventListener("click", onModelCloseBtn);
setTimeout(showModal, 10000);
