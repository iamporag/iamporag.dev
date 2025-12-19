import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

interface Skill {
  name: string;
  level: number;
  gradient: string;
}

const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const snapshot = await getDocs(collection(db, "skills"));
        const skillsData: Skill[] = snapshot.docs.map((doc) => doc.data() as Skill);
        setSkills(skillsData);
      } catch (error) {
        console.error("Error fetching skills: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return (
    <section id="skills" className="relative w-full py-24 px-6 md:px-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600">
          Flutter Skills
        </h2>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          Specialized in building high-performance, scalable, and beautiful
          mobile applications using Flutter & Dart.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
  {loading
    ? Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="group relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl animate-pulse h-full flex flex-col"
        >
          <div className="flex items-center justify-between mb-5">
            <div className="h-6 w-32 bg-gray-300 rounded"></div>
            <div className="h-5 w-10 bg-gray-300 rounded"></div>
          </div>
          <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden mt-auto">
            <div className="absolute left-0 top-0 h-4 w-2/3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      ))
    : skills.map((skill) => (
        <div
          key={skill.name}
          className="group relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-semibold text-lg text-gray-800">{skill.name}</h3>
            <span className="text-sm font-bold text-blue-600">{skill.level}%</span>
          </div>

          <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden mt-auto">
           <div
  className="absolute left-0 top-0 h-4 rounded-full transition-all duration-1000"
  style={{
    width: `${skill.level}%`,
    background: getGradient(skill.gradient),
  }}
/>

          </div>

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


const getGradient = (gradient: string): string => {
  switch (gradient) {
    case "from-sky-400 to-blue-600":
      return "linear-gradient(to right, #38bdf8, #2563eb)";
    case "from-blue-500 to-indigo-600":
      return "linear-gradient(to right, #3b82f6, #4f46e5)";
    case "from-cyan-400 to-blue-500":
      return "linear-gradient(to right, #22d3ee, #3b82f6)";
    case "from-teal-400 to-emerald-500":
      return "linear-gradient(to right, #2dd4bf, #10b981)";
    case "from-orange-400 to-red-500":
      return "linear-gradient(to right, #fb923c, #ef4444)";
    case "from-purple-500 to-pink-500":
      return "linear-gradient(to right, #a855f7, #ec4899)";
    default:
      return "linear-gradient(to right, #3b82f6, #2563eb)"; // default fallback
  }
};
