'use client'
import { motion } from "motion/react"
import Link from "next/link"
import React, {useEffect, useState} from 'react'
import TitleSmallCard from "@/components/card/titleSmallCard";
import {useTranslation} from "react-i18next";

interface GoogleConsentSettings {
    analytics_storage?: 'granted' | 'denied';
    ad_storage?: 'granted' | 'denied';
    ad_user_data?: 'granted' | 'denied';
    ad_personalization?: 'granted' | 'denied';
}
interface CustomWindow extends Window {
    dataLayer: Record<string, unknown>[];
    gtag: (
        command: 'consent' | 'config' | 'event' | 'js' | 'set',
        action: string | GoogleConsentSettings,
        params?: GoogleConsentSettings | Record<string, unknown>
    ) => void;
}
export default function ConsentBannerCard() {
    // Başlangıçta false kalsın, böylece useEffect içinde setShow(false) demene gerek kalmaz
    const [show, setShow] = useState(false)
    const updateGoogleConsent = (status: 'granted' | 'denied') => {
        if (typeof window !== 'undefined') {
            const win = window as unknown as CustomWindow;
            if (typeof win.gtag === 'function') {
                win.gtag('consent', 'update', {
                    'analytics_storage': status,
                    'ad_storage': status,
                    'ad_user_data': status,
                    'ad_personalization': status
                });
            }
            if (win.dataLayer) {
                win.dataLayer.push({
                    event: 'consent_update',
                    consent_status: status
                });
            }
        }
    }
    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (consent) {
            const status = consent === 'true' ? 'granted' : 'denied';
            updateGoogleConsent(status);
        } else {
            // Seçim yapılmamışsa 2 saniye sonra banner'ı göster
            const timer = setTimeout(() => setShow(true), 2000);
            return () => clearTimeout(timer); // Bellek sızıntısını önlemek için temizle
        }
    }, []);

    const accept = () => {
        localStorage.setItem('cookieConsent', 'true');
        updateGoogleConsent('granted');
        setShow(false);
    }

    const deny = () => {
        localStorage.setItem('cookieConsent', 'false');
        updateGoogleConsent('denied');
        setShow(false);
    }
    const { t } = useTranslation();

    if (!show) return null;
    return (
        <div className={"fixed  inset-0  z-50 backdrop-blur-xs font-montserrat"}>
            <div className={"absolute bottom-0"}>
                <motion.div className={"flex text-gray-500 z-50 w-screen "}>
                        <motion.div
                            initial={{opacity: 0, translateY: 400}}
                            animate={{opacity: 1, translateY: 0}}
                            viewport={{once:true,amount:0.1}}
                            exit={{opacity: 0, translateY: 400}}
                            transition={{delay: 2}}
                            className={"max-w-7xl mx-auto bg-white border border-gray-200 flex flex-col sm:flex-row items-center justify-between sm:px-4 py-4"}>
                            {/** CONTENT */}
                            <div className={"w-full flex flex-col justify-center leading-relaxed"}>
                                {/** TITLE */}
                                <p className={"text-gray-700 text-sm sm:text-base uppercase font-semibold"}>{t("consent.title")}</p>
                                {/** CONTENT */}
                                <p className={"mt-2 text-justify text-sm sm:text-base sm:text-start"}>
                                    {t("consent.description")}
                                </p>
                                {/** PRIVACY LINKS */}
                                <div className={"flex flex-row w-full space-x-0 sm:space-x-2 mt-2 sm:mt-4"}>
                                    {/** PRIVACY POLICY */}
                                    <Link
                                        aria-label={t("consent.privacyText")}
                                        href={"/privacy/privacy-policy"}
                                        target={"_blank"}
                                        title={t("consent.privacyText")}
                                        className={"w-1/3 sm:w-full flex-row items-center group sm:mb-0"}>
                                        <TitleSmallCard title={t("consent.privacyText")}/>
                                    </Link>
                                    {/** COOKIE POLICY */}
                                    <Link
                                        aria-label={t("consent.cookieText")}
                                        href={"/privacy/cookie-policy"} target={"_blank"}
                                          title={t("consent.cookieText")}
                                          className={"w-1/3 sm:w-full flex-row items-center group sm:mb-0"}>
                                        <TitleSmallCard title={t("consent.cookieText")}/>
                                    </Link>
                                    {/** TERMS AND CONDITIONS */}
                                    <Link
                                        aria-label={t("consent.termsText")}
                                        href={"/privacy/terms-and-conditions"} target={"_blank"}
                                          title={t("consent.termsText")} className={"w-1/3 sm:w-full flex-row items-center group  sm:mb-0"}>
                                        <TitleSmallCard title={t("consent.termsText")}/>
                                    </Link>
                                </div>
                            </div>
                            {/** BUTTONS */}
                            <div className={"w-48 flex flex-col justify-center py-2 px-4 space-y-4 bg-white  border-l border-gray-200"}>
                                {/** SAVE */}
                                <div className={"relative group overflow-hidden hover:shadow-xl"}>
                                    <button
                                        title={t("consent.acceptButton")}
                                        onClick={accept}
                                        type={"button"}
                                        className={"w-32 px-2 py-2 relative disabled:cursor-not-allowed hover:cursor-pointer group-hover:text-white z-50 delay-75 transition-all ease-in uppercase"}>
                                        {t("consent.acceptButton")}
                                    </button>
                                    <div className={"group-hover:rounded-none group-hover:w-full group-hover:h-full z-10 w-2 h-1 flex absolute bottom-0 left-0 bg-blue-500/70 transition-all ease-in"}></div>
                                </div>
                                {/** CANCEL */}
                                <div className={"relative group overflow-hidden hover:shadow-xl"}>
                                    <button
                                        title={t("consent.rejectButton")}
                                        onClick={deny}
                                        className={"w-32 px-2 py-2 relative disabled:cursor-not-allowed hover:cursor-pointer group-hover:text-white z-50 delay-75 transition-all ease-in uppercase"}>
                                        {t("consent.rejectButton")}
                                    </button>
                                    <div className={"group-hover:rounded-none group-hover:w-full group-hover:h-full z-10 w-2 h-1 flex absolute bottom-0 left-0 bg-black/70 transition-all ease-in"}></div>
                                </div>
                            </div>
                        </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
