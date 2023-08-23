const loupe = document.querySelector(".bi-search");
const searchInput = document.querySelector("input.search");

loupe.addEventListener("click", () => {
	searchInput.classList.toggle("active");
});

// navigation
const nav = document.querySelector(".navbar-collapse");

document.addEventListener("click", () => {
	if (nav.classList.contains("show")) {
		nav.classList.remove("show");
	}
});

// gallery

const masonry = new Macy({
	container: ".gallery",
	mobileFirst: true,
	columns: 1,
	breakAt: {
		768: 2,
		992: 3,
	},
	margin: {
		x: 30,
		y: 30,
	},
});
