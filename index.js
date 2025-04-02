import fr from "./assets/langs/fr.json"
import en from "./assets/langs/en.json"
import es from "./assets/langs/es.json"

import emailjs from '@emailjs/browser';

const carrousel_container = document.getElementById("project-carrousel");
const slide = document.querySelector(".project")
const numSlides = document.querySelectorAll(".project").length;
const nextBtn = document.getElementById("arrow-right")
const prevBtn = document.getElementById("arrow-left")
const redirectButton = document.querySelectorAll(".project-button")

const coursesTab = document.getElementById("tab-courses")

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

const scrollType = {
    "profile": 0,
    "skills": 1100,
    "projects": 1750,
    "software": 2400,
    "contact": 5000
}

import { inject } from '@vercel/analytics';

inject();

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

function isGood(carrousel, slide) {
    if (slide % 10 !== 0) {
        for (let i = 1; i < 10; i++) {
            if ((slide - i) % 10 === 0) {
                slide -= i
                break
            }
        }
    }
    if (carrousel % 10 !== 0) {
        for (let i = 1; i < 10; i++) {
            if ((carrousel - i) % 10 === 0) {
                carrousel -= i
                break
            }
        }
    }
    return carrousel % slide !== 0;
}

nextBtn.addEventListener("click", () => {
    let slideWith = slide.clientWidth;
    if (isGood(carrousel_container.scrollLeft, slideWith)) return
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
    let slideWith = slide.clientWidth;
    console.log("ScrollLeft: " + carrousel_container.scrollLeft + " + " + slideWith + " = " + isGood(carrousel_container.scrollLeft + slideWith))
    if (isGood(carrousel_container.scrollLeft, slideWith)) return
    carrousel_container.scrollLeft -= slideWith;
    if (carrousel_container.scrollLeft - slideWith <= 0) {
        nextBtn.src = nextHover
        prevBtn.src = prevActif
    } else {
        nextBtn.src = nextHover
        prevBtn.src = prevHover
    }
})

window.addEventListener("resize", () => {
    carrousel_container.scrollLeft = 0
    prevBtn.src = prevActif
    nextBtn.src = nextHover
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
    const animElemId = ["logo", "title", "subtitle", "tab-nav", "profile-picture"]
    for (let i = 0; i < animElemId.length; i++) {
        let id = animElemId[i];
        document.getElementById(id).classList.add("anim")
    }
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
    const elements = document.querySelectorAll('*:not(script):not(style):not(br):not(hr):not(img):not(input):not(textarea):not(select):not(option):not(canvas):not(svg):not(path):not(linearGradient):not(radialGradient):not(stop):not(mask):not(symbol):not(use):not(iframe):not(video):not(audio)');

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

const cooldownTime = 10000
let mailSendCount = 0
let cooldown = false

send_button.addEventListener("click", () => {
    if (cooldown) return
    const form_fields = ["name", "email", "subject"].map(id => document.getElementById(`form-${id}`))
    const error_fields = ["name", "email", "subject"].map(id => document.getElementById(`${id}-error`))
    let valid = true
    for (let i = 0; i < form_fields.length; i++) {
        const field = form_fields[i]
        const error_field = error_fields[i]
        const value = field.value.trim()
        const hasError = value === ""
        error_field.classList.toggle("show", hasError)
        field.classList.toggle("error", hasError)
        valid = valid && !hasError
    }
    if (form_fields[1].value.trim() !== "") {
        let emailFormError = !form_fields[1].value.trim().includes("@")
        valid = valid && !emailFormError
        document.getElementById("missing-mail-error").classList.toggle("show", emailFormError)
        form_fields[1].classList.toggle("error", emailFormError)
    }
    if (!valid || mailSendCount > 10) return
    let param = {
        "name": form_fields[0].value,
        "email": form_fields[1].value,
        "message": form_fields[2].value
    }
    emailjs.init("EB8AunJ3SQFowF7C9")
    emailjs.send("service_kto8twb", "template_0k0pi8w", param).then(function (success) {
        let elemSuccess = document.getElementById("success-send-message")
        elemSuccess.style.display = "block"
        setTimeout(() => {
            elemSuccess.style.display = "none"
        }, 5000)
        mailSendCount++
    }, function (error) {
        let elemError = document.getElementById("error-send-message")
        elemError.style.display = "block"
        setTimeout(() => {
            elemError.style.display = "none"
        }, 5000)
    })

    cooldown = true
    setTimeout(() => {
        cooldown = false
    }, cooldownTime)
})

/*coursesTab.addEventListener("click", () => {
    let url = "https://courses.torisutan.live/"
    window.open(url, "_blank")
})*/

const animElemClass = ["skill-bar"]
const animElemSection = ["profile", "skill", "project", "software", "contact", "footer"]
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("anim")
        }
    })
})

for (let i = 0; i < animElemClass.length; i++) {
    document.querySelectorAll(`.${animElemClass[i]}`).forEach(value => {
        observer.observe(value)
    })
}

for (let i = 0; i < animElemSection.length; i++) {
    let element = document.querySelector(`#${animElemSection[i]}`)
    observer.observe(element)
}
