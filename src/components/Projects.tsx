import { useState } from "react";

const allProjects = [
  {
    title: "Quran App",
    desc: "Flutter based Quran app with Bangla translation",
    tech: ["Flutter", "Firebase"],
    image: "/src/assets/projects/quran.png",
    link: "#",
  },
  {
    title: "News Portal",
    desc: "Responsive news portal for mobile & web",
    tech: ["Flutter", "API"],
    image: "/src/assets/projects/news.png",
    link: "#",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio built with React & Tailwind",
    tech: ["React", "Tailwind"],
    image: "/src/assets/projects/portfolio.png",
    link: "#",
  },
  {
    title: "E-commerce App",
    desc: "Full-stack e-commerce app with cart & payment",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/src/assets/projects/ecommerce.png",
    link: "#",
  },
  {
    title: "Blog Platform",
    desc: "Multi-user blogging platform with comments",
    tech: ["Next.js", "Tailwind", "Firebase"],
    image: "/src/assets/projects/blog.png",
    link: "#",
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const projects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <section
      id="projects"
      className="relative w-full py-24 px-6 md:px-20 bg-gradient-to-b from-gray-100 to-gray-50"
    >
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-blue-600">
        Featured Projects
      </h2>

      {/* Cards */}
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500"
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
              <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                {p.title}
              </h3>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-gray-600 mb-5">{p.desc}</p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-600"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all"
              >
                View Project
                <span className="text-xl">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-20">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-10 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300"
        >
          {showAll ? "Show Less" : "View All Projects"}
        </button>
      </div>
    </section>
  );
};

export default Projects;
