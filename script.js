const btnSim = document.getElementById("btn-sim");
const btnNao = document.getElementById("btn-nao");
const modalBackdrop = document.getElementById("modal-backdrop");
const closeModal = document.getElementById("close-modal");
const btnReload = document.getElementById("btn-reload");

// Função que teleporta o botão SIM
function teleportSim() {
  const wrapper = document.querySelector(".buttons-wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const btnRect = btnSim.getBoundingClientRect();

  const maxX = wrapperRect.width - btnRect.width;
  const maxY = wrapperRect.height - btnRect.height;

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  btnSim.style.left = `${newX}px`;
  btnSim.style.top = `${newY}px`;
  btnSim.style.transform = "none";
}

// Foge quando o mouse chega PERTO (não precisa encostar)
document.addEventListener("mousemove", (e) => {
  const rect = btnSim.getBoundingClientRect();
  const dist = Math.hypot(e.clientX - (rect.left + rect.width / 2), 
                          e.clientY - (rect.top + rect.height / 2));

  if (dist < 180) { // distancia que ativa fuga
    teleportSim();
  }
});

// Te impede de clicar mesmo se conseguir chegar perto
btnSim.addEventListener("click", (e) => {
  teleportSim();
  e.preventDefault();
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
