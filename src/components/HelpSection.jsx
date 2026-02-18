import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, ChevronDown, ChevronUp, BookOpen, 
  FileText, Shield, MessageCircle, ExternalLink, HelpCircle 
} from "lucide-react";

export default function HelpSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  // FAQ Data
  const faqs = [
    {
      question: "How do I download my Offer Letter?",
      answer: "Once your enrollment fee is processed, go to the 'Certification' tab in your dashboard. You will find a 'Download Offer Letter' button. This document is digitally signed and valid for college submissions.",
      category: "Documents"
    },
    {
      question: "What happens if I miss a task deadline?",
      answer: "We understand that students have exams. You can request a deadline extension of up to 48 hours using the 'Request Extension' button on the specific Task Card. Frequent delays may affect your final grade.",
      category: "Tasks"
    },
    {
      question: "Is this internship valid for college credit?",
      answer: "Yes. InternMaker is an ISO 9001:2015 certified platform. Our completion certificates and offer letters are recognized by most universities for industrial training credits.",
      category: "General"
    },
    {
      question: "How do I submit my code for review?",
      answer: "For every coding task, you will see a GitHub submission field. Push your code to a public repository and paste the link. Our automated mentors will run test cases on your repository.",
      category: "Technical"
    },
    {
      question: "Can I change my Internship Track?",
      answer: "Track changes (e.g., switching from Java to MERN) are allowed only within the first 3 days of enrollment. Please contact support immediately if you wish to switch.",
      category: "Account"
    }
  ];

  // Filter FAQs based on search
  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      
      {/* --- HEADER & SEARCH --- */}
      <div className="text-center space-y-4 py-4">
        <h2 className="text-2xl font-bold text-slate-900">How can we help you?</h2>
        <p className="text-slate-500 max-w-lg mx-auto">
          Search our knowledge base for answers regarding tasks, certificates, and account settings.
        </p>
        
        <div className="relative max-w-lg mx-auto group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search size={18} className="text-slate-400 group-focus-within:text-blue-600 transition" />
          </div>
          <input 
            type="text" 
            placeholder="Search 'Offer Letter', 'Deadlines'..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          />
        </div>
      </div>

      {/* --- QUICK ACTIONS GRID --- */}
      <div className="grid md:grid-cols-3 gap-4">
         <QuickCard 
            icon={<BookOpen size={20}/>} 
            title="Student Handbook" 
            desc="Rules & Guidelines PDF"
            color="bg-blue-50 text-blue-700"
         />
         <QuickCard 
            icon={<Shield size={20}/>} 
            title="Verify Certificate" 
            desc="Check credential validity"
            color="bg-green-50 text-green-700"
         />
         <QuickCard 
            icon={<MessageCircle size={20}/>} 
            title="Chat Support" 
            desc="Talk to a mentor"
            color="bg-purple-50 text-purple-700"
         />
      </div>

      {/* --- FAQ ACCORDION --- */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <HelpCircle size={18} className="text-blue-600"/> Frequently Asked Questions
            </h3>
            <span className="text-xs text-slate-500">{filteredFaqs.length} results</span>
        </div>

        <div className="divide-y divide-slate-100">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div key={index} className="group bg-white">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                     <span className={`p-2 rounded-lg text-xs font-bold uppercase tracking-wider ${
                        openIndex === index ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-500"
                     }`}>
                        {faq.category}
                     </span>
                     <span className={`font-medium ${openIndex === index ? "text-blue-800" : "text-slate-700"}`}>
                        {faq.question}
                     </span>
                  </div>
                  {openIndex === index ? (
                    <ChevronUp size={18} className="text-blue-600" />
                  ) : (
                    <ChevronDown size={18} className="text-slate-400 group-hover:text-slate-600" />
                  )}
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pl-[4.5rem] text-sm text-slate-600 leading-relaxed max-w-3xl">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-slate-500">
               <p>No results found for "{searchQuery}"</p>
               <button onClick={() => setSearchQuery("")} className="text-blue-600 font-bold mt-2 hover:underline">Clear Search</button>
            </div>
          )}
        </div>
      </div>

      {/* --- FOOTER BANNER --- */}
      <div className="bg-slate-900 rounded-xl p-6 text-center md:text-left md:flex justify-between items-center shadow-lg">
         <div>
            <h4 className="text-white font-bold text-lg mb-1">Still need help?</h4>
            <p className="text-slate-400 text-sm">Our support team is available Mon-Fri, 9am - 6pm IST.</p>
         </div>
         <button className="mt-4 md:mt-0 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition shadow-md flex items-center justify-center gap-2">
            <MailIcon /> Contact Support
         </button>
      </div>

    </motion.div>
  );
}

// Helper Components
const QuickCard = ({ icon, title, desc, color }) => (
    <div className="bg-white border border-slate-200 p-4 rounded-xl hover:shadow-md transition cursor-pointer group">
        <div className={`w-10 h-10 ${color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition`}>
            {icon}
        </div>
        <h4 className="font-bold text-slate-800 text-sm mb-0.5 flex items-center gap-1">
            {title} <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition text-slate-400"/>
        </h4>
        <p className="text-xs text-slate-500">{desc}</p>
    </div>
);

const MailIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);