import React from 'react';
import { FaFacebookF, FaInstagram, FaDiscord } from "react-icons/fa";
import phone1 from '../../assets/phone1.png';

import './Contact.css';

const ContactUs: React.FC = () => {
    return (
        <div id='contact' className="max-w-5xl max-lg:max-w-3xl mx-auto bg-zinc-50 my-6 font-[sans-serif] pt-8">
            <span className='font-inter text-5xl font-bold texto'>Cvinter</span>
            <div className="text-center px-6">
                <h2 className="text-3xl font-bold">Contacto</h2>
                <p className="text-base text-gray-500 mt-1">Tienes alguna pregunta? Envíanos un mensaje!</p>
            </div>

            <div className="flex my-10 bg-white rounded-lg">
                <div className="m-2 w-5/12 flex justify-center relative bg-blue-2 rounded-lg h-full max-lg:order-1">
                    <div className='' style={{height: '35rem'}}>
                        <img 
                            className='w-full h-full object-cover'
                            src={phone1}
                            alt='imgContact' 
                            title='Contact'
                        />
                    </div>
                    <h2 className="left-8 top-10 absolute font-semibold text-2xl text-white bg-transparent">Contacto</h2>
                    <p className="left-8 top-16 absolute text-lg text-gray-300 mt-4  bg-transparent">Hablemos!</p>
                    <ul className="absolute left-5 bottom-5 flex flex-wrap gap-4 mt-16">
                        <li className="transition cursor-pointer group bg-black hover:bg-white h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <a>
                               <FaFacebookF className='fill-white group-hover:fill-black'/>
                            </a>
                        </li>
                        <li className="transition cursor-pointer group bg-black hover:bg-white h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <a>
                               <FaInstagram className='fill-white group-hover:fill-black'/>
                            </a>
                        </li>
                        <li className="transition cursor-pointer group bg-black hover:bg-white h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <a>
                               <FaDiscord className='fill-white group-hover:fill-black'/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="p-10 lg:w-1/2 lg:col-span-2">
                    <form>
                        <div className="grid sm:grid-cols-2 gap-8">
                            {[
                                ['Nombre', 'text'],
                                ['Apellido', 'text'],
                                ['Email', 'email'],
                                ['Telefono', 'number'],
                            ].map(([label, type]) => (
                                <div key={label} className="group relative flex flex-col">
                                    <label className='text-neutral-400 group-focus-within:text-black text-sm'>{label}</label>
                                    <input type={type}
                                        className="mt-2 bg-white text-black border-b border-gray-300 focus:border-black outline-none"
                                    />
                                </div>
                            ))}
                            <div className="group relative flex flex-col col-span-2">
                                <label className='text-neutral-400 group-focus-within:text-black text-sm'>Message</label>
                                <input type="text"
                                    placeholder='Write your message...'
                                    className="mt-2 bg-white text-black border-b-2 border-gray-300 focus:border-black outline-none"
                                />
                            </div>
                        </div>

                        <button type="button"
                            className="mt-28 mb-28 flex items-center justify-center text-lg lg:ml-auto max-lg:w-full rounded-full px-10 py-3 tracking-wide text-white bg-blue-logo hover:bg-blue-2">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
