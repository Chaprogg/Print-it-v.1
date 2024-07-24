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
let tagLineLink = document.querySelector("#banner p")
let indexTabSlides = 0
console.log(slides.length)

function dotsDisplay () {
	// J'affiche un bullet-point par unité de chaine correspondant à la valeur du tableau
	for (let i = 0; i < slides.length; i++) {
		let dotsLinkS = document.querySelector(".dots")
		const dotsSpan = document.createElement("span")
		dotsLinkS.appendChild(dotsSpan)
		dotsSpan.classList.add("dot")

		// Égalité Abstraite: Si i correspond à l'index alors je change le backgroud-color de la bullet-point correspondante
		if (i == indexTabSlides) {
			dotsSpan.classList.add("dot_selected")
		}
	}
}

function arrow_rightSelect () {
	let arrow_right = document.querySelector(".arrow_right")

	// creation d'un ecouteur d'évènements: au click 
	arrow_right.addEventListener("click",() => {
		const bulletpointTab = document.querySelectorAll(".dots .dot")
		bulletpointTab[indexTabSlides].classList.remove("dot_selected")
		// Ici au click je j'incrémente l'index
		indexTabSlides++

		// si i superieur a l'index j'enleve une chaine et je me place a la chaine 0
		if (indexTabSlides > slides.length -1) {
			indexTabSlides = 0
		}

		bannerImg.src = slides[indexTabSlides].image
		tagLineLink.innerHTML = slides[indexTabSlides].tagLine
		bulletpointTab[indexTabSlides].classList.add("dot_selected")
	})
}

function arrow_leftSelect () {
	let arrow_left = document.querySelector(".arrow_left")
	arrow_left.addEventListener("click",() => {
		const bulletpointTab = document.querySelectorAll(".dots .dot")
		bulletpointTab[indexTabSlides].classList.remove("dot_selected")
		// Ici au click je décrémente l'index
		indexTabSlides--

		// si index à ce moment-là est inferieur 0 alors je descdent l'index d'une chaine
		if (indexTabSlides < 0  ) {
			indexTabSlides = slides.length -1 
		}

		// Ici je vais afficher l'image qui correspond à l'index
		bannerImg.src = slides[indexTabSlides].image
		tagLineLink.innerHTML = slides[indexTabSlides].tagLine
		bulletpointTab[indexTabSlides].classList.add("dot_selected")	
	})
}

function main () { 
dotsDisplay()
arrow_rightSelect()
arrow_leftSelect()
}
main()