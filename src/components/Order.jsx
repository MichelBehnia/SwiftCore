import React from "react"

const Order = () => {

    return (
        <div className="bg-slate-950 pt-20">
            <h1 className='text-violet-200 text-2xl md:text-3xl text-center mb-10'>
                Want to see if SwiftCore is for you? Get the first two weeks on us.
            </h1>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="w-full bg-white shadow-white shadow-lg flex flex-col p-4 my-4 rounded-lg hover:scale-105  duration-300">
                    <h2 className="text-2xl font-bold text-center py-3">Standard</h2>
                    <p className="text-center text-3xl font-bold pb-3">14 day free trial</p>
                    <p className="text-center text-2xl font-bold">$97/month</p>
                    <div className="text-center font-medium mb-6">

                        <p className="py-2 border-b mx-8 mt-6">2 Way Text & Email Conversation</p>
                        <p className="py-2 border-b mx-8">GMB Messaging</p>
                        <p className="py-2 border-b mx-8">GMB Call Tracking</p>
                        <p className="py-2 border-b mx-8">Facebook Messenger</p>
                        <p className="py-2 border-b mx-8">Reputation Management</p>
                        <p className="py-2 border-b mx-8">Missed Call Text Back</p>
                        <p className="py-2 border-b mx-8">Web Chat</p>
                        <p className="py-2 border-b mx-8">Text to Pay</p>
                    </div>
                    <a href="https://buy.stripe.com/cN2dRB6KC9gX9VufYZ" className="flex flex-col justify-center">
                        <button className="w-[200px] my-6 mx-auto px-6 py-2 text-black hover:bg-violet-200 hover:text-violet-500 border-black bg-violet-400">Subscribe</button>
                    </a>
                </div>
                <div className="w-full bg-white shadow-white shadow-lg flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <h2 className="text-2xl font-bold text-center py-3">Professional</h2>
                    <p className="text-center text-3xl font-bold pb-3">14 day free trial</p>
                    <p className="text-center text-2xl font-bold">$297/month</p>
                    <div className="text-center font-medium mb-6">
                        <p className="py-2 border-b mx-8 mt-6">Everything in Standard +</p>
                        <p className="py-2 border-b mx-8">Calendar</p>
                        <p className="py-2 border-b mx-8">CRM</p>
                        <p className="py-2 border-b mx-8">Opportunities</p>
                        <p className="py-2 border-b mx-8">Email Marketing</p>
                    </div>
                    <a href="https://buy.stripe.com/fZe3cX5Gydxd6JifZ1" className="flex flex-col justify-center">
                        <button className="w-[200px] my-6 mx-auto px-6 py-2 text-black hover:bg-violet-200 hover:text-violet-500 border-black bg-violet-400">Subscribe</button>
                    </a>
                </div>
                <div className="w-full bg-white shadow-white shadow-lg flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <h2 className="text-2xl font-bold text-center py-3">Premium</h2>
                    <p className="text-center text-3xl font-bold pb-3">14 day free trial</p>
                    <p className="text-center text-2xl font-bold">$497/month</p>
                    <div className="text-center font-medium mb-6">
                        <p className="py-2 border-b mx-8 mt-6">Everything in Professional +</p>
                        <p className="py-2 border-b mx-8">Funnels</p>
                        <p className="py-2 border-b mx-8">Memberships</p>
                        <p className="py-2 border-b mx-8">Websites</p>
                        <p className="py-2 border-b mx-8">Workflows</p>
                        <p className="py-2 border-b mx-8">Forms</p>
                        <p className="py-2 border-b mx-8">Surveys</p>
                        <p className="py-2 border-b mx-8">Triggers</p>
                        <p className="py-2 border-b mx-8">Trigger Links</p>
                        <p className="py-2 border-b mx-8">All Reporting</p>
                        <p className="py-2 border-b mx-8">SMS & Email Templates</p>
                        <p className="py-2 border-b mx-8">Campaigns</p>
                        <p className="py-2 border-b mx-8">Social Planner</p>
                        <p className="py-2 border-b mx-8">Invoice</p>
                        <p className="py-2 border-b mx-8">Blogs</p>
                        <p className="py-2 border-b mx-8">Affiliate Manager</p>
                    </div>
                    <a href="https://buy.stripe.com/14kcNx6KC8cT5Fe28a" className="flex flex-col justify-center">
                        <button className="w-[200px] my-6 mx-auto px-6 py-2 text-black hover:bg-violet-200 hover:text-violet-500 border-black bg-violet-400">Subscribe</button>
                    </a>
                </div>
            </div>
        </div>    
    )
}

export default Order

