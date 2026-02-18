import React from "react";
import { useNavigate } from "react-router-dom";

const PublicNavbar = ({ isScrolled }) => {
    const navigate = useNavigate();

    return (
        <nav className={`bg-white border-b border-slate-200 shadow-sm ${isScrolled ? 'sticky top-0' : 'sticky top-[34px]'} z-50`}>
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <button onClick={() => navigate("/")} className="flex items-center gap-2 cursor-pointer group">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-700 text-white flex items-center justify-center rounded-lg shadow-lg group-hover:shadow-xl group-hover:scale-105 transition font-bold text-lg">IM</div>
                    <div>
                        <div className="text-lg font-bold text-slate-900 leading-none">InternMaker</div>
                        <div className="text-[9px] font-bold text-blue-600 tracking-wider uppercase">Industrial Training</div>
                    </div>
                </button>

                <div className="hidden lg:flex gap-8 text-sm font-semibold text-slate-600">
                    <button onClick={() => navigate("/about")} className="hover:text-blue-900 transition group">
                        About <span className="block h-0.5 bg-blue-900 scale-x-0 group-hover:scale-x-100 transition"></span>
                    </button>
                    <button onClick={() => navigate("/syllabus")} className="hover:text-blue-900 transition group">
                        Curriculum <span className="block h-0.5 bg-blue-900 scale-x-0 group-hover:scale-x-100 transition"></span>
                    </button>
                    <button onClick={() => {
                        if (window.location.pathname === '/') {
                            document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                        } else {
                            navigate('/#features');
                        }
                    }} className="hover:text-blue-900 transition group">
                        Features <span className="block h-0.5 bg-blue-900 scale-x-0 group-hover:scale-x-100 transition"></span>
                    </button>
                </div>

                <div className="flex items-center gap-3">
                    <button onClick={() => navigate("/login")} className="hidden sm:block text-sm font-semibold text-slate-600 hover:text-blue-900 px-4 py-2 transition">
                        Login
                    </button>
                    <button onClick={() => navigate("/register")} className="text-sm font-bold bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 hover:scale-105 transition shadow-md">
                        Enroll Now
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default PublicNavbar;
