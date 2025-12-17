import { useState } from "react";

const allProjects = [
  {
    title: "Quran App",
    desc: "Flutter based Quran app with Bangla translation",
    tech: ["Flutter", "Firebase"],
    link: "#",
  },
  {
    title: "News Portal",
    desc: "Responsive news portal for mobile & web",
    tech: ["Flutter", "API"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio built with React & Tailwind",
    tech: ["React", "Tailwind"],
    link: "#",
  },
  {
    title: "E-commerce App",
    desc: "Full-stack e-commerce app with cart & payment",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Blog Platform",
    desc: "Multi-user blogging platform with comments",
    tech: ["Next.js", "Tailwind", "Firebase"],
    link: "#",
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Show first 3 by default
  const projects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-20 bg-gradient-to-b from-gray-100 to-gray-50"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transform hover:-translate-y-3 transition"
          >
            <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
            <p className="text-gray-600 mb-5">{p.desc}</p>
            <div className="flex flex-wrap gap-3 mb-5">
              {p.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-sm bg-gray-200 px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={p.link}
              className="text-blue-600 font-medium hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-16">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition text-lg"
        >
          {showAll ? "Show Less" : "View All Projects"}
        </button>
      </div>
    </section>
  );
};

export default Projects;
