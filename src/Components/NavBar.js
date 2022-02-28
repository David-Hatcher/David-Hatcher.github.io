import React from 'react'
import HeaderButton from './HeaderButton'
import JumbledText from './JumbledText'


const NavBar = (props) => {

    const navigateTo = (page) => {
        props.handleNavigation(page);
    }

    return (
        <div className="grid grid-rows-2 place-cotent-start w-full">
            <div className="text-3xl text-center md:text-left">
                <div className="grid grid-rows-1 md:block">
                    <div className="text-center md:text-left name">
                        <div className="md:mx-5 text-white">
                            <JumbledText text={"David Hatcher"}/>
                        </div>
                        <div className="text-sm text-slate-500 md:ml-5">
                            <JumbledText text={"Software Engineer"}/>
                        </div>
                        <hr className="m-0" />    
                    </div>                    
                </div>
            </div>
            <div className="md:text-3xl md:flex md:justify-items-start md:mx-10 ml-1 md:ml-5 mt-3 md:mt-1 justify-items-center text-center">
                {/* <HeaderButton text={'Home'} onclick={navigateTo}  selected={props.currentSelected === 'Home'}/> */}
                <HeaderButton text={'Projects'} onclick={navigateTo} selected={props.currentSelected === 'Projects'}/>
                <HeaderButton text={'Contact'} onclick={navigateTo} selected={props.currentSelected === 'Contact'}/>
                <HeaderButton text={'About'} onclick={navigateTo} selected={props.currentSelected === 'About'}/>
            </div>
        </div>
    )
}


export default NavBar;