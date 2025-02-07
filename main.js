function handleLoveYes() {
  document.body.classList.add("bg-change");
  setTimeout(() => {
    window.location.href = "confirmation.html";
  }, 1000);
}

function handleLoveNo() {
  const button = document.querySelector(".btn-deny");
  button.style.position = "absolute";
  button.style.transition = "all 0.5s ease";

  const x = Math.random() * (window.innerWidth - button.clientWidth);
  const y = Math.random() * (window.innerHeight - button.clientHeight);

  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
}
