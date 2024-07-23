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


let banner_img = document.querySelector(".banner-img")
let arrow_left = document.querySelector(".arrow_left")
let arrow_right = document.querySelector(".arrow_right")
let dots = document.querySelector(".dots")
let activDot = 0

function dotsDisplay () {
	for (let i =0; i < slides.length; i++) {
		let dot = document.createElement("span")
		dot.classList.add("dot")
		dots.appendChild(dot)
	

		if (i == activDot) {
			dot.classList.add("dot_selected")
		}
	}
}

dotsDisplay()