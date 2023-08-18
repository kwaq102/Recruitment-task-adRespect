const loupe = document.querySelector(".bi-search");
const searchInput = document.querySelector("input.search");

loupe.addEventListener("click", () => {
	searchInput.classList.toggle("active");
});
