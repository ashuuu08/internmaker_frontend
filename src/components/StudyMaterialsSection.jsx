import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Map, ChevronRight, Star, Clock, ExternalLink } from 'lucide-react';

const StudyMaterialsSection = () => {
    const [activeTab, setActiveTab] = useState('dsa');

    const dsaProblems = [
        { title: "Two Sum", difficulty: "Easy", category: "Arrays", link: "#" },
        { title: "Reverse Linked List", difficulty: "Easy", category: "Linked List", link: "#" },
        { title: "Binary Tree Level Order Traversal", difficulty: "Medium", category: "Trees", link: "#" },
        { title: "Merge Intervals", difficulty: "Medium", category: "Arrays", link: "#" },
        { title: "Longest Substring Without Repeating Characters", difficulty: "Medium", category: "Strings", link: "#" },
    ];

    const roadmaps = [
        { title: "Frontend Development", duration: "12 Weeks", topics: "HTML, CSS, JS, React", icon: <Code size={24} className="text-blue-600" /> },
        { title: "Backend Development", duration: "14 Weeks", topics: "Node.js, Express, MongoDB, SQL", icon: <Map size={24} className="text-green-600" /> },
        { title: "Full Stack Masterclass", duration: "24 Weeks", topics: "MERN Stack, System Design", icon: <Star size={24} className="text-purple-600" /> },
        { title: "Data Structures & Algorithms", duration: "8 Weeks", topics: "Recursion, DP, Graphs", icon: <BookOpen size={24} className="text-amber-600" /> },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">Study Materials</h2>
                    <p className="text-slate-500 text-sm">Curated resources to master your engineering skills</p>
                </div>

                <div className="flex bg-slate-100 p-1 rounded-lg self-start">
                    <button
                        onClick={() => setActiveTab('dsa')}
                        className={`px-4 py-2 text-sm font-semibold rounded-md transition ${activeTab === 'dsa' ? 'bg-white text-blue-800 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                    >
                        DSA Problems
                    </button>
                    <button
                        onClick={() => setActiveTab('roadmaps')}
                        className={`px-4 py-2 text-sm font-semibold rounded-md transition ${activeTab === 'roadmaps' ? 'bg-white text-blue-800 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                    >
                        Roadmaps
                    </button>
                    <button
                        onClick={() => setActiveTab('more')}
                        className={`px-4 py-2 text-sm font-semibold rounded-md transition ${activeTab === 'more' ? 'bg-white text-blue-800 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                    >
                        More Resources
                    </button>
                </div>
            </div>

            {activeTab === 'dsa' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {dsaProblems.map((prob, idx) => (
                        <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition group">
                            <div className="flex justify-between items-start mb-3">
                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${prob.difficulty === 'Easy' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                                    }`}>
                                    {prob.difficulty}
                                </span>
                                <span className="text-xs text-slate-400 font-medium">{prob.category}</span>
                            </div>
                            <h4 className="font-bold text-slate-800 mb-4 group-hover:text-blue-800 transition">{prob.title}</h4>
                            <button className="w-full py-2 bg-slate-50 text-slate-600 text-xs font-bold rounded hover:bg-blue-800 hover:text-white transition flex items-center justify-center gap-2">
                                Solve Problem <ExternalLink size={12} />
                            </button>
                        </div>
                    ))}
                </motion.div>
            )}

            {activeTab === 'roadmaps' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    {roadmaps.map((map, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition flex items-center gap-6">
                            <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                                {map.icon}
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-slate-900 mb-1">{map.title}</h4>
                                <p className="text-xs text-slate-500 mb-1">{map.topics}</p>
                                <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase">
                                    <Clock size={12} /> {map.duration}
                                </div>
                            </div>
                            <button className="p-2 text-slate-400 hover:text-blue-800 hover:bg-blue-50 rounded-full transition">
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    ))}
                </motion.div>
            )}

            {activeTab === 'more' && (
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-12 text-center">
                    <BookOpen size={48} className="text-blue-800/20 mx-auto mb-4" />
                    <h4 className="text-lg font-bold text-blue-900 mb-2">More Coming Soon!</h4>
                    <p className="text-blue-700/60 max-w-sm mx-auto">We are working on adding System Design, Low Level Design, and Mock Interview resources.</p>
                </div>
            )}
        </div>
    );
};

export default StudyMaterialsSection;
