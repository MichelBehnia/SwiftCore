import React, { useRef } from 'react';
import calendarIcon from "../assets/calendarIcon.png"
import communicationIcon from "../assets/communicationIcon.png"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
      e.preventDefault()
  
      emailjs.sendForm('service_8t653pp', 'template_2fjsy2n', form.current, 'ACQ3Hjhht80KREU5i')
        .then((result) => {
            console.log(result.text)
            alert("Thank you for contacting us, expect a response as soon as possible")
        }, (error) => {
            console.log(error.text)
        })
    }

    return (
        <div className="bg-slate-950 pt-20 pb-20">
            
            <h1 className='text-violet-200 text-2xl md:text-3xl text-center mb-10'>
                Contact us to book your free consoltation.
            </h1>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="flex flex-col justify-center items-center">
                    <img className='w-[50%] md:w-full' src={calendarIcon} alt="placeholder"/>
                </div>
                <div className='text-violet-200 text-bold justify-center'>
                    <form ref={form} onSubmit={sendEmail}>
                        <label className='block text-xl font-medium'>Name</label>
                        <input className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black' type="text" name="user_name" />
                        <label className='block text-xl font-medium mt-5'>Email</label>
                        <input className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black' type="email" name="user_email" />
                        <label className='block text-xl font-medium mt-5'>Message</label>
                        <textarea rows="6" className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black' name="message" />
                        <input className='w-[200px] my-5 py-2 text-black hover:bg-violet-200 hover:text-violet-500 border-black bg-violet-400 rounded-md' type="submit" value="Send" />
                    </form>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img className='w-[50%] md:w-full' src={communicationIcon} alt="placeholder"/>
                </div>
            </div>
        </div>   
    )
}

export default Contact

