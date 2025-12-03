document.addEventListener("DOMContentLoaded", () => {
  const btnSim = document.getElementById("btn-sim");
  const btnNao = document.getElementById("btn-nao");
  const modalBackdrop = document.getElementById("modal-backdrop");
  const closeModal = document.getElementById("close-modal");
  const btnReload = document.getElementById("btn-reload");

  // Se algo não foi encontrado, loga no console e para
  if (!btnSim || !btnNao || !modalBackdrop || !closeModal || !btnReload) {
    console.error("Algum elemento não foi encontrado. Confira os IDs no HTML:");
    console.error({
      btnSim,
      btnNao,
      modalBackdrop,
      closeModal,
      btnReload
    });
    return;
  }

  // Função que teleporta o botão SIM para uma posição aleatória dentro do wrapper
  function teleportSim() {
    const wrapper = document.querySelector(".buttons-wrapper");
    if (!wrapper) return;

    const wrapperRect = wrapper.getBoundingClientRect();
    const btnRect = btnSim.getBoundingClientRect();

    const maxX = wrapperRect.width - btnRect.width;
    const maxY = wrapperRect.height - btnRect.height;

    // Evita valores negativos, caso algo estranho aconteça
    const safeMaxX = Math.max(maxX, 0);
    const safeMaxY = Math.max(maxY, 0);

    const newX = Math.random() * safeMaxX;
    const newY = Math.random() * safeMaxY;

    btnSim.style.left = `${newX}px`;
    btnSim.style.top = `${newY}px`;
    btnSim.style.transform = "none"; // remove a centralização inicial
  }

  // Foge quando o mouse chega PERTO do botão
  document.addEventListener("mousemove", (e) => {
    const rect = btnSim.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);

    // Quanto menor esse valor, mais "paranoico" o botão fica
    if (dist < 180) {
      teleportSim();
    }
  });

  // Se, por milagre, clicarem, ele ainda foge
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
});
