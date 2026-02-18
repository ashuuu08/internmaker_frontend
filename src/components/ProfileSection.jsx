import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Mail, Phone, Award, User, MapPin, Calendar, 
  Camera, Upload, Shield, CheckCircle, Edit2, Save, X, Loader2, FileText, Trash2
} from "lucide-react";

export default function ProfileSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Refs for hidden inputs
  const photoInputRef = useRef(null);
  const resumeInputRef = useRef(null);

  // --- 1. USER STATE (Profile Data & Photo) ---
  const [user, setUser] = useState(() => {
    const savedAvatar = localStorage.getItem("user_avatar");
    return {
      firstName: "Ashish",
      lastName: "Kumar",
      email: "ashish@student.com",
      phone: "+91 98765 43210",
      location: "Barauda, Chhattisgarh",
      role: "Intern Candidate",
      studentId: "IM-2026-892",
      internship: "Java Full Stack Development",
      joiningDate: "Jan 15, 2026",
      status: "Provisional",
      avatar: savedAvatar || null,
    };
  });

  // --- 2. RESUME STATE (With Persistence) ---
  const [resume, setResume] = useState(() => {
    // Try to load saved resume metadata from Local Storage
    const savedResume = localStorage.getItem("user_resume");
    return savedResume ? JSON.parse(savedResume) : null;
  });

  // --- HANDLERS ---

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  // Profile Photo Upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) return alert("Image too large (Max 2MB)");
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prev) => ({ ...prev, avatar: reader.result }));
        localStorage.setItem("user_avatar", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Resume Upload Logic
  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // 1. Validate Size (Max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("File is too large. Please upload a file smaller than 5MB.");
        return;
      }

      // 2. Validate Type (PDF or DOCX)
      const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword'];
      if (!validTypes.includes(file.type)) {
        alert("Invalid file type. Please upload a PDF or DOCX.");
        return;
      }

      // 3. Create Metadata Object
      const newResume = {
        name: file.name,
        size: (file.size / 1024 / 1024).toFixed(2) + " MB",
        date: new Date().toLocaleDateString(),
        type: file.type.includes('pdf') ? 'PDF' : 'DOC'
      };

      // 4. Update State & Local Storage
      setResume(newResume);
      localStorage.setItem("user_resume", JSON.stringify(newResume));
      
      // Note: We only store metadata in localStorage because storing binary PDF files 
      // often exceeds the 5MB browser limit. In a real app, you'd upload to a server here.
    }
  };

  // Delete Resume
  const handleDeleteResume = () => {
    if(window.confirm("Are you sure you want to remove your resume?")) {
        setResume(null);
        localStorage.removeItem("user_resume");
        // Reset input value so onChange triggers again if same file is selected
        if (resumeInputRef.current) resumeInputRef.current.value = "";
    }
  };

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsEditing(false);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto space-y-6"
    >
      
      {/* --- HEADER CARD --- */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-slate-800 to-blue-900 relative">
            <div className="absolute top-4 right-4">
               {!isEditing ? (
                 <button onClick={() => setIsEditing(true)} className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg text-xs font-semibold hover:bg-white/20 transition">
                   <Edit2 size={14} /> Edit Profile
                 </button>
               ) : (
                 <div className="flex gap-2">
                   <button onClick={() => setIsEditing(false)} className="px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-lg text-xs font-semibold hover:bg-white/20 transition">Cancel</button>
                   <button onClick={handleSave} disabled={loading} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-500 transition shadow-lg disabled:opacity-70">
                     {loading ? <Loader2 size={14} className="animate-spin"/> : <><Save size={14} /> Save Changes</>}
                   </button>
                 </div>
               )}
            </div>
        </div>

        <div className="px-8 pb-8">
          <div className="relative flex justify-between items-end -mt-12 mb-6">
            {/* Avatar Section */}
            <div className="relative group">
              <div className="w-32 h-32 rounded-full border-4 border-white bg-slate-200 shadow-md overflow-hidden relative">
                {user.avatar ? (
                    <img src={user.avatar} alt="Profile" className="w-full h-full object-cover"/>
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-slate-400 uppercase">{user.firstName[0]}{user.lastName[0]}</div>
                )}
              </div>
              <input type="file" ref={photoInputRef} onChange={handlePhotoUpload} accept="image/*" className="hidden" />
              <button onClick={() => photoInputRef.current.click()} className="absolute bottom-1 right-1 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-sm border-2 border-white transition transform hover:scale-105" title="Upload Photo">
                <Camera size={16} />
              </button>
            </div>
            
            <div className="hidden md:block mb-2">
                <div className="flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-bold uppercase tracking-wider">
                    <CheckCircle size={14} /> Verified Student
                </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              {user.firstName} {user.lastName}
              <span className="md:hidden inline-flex items-center justify-center w-5 h-5 bg-blue-100 text-blue-600 rounded-full text-[10px]"><Shield size={10} /></span>
            </h2>
            <p className="text-slate-500 font-medium">{user.role} · {user.internship}</p>
            <p className="text-sm text-slate-400 flex items-center gap-2 mt-1"><MapPin size={14} /> {user.location}</p>
          </div>
        </div>
      </div>

      {/* --- DETAILS GRID --- */}
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Left Column: Forms */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2 pb-4 border-b border-slate-100">
              <User size={18} className="text-blue-600"/> Personal Details
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="First Name" name="firstName" value={user.firstName} isEditing={isEditing} onChange={handleChange} />
              <Field label="Last Name" name="lastName" value={user.lastName} isEditing={isEditing} onChange={handleChange} />
              <Field label="Email Address" name="email" value={user.email} isEditing={isEditing} type="email" onChange={handleChange} />
              <Field label="Phone Number" name="phone" value={user.phone} isEditing={isEditing} type="tel" onChange={handleChange} />
              <Field label="Location" name="location" value={user.location} isEditing={isEditing} fullWidth onChange={handleChange} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2 pb-4 border-b border-slate-100">
              <Award size={18} className="text-amber-500"/> Academic Information
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
               <ReadOnlyField label="Internship Track" value={user.internship} />
               <ReadOnlyField label="Student ID" value={user.studentId} isMono />
               <ReadOnlyField label="Enrollment Date" value={user.joiningDate} icon={<Calendar size={14}/>} />
               <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Status</label>
                  <div className="p-3 bg-yellow-50 border border-yellow-100 rounded-lg text-yellow-700 font-bold text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span> {user.status}
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Right Column: Documents & Settings */}
        <div className="space-y-6">
          
          {/* --- RESUME UPLOAD SECTION (Updated) --- */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
             <h3 className="text-sm font-bold text-slate-900 mb-4">Documents</h3>
             
             {/* Hidden Input */}
             <input 
                type="file" 
                ref={resumeInputRef} 
                onChange={handleResumeUpload} 
                accept=".pdf,.doc,.docx" 
                className="hidden" 
             />

             {/* Upload Box (Only show if no resume) */}
             {!resume ? (
                 <div 
                    onClick={() => resumeInputRef.current.click()}
                    className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:bg-slate-50 hover:border-blue-300 transition cursor-pointer group"
                 >
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition">
                       <Upload size={20} />
                    </div>
                    <p className="text-sm font-bold text-slate-700">Upload Resume</p>
                    <p className="text-xs text-slate-400 mt-1">PDF or DOCX (Max 5MB)</p>
                 </div>
             ) : (
                 // Resume File Card (Show if resume exists)
                 <div className="mt-0 space-y-3">
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-200 transition">
                       <div className="flex items-center gap-3 overflow-hidden">
                          <div className={`w-10 h-10 rounded flex flex-col items-center justify-center text-[10px] font-bold shrink-0 ${resume.type === 'PDF' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                             <FileText size={16} />
                             {resume.type}
                          </div>
                          <div className="overflow-hidden">
                             <p className="font-bold text-sm text-slate-700 truncate w-40" title={resume.name}>{resume.name}</p>
                             <p className="text-xs text-slate-400">{resume.size} • {resume.date}</p>
                          </div>
                       </div>
                       <button 
                         onClick={handleDeleteResume}
                         className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition"
                         title="Remove File"
                       >
                         <Trash2 size={16}/>
                       </button>
                    </div>
                    <button 
                        onClick={() => resumeInputRef.current.click()}
                        className="text-xs text-blue-600 hover:underline w-full text-center"
                    >
                        Replace current resume
                    </button>
                 </div>
             )}
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
             <h3 className="text-sm font-bold text-slate-900 mb-4">Account Settings</h3>
             <button className="w-full text-left px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition border border-transparent hover:border-slate-100 mb-2">Change Password</button>
             <button className="w-full text-left px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition border border-transparent hover:border-slate-100">Notification Preferences</button>
             <button className="w-full text-left px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50 rounded-lg transition border border-transparent hover:border-red-100 mt-2">Deactivate Account</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// --- SUB-COMPONENTS FOR CLEANER CODE ---

const Field = ({ label, name, value, isEditing, onChange, type = "text", fullWidth = false }) => (
  <div className={`space-y-1 ${fullWidth ? "md:col-span-2" : ""}`}>
    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">{label}</label>
    {isEditing ? (
      <input type={type} name={name} value={value} onChange={onChange} className="w-full p-2.5 bg-white border border-blue-300 rounded-lg text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition shadow-sm" />
    ) : (
      <div className="p-2.5 border border-transparent text-slate-800 font-medium text-sm border-b border-slate-100">{value}</div>
    )}
  </div>
);

const ReadOnlyField = ({ label, value, icon, isMono = false }) => (
   <div className="space-y-1">
      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">{label}</label>
      <div className={`p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 text-sm flex items-center gap-2 ${isMono ? 'font-mono' : 'font-medium'}`}>
        {icon} {value}
      </div>
   </div>
);