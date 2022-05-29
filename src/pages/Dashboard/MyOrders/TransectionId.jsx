import React from 'react';



const TransactionId = ({trxId}) => {
    return (
        <div>
            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="transaction-id" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="transaction-id" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-xl font-bold uppercase text-sky-600">Your Transaction Id</h3>
                    <p class="py-4 text-slate-600 font-semibold">{trxId}</p>
                </div>
            </div>
        </div >
    );
};

export default TransactionId;