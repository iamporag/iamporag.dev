const skills = [
  { name: "React", level: 90, color: "bg-blue-500" },
  { name: "Tailwind CSS", level: 85, color: "bg-purple-500" },
  { name: "JavaScript", level: 95, color: "bg-yellow-400" },
  { name: "TypeScript", level: 80, color: "bg-blue-600" },
  { name: "Firebase", level: 75, color: "bg-orange-500" },
  { name: "Flutter", level: 70, color: "bg-teal-400" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-20 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        My Skills
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition"
          >
            <h3 className="font-semibold text-xl mb-4">{skill.name}</h3>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className={`${skill.color} h-4 rounded-full transition-all duration-1000`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="mt-3 text-sm text-gray-500">{skill.level}% Proficiency</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
