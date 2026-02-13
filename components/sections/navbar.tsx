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
                } catch (err) { logger.error({err}, "IP fetch failed"); }
            }
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
    const navLinks = [
        { id: 1, title: "API", url: "/api-docs" },
        { id: 2, title: "Contact", url: "/constact" },
        { id: 3, title: "Links", url: "/links" },
    ];

    return (
        <nav className='fixed top-0 w-full flex flex-col items-center p-4 sm:p-6 z-[100] pointer-events-none'>

            {/* Üst Panel: Modern Pill Yapısı */}
            <div className='w-full max-w-7xl flex items-center justify-between bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-[2rem] px-4 py-2 pointer-events-auto'>

                {/* Sol: IP Bilgisi (Badge Style) */}
                <div className='hidden sm:flex items-center gap-3 bg-gray-100/50 px-4 py-1.5 rounded-full border border-gray-200'>
                    <span className='flex h-2 w-2 relative'>
                        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75'></span>
                        <span className='relative inline-flex rounded-full h-2 w-2 bg-blue-500'></span>
                    </span>
                    <span className='text-[10px] font-bold font-mono text-gray-500 uppercase tracking-tight'>
                        Node: {remoteIpV4}
                    </span>
                </div>

                {/* Orta: Linkler */}
                <div className='flex items-center gap-6'>
                    {navLinks.map((item, idx) => (
                        <Link
                            title={item.title}
                            target={"_blank"}
                            key={idx}
                            href={item.url}
                            className="text-[11px] font-bold uppercase tracking-widest text-gray-400 hover:text-blue-600 transition-colors"
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>

                {/* Sağ: Harita Toggle */}
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsOpened(!isOpened)}
                    className={`group flex items-center gap-3 px-4 py-2 rounded-2xl transition-all duration-300
                        ${isOpened ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-gray-900 text-white'}`}
                >
                    <span className='text-[10px] font-bold uppercase tracking-widest hidden sm:block'>
                        {isOpened ? t('navbar.close') : t('navbar.maps')}
                    </span>
                    <div className="w-5 h-5 flex flex-col justify-center items-center gap-1">
                        <span className={`h-0.5 bg-current transition-all ${isOpened ? 'w-5 rotate-45 translate-y-1.5' : 'w-4'}`} />
                        <span className={`h-0.5 bg-current transition-all ${isOpened ? 'opacity-0' : 'w-4'}`} />
                        <span className={`h-0.5 bg-current transition-all ${isOpened ? 'w-5 -rotate-45 -translate-y-1.5' : 'w-4'}`} />
                    </div>
                </motion.button>
            </div>

            {/* Harita Seçim Paneli (Modern Grid) */}
            <AnimatePresence>
                {isOpened && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className='w-full max-w-7xl mt-4 pointer-events-auto'
                    >
                        <div className='bg-white/80 backdrop-blur-2xl rounded-[2.5rem] border border-white/50 p-6 shadow-2xl overflow-hidden'>
                            <div className='flex flex-row gap-5 overflow-x-auto pb-2 no-scrollbar scroll-smooth'>
                                {maps.map((map, index) => (
                                    <motion.div
                                        key={map.id}
                                        whileHover={{ y: -8 }}
                                        onClick={() => {
                                            onMapChange(map.id);
                                            setIsOpened(false);
                                        }}
                                        className='group relative flex-shrink-0 cursor-pointer w-52 sm:w-64'
                                    >
                                        <div className="relative h-32 sm:h-40 rounded-[2rem] overflow-hidden border-2 border-transparent group-hover:border-blue-500 transition-all shadow-md">
                                            <Image
                                                src={map.img}
                                                alt={map.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                            <div className="absolute bottom-4 left-5">
                                                <p className='text-[10px] font-black text-white uppercase tracking-widest opacity-90'>
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