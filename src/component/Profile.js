import React from "react"
import {httpGet} from "../utils/request";
import $ from "jquery"
import "./Profile.scss";
import {timeToString} from "../utils/time";
import {getText} from "../utils/text";

export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.setCodingData();
    }


    getProfilePicture() {
        let json = JSON.parse(httpGet("https://api.github.com/users/TorisutanKholwes"))
        return json["avatar_url"];
    }

    setCodingData() {
        $.ajax({
            type: 'GET',
            url: 'https://wakatime.com/share/@Torisutan/5a253465-63d8-4f99-80f9-26b179106833.json',
            dataType: 'jsonp',
            success: function(response) {
                let totalTime = response.data["grand_total"]["total_seconds_including_other_language"]
                let averageTime = response.data["grand_total"]["daily_average_including_other_language"]
                $({countNum: 0}).animate({countNum: totalTime}, {
                    duration: 1500,
                    easing: 'linear',
                    step: function() {
                        $('#total').text(timeToString(Math.floor(this.countNum)));
                    }
                })
                $({countNum: 0}).animate({countNum: averageTime}, {
                    duration: 1500,
                    easing: 'linear',
                    step: function() {
                        $('#average').text(timeToString(Math.floor(this.countNum)));
                    }
                })
            },
        });
    }

    render() {
        return (
        <div className="profile">
            <h1 id="profileTitle">{getText("profile")}</h1>
            <div className="content">
                <div className="left">
                    <p id="presentation">{getText("presentation")}</p>
                    <h2 id="myStats">{getText("myStats")}</h2>
                    <div id="wakatimeData">
                        <div className="total">
                            <h5>{getText("hourCodeTotal")}</h5>
                            <p id="total"></p>
                        </div>
                        <div>
                            <h5>{getText("hourCodeAverage")}</h5>
                            <p id="average"></p>
                        </div>
                    </div>
                    <p id="infoHour">{getText("infoHour")}</p>
                </div>
                <div className="right">
                    <img id="profilePicture" src={this.getProfilePicture()} alt=""/>
                </div>
            </div>
        </div>
        )
    }
}