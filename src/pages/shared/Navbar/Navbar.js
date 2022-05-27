import React from 'react';
import CustomLink from "../CustomLink/CustomLink"
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

import auth from '../../../firebase.init';
import setAuthToken from '../../../utils/setAuthToken';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);


   const handleSignOut =async () =>{
    await signOut(auth)
    localStorage.clear()
    setAuthToken(false)
   }
    
    return (
        <>
            <header>
                <nav className="w-full ">
                    <div class="navbar bg-base-100">
                        <div class="navbar-start">
                            {/* medium size */}
                            <div className="hidden md:block">
                                <CustomLink className="no-underline font-semibold md:font-bold rounded-lg text-sm px-3 py-2" to='/'>Home</CustomLink>
                            </div>

                            {/* small size */}
                            <div class="dropdown md:hidden">
                                <label tabindex="0" class="btn btn-ghost btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                                </label>
                                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <CustomLink className="no-underline font-semibold md:font-bold rounded-md text-sm px-3 py-2" to='/'>Home</CustomLink>
                                <CustomLink className="no-underline font-semibold md:font-bold rounded-md text-sm px-3 py-2" to='/dashboard'>Dashboard</CustomLink>
                                <CustomLink className="no-underline font-semibold md:font-bold rounded-md text-sm px-3 py-2" to='/purchase'>Orders</CustomLink>
                                <CustomLink className="no-underline font-semibold md:font-bold rounded-md text-sm px-3 py-2" to='/reviews'>Reviews</CustomLink>
                                <CustomLink className="no-underline font-semibold md:font-bold rounded-md text-sm px-3 py-2" to='/contact-us'>Profile</CustomLink>
                                </ul>
                            </div>
                        </div>

                        {/* middle point */}
                        {/* small size */}
                        <div class="navbar-center ml-[-30px] md:hidden">
                            <CustomLink className="no-underline font-semibold md:font-bold rounded-lg text-sm px-3 py-2" to='/'>Home</CustomLink>
                        </div>


                        {/* right side */}
                        {/* small size */}
                        <div className="md:hidden ml-auto">
                            <div class="dropdown md:hidden">
                                <label tabindex="0" class="btn btn-ghost btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                                </label>
                                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    {
                                        user ? <>
                                            <li className="">
                                                <button onClick={handleSignOut} className="bg-slate-700 text-white px-3 py-2 rounded font-bold ">Logout</button>
                                            </li>
                                        </> : <>
                                            <CustomLink className="no-underline font-semibold md:font-bold rounded-md text-sm px-3 py-2 block" to='/login'>Login</CustomLink>
                                            <CustomLink className="no-underline font-semibold md:font-bold rounded-md text-sm px-3 py-2 block" to='/register'>Register</CustomLink>
                                        </>
                                    }


                                </ul>
                            </div>
                        </div>

                        {/* medium size */}
                        <div className="hidden md:block">
                            <div class="flex justify-end items-center mt-5 md:ml-32">
                                <CustomLink className="no-underline font-semibold md:font-bold rounded-md text-sm px-3 py-2" to='/'>Home</CustomLink>
                                <CustomLink className="no-underline font-semibold md:font-bold rounded-md text-sm px-3 py-2" to='/dashboard'>Dashboard</CustomLink>
                                <CustomLink className="no-underline font-semibold md:font-bold rounded-md text-sm px-3 py-2" to='/purchase'>Orders</CustomLink>
                                <CustomLink className="no-underline font-semibold md:font-bold rounded-md text-sm px-3 py-2" to='/reviews'>Reviews</CustomLink>
                                <CustomLink className="no-underline font-semibold md:font-bold rounded-md text-sm px-3 py-2" to='/contact-us'>Profile</CustomLink>
                                {
                                    user ? <>
                                        <button onClick={handleSignOut} className="bg-slate-700 text-white px-3 py-2 rounded ml-3 font-bold">Logout</button>
                                    </> : <>
                                        <CustomLink className="no-underline font-semibold md:font-bold rounded-md text-sm px-3 py-2" to='/login'>Login</CustomLink>
                                        <CustomLink className="no-underline font-semibold md:font-bold rounded-md text-sm px-3 py-2" to='/register'>Register</CustomLink>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;