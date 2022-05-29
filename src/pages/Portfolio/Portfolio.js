import React from 'react';
import emptyAvatar from "../../assets/empty-avatar.jpg"
import tailwind from "../../assets/icon/tailwind.ico"
import express from "../../assets/icon/express.ico"
import mongodb from "../../assets/icon/mongodb.ico"

const Portfolio = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-slate-50">
            <div className="w-6/12 pb-10 rounded-lg bg-slate-100 shadow-xl flex flex-col justify-center items-center">
                <div class="avatar -mt-7">
                    <div class="w-32 rounded-full">
                        <img className="" src={emptyAvatar} alt="profile pic" />
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl mt-7 text-slate-500 font-bold">Tanvir Hossain sadi</h1>
                    <p className="text-md text-slate-600 ml-1 font-semibold">Web Developer</p>
                </div>
                <div className="divider mx-24"></div>
                <div className="flex flex-col justify-center items-start px-14 w-full ">
                    <div className="flex justify-center items-center">
                        <svg class="w-4" fill="#0284c7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" /></svg>
                        <h2 className="ml-2 text-slate-500 font-bold">htanvir.sadi@gmail.com</h2>
                    </div>
                    <div className="flex justify-center items-center">
                        <svg class="w-4" fill="#0284c7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" /></svg>
                        <h2 className="ml-2 text-slate-500 font-bold">chandina, comilla</h2>
                    </div>
                    <div>
                        <h1 className="text-slate-600 font-semibold">
                            <i class="fa-solid fa-user-graduate text-sky-600 mr-2"></i>
                            Diploma in Computer Engineering (3rd Semister)
                        </h1>
                    </div>
                    {/* technology start */}
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-slate-500 font-bold mt-3 ml-[-105px] flex justify-center items-center">
                            <i class="fa-solid fa-globe mr-1 text-sky-600"></i>
                            Technology List
                        </h2>
                        <div className="flex justify-center ml-7 mt-2">
                            <div>
                                <p className="text-slate-600 font-semibold">
                                    <i class="fa-brands fa-html5 text-red-700 mr-1"></i>
                                    html
                                </p>
                                <p className="text-slate-600 font-semibold">
                                    <i class="fa-brands fa-css3-alt text-sky-600 mr-1"></i>
                                    css
                                </p>
                                <p className="text-slate-600 font-semibold">
                                    <i class="fa-brands fa-js-square text-yellow-600 mr-1"></i>
                                    javascript
                                </p>
                                <p className="text-slate-600 font-semibold">
                                    <i class="fa-brands fa-bootstrap text-purple-600 mr-1"></i>
                                    bootstrap
                                </p>
                                <p className="flex text-slate-600 font-semibold">
                                    <img class="w-4 mr-1" src={tailwind} alt="" />
                                    tailwind css</p>
                            </div>
                            <div className="ml-3">
                                <p className="text-slate-600 font-semibold">
                                    <i class="fa-brands fa-react text-sky-500 mr-1"></i>
                                    React
                                </p>
                                <p className="text-slate-600 font-semibold">
                                    <i class="fa-brands fa-node-js text-green-600 mr-1"></i>
                                    Node Js
                                </p>
                                <p className="flex justify-center items-center text-slate-600 font-semibold">
                                    <img class="w-4 h-4 mr-1" src={express} alt="" />
                                    Express Js
                                </p>
                                <p className="flex justify-center items-center text-slate-600 font-semibold">
                                    <img class="w-4 h-4 mr-1" src={mongodb} alt="" />
                                    Mongo DB
                                </p>
                            </div>
                        </div>
                    </div> {/* technology end */}

                    <div className="mt-5">
                        <h1 className="text-slate-600 font-bold">
                            <i class="fa-solid fa-list-check text-sky-600 mr-2"></i>
                            Projects Link
                        </h1>
                        <div className="flex flex-col justify-center items-center ml-7">
                            <a className="bg-slate-500 px-5 py-1 mt-1 text-white font-bold rounded-lg" target="_blank" href="https://fruits-warehouse-managem-708ba.web.app/">Project 1</a>
                            <a className="bg-slate-500 px-5 py-1 mt-1 text-white font-bold rounded-lg" target="_blank" href="https://familiar-with-life.firebaseapp.com/">Project 2</a>
                            <a className="bg-slate-500 px-5 py-1 mt-1 text-white font-bold rounded-lg" target="_blank" href="https://silver-profiterole-1e8ce3.netlify.app/">Project 3</a>
                        </div>
                    </div>

                    <div className='w-full flex justify-center items-center  mt-10'>
                        <div className='w-4/12 flex justify-evenly'>
                            {/* facebook icon  */}
                            <svg className="w-7 cursor-pointer" fill="#0284c7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>

                            {/* twitter icon */}
                            <svg className="w-7 cursor-pointer" fill="#0284c7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" /></svg>
                            
                            {/* github icon */}
                            <svg className="w-7 cursor-pointer" fill="#334155" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;