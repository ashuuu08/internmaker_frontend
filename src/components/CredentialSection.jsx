import { motion } from "framer-motion";
import {
  Award,
  Download,
  CheckCircle,
  Clock,
  FileText,
  Shield,
  Share2,
  Lock,
  Eye
} from "lucide-react";

export default function CredentialSection() {
  // Mock backend data (Simulated User State)
  const records = [
    {
      id: "CERT-IM-2026-001",
      title: "Java Full Stack Internship",
      type: "Certificate of Completion",
      certificateUrl: "#",
      offerLetterUrl: "#",
      status: "Completed",
      issueDate: "15 Jan 2026",
      verified: true
    },
    {
      id: "PEND-IM-2026-002",
      title: "Spring Boot Advanced",
      type: "Letter of Recommendation",
      certificateUrl: null,
      offerLetterUrl: null,
      status: "In Progress",
      issueDate: null,
      progress: 65,
      verified: false
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-5xl mx-auto space-y-8"
    >
      
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-200 pb-6">
         <div>
             <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                 <Shield className="text-blue-700" size={24} /> Verified Credentials
             </h2>
             <p className="text-slate-500 text-sm mt-1">
                 View, download, and verify your official internship documents.
             </p>
         </div>
         <div className="flex gap-2">
             <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-sm font-semibold hover:bg-slate-50 transition flex items-center gap-2">
                 <Share2 size={16} /> Share Profile
             </button>
         </div>
      </div>

      {/* --- CREDENTIAL CARDS --- */}
      <div className="space-y-6">
        {records.map((item) => (
          <div
            key={item.id}
            className={`group relative overflow-hidden bg-white border rounded-xl p-0 shadow-sm transition-all hover:shadow-md ${
                item.status === "Completed" ? "border-slate-200" : "border-slate-200 bg-slate-50"
            }`}
          >
            {/* Status Strip */}
            <div className={`h-1.5 w-full ${item.status === "Completed" ? "bg-green-500" : "bg-amber-400"}`}></div>

            <div className="p-6 flex flex-col md:flex-row gap-6">
                
                {/* 1. Document Preview Icon (Left) */}
                <div className="shrink-0">
                    <div className={`w-20 h-28 rounded-lg border flex flex-col items-center justify-center gap-2 shadow-sm ${
                        item.status === "Completed" 
                            ? "bg-white border-slate-200 text-slate-600" 
                            : "bg-slate-100 border-slate-200 text-slate-400"
                    }`}>
                        {item.status === "Completed" ? (
                            <>
                                <Award size={32} className="text-blue-600" />
                                <div className="h-1 w-8 bg-slate-200 rounded"></div>
                                <div className="h-1 w-10 bg-slate-200 rounded"></div>
                            </>
                        ) : (
                            <Lock size={24} />
                        )}
                    </div>
                </div>

                {/* 2. Details (Middle) */}
                <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                                {item.verified && (
                                    <span className="bg-blue-50 text-blue-700 border border-blue-100 text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wide flex items-center gap-1">
                                        <CheckCircle size={10} /> Verified
                                    </span>
                                )}
                            </div>
                            <p className="text-sm font-medium text-slate-600">{item.type}</p>
                            <p className="text-xs text-slate-400 font-mono mt-1">Ref ID: {item.id}</p>
                        </div>
                        
                        {/* Status Badge */}
                        <div className="shrink-0">
                             {item.status === "Completed" ? (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold border border-green-100">
                                    <CheckCircle size={14} /> Completed
                                </span>
                             ) : (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold border border-amber-100">
                                    <Clock size={14} /> In Progress
                                </span>
                             )}
                        </div>
                    </div>

                    {/* Progress Bar (Only if In Progress) */}
                    {item.status !== "Completed" && (
                        <div className="mt-4 max-w-sm">
                            <div className="flex justify-between text-xs text-slate-500 mb-1">
                                <span>Unlock Progress</span>
                                <span>{item.progress}%</span>
                            </div>
                            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                                <div className="h-full bg-amber-400 rounded-full" style={{ width: `${item.progress}%` }}></div>
                            </div>
                        </div>
                    )}
                </div>

                {/* 3. Actions (Right) */}
                <div className="flex flex-col justify-center gap-3 md:border-l md:border-slate-100 md:pl-6 md:w-48">
                    {item.status === "Completed" ? (
                        <>
                            <button className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition shadow-sm">
                                <Download size={16} /> Download
                            </button>
                            <button className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-semibold rounded-lg transition">
                                <Eye size={16} /> Preview
                            </button>
                        </>
                    ) : (
                        <div className="text-center">
                            <button disabled className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-slate-100 text-slate-400 text-sm font-semibold rounded-lg cursor-not-allowed">
                                <Lock size={16} /> Locked
                            </button>
                            <p className="text-[10px] text-slate-400 mt-2 leading-tight">
                                Complete remaining tasks to unlock.
                            </p>
                        </div>
                    )}
                </div>
            </div>
            
            {/* Footer Metadata */}
            {item.status === "Completed" && (
                <div className="px-6 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                    <p className="text-xs text-slate-400">Digitally signed by InternMaker Authority</p>
                    <p className="text-xs font-medium text-slate-500">Issued: {item.issueDate}</p>
                </div>
            )}
          </div>
        ))}
      </div>

      {/* --- DISCLAIMER --- */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 flex gap-4">
        <div className="shrink-0 text-blue-600">
            <Shield size={24} />
        </div>
        <div>
            <h4 className="text-sm font-bold text-blue-900">Official Validity</h4>
            <p className="text-xs text-blue-800/80 mt-1 leading-relaxed">
                Certificates generated on this platform contain a cryptographic hash ID that can be verified by employers and universities globally.
                Offer letters are provisional and subject to successful completion of all assigned tasks within the stipulated timeline.
            </p>
        </div>
      </div>

    </motion.div>
  );
}