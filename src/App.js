import React from "react";
import Header from "./component/Header";
import Profile from "./component/Profile";
import {getCookie} from "./utils/cookie";
import "./App.scss"

export default class App extends React.Component {

    constructor(props) {
        super(props);

        window.addEventListener("themeChange", function () {
            let newTheme = getCookie("theme");
            document.getElementsByTagName("body")[0].setAttribute("data-theme", newTheme);
        })
    }


    render() {
        return (
            <>
                <Header />
                <Profile />
            </>
        );
    }
}