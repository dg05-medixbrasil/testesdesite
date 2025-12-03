const btnSim = document.getElementById("btn-sim");
const btnNao = document.getElementById("btn-nao");
const modalBackdrop = document.getElementById("modal-backdrop");
const closeModal = document.getElementById("close-modal");
const btnReload = document.getElementById("btn-reload");

// Botão SIM foge
btnSim.addEventListener("mouseenter", () => {
  const wrapper = document.querySelector(".buttons-wrapper");
  const maxX = wrapper.clientWidth - btnSim.clientWidth;
  const maxY = wrapper.clientHeight - btnSim.clientHeight;

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  btnSim.style.left = `${newX}px`;
  btnSim.style.top = `${newY}px`;
  btnSim.style.transform = "none";
});

// Botão NÃO abre modal
btnNao.addEventListener("click", () => {
  modalBackdrop.style.display = "flex";
});

// Fecha modal
closeModal.addEventListener("click", () => {
  modalBackdrop.style.display = "none";
});

// Voltar ao início
btnReload.addEventListener("click", () => {
  window.location.reload();
});
