import React from "react"
import {getText} from "../utils/text";
import "bootstrap/dist/css/bootstrap.min.css"
import "./Skills.scss"

import electron from "../resources/techno/electron.png"
import front from "../resources/techno/front.png"
import java from "../resources/techno/java.png"
import nodejs from "../resources/techno/nodejs.png"
import python from "../resources/techno/python.png"
import react from "../resources/techno/react.png"
import scss from "../resources/techno/scss.png"

export default class Skills extends React.Component {

    constructor(props) {
        super(props);
        setTimeout(() => {
            this.setSkills()
        }, 500)
    }

    techno =  [
        {
            title: "Electron",
            logo: electron,
            level: 70,
            color: "#36d399"
        },
        {
            title: "Front-end",
            logo: front,
            level: 75,
            color: "#641ae6"
        },
        {
            title: "Java",
            logo: java,
            level: 85,
            color: "#d926a9"
        },
        {
            title: "NodeJS",
            logo: nodejs,
            level: 35,
            color: "#1fb2a6"
        },
        {
            title: "Python",
            logo: python,
            level: 65,
            color: "#fbbd23"
        },
        {
            title: "React",
            logo: react,
            level: 62,
            color: "#762626"
        },
        {
            title: "SCSS",
            logo: scss,
            level: 45,
            color: "#d926a9"
        },
    ]

    setSkills() {
        let tableBody = document.getElementById("tableBody")
        tableBody.innerHTML = ""
        this.techno.forEach((techno) => {
            let row = document.createElement("tr")
            let logo = document.createElement("td")
            let title = document.createElement("td")
            let level = document.createElement("td")
            let img = document.createElement("img")
            img.src = techno.logo
            img.className = "logo"
            logo.appendChild(img)
            title.innerHTML = techno.title
            let progress = document.createElement("div")
            progress.className = "progress"
            let progressBar = document.createElement("div")
            progressBar.className = "progress-bar"
            progressBar.style.width = techno.level + "%"
            progressBar.style.backgroundColor = techno.color
            progress.appendChild(progressBar)
            level.appendChild(progress)
            row.appendChild(logo)
            row.appendChild(title)
            row.appendChild(level)
            tableBody.appendChild(row)
        })
    }

    render() {
        return (
        <div id="skills">
            <h1 id="skillsTitle">{getText("skills")}</h1>
            <table id="skill">
                   <thead>
                       <tr>
                           <th>{getText("tableLogo")}</th>
                            <th>{getText("tableTitle")}</th>
                            <th style={{width: "65%"}}>{getText("tableLevel")}</th>
                        </tr>
                    </thead>
                    <tbody id="tableBody">
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>{getText("tableLogo")}</th>
                            <th>{getText("tableTitle")}</th>
                            <th>{getText("tableLevel")}</th>
                        </tr>
                   </tfoot>
            </table>
        </div>
    )
  }
}