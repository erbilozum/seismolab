"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
const Home = () => {
    const { t } = useTranslation();
    const mapCards = [{ id: 1, name: "basic", img: "/maps/map-basic.jpg" }, { id: 2, name: "dataviz", img: "/maps/map-dataviz.jpg" }, { id: 3, name: "hillshade", img: "/maps/map-hillshade.jpg" }, { id: 4, name: "hybrid", img: "/maps/map-hybrid.jpg" }, { id: 5, name: "topov2", img: "/maps/map-topo-v2.jpg" }];
    return (
        <main className={"bg-gray-100 min-h-screen flex items-center justify-center p-6"}>
            <div className={"flex flex-wrap justify-center gap-6 max-w-7xl"}>
                {mapCards.map((map) => (
                    <div key={map.id} className={"group flex flex-col w-full sm:w-80 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 ease-in-out hover:-translate-y-2 overflow-hidden border border-gray-100"}>
                        <Link href={`/Maps/${map.id}`} className={"flex flex-col h-full"}>
                            {/** MAPS */}
                            <div className={"relative w-full h-44 overflow-hidden"}>
                                <Image src={map.img} alt={`${map.name}_map`} fill className={"object-cover transition-transform duration-700 group-hover:scale-110"}/>
                            </div>
                            {/** DESCRIPTIONS */}
                            <div className={"p-5 flex flex-col grow justify-between"}>
                                <div>
                                    <h3 className={"text-gray-800 font-bold text-lg tracking-wide"}>{t(`maps.${map.name}.name`)}</h3>
                                    <p className={"text-gray-500 text-xs font-semibold mt-2 leading-relaxed"}>{t(`maps.${map.name}.description`)}</p>
                                </div>
                                <div className={"mt-4 flex items-center text-blue-600 text-xs font-bold uppercase tracking-widest"}>{t("common.view_map") || "Haritayı Aç"} →</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
};
export default Home;