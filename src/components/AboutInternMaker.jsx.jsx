export default function AboutInternMaker() {
  return (
    <section className="bg-gray-900 border border-gray-800 rounded-xl p-8">
      <h2 className="text-2xl font-semibold text-white mb-4">
        About{" "}
        <span className="text-yellow-400">Intern</span>
        <span className="text-cyan-400">Maker</span>
      </h2>

      <p className="text-gray-400 leading-relaxed mb-4">
        InternMaker is a structured internship platform created to eliminate
        fake experience and meaningless certificates. We focus on
        <span className="text-white"> real tasks, real learning, and real proof of work.</span>
      </p>

      <p className="text-gray-400 leading-relaxed mb-4">
        Our internships are designed for students and freshers who want
        hands-on experience in modern technologies such as
        <span className="text-white"> Java Development, MERN Stack, Frontend Development, </span>
        and other in-demand skills.
      </p>

      <p className="text-gray-400 leading-relaxed mb-6">
        The process is simple: enroll, complete tasks through your dashboard,
        get your work reviewed, and receive an official
        <span className="text-white"> internship offer letter and completion certificate.</span>
      </p>

      <div className="grid sm:grid-cols-2 gap-4 text-sm">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
          ✔ Task-based internships
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
          ✔ Verified offer letter & certificate
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
          ✔ Built for students & freshers
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
          ✔ Transparent & simple process
        </div>
      </div>
    </section>
  );
}
