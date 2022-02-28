import React from 'react';
import datavis from '../Images/DataVis.png';
import wordlesolver from '../Images/WordleSolver.png';
import kanban from '../Images/KanBanBoard.png';
import finalcalc from '../Images/FinalCalc.png';
import ProjectBlock from './ProjectBlock.js';

const ProjectsPage = () => {
    return (
        <div className={"md:grid md:grid-cols-2 md:gap-5 md:mt-20"}>
            <div className={"md:grid md:grid-rows-2 md:gap-5"}>
                <ProjectBlock image={datavis} langOne={"Javascript"} langTwo={"D3.JS"} title={"Data Visualization of Tweets"} description={"This is a Data Visualization project using Javascript and D3.JS."} repoUrl={"https://github.com/David-Hatcher/DatavisFinalProject"} demoUrl={"https://www.davidhatcher.dev/DatavisFinalProject/"}/>
                <ProjectBlock image={finalcalc} langOne={"Javascript"} langTwo={"React"} title={"Final Grade Calculator"} description={"This is a calculator I created to determine what I needed on the final for each grade."} repoUrl={"https://github.com/David-Hatcher/FinalCalculator"} demoUrl={"https://www.davidhatcher.dev/FinalCalculator/"}/>
            </div>
            <div className={"md:grid md:grid-rows-2 md:gap-5 pb-5 md:pb-0"}>
                <ProjectBlock image={wordlesolver} langOne={"Javascript"} langTwo={"React"} title={"Wordle Solver"} description={"This is a Wordle Solver I created, originally in python then ported to React/JS."} repoUrl={"https://github.com/David-Hatcher/wordle-solver"} demoUrl={"https://www.davidhatcher.dev/wordle-solver/"}/>
                <ProjectBlock image={kanban} langOne={"React"} langTwo={"SQL"} title={"Kanban Board"} description={"This was a team project to create a Kanban board that connects to an API/SQL DB. Login - dhatcher//password"} repoUrl={"https://github.com/David-Hatcher/DBTodoAppFrontEnd"} demoUrl={"https://www.davidhatcher.dev/DBTodoAppFrontEnd/"}/>
            </div>
        </div>
    )
}

export default ProjectsPage;