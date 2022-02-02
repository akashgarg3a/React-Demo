import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import SpeakersPage from "./SpeakersPages";
import { Route } from "react-router-dom";

function App() {
    return (
        <div className="contaner-fluid">
            <Header />
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/About" exact component={AboutPage}></Route>
            <Route path="/Speakers" component={SpeakersPage}></Route>
        </div>
    );
}

export default App;