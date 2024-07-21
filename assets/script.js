const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let arrow_left = document.querySelector(".arrow_left")
let arrow_right = document.querySelector(".arrow_right")
	
	arrow_left.addEventListener("click", () => {
		console.log(arrow_left)
	})

	arrow_right.addEventListener("click", () => {
		console.log(arrow_right)
	})
	console.log(slides.length)
	let dots = document.querySelector(".dots")

	let createSpan1 = document.createElement("span")
	dots.appendChild(createSpan1)
	createSpan1.classList.add("dot")

	let createSpan2 = document.createElement("span")
	dots.appendChild(createSpan2)
	createSpan2.classList.add("dot")
	
	
	let createSpan3 = document.createElement("span")
	dots.appendChild(createSpan3)
	createSpan3.classList.add("dot")
	
	let createSpan4 = document.createElement("span")
	dots.appendChild(createSpan4)
	createSpan4.classList.add("dot")
	