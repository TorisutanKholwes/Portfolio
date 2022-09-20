import React from "react";
import {getText} from "../utils/text";
import "./Software.scss";

import intellij from "../resources/software/intellij.png";
import pycharm from "../resources/software/pycharm.png";
import webstorm from "../resources/software/webstorm.png";
import vsc from "../resources/software/vsc.png";
import xcode from "../resources/software/xcode.png";
import github from "../resources/software/github.png";


export default class Software extends React.Component {

    constructor(props) {
        super(props);
        setTimeout(() => {
            this.setSoftware()
        }, 500)
    }


    softwareList = [
        {
            logo: intellij,
            title: "Intellij IDEA Professional",
            company: "JetBrains",
            use: 5,
            link: "https://www.jetbrains.com/idea/"
        },
        {
            logo: webstorm,
            title: "WebStorm",
            company: "JetBrains",
            use: 3,
            link: "https://www.jetbrains.com/webstorm/"
        },
        {
            logo: pycharm,
            title: "PyCharm Professional",
            company: "JetBrains",
            use: 4,
            link: "https://www.jetbrains.com/pycharm/"
        },
        {
            logo: vsc,
            title: "Visual Studio Code",
            company: "Microsoft",
            use: 1,
            link: "https://code.visualstudio.com/"
        },
        {
            logo: xcode,
            title: "XCode",
            company: "Apple",
            use: 1,
            link: "https://developer.apple.com/xcode/"
        },
        {
            logo: github,
            title: "GitHub",
            company: "GitHub",
            use: 4,
            link: "https://www.github.com/"
        }
    ]

    setSoftware() {
        let softwareBody = document.getElementById("softwareBody");
        softwareBody.innerHTML = "";
        this.softwareList.forEach((software) => {
            let row = document.createElement("tr");
            let logo = document.createElement("td");
            let title = document.createElement("td");
            let company = document.createElement("td");
            let use = document.createElement("td");
            let link = document.createElement("td");
            logo.innerHTML = `<img src="${software.logo}" alt="${software.title}">`;
            title.innerHTML = software.title;
            company.innerHTML = software.company;
            for (let i = 1; i <= 5; i++) {
                if (i <= software.use) {
                    use.innerHTML += `<i class="fa fa-star checked"></i>`;
                } else {
                    use.innerHTML += `<i class="fa fa-star"></i>`;
                }
            }
            link.innerHTML = `<a class="softwareLink" href="${software.link}">${software.link}</a>`;
            row.appendChild(logo);
            row.appendChild(title);
            row.appendChild(company);
            row.appendChild(use);
            row.appendChild(link);
            softwareBody.appendChild(row);
        })
    }

    render() {
        return (
            <div id="software">
                <h1 id="softwareTitle">{getText("software")}</h1>
                <table id="softwareTable">
                    <thead>
                    <tr>
                        <th>{getText("tableLogo")}</th>
                        <th>{getText("tableTitle")}</th>
                        <th>{getText("companyName")}</th>
                        <th>{getText("softwareUse")}</th>
                        <th>{getText("softwareLink")}</th>
                    </tr>
                    </thead>
                    <tbody id="softwareBody">
                    </tbody>
                    <tfoot>
                    <tr>
                        <th>{getText("tableLogo")}</th>
                        <th>{getText("tableTitle")}</th>
                        <th>{getText("companyName")}</th>
                        <th>{getText("softwareUse")}</th>
                        <th>{getText("softwareLink")}</th>
                    </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}