import React from "react";
import checklistIcon from "../assets/checklistIcon.png"

const Info = () => {

    return (
        <div className="bg-slate-950 mt-20">
            <div className="max-w-[1440px] mx-auto grid md:grid-cols-3 gap-20">
                <div className="text-center">
                    <h1 className="text-violet-200 text-2xl md:text-3xl">
                        Growth.
                    </h1>
                    <p className="text-white  text-lg">
                        Our business growth strategies are designed to help your company thrive and achieve long-term success. Through our comprehensive digital marketing efforts, we aim to increase your brand visibility, generate qualified leads, and drive conversions without compromising time.
                    </p>
                </div>
                <div className="text-center">
                    <h1 className="text-violet-200 text-2xl md:text-3xl">
                        Trust.
                    </h1>
                    <p className="text-white text-lg">
                        Our partnership is characterized by open communication, regular reporting, and a data-driven approach, ensuring transparency and accountability.
                    </p>
                </div>
                <div className="text-center">
                    <h1 className="text-violet-200 text-2xl md:text-3xl">
                        Reliablity.
                    </h1>
                    <p className="text-white text-lg">
                        Our company prides itself on delivering exceptional and extraordinary digital marketing services that surpass industry standards. We are dedicated to helping businesses achieve remarkable results and exceed their growth targets.
                    </p>
                </div>
            </div>
            <div className="grid md:grid-cols-2 max-w-[1240px] mx-auto pt-20">
                <div className="flex flex-col justify-center w-full border-violet-200 border-r-0 md:border-r-2">
                    <h1 className="text-violet-200 text-2xl md:text-3xl font-bold text-center pb-4">What we Provide</h1>
                    <div className="flex flex-row justify-center items-center">
                        <img className="w-[50%]" src={checklistIcon} alt="placeholder"/>
                        <ul className="text-white font-medium">
                            <li className="py-2">•Lead Generation</li>
                            <li className="py-2">•Website Building</li>
                            <li className="py-2">•Website Funneling</li>
                            <li className="py-2">•Automation Text, Phone Calls & Emails</li>
                            <li className="py-2">•5-Star Google Reviews</li>
                            <li className="py-2">•Five in One Inbox</li>
                            <li className="py-2">•Marketing Analysis</li>
                            <li className="py-2">•Customer Relationship Management</li>
                        </ul>
                    </div>
                </div>
                <div className="pl-0 md:pl-10">
                    <h1 className="text-violet-200 text-2xl md:text-3xl font-bold text-center mt-10 mb-5 md:mt-0">How it Works</h1>
                    <div className="ratio ratio-16x9 mt-0 md:mt-5">
                        <iframe className="w-full h-80" src="https://www.youtube.com/embed/ShErdBJLtFY" title="placeholder" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default Info