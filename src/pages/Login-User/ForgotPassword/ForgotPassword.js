import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const ForgotPassword = ({ setClose,isClose }) => {
    const [email, setEmail] = useState("")
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);


    const handleReset = async (e) => {
        e.preventDefault()
        await sendPasswordResetEmail(email);
        setClose(false)
    }

    // catch error
    useEffect(() => {
        if (error) {
            toast.error(error?.message);
        }
    }, [error])


    return (
        <>
            <div>
                {/* <!-- Put this part before </body> tag --> */}
                <input type="checkbox" id='forgot-password' className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <div className="">
                            <h2 className='text-info font-semibold text-start text-2xl text-center mt-3'>
                                Purchase for:
                            </h2>

                            <form onSubmit={handleReset} className="grid grid-cols-1 gap-4 pt-5 justify-items-center w-full px-8">
                                <input onChange={(e) => setEmail(e.target.value)} required name="email" placeholder="user@example.com" type="text" className="input input-bordered input-md w-full" />
                                <button type="submit" className="btn btn-primary text-white font-bold bg-gradient-to-r from-info to-info border-0 rounded-lg w-full">place order</button>
                            </form>
                        </div>
                        <div className="modal-action">
                            <label for='forgot-password' className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;