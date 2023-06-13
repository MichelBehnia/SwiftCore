import React from "react"

const Order = () => {

    return (
        <div className="bg-slate-950 pt-20">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="w-full bg-white shadow-white shadow-lg flex flex-col p-4 my-4 rounded-lg hover:scale-105  duration-300">
                    <h2 className="text-2xl font-bold text-center py-3">Package 1</h2>
                    <p className="text-center text-3xl font-bold">1 month free</p>
                    <div className="text-center font-medium mb-6">
                        <p className="py-2 border-b mx-8 mt-6">Jawn 1</p>
                        <p className="py-2 border-b mx-8">Jawn 2</p>
                        <p className="py-2 border-b mx-8">Jawn 3</p>
                    </div>
                    <button className="w-[200px] my-6 mx-auto px-6 py-2 text-black hover:bg-violet-200 hover:text-violet-500 border-black bg-violet-400">Start Trial</button>
                </div>
                <div className="w-full bg-white shadow-white shadow-lg flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <h2 className="text-2xl font-bold text-center py-3">Package 2</h2>
                    <p className="text-center text-3xl font-bold">$299/month</p>
                    <div className="text-center font-medium mb-6">
                        <p className="py-2 border-b mx-8 mt-6">Jawn 1</p>
                        <p className="py-2 border-b mx-8">Jawn 2</p>
                        <p className="py-2 border-b mx-8">Jawn 3</p>
                    </div>
                    <button className="w-[200px] my-6 mx-auto px-6 py-2 text-black hover:bg-violet-200 hover:text-violet-500 border-black bg-violet-400">Subscribe</button>
                </div>
                <div className="w-full bg-white shadow-white shadow-lg flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <h2 className="text-2xl font-bold text-center py-3">Package 3</h2>
                    <p className="text-center text-3xl font-bold">$999/month</p>
                    <div className="text-center font-medium mb-6">
                        <p className="py-2 border-b mx-8 mt-6">Jawn 1</p>
                        <p className="py-2 border-b mx-8">Jawn 2</p>
                        <p className="py-2 border-b mx-8">Jawn 3</p>
                    </div>
                    <button className="w-[200px] my-6 mx-auto px-6 py-2 text-black hover:bg-violet-200 hover:text-violet-500 border-black bg-violet-400">Subscribe</button>
                </div>
            </div>
        </div>    
    )
}

export default Order

