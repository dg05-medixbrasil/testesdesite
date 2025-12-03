document.addEventListener("DOMContentLoaded", () => {
  const btnSim = document.getElementById("btn-sim");
  const btnNao = document.getElementById("btn-nao");
  const modalBackdrop = document.getElementById("modal-backdrop");
  const closeModal = document.getElementById("close-modal");
  const btnReload = document.getElementById("btn-reload");

  function teleportSim() {
    const w = window.innerWidth - btnSim.offsetWidth;
    const h = window.innerHeight - btnSim.offsetHeight;

    const x = Math.random() * w;
    const y = Math.random() * h;

    btnSim.style.left = x + "px";
    btnSim.style.top = y + "px";
  }

  // Foge quando o mouse chega perto
  document.addEventListener("mousemove", (e) => {
    const rect = btnSim.getBoundingClientRect();
    const dist = Math.hypot(
      e.clientX - (rect.left + rect.width / 2),
      e.clientY - (rect.top + rect.height / 2)
    );

    if (dist < 180) teleportSim();
  });

  // Se clicar, ele foge mesmo assim
  btnSim.addEventListener("click", (e) => {
    teleportSim();
    e.preventDefault();
  });

  // Abrir modal
  btnNao.addEventListener("click", () => {
    modalBackdrop.style.display = "flex";
  });

  // Fechar modal
  closeModal.addEventListener("click", () => {
    modalBackdrop.style.display = "none";
  });

  // Reset
  btnReload.addEventListener("click", () => {
    window.location.reload();
  });
});
