import React, { useState } from 'react';
import './CSS/App.css';
import './index.css';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import ContactPage from './Components/ContactPage';
import AboutPage from './Components/AboutPage';
import ProjectsPage from './Components/ProjectsPage';


function App() {
    const [body, setBody] = useState("Projects");

    const navigateTo = (page) => {
        setBody(page);
    }

    const getCurrentBody = () => {
        switch (body) {
            case "Contact":
                return <ContactPage/>
            case "About":
                return <AboutPage handleNavigation={navigateTo}/>
            case "Projects":
            // case "Home":
            default:
            return <ProjectsPage/>
                // return <HomePage/>
        }
    }

    return (
        <div className="body h-max min-h-screen bg-neutral-900">
            <header className="h-1/5 md:h-[10%]">
                <NavBar handleNavigation={navigateTo} currentSelected={body}/>
            </header>
            <div className={"h-4/5 md:h-[90%] h-full md:grid md:grid-cols-7 text-white mx-10 text-center md:mx-0"}>
                <div className="md:col-start-3 md:col-span-3 items-center">
                    {getCurrentBody(body)}
                </div>
            </div>
        </div>
    );
}

export default App;
