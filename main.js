const navbar = document.querySelector("#navbar")
const darkLayer = document.querySelector("#darkLayer")
const hamIcon1 = document.querySelector("#hamIcon1")
const myCSS = document.getElementById("myCSS")
const spinner = document.querySelector("#spinner")

const maincssfile = "./input.css" 

window.addEventListener("load", ()=> { //DOMContentLoaded
    // console.log(document.readyState)
    // myCSS["href"] = maincssfile     //comment out to use output.css
    setAttr_target()
    addListenerHamIcon()
    addListenerScreenRotation()
}, {once:true})


document.addEventListener("readystatechange", (e) => {
    // console.log(e.target.readyState)
    if(e.target.readyState == "complete") {
        // console.log("page ok")
        setTimeout(removeLoader, 15)
    } else {
        console.log("page not ok")
    }
}, {once:true})

function removeLoader() {
    // console.log("remove Loader")
    spinner.classList.remove("flexCenter")
    spinner.classList.add("hidden")
}

function addListenerScreenRotation() {
    screen.orientation.addEventListener("change", () => {
        initNavbar()
    })
}
function initNavbar() {
    setAttr_target()
    navbar.classList.remove("animate-slideLeft_navbar")
    navbar.classList.remove("animate-slideRight_navbar")
    hamIcon1.classList.remove("openMenu")
    darkLayer.classList.add("hidden")
    isMobileMenuOpen = false
    ham_mid1.classList.remove("animate-ham_x1a")
    ham_mid1.classList.remove("animate-ham_x1b")
    ham_mid2.classList.remove("animate-ham_x2a")
    ham_mid2.classList.remove("animate-ham_x2b")
}

//desktop only : open links in new window
const navbarLinks = document.querySelectorAll(".navbarLinks")
function setAttr_target() {
    // console.log(screen.width ,typeof screen.width)
    if(screen.width <= 1024) {
        navbarLinks.forEach((x) => {
            x.setAttribute("target", "_self") //"_self" for mobile
        })
    } else {
        navbarLinks.forEach((x) => {
            x.setAttribute("target", "_self") //"_blank" for desktop
        })
    }
}

const hamburgers = document.querySelector(".hamburgers")
const ham_mid1 = document.querySelector(".ham-mid1")
const ham_mid2 = document.querySelector(".ham-mid2")
function hamIconAnimeKontrol() {
    hamburgers.classList.toggle("bg-blue1")
    hamburgers.classList.toggle("bg-transparent")
    ham_mid1.classList.remove("animate-ham_x1a")
    ham_mid1.classList.remove("animate-ham_x1b")
    ham_mid2.classList.remove("animate-ham_x2a")
    ham_mid2.classList.remove("animate-ham_x2b")
}
let isMobileMenuOpen = false
function addListenerHamIcon() {
    hamIcon1.addEventListener("click", (e) => {
        console.log(e.target.id)
        hamIconAnimeKontrol()
        // hamIcon1.classList.toggle("openMenu")
        if(isMobileMenuOpen) {
            // console.log("IF", isMobileMenuOpen)
            isMobileMenuOpen = !isMobileMenuOpen
            darkLayer.classList.toggle("hidden")
            navbar.classList.remove("animate-slideRight_navbar")
            navbar.classList.add("animate-slideLeft_navbar")
            ham_mid1.classList.add("animate-ham_x1b")
            ham_mid2.classList.add("animate-ham_x2b")
        } else {
            // console.log("ELSE", isMobileMenuOpen)
            isMobileMenuOpen = !isMobileMenuOpen
            darkLayer.classList.toggle("hidden")
            navbar.classList.remove("animate-slideLeft_navbar")
            navbar.classList.add("animate-slideRight_navbar")
            ham_mid1.classList.add("animate-ham_x1a")
            ham_mid2.classList.add("animate-ham_x2a")
            // clearInterval(animateCarousel)
        }
    })
}


