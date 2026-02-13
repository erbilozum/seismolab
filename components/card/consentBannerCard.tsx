'use client'
import { motion, AnimatePresence } from "framer-motion" // motion/react yerine framer-motion daha kararlıdır
import Link from "next/link"
import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";

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
    const [show, setShow] = useState(false)
    const { t } = useTranslation();

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
            const timer = setTimeout(() => setShow(true), 2000);
            return () => clearTimeout(timer);
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

    return (
        <AnimatePresence>
            {show && (
                <div className="fixed inset-0 z-[999] flex flex-col justify-end pointer-events-none p-4 sm:p-6">
                    {/* Arka plan karartma (Opsiyonel: Haritayı kapatmasın dersen silebilirsin) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/40 backdrop-blur-[2px] pointer-events-auto"
                    />

                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ type: "spring", damping: 20, stiffness: 100 }}
                        className="relative w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl pointer-events-auto overflow-hidden border border-gray-100"
                    >
                        <div className="flex flex-col md:flex-row">
                            {/* Metin İçeriği */}
                            <div className="p-6 sm:p-8 flex-1">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <span className="w-2 h-6 bg-blue-600 rounded-full inline-block"></span>
                                    {t("consent.title")}
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                                    {t("consent.description")}
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Link href="/privacy/privacy-policy" target="_blank" className="text-xs font-semibold text-blue-600 hover:underline">
                                        {t("consent.privacyText")}
                                    </Link>
                                    <Link href="/privacy/cookie-policy" target="_blank" className="text-xs font-semibold text-blue-600 hover:underline">
                                        {t("consent.cookieText")}
                                    </Link>
                                    <Link href="/privacy/terms-and-conditions" target="_blank" className="text-xs font-semibold text-blue-600 hover:underline">
                                        {t("consent.termsText")}
                                    </Link>
                                </div>
                            </div>

                            {/* Butonlar */}
                            <div className="bg-gray-50 p-6 sm:p-8 flex flex-col justify-center gap-3 border-t md:border-t-0 md:border-l border-gray-100 min-w-[200px]">
                                <button
                                    onClick={accept}
                                    className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all active:scale-95 shadow-md shadow-blue-200"
                                >
                                    {t("consent.acceptButton")}
                                </button>
                                <button
                                    onClick={deny}
                                    className="w-full py-3 px-6 bg-white hover:bg-gray-100 text-gray-700 font-bold rounded-xl border border-gray-200 transition-all active:scale-95"
                                >
                                    {t("consent.rejectButton")}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}