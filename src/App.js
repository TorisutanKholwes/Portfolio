import React from "react";
import Header from "./components/Header";
import "./App.scss"


export default class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Header />
            </div>
        );
    }

}