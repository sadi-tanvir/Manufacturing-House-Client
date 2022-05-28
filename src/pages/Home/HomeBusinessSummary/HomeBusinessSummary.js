import React from 'react';
import ClientsIcon from './icon/ClientsIcon';
import FlagIcon from './icon/FlagIcon';
import LikeIcon from './icon/LikeIcon';
import ProjectsIcon from './icon/ProjectsIcon';
import SummaryCard from './SummaryCard';

const HomeBusinessSummary = () => {
    return (
        <div className="w-full mt-32">
            <h1 className="capitalize text-4xl text-center text-sky-600 font-bold">our business summary</h1>
            <p className="text-lg font-semibold text-center">try to look up the client's expectation</p>
            <div className="w-full grid grid-cols-2 md:grid-cols-4">
            <SummaryCard text="Countries" num={55}>
                <FlagIcon />
            </SummaryCard>
            <SummaryCard text="Complete Projects" num="490+">
                <ProjectsIcon />
            </SummaryCard>
            <SummaryCard text="Happy Clients" num="322+">
                <ClientsIcon />
            </SummaryCard>
            <SummaryCard text="Feedbacks" num="452+">
                <LikeIcon />
            </SummaryCard>
            </div>
        </div>
    );
};

export default HomeBusinessSummary;