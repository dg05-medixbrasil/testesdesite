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
    btnSim.style.transform = "none"; // depois da primeira fuga, não precisa mais centralizar
  }

  // Foge quando o mouse chega PERTO
  document.addEventListener("mousemove", (e) => {
    const rect = btnSim.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);

    if (dist < 180) {
      teleportSim();
    }
  });

  // Se clicar (quase impossível), ele ainda foge
  btnSim.addEventListener("click", (e) => {
    teleportSim();
    e.preventDefault();
  });

  // Botão NÃO abre modal
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
