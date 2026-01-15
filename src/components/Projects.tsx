import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query,} from "firebase/firestore";
import { db } from "../firebase";

interface Project {
  title: string;
  desc: string;
  tech: string[];
  image: string;
  link: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

useEffect(() => {
  const fetchProjects = async () => {
    try {
      const projectsRef = collection(db, "projects");
      const q = query(projectsRef, orderBy("createdAt", "desc"));

      const snapshot = await getDocs(q);

      const projectsData: Project[] = snapshot.docs.map(
        (doc) => doc.data() as Project
      );

      setProjects(projectsData);
    } catch (error) {
      console.error("Error fetching projects: ", error);
    } finally {
      setLoading(false);
    }
  };

  fetchProjects();
}, []);


  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="relative w-full py-24 px-6 md:px-20 bg-gradient-to-b from-gray-100 to-gray-50"
    >
      {/* Title & Short Description */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600">
          Featured Projects
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Some of my recent work showcasing skills in Flutter, React, and full-stack development.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-96 bg-white/10 backdrop-blur-md rounded-3xl animate-pulse shadow-xl"
              />
            ))
          : displayedProjects.map((p, i) => (
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
      {!loading && projects.length > 3 && (
        <div className="flex justify-center mt-20">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-10 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300"
          >
            {showAll ? "Show Less" : "View All Projects"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
