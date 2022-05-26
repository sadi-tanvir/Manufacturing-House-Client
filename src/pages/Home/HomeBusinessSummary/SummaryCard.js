import React from 'react';
import Flag from './icon/FlagIcon';

const SummaryCard = ({children, text, num}) => {
    return (
        <div className="my-16">
            <div className="flex flex-col justify-center items-center">
                {children}
                <h1 className="text-xl font-bold mt-2">{num}</h1>
                <p className="text-lg font-semibold text-cyan-600 mt-2">{text}</p>
            </div>
        </div>
    );
};

export default SummaryCard;