import React from 'react';
import error from "../../assets/Error404.png"


const Error404 = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <img src={error} alt="404 page" />
        </div>
    );
};

export default Error404;