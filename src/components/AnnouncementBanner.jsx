import React from "react";
import { Clock } from "lucide-react";

const AnnouncementBanner = ({ timeLeft, isScrolled }) => {
    const formatTime = (s) => {
        const h = Math.floor(s / 3600).toString().padStart(2, '0');
        const m = Math.floor((s % 3600) / 60).toString().padStart(2, '0');
        const sec = (s % 60).toString().padStart(2, '0');
        return { h, m, sec };
    };

    const time = formatTime(timeLeft || 14400);

    return (
        <div className={`bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 ${isScrolled ? 'hidden' : 'block'} sticky top-0 z-[100] shadow-md`}>
            <div className="max-w-7xl mx-auto px-6 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                    </span>
                    <span>🔥 Batch Open | 50 Seats</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold">
                    <Clock size={12} /> {time.h}:{time.m}:{time.sec}
                </div>
            </div>
        </div>
    );
};

export default AnnouncementBanner;
