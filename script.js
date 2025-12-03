document.addEventListener("DOMContentLoaded", () => {
  const btnSim = document.getElementById("btn-sim");
  const btnNao = document.getElementById("btn-nao");
  const modalBackdrop = document.getElementById("modal-backdrop");
  const closeModal = document.getElementById("close-modal");
  const btnReload = document.getElementById("btn-reload");

  function teleportSim() {
    const btnWidth = btnSim.offsetWidth;
    const btnHeight = btnSim.offsetHeight;

    const maxX = window.innerWidth - btnWidth;
    const maxY = window.innerHeight - btnHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    btnSim.style.left = newX + "px";
    btnSim.style.top = newY + "px";
  }

  // Foge quando o mouse chega perto
  document.addEventListener("mousemove", (e) => {
    const rect = btnSim.getBoundingClientRect();
    const dist = Math.hypot(
      e.clientX - (rect.left + rect.width / 2),
      e.clientY - (rect.top + rect.height / 2)
    );

    if (dist < 200) {
      teleportSim();
    }
  });

  // Se clicar, ainda foge
  btnSim.addEventListener("click", (e) => {
    teleportSim();
    e.preventDefault();
  });

  // Botão NÃO abre o modal
  btnNao.addEventListener("click", () => {
    modalBackdrop.style.display = "flex";
  });

  // Fechar modal
  closeModal.addEventListener("click", () => {
    modalBackdrop.style.display = "none";
  });

  // Voltar
  btnReload.addEventListener("click", () => {
    window.location.reload();
  });
});
