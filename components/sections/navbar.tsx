"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import logger from "@/lib/logger"; // pino instance

interface NavbarProps {
    onMapChange: (id: number) => void;
}

const Navbar = ({ onMapChange }: NavbarProps) => {
    const [remoteIpV4, setRemoteIpV4] = useState("127.0.0.1");
    const [isOpened, setIsOpened] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        const fetchIP = async () => {
            const urls = [
                "https://api.ipify.org?format=json",
                "https://ipapi.co/json/",
                "https://ip-api.com/json"
            ];

            for (const url of urls) {
                try {
                    const response = await axios.get(url);
                    // Farklı API'lerin farklı key isimleri olabilir (ip, query vb.)
                    const ip = response.data.ip || response.data.query;

                    if (ip) {
                        setRemoteIpV4(ip);
                        logger.debug({ip},`Fetched IP`);
                        return; // IP bulundu, döngüden çık.
                    }
                } catch (err) {
                    logger.error({err},`failed, trying next...`);
                }
            }
            logger.error("All IP services failed.");
        };

        fetchIP();
    }, []);

    const maps = [
        { id: 1, name: "basic", img: "/maps/map-basic.jpg" },
        { id: 2, name: "dataviz", img: "/maps/map-dataviz.jpg" },
        { id: 3, name: "hillshade", img: "/maps/map-hillshade.jpg" },
        { id: 4, name: "hybrid", img: "/maps/map-hybrid.jpg" },
        { id: 5, name: "topov2", img: "/maps/map-topo-v2.jpg" },
    ];

    return (
        <nav className='fixed top-0 right-0 w-full flex flex-col items-end p-4 z-[100] pointer-events-none'>
            {/* Üst Kısım: IP Badge ve Toggle Butonu */}
            <div className='flex items-center gap-3 pointer-events-auto'>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className='flex items-center gap-2 h-9 bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-4 shadow-2xl'
                >
                    <span className='flex h-2 w-2 relative'>
                        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
                        <span className='relative inline-flex rounded-full h-2 w-2 bg-emerald-500'></span>
                    </span>
                    <span className='text-[10px] font-mono text-emerald-100/70 tracking-tighter'>
                        SERVER_IP: {remoteIpV4}
                    </span>
                </motion.div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpened(!isOpened)}
                    className={`h-11 w-11 flex items-center justify-center rounded-xl border transition-colors duration-300 backdrop-blur-md shadow-2xl
                        ${isOpened ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400' : 'bg-black/50 border-white/10 text-white'}`}
                >
                    <motion.div
                        animate={{ rotate: isOpened ? 90 : 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                        <span className='text-xl font-bold select-none'>≡</span>
                    </motion.div>
                </motion.button>
            </div>

            {/* Harita Seçim Paneli */}
            <AnimatePresence>
                {isOpened && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className='w-full mt-4 pointer-events-auto'
                    >
                        <div className='flex flex-row gap-4 overflow-x-auto pb-6 pt-2 px-2 no-scrollbar scroll-smooth'>
                            {maps.map((map, index) => (
                                <motion.div
                                    key={map.id}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ y: -5 }}
                                    onClick={() => {
                                        onMapChange(map.id);
                                        setIsOpened(false);
                                    }}
                                    className='group relative flex-shrink-0 cursor-pointer w-60 sm:w-80'
                                >
                                    <div className="relative h-36 sm:h-44 rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all group-hover:border-emerald-500/50">
                                        <Image
                                            src={map.img}
                                            alt={map.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                                        <div className="absolute bottom-0 left-0 w-full p-4">
                                            <motion.span
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className='text-[9px] font-bold text-emerald-400 uppercase tracking-widest block mb-1'
                                            >
                                                STYLING {map.id}
                                            </motion.span>
                                            <p className='text-sm font-bold text-white uppercase tracking-wider'>
                                                {t(`maps.${map.name}.name`)}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style dangerouslySetInnerHTML={{ __html: `
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}} />
        </nav>
    );
};

export default Navbar;
