import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import SpeakersPage from "./SpeakersPages";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

function App() {
    return (
        <div className="contaner-fluid">
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage}></Route>
                <Route path="/About" exact component={AboutPage}></Route>
                <Route path="/Speakers" component={SpeakersPage}></Route>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    );
}

export default App;