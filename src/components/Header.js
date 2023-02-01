import React from "react";
import "./Header.scss";

export default class Header extends React.Component {
    render() {
        return (
            <>
                <div className="header">
                    <h1>Header</h1>
                </div>
                <div id="rectangleDiv"></div>
                <div id="circle1"></div>
                <div id="circle2"></div>
                <div id="circle3"></div>
                <div id="circle4"></div>
            </>
        );
    }
}