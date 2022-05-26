import React from 'react';




const PurchaseConfirmModal = ({product}) => {
    const {name} = product
    return (
        <div>
            
            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id='confirm-purchase' className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="">
                        <h2 className='text-info font-semibold text-start text-2xl text-center mt-3'>
                            Bookig for: {name}
                        </h2>

                        <form className="grid grid-cols-1 gap-4 pt-5 justify-items-center w-full px-8">
                            <input name="date" disabled type="text" value="" className="input input-bordered input-md w-full" />
                            <input required name="name" value="" type="text" className="input input-bordered input-md w-full" />
                            <input name="email" type="text" value="" className="input input-bordered input-md w-full" />
                            <input name="phone" placeholder="phone number" type="text" value="" className="input input-bordered input-md w-full" />
                            <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-info to-info border-0 rounded-lg w-full">Get Started</button>
                        </form>
                    </div>
                    <div className="modal-action">
                        <label for='confirm-purchase' className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseConfirmModal;