import React from "react";
import * as text from "../utils/text"
import { getCookie} from "../utils/cookie";
import sun from "../resources/sun.svg"
import moon from "../resources/moon.svg"

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <header>
            <nav>
                <ul>
                    <li><a href="#">{text.getText("profile")}</a></li>
                    <li><a href="#">{text.getText("skills")}</a></li>
                    <li><a href="#">{text.getText("projects")}</a></li>
                    <li><a href="#">{text.getText("software")}</a></li>
                    <li><a href="#">{text.getText("contact")}</a></li>
                </ul>
            </nav>
            <h1>Salut 👋🏻, je suis Tristan</h1>
            <img src={(getCookie("theme") === "light") ? sun : moon} alt=""/>
        </header>
        );
    }
}