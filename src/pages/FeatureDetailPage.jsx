import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, Code, TrendingUp, ShieldCheck, Briefcase, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const featureDetails = {
  "real-projects": {
    title: "5+ Real Projects",
    subtitle: "Work on Live Products",
    icon: Code,
    color: "blue",
    overview: "During your paid internship, you'll work on 5+ real projects that are actually used by companies. Not assignments—real work that matters.",
    details: [
      {
        heading: "Project 1: E-Commerce Platform",
        description: "Build a full-stack e-commerce application used by an actual company. Handle real user data, integrate live payment systems, and solve real-world problems. This is production code."
      },
      {
        heading: "Project 2: Social Media Analytics",
        description: "Create tools that analyze real social media data from actual clients. See your work impact real business decisions and KPIs."
      },
      {
        heading: "Project 3: Task Management System",
        description: "Build collaborative tools used by real teams. Implement features based on actual user feedback and requirements."
      },
      {
        heading: "Project 4: Content Management System",
        description: "Create a CMS powering real content delivery. Learn to handle production-scale problems and real-world constraints."
      },
      {
        heading: "Project 5: Analytics & Reporting Tool",
        description: "Build data visualization tools that drive real business insights. Work with actual datasets and real stakeholders."
      }
    ],
    benefits: [
      "Real work experience for your resume",
      "Portfolio projects from actual companies",
      "Production code experience",
      "Real user feedback and testing",
      "Earned internship certificate"
    ]
  },
  "placement-rate": {
    title: "87% Placement Rate",
    subtitle: "Internship to Job Conversion",
    icon: TrendingUp,
    color: "green",
    overview: "87% of our paid interns get job offers from their internship company or our hiring partners within 30 days of completion.",
    details: [
      {
        heading: "Direct Conversion to Full-Time",
        description: "Many interns are hired directly by their internship company. You're already trained, integrated with the team, and proven."
      },
      {
        heading: "Hiring Partner Network",
        description: "500+ companies actively hire our graduates. Your internship profile is reviewed by recruiters from Google, Amazon, Microsoft, and more."
      },
      {
        heading: "Resume with Real Experience",
        description: "Unlike training certificates, your resume now shows real internship experience at actual companies. Employers take this seriously."
      },
      {
        heading: "Verified Reference",
        description: "Your internship supervisor becomes your professional reference. This carries weight in hiring decisions."
      },
      {
        heading: "Salary Expectations",
        description: "Average offers: ₹6.5 LPA. Range: ₹4 LPA - ₹15+ LPA depending on performance and role."
      }
    ],
    benefits: [
      "Direct hire from internship company",
      "500+ hiring partners actively recruiting",
      "Real work experience on resume",
      "Professional references from managers",
      "Average ₹6.5 LPA starting salary"
    ]
  },
  "verified-certificate": {
    title: "Verified Certificate",
    subtitle: "Recognized Internship Experience",
    icon: ShieldCheck,
    color: "purple",
    overview: "Earn a verified internship certificate proving you completed a paid internship at an actual company. This isn't a training certificate—it's proof of work experience.",
    details: [
      {
        heading: "Blockchain-Verified Credential",
        description: "Your certificate is cryptographically signed and stored on blockchain. Companies can instantly verify your internship was real and completed."
      },
      {
        heading: "Company Letter & Certification",
        description: "Get an official internship completion letter from the company you worked for, signed by your supervisor and HR."
      },
      {
        heading: "Recognized by Top Companies",
        description: "Google, Amazon, Microsoft, and 500+ other companies recognize InternMaker internship certificates as legitimate work experience."
      },
      {
        heading: "College Credit Recognition",
        description: "Many universities accept this internship for college credit (3-6 hours). Accelerate your degree while gaining work experience."
      },
      {
        heading: "Lifetime Validity",
        description: "Your certificate remains valid forever. Update it on LinkedIn and other platforms to showcase your internship experience."
      }
    ],
    benefits: [
      "Blockchain-verified credentials",
      "Company-issued completion letter",
      "Recognized by 500+ employers",
      "Valid for college credit",
      "Permanent achievement on your record"
    ]
  },
  "job-guarantee": {
    title: "Internship Guarantee",
    subtitle: "Real Work or Your Money Back",
    icon: Briefcase,
    color: "yellow",
    overview: "If you don't get real work during your internship, we refund 100% of your fee. We're confident because our internships are real.",
    details: [
      {
        heading: "Real Work Guarantee",
        description: "You'll work on actual projects with real impact. Not mock projects or simulations. If the work isn't real, get a full refund."
      },
      {
        heading: "100% Money-Back Guarantee",
        description: "Complete your internship and feel it wasn't real? Full refund. No questions asked. We only make money when you're happy."
      },
      {
        heading: "Transition to Full-Time",
        description: "Most companies offer full-time positions to top interns. Clear communication about permanent opportunities from day one."
      },
      {
        heading: "Career Development",
        description: "Mentorship and guidance to help you perform well and stand out. Our goal is your success, not just completing an internship."
      },
      {
        heading: "Next Steps Support",
        description: "Even if not hired at your internship company, we help with job search, interviews, and salary negotiation."
      }
    ],
    benefits: [
      "Real work guarantee",
      "100% refund if not satisfied",
      "Clear full-time opportunities",
      "Career mentoring included",
      "Job search support after"
    ]
  },
  "live-mentorship": {
    title: "Industry Mentors",
    subtitle: "Learn from Professionals",
    icon: Users,
    color: "red",
    overview: "Get guidance from professionals with 10+ years of experience working at Google, Amazon, Microsoft, and other tech leaders.",
    details: [
      {
        heading: "Your Internship Manager",
        description: "A senior professional who's managed teams at major companies will oversee your internship, mentor you daily, and help you succeed."
      },
      {
        heading: "Code Review & Feedback",
        description: "Your work gets reviewed daily by experienced developers. Learn production code standards and industry best practices."
      },
      {
        heading: "Technical Guidance",
        description: "Stuck on a problem? Your mentor helps debug, suggests solutions, and teaches you how to think like a professional developer."
      },
      {
        heading: "Career Conversations",
        description: "Discuss career goals, growth paths, skill development, and long-term planning with someone who's been through it."
      },
      {
        heading: "Professional Network",
        description: "Build real relationships with industry professionals. Your mentor can become a long-term reference and network contact."
      }
    ],
    benefits: [
      "Daily mentorship from industry veterans",
      "Code review and feedback",
      "Technical problem-solving support",
      "Career guidance and planning",
      "Professional network access"
    ]
  },
  "career-advancement": {
    title: "Career Boost",
    subtitle: "Real Experience for Real Jobs",
    icon: Award,
    color: "indigo",
    overview: "Your paid internship experience accelerates your career. Real work experience is what employers truly value.",
    details: [
      {
        heading: "Resume Game Changer",
        description: "Replace theoretical knowledge with real internship experience. Employers prefer someone with 10 weeks of paid internship over 6 months of online courses."
      },
      {
        heading: "Job Interview Advantage",
        description: "Talk about actual projects you shipped, real problems you solved, and actual impact you made. Interview stories that win offers."
      },
      {
        heading: "Career Switching Made Easy",
        description: "Career changers gain legitimacy through real internship experience. Employers see you can do the job, not just studied it."
      },
      {
        heading: "Salary Negotiation Power",
        description: "Internship experience at a known company lets you negotiate higher salaries. You're not a beginner anymore."
      },
      {
        heading: "Continuous Growth",
        description: "After your internship, access to advanced specializations in cloud, AI/ML, or DevOps. Keep building your expertise."
      }
    ],
    benefits: [
      "Real experience beats certifications",
      "Powerful interview stories",
      "Career switching legitimacy",
      "Higher salary negotiation power",
      "Continuous learning access"
    ]
  }
};

function FeatureDetailPage() {
  const { featureId } = useParams();
  const navigate = useNavigate();
  const feature = featureDetails[featureId];

  if (!feature) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Feature not found</h1>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const IconComponent = feature.icon;
  const colorClasses = {
    blue: "from-blue-600 to-blue-400",
    green: "from-green-600 to-green-400",
    purple: "from-purple-600 to-purple-400",
    yellow: "from-yellow-600 to-yellow-400",
    red: "from-red-600 to-red-400",
    indigo: "from-indigo-600 to-indigo-400"
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className={`bg-gradient-to-r ${colorClasses[feature.color]} text-white py-20 px-6`}>
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 mb-8 hover:opacity-80 transition text-sm font-semibold"
          >
            <ArrowLeft size={18} /> Back to Home
          </button>
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-lg flex items-center justify-center">
              <IconComponent size={40} />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-2">{feature.title}</h1>
              <p className="text-lg opacity-90">{feature.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-md p-10 border-l-4 border-blue-600"
          >
            <h2 className="text-2xl font-bold mb-4 text-slate-900">Overview</h2>
            <p className="text-lg text-slate-700 leading-relaxed">{feature.overview}</p>
          </motion.div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-slate-900">What You'll Experience</h2>
          <div className="space-y-8">
            {feature.details.map((detail, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition border-l-4 border-blue-500"
              >
                <h3 className="text-2xl font-bold mb-3 text-slate-900">{detail.heading}</h3>
                <p className="text-slate-700 leading-relaxed text-lg">{detail.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-slate-900">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {feature.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md flex items-start gap-4"
              >
                <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${colorClasses[feature.color]} flex items-center justify-center flex-shrink-0 mt-1`}>
                  <CheckCircle size={16} className="text-white" />
                </div>
                <p className="text-slate-700 font-semibold">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Internship?</h2>
          <p className="text-lg mb-8 opacity-90">Join 5000+ interns who've gained real experience and landed great jobs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/register")}
              className="px-8 py-3 bg-white text-blue-900 font-bold rounded-lg hover:bg-slate-100 transition"
            >
              Apply for Internship - ₹49
            </button>
            <button
              onClick={() => navigate("/support")}
              className="px-8 py-3 bg-blue-600 border-2 border-white text-white font-bold rounded-lg hover:bg-blue-800 transition"
            >
              Ask Questions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeatureDetailPage;
