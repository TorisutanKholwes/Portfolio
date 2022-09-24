import React from 'react';
import "./Contact.scss";
import { getText } from "../utils/text";

import github from "../resources/github.svg";
import instagram from "../resources/instagram.svg"
import twitter from "../resources/twitter.svg"
import discord from "../resources/discord.svg"
import mail from "../resources/mail.svg"

export default class Contact extends React.Component {

    openContactLink = e => {
        window.open(e.target.getAttribute("link"), "_blank");
    }

    copyUsername() {
        navigator.clipboard.writeText("Torisutan#0146");
        document.getElementById("copyLink").style.display = "block";
        setTimeout(() => {
            document.getElementById("copyLink").style.display = "none";
        }, 3000);
    }

    render() {
        return (
        <div id="contact">
            <h1 id="contactTitle">Contact</h1>
            <p id="contactText">{getText("contactText")}</p>
            <div id="contactDiv">
                <img className="contactImage" onClick={this.copyUsername} src={discord} alt=""/>
                <img className="contactImage" onClick={this.openContactLink} link="https://github.com/TorisutanKholwes" src={github} alt=""/>
                <img className="contactImage" onClick={this.openContactLink} src={instagram} link="https://www.instagram.com/torisutan_clw/" alt=""/>
                <img className="contactImage" onClick={this.openContactLink} src={twitter} link="https://twitter.com/torisutan_Khlws" alt=""/>
                <img className="contactImage" onClick={this.openContactLink} src={mail} link="mailto:tristanclowez.contact@gmail.com" alt=""/>
            </div>
            <p id="copyLink" style={{display: "none"}}>Lien copié</p>
        </div>
        );
    }
}