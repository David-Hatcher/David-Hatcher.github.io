import React from "react";

const ProjectBlock = (props) => {
    return (
        <div className={"h-[250px] mt-5 md:mt-0 relative"} style={{ "background-image": `url(${props.image})`, "background-position": "center", "background-size": "cover", "background-repeat": "no-repeat" }}>
            <div className={"grid grid-rows-6 gap-2"}>
                    <div className={"bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40 rounded px-2 text-white font-semibold bg-opacity-3"}>
                        {props.title}
                    </div>
                    <div className={"grid grid-cols-5 row-start-3 row-span-2"}>
                        <div className={"col-start-2 col-span-3 text-white font-semibold bg-indigo-800/40 rounded text-sm"}>
                            {props.description}
                        </div>
                    </div>
                    <div className={"grid grid-cols-5 row-start-5 text-black"}>
                        <div className={"col-start-2"}>
                            <a className={"cursor-pointer bg-violet-700 hover:bg-violet-800 text-white font-bold px-2 py-1 rounded-full"} href={props.repoUrl}>Repo</a>
                        </div>
                        <div className={"col-start-4"}>
                            <a className={"cursor-pointer bg-violet-700 hover:bg-violet-800 text-white font-bold px-2 py-1 rounded-full"} href={props.demoUrl}>Demo</a>
                        </div>
                    </div>
            </div>            
            <div className={"text-black font-bold absolute bottom-2 left-5 grid grid-cols-3 gap-5"}>
                <div className={"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded px-2 text-white font-semibold"}>
                    {props.langOne}
                </div>
                <div className={"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded px-2 text-white font-semibold"}>
                    {props.langTwo}
                </div>
            </div>
        </div>
    )
}

export default ProjectBlock;