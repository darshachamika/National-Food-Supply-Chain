import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Navigation } from 'lucide-react';

const cityCoordinates = {
    "Colombo": [6.9271, 79.8612],
    "Kandy": [7.2906, 80.6337],
    "Galle": [6.0535, 80.2210],
    "Jaffna": [9.6615, 80.0255],
    "Trincomalee": [8.5874, 81.2152],
    "Anuradhapura": [8.3114, 80.4037],
    "Kurunegala": [7.4863, 80.3649],
    "Dambulla": [7.8742, 80.6511],
    "Nuwara Eliya": [6.9497, 80.7891],
    "Matara": [5.9549, 80.5550],
    "Polonnaruwa": [7.9403, 81.0188],
    "Hambantota": [6.1429, 81.1212],
    "Ratnapura": [6.6939, 80.3853],
    "Badulla": [6.9934, 81.0550],
    "Batticaloa": [7.7310, 81.6747],
    "Puttalam": [8.0408, 79.8394]
};

const createCustomIcon = (status) => {
    const isCritical = status === 'Critical';
    const isLow = status === 'Low';

    let colorClass = 'bg-teal-500';
    let ringClass = 'border-teal-200';
    let shadowClass = 'shadow-teal-500/50';

    if (isCritical) {
        colorClass = 'bg-red-500';
        ringClass = 'border-red-200';
        shadowClass = 'shadow-red-500/50';
    } else if (isLow) {
        colorClass = 'bg-orange-500';
        ringClass = 'border-orange-200';
        shadowClass = 'shadow-orange-500/50';
    }

    return L.divIcon({
        className: 'custom-div-icon',
        html: `<div class="relative flex items-center justify-center w-8 h-8">
                <span class="absolute inline-flex w-full h-full ${colorClass} rounded-full opacity-40 animate-ping"></span>
                <span class="relative inline-flex w-5 h-5 border-[3px] shadow-lg ${colorClass} ${ringClass} ${shadowClass} rounded-full"></span>
               </div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -16]
    });
};

const LiveMap = ({ stocks = [] }) => {
    const [offsets] = useState(() => {
        const newOffsets = {};
        Object.keys(cityCoordinates).forEach(city => {
            newOffsets[city] = [Math.random() * 0.002, Math.random() * 0.002];
        });
        return newOffsets;
    });

    const getPosition = (locationName) => {
        if (!locationName) return [7.8731, 80.7718];
        const key = Object.keys(cityCoordinates).find(city =>
            locationName.toLowerCase().includes(city.toLowerCase())
        );
        const offset = offsets[key] || [0, 0];
        return key ? [
            cityCoordinates[key][0] + offset[0],
            cityCoordinates[key][1] + offset[1]
        ] : [7.8731, 80.7718];
    };

    return (
        <div className="w-full mb-6 overflow-hidden transition-all duration-500 bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] group relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full mix-blend-multiply blur-[80px] pointer-events-none transition-transform duration-700 group-hover:scale-150"></div>

            <div className="relative flex items-center justify-between p-6 border-b border-white/40 z-10">
                <div className="flex items-center gap-3">
                    <div className="p-3 shadow-inner bg-teal-50 text-teal-600 rounded-2xl shadow-teal-500/20">
                        <Navigation size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-black tracking-tight text-gray-800">Live Supply Network</h3>
                        <p className="text-xs font-medium text-gray-400">Real-time distribution centers across Sri Lanka.</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 border bg-white/50 border-white/60 rounded-2xl backdrop-blur-md shadow-sm">
                    <span className="relative flex w-2.5 h-2.5">
                        <span className="absolute inline-flex w-full h-full bg-teal-500 rounded-full opacity-75 animate-ping"></span>
                        <span className="relative inline-flex w-2.5 h-2.5 bg-teal-600 rounded-full"></span>
                    </span>
                    <span className="text-xs font-bold tracking-widest text-teal-700 uppercase">Live Updating</span>
                </div>
            </div>

            <MapContainer
                center={[7.8731, 80.7718]}
                zoom={7}
                scrollWheelZoom={false}
                className="relative z-0 w-full rounded-b-[2rem]"
                style={{ height: "450px" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                    maxZoom={19}
                />

                {stocks.map((item, index) => (
                    <Marker key={index} position={getPosition(item.location)} icon={createCustomIcon(item.status)}>
                        <Popup className="premium-popup border-none shadow-xl rounded-xl">
                            <div className="p-1 min-w-[180px]">
                                <strong className="block mb-2 text-base font-black text-gray-800 border-b border-gray-100 pb-2">{item.location} Hub</strong>
                                <div className="text-sm font-medium text-gray-600 space-y-1.5 mt-2">
                                    <div className="flex justify-between items-center gap-4">
                                        <span>Item:</span>
                                        <span className="font-bold text-gray-900">{item.itemName}</span>
                                    </div>
                                    <div className="flex justify-between items-center gap-4">
                                        <span>Stock:</span>
                                        <span className={`font-black ${item.status === 'Critical' ? 'text-red-500' : item.status === 'Low' ? 'text-orange-500' : 'text-teal-500'}`}>
                                            {item.quantity} kg
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center gap-4 pt-1">
                                        <span>Status:</span>
                                        <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md ${item.status === 'Critical' ? 'bg-red-50 text-red-600' : item.status === 'Low' ? 'bg-orange-50 text-orange-600' : 'bg-teal-50 text-teal-600'}`}>
                                            {item.status || 'Optimal'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default LiveMap;