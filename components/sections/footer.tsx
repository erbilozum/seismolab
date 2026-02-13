"use client";

import React, { useEffect, useState } from "react";
import { findFlagUrlByIso3Code } from "country-flags-svg";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const Footer = () => {
    const { i18n } = useTranslation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const languageOptions = [
        { id: "tr", title: "Türkçe", iso: "TUR" },
        { id: "en", title: "English", iso: "USA" },
        { id: "et", title: "Eesti", iso: "EST" },
        { id: "ru", title: "Русский", iso: "RUS" },
        { id: "de", title: "Deutsch", iso: "DEU" },
    ];

    return (
        <footer className="fixed bottom-0 w-full z-40 select-none pointer-events-none">
            <div className="flex justify-between items-center bg-white/10 backdrop-blur-md px-6 py-2 pointer-events-auto border-t border-white/10">
                {/* Minimal künye */}
                <div className="text-[10px] sm:text-[11px] text-gray-200 font-medium tracking-wide">
                    Erbil ÖZÜM <span className="mx-1">|</span> Civil Engineer
                </div>

                {/* Minimal dil seçimi */}
                <div className="flex items-center gap-3 sm:gap-4">
                    {languageOptions.map((lang) => {
                        const isActive = mounted && i18n.language === lang.id;

                        return (
                            <button
                                key={lang.id}
                                onClick={() => i18n.changeLanguage(lang.id)}
                                title={lang.title}
                                className="relative w-6 h-4 sm:w-7 sm:h-5 rounded overflow-hidden transition-transform hover:scale-110 focus:outline-none"
                            >
                                <div className={`w-full h-full rounded overflow-hidden shadow-sm transition-all duration-300
                                    ${isActive
                                    ? "ring-1 ring-white/70"
                                    : "opacity-50 hover:opacity-100"
                                }`}
                                >
                                    <Image
                                        src={findFlagUrlByIso3Code(lang.iso)}
                                        alt={lang.title}
                                        fill
                                        sizes="(max-width: 640px) 24px, 28px"
                                        className="object-cover"
                                        unoptimized
                                    />
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
