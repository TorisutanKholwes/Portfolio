const carrousel_container = document.getElementById("project-carrousel");
const slide = document.querySelector(".project")
const numSlides = document.querySelectorAll(".project").length;
const nextBtn = document.getElementById("arrow-right")
const prevBtn = document.getElementById("arrow-left")
const redirectButton = document.querySelectorAll(".project-button")

const nextActif = new URL("assets/arrow/arrowRightActif.svg", import.meta.url)
const prevActif = new URL("assets/arrow/arrowLeftActif.svg", import.meta.url)
const nextHover = new URL("assets/arrow/arrowRightHover.svg", import.meta.url)
const prevHover = new URL("assets/arrow/arrowLeftHover.svg", import.meta.url)

nextBtn.addEventListener("click", () => {
    const slideWith = slide.clientWidth;
    if (carrousel_container.scrollLeft % slideWith !== 0) return
    carrousel_container.scrollLeft += slideWith;
    if (carrousel_container.scrollLeft + slideWith >= (numSlides-1) * slideWith) {
        nextBtn.src = nextActif
        prevBtn.src = prevHover
    } else {
        nextBtn.src = nextHover
        prevBtn.src = prevHover
    }
})

prevBtn.addEventListener("click", () => {
    const slideWith = slide.clientWidth;
    if (carrousel_container.scrollLeft % slideWith !== 0) return

    carrousel_container.scrollLeft -= slideWith;
    if (carrousel_container.scrollLeft - slideWith <= 0) {
        nextBtn.src = nextHover
        prevBtn.src = prevActif
    } else {
        nextBtn.src = nextHover
        prevBtn.src = prevHover
    }
})
redirectButton.forEach(button => {
    button.addEventListener("click", () => {
        console.log("a")
        let url = button.getAttribute("redirect")
        window.open(url, "_blank")
    })
})