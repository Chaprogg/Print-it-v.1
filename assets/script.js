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
let index = 0
console.log(slides.length)

function dotsDisplay () {
	for (let i =0; i < slides.length; i++) {
		const dot = document.createElement("span")
		dot.classList.add("dot")
		dots.appendChild(dot)
	

		if (i == index) {
			dot.classList.add("dot_selected")
		}
	}
}

function arrow_rightSelect () {
	arrow_right.addEventListener("click",() => {
		const bulletpointTab = document.querySelectorAll(".dots .dot")
		bulletpointTab[index].classList.remove("dot_selected")
		index++
		// si i superieur a l'index j'enleve une chaine et je me place a la chaine 0
		if (index > slides.length -1) {
			index = 0
		}
		
		bannerImg.src = slides[index].image
		bulletpointTab[index].classList.add("dot_selected")
	})

}

function arrow_leftSelect () {
	arrow_left.addEventListener("click",() => {
		const bulletpointTab = document.querySelectorAll(".dots .dot")
		bulletpointTab[index].classList.remove("dot_selected")
		index--
		// si i est inferieur 0 alors je descdent  l'index d'une chaine  
		if (index < 0  ) {
			index = slides.length -1 
		}
		
		bannerImg.src = slides[index].image
		bulletpointTab[index].classList.add("dot_selected")
		
	})

}
function main () { 
dotsDisplay()
arrow_rightSelect()
arrow_leftSelect()
}
 main()