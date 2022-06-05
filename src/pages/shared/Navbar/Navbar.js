import React from 'react';
import CustomLink from "../CustomLink/CustomLink"
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import setAuthToken from '../../../utils/setAuthToken';
import { useDispatch, useSelector } from "react-redux"
import { FALSE_ADMIN } from "../../../redux/actions/types"
import logo from "../../../assets/icon/logo.png"

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    // redux
    const dispatch = useDispatch()
    const { isAdmin } = useSelector(state => state.adminReducer)

    const handleSignOut = async () => {
        await signOut(auth)
        localStorage.clear()
        setAuthToken(false)
        dispatch({ type: FALSE_ADMIN })
    }

    return (
        <>
            <header>
                <nav className="w-full ">
                    <div class="navbar bg-base-100">
                        <div class="navbar-start">
                            {/* medium size */}
                            <div className="hidden md:block">
                                <img className="w-24 ml-10" src={logo} alt="" />
                            </div>

                            {/* small size */}
                            <div class="dropdown md:hidden">
                                <label tabindex="0" class="btn btn-ghost btn-circle mt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                                </label>
                                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    {
                                        user ? <>
                                            <CustomLink className="no-underline font-semibold md:font-bold rounded-md text-sm px-3 py-2 block mt-2" to='/'>Home</CustomLink>
                                            {
                                                isAdmin ? <>
                                                    <CustomLink className="no-underline font-semibold md:font-bold rounded-md text-sm px-3 py-2 block mt-2" to='/dashboard/manageAllOrders'>Dashboard</CustomLink>
                                                </> :
                                                    <>
                                                        <CustomLink className="no-underline font-semibold md:font-bold rounded-md text-sm px-3 py-2 block mt-2" to='/dashboard/myOrders'>Dashboard</CustomLink>
                                                    </>
                                            }
                                            <li className="">
                                                <button onClick={handleSignOut} className="bg-slate-700 text-white px-4 ml-1 py-2 rounded font-bold mt-2">Logout</button>
                                            </li>
                                        </> : <>
                                            <CustomLink className="no-underline font-semibold md:font-bold rounded-md text-sm px-3 py-2 block mt-2" to='/login'>Login</CustomLink>
                                            <CustomLink className="no-underline font-semibold md:font-bold rounded-md text-sm px-3 py-2 block mt-2" to='/register'>Register</CustomLink>
                                        </>
                                    }


                                </ul>
                            </div>
                        </div>

                        {/* middle point */}
                        {/* small size */}
                        <div class="navbar-center ml-[-30px] md:hidden">
                            <img className="w-24 mt-2" src={logo} alt="" />
                        </div>


                        {/* right side */}
                        {/* small size */}
                        <div className="md:hidden ml-auto">
                            <div class="dropdown md:hidden">
                                <label htmlFor="my-drawer-2" class="btn btn-ghost btn-circle">
                                    <svg className="w-7 mt-5" fill='#0284c7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 416C0 398.3 14.33 384 32 384H86.66C99 355.7 127.2 336 160 336C192.8 336 220.1 355.7 233.3 384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H233.3C220.1 476.3 192.8 496 160 496C127.2 496 99 476.3 86.66 448H32C14.33 448 0 433.7 0 416V416zM192 416C192 398.3 177.7 384 160 384C142.3 384 128 398.3 128 416C128 433.7 142.3 448 160 448C177.7 448 192 433.7 192 416zM352 176C384.8 176 412.1 195.7 425.3 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H425.3C412.1 316.3 384.8 336 352 336C319.2 336 291 316.3 278.7 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H278.7C291 195.7 319.2 176 352 176zM384 256C384 238.3 369.7 224 352 224C334.3 224 320 238.3 320 256C320 273.7 334.3 288 352 288C369.7 288 384 273.7 384 256zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H265.3C252.1 156.3 224.8 176 192 176C159.2 176 131 156.3 118.7 128H32C14.33 128 0 113.7 0 96C0 78.33 14.33 64 32 64H118.7C131 35.75 159.2 16 192 16C224.8 16 252.1 35.75 265.3 64H480zM160 96C160 113.7 174.3 128 192 128C209.7 128 224 113.7 224 96C224 78.33 209.7 64 192 64C174.3 64 160 78.33 160 96z" /></svg>
                                </label>
                            </div>
                        </div>

                        {/* medium size */}
                        <div className="hidden md:block">
                            <div class="flex justify-end items-center mt-5 md:ml-32">
                                <CustomLink className="shadow-md no-underline font-semibold md:font-bold rounded-md text-sm px-7 py-2" to='/'>Home</CustomLink>
                                
                                {user && <CustomLink className="shadow-md no-underline font-semibold md:font-bold rounded-md text-sm px-6 py-2" to={`/dashboard/${isAdmin ? "manageAllOrders": "myOrders"}`}>Dashboard</CustomLink>}
                                {
                                    user ? <>
                                        <button onClick={handleSignOut} className="bg-slate-700 text-white py-[6px] rounded px-8 font-bold ml-2">Logout</button>
                                    </> : <>
                                        <CustomLink className="shadow-md no-underline font-semibold md:font-bold rounded-md text-sm px-8 py-2" to='/login'>Login</CustomLink>
                                        <CustomLink className="shadow-md no-underline font-semibold md:font-bold rounded-md text-sm px-7 py-2" to='/register'>Register</CustomLink>
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