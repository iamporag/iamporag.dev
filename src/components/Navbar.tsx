import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [isDark, setIsDark] = useState(true);

  // Scroll active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (!section) return;

        const top = section.getBoundingClientRect().top + window.scrollY;
        const bottom = top + section.clientHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          setActive(item.name);
          setIsDark(item.name === "Home" || item.name === "Contact");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = isDark
    ? "bg-black/40 backdrop-blur-md"
    : "bg-white/80 backdrop-blur-md";

  const navText = isDark ? "text-white" : "text-slate-700";
  const underlineColor = isDark ? "bg-white" : "bg-blue-600";

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* ================= MOBILE TOP BAR ================= */}
      <div className="md:hidden flex items-center justify-between px-5 py-4 bg-black/40 backdrop-blur-md">
        <h1 className="text-xl font-extrabold text-white">iamporag</h1>

        <button
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-lg hover:bg-white/10"
        >
          <FaBars size={22} className="text-white" />
        </button>
      </div>

      {/* ================= DESKTOP NAVBAR ================= */}
      <div className={`hidden md:block ${navBg}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1
            className={`text-2xl font-extrabold ${isDark ? "text-white" : "text-blue-600"
              }`}
          >
            iamporag
          </h1>

          {/* Menu */}
          <ul className="flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.name} className="relative">
                <a
                  href={item.href}
                  className={`text-[15px] font-medium transition ${active === item.name
                      ? navText
                      : `${navText} hover:text-blue-600`
                    }`}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300 ${active === item.name
                        ? `w-full ${underlineColor}`
                        : "w-0"
                      }`}
                  />
                </a>
              </li>
            ))}

            <a
              href="#contact"
              className={`ml-6 px-6 py-2.5 rounded-full font-semibold transition ${isDark
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
            >
              Hire Me
            </a>
          </ul>
        </div>
      </div>

      {/* ================= MOBILE MENU (BOTTOM SHEET) ================= */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="absolute bottom-0 left-0 w-full bg-black rounded-t-3xl px-6 pt-8 pb-10 flex flex-col gap-6">
            {/* Close */}
            <button
              className="absolute top-4 right-6"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes size={26} className="text-white" />
            </button>

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setIsOpen(false);
                  setActive(item.name);
                }}
                className={`text-lg font-semibold py-3 px-4 rounded-xl transition ${active === item.name
                    ? "bg-white/10 text-white"
                    : "text-white/80 hover:bg-white/10"
                  }`}
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 text-center py-3 rounded-xl font-semibold bg-white text-black"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
