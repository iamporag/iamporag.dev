const skills = [
  { name: "Flutter", level: 95, gradient: "from-sky-400 to-blue-600" },
  { name: "Dart", level: 92, gradient: "from-blue-500 to-indigo-600" },
  { name: "State Management (Provider / Bloc)", level: 88, gradient: "from-cyan-400 to-blue-500" },
  { name: "REST API Integration", level: 90, gradient: "from-teal-400 to-emerald-500" },
  { name: "Firebase (Auth / Firestore)", level: 85, gradient: "from-orange-400 to-red-500" },
  { name: "UI / Animations", level: 90, gradient: "from-purple-500 to-pink-500" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full py-24 px-6 md:px-20 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600">
          Flutter Skills
        </h2>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          Specialized in building high-performance, scalable, and beautiful
          mobile applications using Flutter & Dart.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          >
            {/* Title & Percentage */}
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-semibold text-lg text-gray-800">
                {skill.name}
              </h3>
              <span className="text-sm font-bold text-blue-600">
                {skill.level}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`absolute left-0 top-0 h-4 rounded-full bg-gradient-to-r ${skill.gradient} transition-all duration-1000`}
                style={{ width: `${skill.level}%` }}
              />
            </div>

            {/* Soft Glow */}
            <div
              className={`absolute inset-x-8 bottom-8 h-5 bg-gradient-to-r ${skill.gradient} blur-xl opacity-30 pointer-events-none`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
