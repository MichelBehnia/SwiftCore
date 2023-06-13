import React from "react"
import mainIcon from "../assets/mainIcon.png"

const Main = () => {

    return (
        <div className="bg-slate-950">
            <div className="w-full h-screen  flex flex-col justify-between">
                <div className="grid md:grid-cols-2 max-w-[1440px] m-auto">
                    <div className="flex flex-col justify-center items-center w-full px-2 py-8">
                        <div className="w-[85%]">
                            <h1 className="text-violet-400 py-3 text-6xl md:text-7xl font-bold animate-fade-right animate-once animate-duration-1000 animate-delay-500 animate-ease-linear">SwiftCore Solutions.</h1>
                            <p className="text-violet-200 text-2xl md:text-3xl pb-4 animate-fade-right animate-once animate-duration-1000 animate-delay-1000 animate-ease-linear"> the all in one sales and marketing software to help your business grow exponentially</p>
                            <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 py-3 px-6 w-[100%] text-xl md:text-1xl animate-fade animate-once animate-duration-1000 animate-delay-200 animate-ease-linear animate-fill-backwards">Get Started</button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-[90%] animate-fade-down animate-once animate-duration-1200 animate-delay-100 animate-ease-linear" src={mainIcon} alt="placeholder"/>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Main

