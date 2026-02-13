"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import ToolTipCard from "@/components/card/toolTipCard";

// Leaflet'i yukarıda direkt import etmiyoruz!

const MapContainer = dynamic(() => import("react-leaflet").then(m => m.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(m => m.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then(m => m.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then(m => m.Popup), { ssr: false });

const PulsingIconStyles = `
  @keyframes pulse-ring {
    0% { transform: scale(0.5); opacity: 0.6; }
    100% { transform: scale(2.2); opacity: 0; }
  }
  @keyframes pulse-dot {
    0% { transform: scale(0.9); opacity: 0.8; }
    50% { transform: scale(1.1); opacity: 1; }
    100% { transform: scale(0.9); opacity: 0.8; }
  }
  .pulse-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pulse-ring {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(239, 68, 68, 0.35) 0%, rgba(239, 68, 68, 0) 75%);
    border: 1.5px solid rgba(239, 68, 68, 0.15);
    animation: pulse-ring 3s cubic-bezier(0.24, 0, 0.38, 1) infinite;
  }
  .pulse-dot {
    position: relative;
    width: 45%;
    height: 45%;
    border-radius: 50%;
    background-color: rgba(185, 28, 28, 0.75);
    box-shadow: 0 0 15px rgba(185, 28, 28, 0.4);
    animation: pulse-dot 3s ease-in-out infinite;
  }
`;

const MAP_TILER_KEY = "xLALvQPSK3xaCZV7bwFZ";
const MAP_LAYERS = [
    { id: 1, url: `https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}@2x.png?key=${MAP_TILER_KEY}` },
    { id: 2, url: `https://api.maptiler.com/maps/dataviz/{z}/{x}/{y}@2x.png?key=${MAP_TILER_KEY}` },
    { id: 4, url: `https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}@2x.jpg?key=${MAP_TILER_KEY}` },
];

interface MapsProps {
    selectedMapId: number;
}

const Maps = ({ selectedMapId }: MapsProps) => {
    const [L, setL] = useState<any>(null); // Leaflet instance'ı için state
    const [cities, setCities] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Leaflet'i sadece istemci tarafında yüklüyoruz
        const loadLeaflet = async () => {
            const leaflet = await import("leaflet");
            setL(leaflet.default);

            try {
                const response = await axios.get("/api/earthquake");
                setCities(response.data);
            } catch (error) {
                console.error("Veri çekme hatası:", error);
            } finally {
                setIsLoading(false);
            }
        };

        loadLeaflet();
    }, []);

    // Hem Leaflet'in hem de verinin hazır olduğundan emin oluyoruz
    if (!L || isLoading) {
        return (
            <div className="h-full w-full bg-black flex items-center justify-center">
                <div className="animate-pulse text-red-500 font-mono text-xs uppercase tracking-widest">
                    Loading Seismic Data...
                </div>
            </div>
        );
    }

    const activeLayer = MAP_LAYERS.find(m => m.id === selectedMapId) || MAP_LAYERS[0];
    const maxCollapsed = cities.length > 0 ? Math.max(...cities.map(c => c.totalCollapsed)) : 1;
    const scaleFactor = 45 / Math.sqrt(maxCollapsed);

    return (
        <div className="w-full h-full relative z-0">
            <style>{PulsingIconStyles}</style>

            <MapContainer
                center={[37.6, 37.3] as any}
                zoom={6.8}
                zoomControl={false}
                className="w-full h-full grayscale-[15%]"
            >
                <TileLayer url={activeLayer.url} attribution="MapTiler" />

                {cities.map((city, index) => {
                    const dynamicSize = Math.sqrt(city.totalCollapsed) * scaleFactor + 30;

                    const iconHtml = `
                        <div class="pulse-container" style="width: ${dynamicSize}px; height: ${dynamicSize}px;">
                            <div class="pulse-ring"></div>
                            <div class="pulse-dot"></div>
                        </div>
                    `;

                    // L artık state'den geliyor, hata vermez
                    const customIcon = L.divIcon({
                        className: "custom-leaflet-icon",
                        html: iconHtml,
                        iconSize: [dynamicSize, dynamicSize],
                        iconAnchor: [dynamicSize / 2, dynamicSize / 2],
                    });

                    return (
                        <Marker key={`${city.name}-${index}`} position={city.coords as any} icon={customIcon}>
                            <Popup className="minimal-popup">
                                <ToolTipCard data={city as any} />
                            </Popup>
                        </Marker>
                    );
                })}
            </MapContainer>

            <style dangerouslySetInnerHTML={{ __html: `
                .minimal-popup .leaflet-popup-content-wrapper { background: transparent !important; box-shadow: none !important; padding: 0 !important; border: none !important; }
                .minimal-popup .leaflet-popup-content { margin: 0 !important; }
                .minimal-popup .leaflet-popup-tip-container { display: none !important; }
                .leaflet-popup { margin-bottom: 30px !important; }
                .leaflet-div-icon { background: transparent !important; border: none !important; }
            `}} />
        </div>
    );
};

export default Maps;