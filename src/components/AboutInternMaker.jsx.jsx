import { motion } from "framer-motion";
import { Target, Shield, Users, BookOpen, Quote, CheckCircle } from "lucide-react";

export default function AboutInternMaker() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-5xl mx-auto space-y-8"
    >
      
      {/* --- HERO SECTION: THE MISSION --- */}
      <div className="bg-white border border-slate-200 rounded-xl p-8 md:p-10 shadow-sm relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
            <BookOpen size={14} /> Our Mission
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Bridging the gap between <br />
            <span className="text-blue-700">Academic Theory</span> and <span className="text-blue-700">Industry Reality</span>.
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
             <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  <strong>The Problem:</strong> Every year, millions of students graduate with degrees but lack the 
                  practical skills required to survive in a corporate environment. They are stuck in the 
                  <em> "Experience Paradox"</em> — you need a job to get experience, but you need experience to get a job.
                </p>
                <p>
                  <strong>The Solution:</strong> InternMaker was founded to break this cycle. We provide a 
                  <span className="text-slate-900 font-semibold"> Virtual Corporate Environment </span> 
                  where students work on production-grade tasks, face real deadlines, and earn verifiable credentials 
                  that employers respect.
                </p>
             </div>

             {/* Founder Quote / Vision */}
             <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 relative">
                <Quote className="absolute top-4 left-4 text-slate-200 fill-slate-200" size={48} />
                <p className="relative z-10 text-slate-700 italic font-medium mb-4 pt-4">
                  "We don't sell courses. We facilitate careers. Our certificate isn't just a piece of paper; 
                  it's proof that you have written code that actually works."
                </p>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">
                      AK
                   </div>
                   <div>
                      <p className="text-sm font-bold text-slate-900">Ashish Kumar Rathour</p>
                      <p className="text-xs text-slate-500 uppercase tracking-wide">Founder, InternMaker</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* --- CORE PILLARS --- */}
      <div className="grid md:grid-cols-3 gap-6">
        
        <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition group">
           <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Target size={24} />
           </div>
           <h3 className="text-lg font-bold text-slate-900 mb-2">Outcome-Based Learning</h3>
           <p className="text-sm text-slate-500 leading-relaxed">
              We moved away from "passive video watching." Our curriculum is 100% task-based. 
              If you don't build, you don't certify.
           </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition group">
           <div className="w-12 h-12 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Shield size={24} />
           </div>
           <h3 className="text-lg font-bold text-slate-900 mb-2">Verifiable Trust</h3>
           <p className="text-sm text-slate-500 leading-relaxed">
              In an era of fake certificates, ours stand out. Every document contains a cryptographic 
              hash ID linked to our permanent graduate registry.
           </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition group">
           <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Users size={24} />
           </div>
           <h3 className="text-lg font-bold text-slate-900 mb-2">Community & Mentorship</h3>
           <p className="text-sm text-slate-500 leading-relaxed">
              Access a network of ambitious peers and industry mentors. Code reviews are standard, 
              ensuring you learn best practices, not just syntax.
           </p>
        </div>

      </div>

      {/* --- TECH STACK STRIP --- */}
      <div className="bg-slate-900 rounded-xl p-8 text-center">
         <h3 className="text-white font-bold text-lg mb-6">Our Curriculum Covers Modern Industry Standards</h3>
         <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            {["Java Enterprise", "Spring Boot", "React.js", "Node.js", "Docker", "AWS Cloud", "System Design"].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg border border-slate-700 flex items-center gap-2">
                   <CheckCircle size={14} className="text-blue-400" /> {tech}
                </span>
            ))}
         </div>
      </div>

    </motion.div>
  );
}