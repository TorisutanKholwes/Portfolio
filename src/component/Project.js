import React from 'react';
import { getText} from "../utils/text";
import "./Project.scss"

export default class Project extends React.Component {

    openGithubLink = event => {
        let url = event.target.getAttribute("link");
        window.open(url, "_blank");
    }

    render() {
        return (
        <div id="project">
            <h1 id="projectTitle">{getText("projects")}</h1>
            <div id="projectList">
                <div className="project">
                    <h2 className="projectName">Portfolio</h2>
                    <p>{getText("portfolioDescription")}</p>
                    <p>{getText("projectLanguage")} React JS et SCSS</p>
                    <p className="githubLink" link="https://github.com/TorisutanKholwes/Portfolio" onClick={this.openGithubLink}>{getText("githubLink")}</p>
                    <p className="available" available="false">{getText("projectUnavailable")}</p>
                </div>
                <div className="project">
                    <h2 className="projectName">JavaWars 2</h2>
                    <p>{getText("javawarsDescription")}</p>
                    <p>{getText("projectLanguage")} Java</p>
                    <p className="githubLink" link="https://www.github.com/TorisutanKholwes" onClick={this.openGithubLink}>{getText("githubLink")}</p>
                    <p className="available" available="false">{getText("projectUnavailable")}</p>
                </div>
            </div>
        </div>
        );
    }
}