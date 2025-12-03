const btnSim = document.getElementById("btn-sim");
const btnNao = document.getElementById("btn-nao");
const modalBackdrop = document.getElementById("modal-backdrop");
const closeModal = document.getElementById("close-modal");

// Faz botão SIM fugir
btnSim.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".buttons-wrapper");
  const maxX = wrapper.clientWidth - btnSim.clientWidth;
  const maxY = wrapper.clientHeight - btnSim.clientHeight;

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  btnSim.style.left = `${newX}px`;
  btnSim.style.top = `${newY}px`;
});

// Abre modal ao clicar NÃO
btnNao.addEventListener("click", () => {
  modalBackdrop.style.display = "flex";
});

// Fecha modal
closeModal.addEventListener("click", () => {
  modalBackdrop.style.display = "none";
});
