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

const sun = document.getElementById("sun")

const langList = ["FR", "EN", "ES"]
const langSelect = document.getElementsByClassName("languages")
let langChange = document.getElementsByClassName("can-choose")

const alltime = document.getElementById("all-time-code")
const dailytime = document.getElementById("daily-code-time")

const send_button = document.getElementById("send-message")

import fr from "./assets/langs/fr.json"
import en from "./assets/langs/en.json"
import es from "./assets/langs/es.json"

const scrollType = {
    "profile": 0,
    "skills": 1100,
    "projects": 1750,
    "software": 2400,
    "contact": 5000
}

function pxToVh(px) {
    return (px / 1920) * 100;
}

function timeToString(secs) {
    let hours = Math.floor(secs / 3600);
    let minutes = Math.floor((secs % 3600) / 60);
    return `${hours}h ${minutes}m`;
}

function vhToPx(vh, width) {
    return (vh / 100) * width;
}

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
        let url = button.getAttribute("redirect")
        window.open(url, "_blank")
    })
})

Object.keys(scrollType).forEach(key => {
    const element = document.getElementById("tab-" + key)
    element.addEventListener("click", () => {
        let scrollSize = scrollType[key]
        scrollSize = vhToPx(pxToVh(scrollSize), window.innerWidth)
        window.scrollTo({top: scrollSize, behavior: "smooth"})
    })
})

window.addEventListener("DOMContentLoaded", () => {
    let theme = localStorage.getItem("data-theme")
    let lang = localStorage.getItem("lang")
    if (lang) lang.toUpperCase()
    if (theme) {
        document.documentElement.setAttribute("data-theme", theme)
    }
    if (lang) {
        document.documentElement.setAttribute("lang", lang.toLowerCase())
    } else {
        lang = "FR"
        localStorage.setItem("lang", lang)
    }
    changeLang(lang === "FR" ? fr : lang === "EN" ? en : es)
    let langCopy = [...langList]
    for (let i = 0; i < langSelect.length; i++) {
        if (langCopy.length === langList.length) {
            let select = langSelect[i]
            if (select.classList.contains("active")) {
                select.innerHTML = lang
                langCopy = langCopy.filter(item => item !== lang)
            }
        } else {
            let select = langSelect[i]
            select.innerHTML = langCopy[0]
            langCopy = langCopy.filter(item => item !== langCopy[0])
        }
    }
    $.ajax({
        type: 'GET',
        url: 'https://wakatime.com/share/@Torisutan/9bbba351-99bb-4558-a775-7164226010ae.json',
        dataType: 'jsonp',
        success: function(response) {
            let totalTime = response.data["grand_total"]["total_seconds_including_other_language"]
            let averageTime = response.data["grand_total"]["daily_average_including_other_language"]
            alltime.innerText = timeToString(Math.floor(totalTime))
            dailytime.innerText = timeToString(Math.floor(averageTime))
        },
    });
})

sun.addEventListener("click", () => {
    let theme = document.documentElement.getAttribute("data-theme")
    theme = theme === "dark" ? "light" : "dark"
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("data-theme", theme)
})

for (let i = 0; i < langChange.length; i++) {
    langChange[i].addEventListener("click", () => {
        let lang = langChange[i].innerHTML
        document.documentElement.setAttribute("lang", lang.toLowerCase())
        localStorage.setItem("lang", lang)
        window.location.reload()
    })
}

function changeLang(lang) {
    // Get all elements that have text content
    const elements = document.querySelectorAll('*:not(script):not(style):not(br):not(hr):not(img):not(input):not(textarea):not(select):not(option):not(canvas):not(svg):not(path):not(linearGradient):not(radialGradient):not(stop):not(mask):not(symbol):not(use):not(iframe):not(video):not(audio)');

    // Loop through each element and replace its text with its translation
    elements.forEach((element) => {
        const text = element.textContent.trim();
        if (element.children.length > 0) return;
        if (text && lang[text]) {
            element.innerHTML = lang[text];
            if (element.hasAttribute("text")) {
                element.setAttribute("text", lang[text])
            }
        }
    });
}

send_button.addEventListener("click", () => {
    let name = document.getElementById("form-name").value
    if (name === "") {
        document.getElementById("name-error").classList.add("show")
        document.getElementById("form-name").classList.add("error")
    } else if (name !== "" && document.getElementById("name-error").classList.contains("show")) {
        document.getElementById("name-error").classList.remove("show")
        document.getElementById("form-name").classList.remove("error")
    }
    let email = document.getElementById("form-email").value
    if (email === "") {
        document.getElementById("email-error").classList.add("show")
        document.getElementById("form-email").classList.add("error")
    } else if (email !== "" && document.getElementById("email-error").classList.contains("show")) {
        document.getElementById("email-error").classList.remove("show")
        document.getElementById("form-email").classList.remove("error")
    }
    let message = document.getElementById("form-subject").value
    if (message === "") {
        document.getElementById("subject-error").classList.add("show")
        document.getElementById("form-subject").classList.add("error")
    } else if (message !== "" && document.getElementById("subject-error").classList.contains("show")) {
        document.getElementById("subject-error").classList.remove("show")
        document.getElementById("form-subject").classList.remove("error")
    }
    if (name === "" || email === "" || message === "") return
    Email.send({
        SecureToken: "1d134f5b-cb02-4ca7-88d5-4186a58efed6",
        To: "tristanclowez@torisutan.tech",
        From: email,
        Subject: "Message du portfolio de : " + name,
        Body: message
    })
})