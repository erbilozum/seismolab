"use client";

import React, { useState, useEffect } from "react";
import Maps from "@/components/sections/maps";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useTranslation } from 'react-i18next';
import { FaRibbon } from "react-icons/fa";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer"; // Eski kodundaki ikon
import disableDevtool from "disable-devtool";

const MySwal = withReactContent(Swal);

export default function HomePage() {
    const [currentMapId, setCurrentMapId] = useState(1);
    const { t } = useTranslation();
    useEffect(() => {
        // Eski kodundaki açılış mesajının Next.js uyumlu hali
        MySwal.fire({
            background: "#181818", // Koyu tema
            showConfirmButton: false, // Onay butonu yerine özel buton kullanacağız
            timer: 10000, // 10 saniye sonra otomatik kapanabilir (isteğe bağlı)
            timerProgressBar: true,
            title: (
                <p className="font-bold text-lg uppercase text-white pt-4">
                    {t("popup.title")}
                </p>
            ),
            html: (
                <div className="flex flex-col text-start px-2">
                    <div className="w-full flex items-center justify-center mb-6">
                        {/* Eskisinde olan kurdele ikonu */}
                        <FaRibbon className="text-gray-400 animate-pulse" size={50} />
                    </div>

                    <p className="text-sm text-gray-400 text-justify leading-relaxed">
                        {t("popup.content")}
                    </p>

                    <p className="text-xs text-gray-400 mt-4 font-semibold">
                        {t("popup.linkTitle")}
                    </p>

                    <p className="text-xs text-blue-400 underline mt-1">
                        <a href="https://www.maptiler.com/" target="_blank" rel="noreferrer">
                            {t("popup.linkText")}
                        </a>
                    </p>

                    <p className="text-xs text-gray-400 mt-4 font-semibold">
                        {t("popup.linkSubTitle")}
                    </p>

                    <p className="text-xs text-blue-400 underline mt-1">
                        <a href="https://www.maptiler.com/" target="_blank" rel="noreferrer">
                            {t("popup.linkSubText")}
                        </a>
                    </p>

                    <div className="flex items-center justify-center mt-8">
                        <button
                            onClick={() => MySwal.close()}
                            className="px-8 py-2 text-xs text-gray-300 hover:text-white uppercase tracking-widest duration-500 transition-all ease-in-out border border-gray-600 hover:border-gray-200 rounded-full"
                        >
                            {t("popup.buttonText")}
                        </button>
                    </div>
                </div>
            ),
            showClass: {
                popup: 'animate__animated animate__fadeInUp'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutDown'
            }
        });
    }, [t]); // Dil değişirse popup içeriği de güncellenir
    useEffect(() => {
        if (typeof window !== "undefined") {
            //   disableDevtool();
        }
    }, []);
    return (
        <div className="relative h-screen w-full overflow-hidden bg-black">
            {/* Harita Katmanı */}
            <main className="absolute inset-0 z-0">
                <Maps selectedMapId={currentMapId} />
            </main>

            {/* Navbar Katmanı */}
            <div className="relative z-50">
                <Navbar onMapChange={(id) => setCurrentMapId(id)} />
            </div>

            {/* Footer Katmanı */}
            <Footer />
        </div>
    );
}