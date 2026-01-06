
const searchInput = document.querySelector("header input");
const cards = document.querySelectorAll(".card");


searchInput.addEventListener("input", function() {
  const query = this.value.toLowerCase();

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    if (text.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
