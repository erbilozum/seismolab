"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import logger from "@/lib/logger";
import Link from 'next/link';

interface NavbarProps {
    onMapChange: (id: number) => void;
}

const Navbar = ({ onMapChange }: NavbarProps) => {
    const [remoteIpV4, setRemoteIpV4] = useState("127.0.0.1");
    const [isOpened, setIsOpened] = useState(false);
    const { t } = useTranslation();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        const handleMount=()=>{
            setMounted(true);
        }
       handleMount();
    }, []);

    useEffect(() => {
        const fetchIP = async () => {
            const urls = ["https://api.ipify.org?format=json", "https://ipapi.co/json/"];
            for (const url of urls) {
                try {
                    const response = await axios.get(url);
                    const ip = response.data.ip || response.data.query;
                    if (ip) {
                        setRemoteIpV4(ip);
                        return;
                    }
                } catch (err) { logger.error({ err }, "IP fetch failed"); }
            }
        };
        fetchIP().then();
    }, []);

    const maps = [
        { id: 1, name: "basic", img: "/maps/map-basic.jpg" },
        { id: 2, name: "dataviz", img: "/maps/map-dataviz.jpg" },
        { id: 3, name: "hillshade", img: "/maps/map-hillshade.jpg" },
        { id: 4, name: "hybrid", img: "/maps/map-hybrid.jpg" },
        { id: 5, name: "topov2", img: "/maps/map-topo-v2.jpg" },
    ];

    const navLinks = [
        { id: 1, title: t('navbar.api'), url: "/api-docs" },
        { id: 2, title: t('navbar.contact'), url: "mailto:ts.junior.dev@gmail.com" },
    ];
    if (!mounted) {
        return null;
    }
    return (
        <nav className='fixed top-0 w-full flex flex-col items-center p-3 sm:p-6 z-[100] pointer-events-none'>

            {/* Üst Panel */}
            <div className='w-full max-w-7xl flex items-center justify-between bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg rounded-[2rem] px-4 py-2 pointer-events-auto'>

                {/* Sol: IP Bilgisi */}
                <div className='hidden md:flex items-center gap-3 bg-gray-100/50 px-4 py-1.5 rounded-full border border-gray-200'>
                    <span className='h-2 w-2 rounded-full bg-blue-500'></span>
                    <span className='text-[10px] font-bold font-mono text-gray-500 uppercase'>Node: {remoteIpV4}</span>
                </div>

                {/* Orta: Linkler */}
                <div className='flex items-center gap-4 sm:gap-8'>
                    {navLinks.map((item,index) => (
                        <Link key={index} href={item.url} target="_blank" className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-gray-400 hover:text-blue-600 transition-colors">
                            {item.title}
                        </Link>
                    ))}
                </div>

                {/* Sağ: Toggle Buton */}
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpened(!isOpened)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-2xl transition-all duration-300
                        ${isOpened ? 'bg-blue-600 text-white' : 'bg-gray-900 text-white'}`}
                >
                    <span className='text-[10px] font-bold uppercase hidden xs:block'>
                        {isOpened ? t('navbar.close') : t('navbar.maps')}
                    </span>
                    <div className="w-4 h-4 flex flex-col justify-center gap-1">
                        <span className={`h-0.5 bg-current transition-all ${isOpened ? 'rotate-45 translate-y-1.5' : ''} w-4`} />
                        {!isOpened && <span className="h-0.5 bg-current w-4" />}
                        <span className={`h-0.5 bg-current transition-all ${isOpened ? '-rotate-45 -translate-y-0.5' : ''} w-4`} />
                    </div>
                </motion.button>
            </div>

            {/* Harita Seçim Paneli - Mobil Dikey / Desktop Yatay */}
            <AnimatePresence>
                {isOpened && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className='w-full max-w-7xl mt-4 pointer-events-auto max-h-[80vh] overflow-y-auto no-scrollbar'
                    >
                        <div className='bg-white/90 backdrop-blur-2xl rounded-[1.5rem] sm:rounded-[2.5rem] border border-white/50 p-4 sm:p-8 shadow-2xl'>

                            {/* Mobilde Column (Dikey), Desktopta Row (Yatay) */}
                            <div className='flex flex-col sm:flex-row gap-4 sm:gap-6'>
                                {maps.map((map) => (
                                    <motion.div
                                        key={map.id}
                                        whileHover={{ y: -5 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => {
                                            onMapChange(map.id);
                                            setIsOpened(false);
                                        }}
                                        className='relative flex-shrink-0 cursor-pointer w-full sm:w-64'
                                    >
                                        <div className="relative h-24 sm:h-44 rounded-[1.25rem] sm:rounded-[2rem] overflow-hidden border-2 border-transparent hover:border-blue-500 transition-all duration-300 shadow-sm">
                                            <Image
                                                src={map.img}
                                                alt={map.name}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 640px) 100vw, 256px"
                                            />
                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-r sm:bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                            <div className="absolute bottom-0 left-0 p-4 sm:p-5 w-full">
                                                <p className='text-[10px] sm:text-[11px] font-black text-white uppercase tracking-[0.2em]'>
                                                    {t(`maps.${map.name}.name`)}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;