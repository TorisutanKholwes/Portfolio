import React from "react";
import {getLangText, getText} from "../utils/text"
import { getCookie, setCookie} from "../utils/cookie";
import "./Header.scss";
import sun from "../resources/sun.svg"
import moon from "../resources/moon.svg"

export default class Header extends React.Component {

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


    render() {
        return (
        <header>
            <nav className="toolbar">
                <ul>
                    <li>{getText("profile")}</li>
                    <li>{getText("skills")}</li>
                    <li>{getText("projects")}</li>
                    <li>{getText("software")}</li>
                    <li>{getText("contact")}</li>
                    <li style={{float: "right"}} onClick={this.changeTheme}><img id="themeImg" src={(getCookie("theme") === "light") ? sun : moon}/></li>
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
            <h1>{getText("title")}</h1>
        </header>
        );
    }
}