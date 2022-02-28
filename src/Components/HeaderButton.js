import React from 'react'


const HeaderButton = (props) => {

    return (
        <>
            <button 
            className={`relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white ${props.selected ? "from-purple-600 to-blue-500" : ""}`}
            onClick={() => props.onclick(props.text)}
            >
                <span className={`relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0 ${props.selected ? "bg-opacity-0" : ""}`}>
                    {props.text}
                </span>
            </button>
        </>
    )
}

export default HeaderButton;