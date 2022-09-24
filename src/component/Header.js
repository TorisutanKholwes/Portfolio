import React from "react";
import {getLangText, getText} from "../utils/text"
import { getCookie, setCookie} from "../utils/cookie";
import "./Header.scss";
import sun from "../resources/sun.svg"
import moon from "../resources/moon.svg"

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        setTimeout(() => {
            let part = document.getElementsByClassName("toolbarPart");
            for (let i = 0; i < part.length; i++) {
                part[i].addEventListener("click", this.goToPart);
            }
        })
    }

    changeTheme = () => {
        let newTheme = getCookie("theme") === "light" ? "dark" : "light";
        setCookie("theme", newTheme);
        window.dispatchEvent(new Event("themeChange"))
        document.getElementById("themeImg").src = (newTheme === "light") ? sun : moon;
    }

    changeLang = event => {
        let newLang = event.target.className
        setCookie("lang", newLang);
        window.location.reload()
    }

    goToPart = event => {
        let target = event.target;
        let value = parseInt(target.getAttribute("goto"));
        window.scrollTo({top: value, behavior: "smooth"});
    }

    render() {
        return (
        <header id="header">
            <nav className="toolbar">
                <ul>
                    <li className="toolbarPart" goto="655">{getText("profile")}</li>
                    <li className="toolbarPart" goto="1255">{getText("skills")}</li>
                    <li className="toolbarPart" goto="1830">{getText("projects")}</li>
                    <li className="toolbarPart" goto="2250">{getText("software")}</li>
                    <li className="toolbarPart" goto="2800">{getText("contact")}</li>
                    <li style={{float: "right"}} onClick={this.changeTheme}><img id="themeImg" src={(getCookie("theme") === "light") ? sun : moon} alt="light and dark button"/></li>
                    <div className="lang">
                        <li id="langText" style={{float: "right"}}>{getText("lang")}</li>
                        <div style={{float: "right"}} className="langList">
                            <p className="fr" onClick={this.changeLang}>{getLangText("fr", "lang-alt")}</p>
                            <p className="en" onClick={this.changeLang}>{getLangText("en", "lang-alt")}</p>
                            <p className="es" onClick={this.changeLang}>{getLangText("es", "lang-alt")}</p>
                        </div>
                    </div>
                </ul>
            </nav>
            <div id="titleDesc">
                <h1 id="title">{getText("title")}</h1>
                <h5 id="mini-desc">{getText("mini-desc")}</h5>
            </div>
        </header>
        );
    }
}