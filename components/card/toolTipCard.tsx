"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

interface TooltipCardProps {
    data: {
        name: string;
        year: number;
        totalCollapsed: number;
        totalCollapsedSupervised: number;
        totalCollapsedUnsupervised: number;
        deaths?: number;   // Can kaybı
        injured?: number;  // Yaralı
    };
}

const ToolTipCard = ({ data }: TooltipCardProps) => {
    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="w-[260px] bg-white/95 backdrop-blur-xl rounded-2xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] border border-slate-200/60 select-none font-sans"
        >
            {/* Header */}
            <div className="bg-slate-50/80 px-4 py-3 border-b border-slate-100 flex justify-between items-center">
                <h3 className="text-slate-800 font-black text-sm tracking-[0.15em] m-0 uppercase italic">
                    {data.name}
                </h3>
                <div className="bg-white px-2 py-1 rounded-md text-[10px] text-slate-400 font-bold border border-slate-200 shadow-sm">
                    {data.year}
                </div>
            </div>

            {/* İçerik */}
            <div className="p-4 space-y-3">
                {/* Ana Gösterge */}
                <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-baseline">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                            {t("marker.totalCollapsed")}
                        </span>
                        <span className="text-xl font-black text-red-500 tabular-nums leading-none">
                            {data.totalCollapsed}
                        </span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mt-0.5">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            className="h-full bg-red-400"
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                    </div>
                </div>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-2 gap-2 pt-1.5">
                    {/* Denetimli */}
                    <div className="flex flex-col items-center bg-slate-50/50 rounded-xl p-2.5 border border-slate-100 text-center transition-colors hover:bg-white">
                        <p className="text-[9px] text-slate-400 font-bold uppercase mb-1 leading-tight">
                            {t("marker.totalCollapsedSupervised")}
                        </p>
                        <p className="text-sm font-black text-emerald-600">
                            {data.totalCollapsedSupervised}
                        </p>
                    </div>

                    {/* Denetimsiz */}
                    <div className="flex flex-col items-center bg-slate-50/50 rounded-xl p-2.5 border border-slate-100 text-center transition-colors hover:bg-white">
                        <p className="text-[9px] text-slate-400 font-bold uppercase mb-1 leading-tight">
                            {t("marker.totalCollapsedUnsupervised")}
                        </p>
                        <p className="text-sm font-black text-amber-600">
                            {data.totalCollapsedUnsupervised}
                        </p>
                    </div>

                    {/* Can kaybı */}
                    {data.deaths !== undefined && (
                        <div className="flex flex-col items-center bg-slate-50/50 rounded-xl p-2.5 border border-slate-100 text-center transition-colors hover:bg-white">
                            <p className="text-[9px] text-slate-400 font-bold uppercase mb-1 leading-tight">
                                {t("marker.deaths")}
                            </p>
                            <p className="text-sm font-black text-red-600">{data.deaths}</p>
                        </div>
                    )}

                    {/* Yaralı */}
                    {data.injured !== undefined && (
                        <div className="flex flex-col items-center bg-slate-50/50 rounded-xl p-2.5 border border-slate-100 text-center transition-colors hover:bg-white">
                            <p className="text-[9px] text-slate-400 font-bold uppercase mb-1 leading-tight">
                                {t("marker.injured")}
                            </p>
                            <p className="text-sm font-black text-yellow-600">{data.injured}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Alt Süsleme */}
            <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-1 opacity-40" />
        </motion.div>
    );
};

export default ToolTipCard;
