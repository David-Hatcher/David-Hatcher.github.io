import React from 'react';
import ContactLine from './ContactLine.js';

const ContactPage = () => {
    return (
        <>
            <div className={"mt-40 col-span-6 md:grid grid-cols-7"}>
                <div className={"flex-col col-span-3"}>
                    <div className={"font-bold text-center mb-4"}>
                        General Information
                        <hr/>
                    </div>
                    <div className={"text-left"}>
                        <p>
                            I am always open to opportunities for new projects. Please feel free to reach out to me at any of the links to the right.
                        </p>
                    </div>
                </div>
                <div className={"flex-col col-start-5 col-span-3 mt-10 md:mt-0"}>
                    <div className={"text-center mb-4 font-bold"}>
                        Contact
                        <hr/>
                    </div>
                    <div className={"flex flex-col"}>
                        <ContactLine href={"mailto:david.milton.hatcher@gmail.com"} text={"david.milton.hatcher@gmail.com"} icon={"fa solid fa-envelope"}/>
                        <ContactLine href={"https://github.com/David-Hatcher"} text={"Github"} icon={"fa-brands fa-github-alt"}/>
                        <ContactLine href={"https://www.linkedin.com/in/david-hatcher-a7539341/"} text={"LinkedIn"} icon={"fa-brands fa-linkedin-in"}/>
                        <ContactLine href={"tel:863-333-8029"} text={"863-333-8029"} icon={"fa-solid fa-phone"}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage;