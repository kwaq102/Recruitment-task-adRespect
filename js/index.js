const photos = [
	{
		id: 1,
		linkPhoto: "/img/gallery/g1.jpeg",
		linkPhotoMin: "",
	},
	{
		id: 2,
		linkPhoto: "/img/gallery/g2.jpeg",
		linkPhotoMin: "",
	},
	{
		id: 3,
		linkPhoto: "/img/gallery/g3.jpeg",
		linkPhotoMin: "",
	},
	{
		id: 4,
		linkPhoto: "/img/gallery/g4.jpeg",
		linkPhotoMin: "",
	},
	{
		id: 5,
		linkPhoto: "/img/gallery/g5.jpeg",
		linkPhotoMin: "",
	},
	{
		id: 6,
		linkPhoto: "/img/gallery/g6.jpeg",
		linkPhotoMin: "",
	},
	{
		id: 7,
		linkPhoto: "/img/gallery/g7.jpeg",
		linkPhotoMin: "",
	},
	{
		id: 8,
		linkPhoto: "/img/gallery/g8.jpeg",
		linkPhotoMin: "",
	},
	{
		id: 9,
		linkPhoto: "/img/gallery/g9.jpeg",
		linkPhotoMin: "",
	},
	{
		id: 10,
		linkPhoto: "/img/gallery/g1.jpeg",
		linkPhotoMin: "",
	},
	{
		id: 11,
		linkPhoto: "/img/gallery/g2.jpeg",
		linkPhotoMin: "",
	},
	{
		id: 12,
		linkPhoto: "/img/gallery/g3.jpeg",
		linkPhotoMin: "",
	},
	{
		id: 13,
		linkPhoto: "/img/gallery/g4.jpeg",
		linkPhotoMin: "",
	},
	{
		id: 14,
		linkPhoto: "/img/gallery/g5.jpeg",
		linkPhotoMin: "",
	},
	{
		id: 15,
		linkPhoto: "/img/gallery/g1.jpeg",
		linkPhotoMin: "",
	},
	{
		id: 16,
		linkPhoto: "/img/gallery/g8.jpeg",
		linkPhotoMin: "",
	},
	{
		id: 17,
		linkPhoto: "/img/gallery/g15.jpeg",
		linkPhotoMin: "",
	},
	{
		id: 18,
		linkPhoto: "/img/gallery/g3.jpeg",
		linkPhotoMin: "",
	},
];

// nav loupe
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

// photos

const gallery = [];
console.log(gallery);

for (let i = 0; i < 9; i++) {
	const arr = [...gallery];

	const galleryElement = arr.map(el => console.log(gallery[i]));

	gallery.push(galleryElement);
}

// console.log(gallery);

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
