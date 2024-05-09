import React from 'react'
import { toast } from 'react-toastify';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Header from './Index/Header';
import Footer from './Index/Footer';

const Contact = () => {
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    //to create your mail visit here https://www.emailjs.com/ and this is a doc link https://www.emailjs.com/docs/examples/reactjs/
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { subject, email, message };

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            toast.success("message send successfully")
        }, (error) => {
            toast.error(error)
        });
    }

    return (
        <div>
            <Header />
            <section>
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-2xl tracking-tight text-center ">Contact Us</h2>
                    <p className="mb-8 lg:mb-16 text-center sm:text-xl">Got a technical issue? Let us know please...</p>

                    <form className="space-y-8" onSubmit={handleSubmit}>
                        <div>
                            <label className="block mb-2 text-sm">Your email</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name123@gamil.com" onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm">Subject</label>
                            <input type="text" id="subject" className="block p-3 w-full text-sm rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" onChange={(e) => setSubject(e.target.value)} required />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block mb-2 text-sm">Your message</label>
                            <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." onChange={(e) => setMessage(e.target.value)} ></textarea>
                        </div>
                        <button type="submit" className="py-3 px-5 text-sm font-medium text-center bg  text-black rounded-lg bg-primary-700 sm:w-fit focus:ring-4 focus:outline-none ">Send message</button>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Contact
