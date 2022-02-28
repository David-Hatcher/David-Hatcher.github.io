import React from 'react';
import headshot from '../Images/Headshot.png'

const AboutPage = (props) => {
    const navigateToResume = () => {
        props.handleNavigation("Resume");
    }
    return (
        <div className={"md:grid md:grid-cols-5 md:gap-4 md:mt-40"}>
            {/* Hey, I’m David Hatcher. This will be my development portfolio, I will be sharing all of my projects and things I learn throughout these projects along with things I learn in my future classes. I am pretty new to coding in general and hoping to learn as much as possible as quickly as I can. I start classes for programming in May 2019 and will hopefully be finished with my Bachelors Degree in 2020-2021. In my free time, when I’m not coding, I enjoy playing video games, watching tv, and playing with my dog. */}
            <div className={"col-span-2 flex md:row-start"}>
                <img src={headshot} className={"self-center"} />
            </div>
            <div className={"col-span-3 md:text-left mt-5 md:mt-0"}>
                <p className="mb-5">Hey, I'm David Hatcher. Welcome to my development portfolio. I just finished my Bachelor's Degree in Computer science at the end of 2021 and started my journey as a Software Engineer at Malwarebytes.</p>            
                <p className="mb-5">I have experience with C, C++, C#, PHP, JavaScript, jQuery, React, Python, Robotics using Python, Qt/QML, HTML.</p>            
                <p className="mb-5">When I'm not developing I like to play video games, watch movies, ride my motorcycle, and play with my Alaskan Malamute.</p>
            </div>
        </div>
    )
}

export default AboutPage;