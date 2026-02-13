"use client";
import React, { useEffect, useState } from "react";
import { findFlagUrlByIso3Code } from "country-flags-svg";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
    const { i18n } = useTranslation();

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        const handleMount=()=>{
            setMounted(true);
        }
        handleMount();
    }, []);

    const languageOptions = [{ id: "tr", title: "Türkçe", iso: "TUR" }, { id: "en", title: "English", iso: "USA" }, { id: "et", title: "Eesti", iso: "EST" }, { id: "ru", title: "Русский", iso: "RUS" }, { id: "de", title: "Deutsch", iso: "DEU" },];
    const currentLanguage = mounted ? i18n.language : "en";
    const { t } = useTranslation();
    if (!mounted) {
        return null;
    }
    return (
        <footer className={"fixed bottom-0 w-full z-40 select-none pointer-events-none p-4 sm:p-6"}>
            <div className={"max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center bg-white/70 backdrop-blur-xl px-6 py-3 pointer-events-auto border border-white/40 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] rounded-[2rem]"}>
                {/** LEFT SIDE */}
                <div className={"flex items-center gap-2 text-[10px] sm:text-[11px] text-gray-500 font-medium tracking-tight mb-3 sm:mb-0"}>
                    <Link className={"text-gray-900 font-bold hover:text-blue-600 transition-colors tracking-normal"} href={"mailto:ts.junior.dev@gmail.com"} title={"E-Mail"}>Erbil</Link>
                    <span className={"opacity-30"}>|</span>
                    <span className={"uppercase tracking-widest text-[9px] text-gray-400"}>{t('footer.title')}</span>
                </div>
                {/** RIGHT SIDE */}
                <div className={"flex items-center gap-4"}>
                    {languageOptions.map((lang) => {
                        const isActive = currentLanguage === lang.id;
                        return (
                            <button key={lang.id} onClick={() => i18n.changeLanguage(lang.id)} title={lang.title} className={"group relative flex flex-col items-center focus:outline-none"}>
                                <div className={`relative w-6 h-4 sm:w-7 sm:h-5 rounded-sm overflow-hidden transition-all duration-300 shadow-sm  ${isActive ? "scale-110 ring-2 ring-blue-500 ring-offset-2 ring-offset-white" : "opacity-40 grayscale-[0.5] hover:opacity-100 hover:grayscale-0 hover:scale-105"}`}>
                                    <Image src={findFlagUrlByIso3Code(lang.iso)} alt={lang.title} fill sizes={"28px"} className={"object-cover"} unoptimized/>
                                </div>
                                {isActive && (<span className={"absolute -bottom-1.5 w-1 h-1 bg-blue-500 rounded-full"} />)}
                            </button>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
};

export default Footer;