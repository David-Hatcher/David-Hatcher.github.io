import React from 'react';

const ContactLine = (props) => {
    return (
        <div className={"flex flex-row space-x-3"}>
            <i className={`${props.icon} mt-1`}></i>
            <p><a title={props.title ?? props.href} href={props.href} className={"text-blue-400"}>{props.text}</a></p>
        </div>
    )
}

export default ContactLine;