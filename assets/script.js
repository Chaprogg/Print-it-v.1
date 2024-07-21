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

	let spanBullet1 = document.createElement("span")
	dots.appendChild(spanBullet1)
	spanBullet1.classList.add("dot")

	let spanBullet2 = document.createElement("span")
	dots.appendChild(spanBullet2)
	spanBullet2.classList.add("dot")
	
	
	let spanBullet3 = document.createElement("span")
	dots.appendChild(spanBullet3)
	spanBullet3.classList.add("dot")
	
	let spanBullet4 = document.createElement("span")
	dots.appendChild(spanBullet4)
	spanBullet4.classList.add("dot")
	