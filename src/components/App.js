import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursePages";

function App() {
    function getPage() {

        const route = window.location.pathname;
        if(route === "/about") return <AboutPage />
        else if(route === "/courses")return <CoursesPage />
        return <HomePage />
    }
    return (
        <div className="contaner-fluid">
            <Header />
            { getPage() }
        </div>
    );
}

export default App;