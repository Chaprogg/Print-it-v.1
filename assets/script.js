const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.jpg",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


let bannerImg = document.querySelector(".banner-img")
let arrow_left = document.querySelector(".arrow_left")
let arrow_right = document.querySelector(".arrow_right")
let dots = document.querySelector(".dots")
let activDot = 0
let activImg = 0

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

function arrow_rightSelect () {
	arrow_right.addEventListener("click",() => {
		activImg++
		bannerImg.src = slides[activImg].image
	})

}
dotsDisplay()
arrow_rightSelect()