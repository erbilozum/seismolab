import {motion} from "motion/react";
import React from 'react';

const TitleSmallCard = ({title}: { title: string }) => {
    return (
        <motion.div initial={{opacity: 0, translateY: 40}} whileInView={{opacity: 1, translateY: 0}} className={"relative flex flex-row items-center text-gray-700 font-montserrat"}>
            <span className={"absolute -left-3 -bottom-2 text-5xl text-red-500 leading-none"}>.</span>
            <span className={"uppercase font-semibold tracking-[6px]"}>{title}</span>
        </motion.div>);
};

export default TitleSmallCard;