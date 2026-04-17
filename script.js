const cards = document.querySelectorAll(".rock-card");

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    card.textContent = "Chert Sample " + (index + 1);
  });
});
