import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <div className=" my-20 flex justify-center items-center">
                <div className="card w-10/12 md:w-6/12 bg-base-100 shadow-xl py-5">
                    <div className="card-body">
                        <h1 className="text-sky-600 font-bold text-3xl text-center mb-5">My Profile</h1>
                        <form className="grid grid-cols-1 gap-5" action="">
                            <input readOnly name="name" type="text" value={user?.displayName} className="input input-bordered w-full" />
                            <input readOnly name="email" type="text" value={user?.email} className="input input-bordered w-full" />
                            <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                            <input name="address" type="text" placeholder="Your Address" className="input input-bordered w-full" />
                            <input name="education" type="text" placeholder="Education Background" className="input input-bordered w-full" />
                            <input name="linkedin" type="text" placeholder="LinkedIn Profile" className="input input-bordered w-full" />
                            <input name="github" type="text" placeholder="github Profile" className="input input-bordered w-full" />
                            <button type="submit" className="btn btn-accent text-white font-bold bg-gradient-to-r from-sky-500 to-sky-600 border-0 rounded-xl w-full">Update Information</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;