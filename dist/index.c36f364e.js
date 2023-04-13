const carrousel_container = document.getElementById("project-carrousel");
const slide = document.querySelector(".project");
const nextBtn = document.getElementById("arrow-right");
const prevBtn = document.getElementById("arrow-left");
nextBtn.addEventListener("click", ()=>{
    const slideWith = slide.clientWidth;
    carrousel_container.scrollLeft += slideWith;
});
prevBtn.addEventListener("click", ()=>{
    const slideWith = slide.clientWidth;
    carrousel_container.scrollLeft -= slideWith;
    console.log(carrousel_container.scrollLeft);
});

//# sourceMappingURL=index.c36f364e.js.map
