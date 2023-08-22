const loupe = document.querySelector(".bi-search");
const searchInput = document.querySelector("input.search");

loupe.addEventListener("click", () => {
	searchInput.classList.toggle("active");
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

// gridGallery({
// 	// gallery selector
// 	selector: "#mSelector",
// 	// enable dark mode
// 	darkMode: true,
// 	// or "horizontal"
// 	layout: "square",
// 	// space between images
// 	gapLength: 4,
// 	// row height
// 	rowHeight: 180,
// 	// column width
// 	columnWidth: 200,
// });
