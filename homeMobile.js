const buttons = document.querySelectorAll("[data-carousel-button]")
const tilesCtnr = document.querySelector("#tilesCtnr")
const home = document.querySelector("#home")
let tiles = document.querySelectorAll(".tiles")

const animateCarousel = setInterval(autoplayImgCarousel, 3000)
const animateTiles = setInterval(buildTiles, 6000)

window.addEventListener("load", ()=> {
    addListenerSliderButtons()
    buildTiles()
}, {once:true})

const arrColor = [        
    'blue1',
    'blue2',
    'blue3',
    'blue4',
    'blue5',
    'blue6',
    'blue7',
    'blue8',
    'blue9',
    'blue10',
]
function buildTiles() {
    tilesCtnr.innerHTML = ''
    let toWrite = ""
    for(i=0; i<500; i++) {
        toWrite += randomisedTile()
    }
    document.querySelector("#tilesCtnr").innerHTML = toWrite
}
function randomisedTile() {
    let random = Math.floor(Math.random()*(arrColor.length))
    let chosen = arrColor[random]
    return `
        <section class="tiles  h-6 w-6 bg-${chosen}"></section>
    `    
}

function addListenerSliderButtons() {
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const offset = button.dataset.carouselButton === "next" ? 1 : -1
            const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
            // console.log("offset:", offset, "slides:", slides)
        const activeSlide = slides.querySelector("[data-active]")
        // console.log("activeSlide:", activeSlide)
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if(newIndex < 0) newIndex = slides.children.length - 1
        if(newIndex >=  slides.children.length) newIndex = 0
        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
        })
    })
}

function autoplayImgCarousel() {
    let slides = document.querySelector("[data-slides]")
    // console.log(slides.nextSibling)
    let activeSlide = slides.querySelector("[data-active]") 
    // console.log(activeSlide)
    let newIndex = [...slides.children].indexOf(activeSlide)
    newIndex += 1
    if(newIndex < 0) newIndex = slides.children.length - 1
    if(newIndex >=  slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
}




