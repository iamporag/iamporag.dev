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
  const [isDark, setIsDark] = useState(false); // dark theme for gradient section

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const top = section.getBoundingClientRect().top + window.scrollY;
          const bottom = top + section.clientHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActive(item.name);

            // Set dark theme for Contact section
            if (item.name === "Home" || item.name === "Contact") {
              setIsDark(true);
            } else {
              setIsDark(false);
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navbar colors based on section
  const navBg = isDark ? "bg-black/40 backdrop-blur-md" : "bg-white/80 backdrop-blur-md";
  const navText = isDark ? "text-white" : "text-slate-700";
  const underlineColor = isDark ? "bg-white" : "bg-blue-600";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md ${navBg}`}>

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className={`text-2xl font-extrabold ${isDark ? "text-white" : "text-blue-600"}`}>iamporag</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.name} className="relative">
              <a
                href={item.href}
                className={`
                  text-[15px] font-medium tracking-wide transition-colors duration-200
                  ${active === item.name ? `${navText}` : `hover:text-blue-600 ${navText}`}
                `}
              >
                {item.name}
                <span
                  className={`
                    absolute left-0 -bottom-1 h-[2px] transition-all duration-300
                    ${active === item.name ? `w-full ${underlineColor}` : "w-0"}
                  `}
                ></span>
              </a>
            </li>
          ))}

          {/* CTA */}
          <li className="ml-6">
            <a
              href="#contact"
              className={`
                inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold rounded-full shadow-sm transition-all duration-200
                ${isDark ? "bg-white text-black hover:bg-gray-200 hover:text-black" : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md"}
              `}
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setIsOpen(true)}>
          <FaBars size={24} className={`${isDark ? "text-white" : "text-gray-800"}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden fixed inset-0 z-50 flex flex-col items-center justify-center gap-10 ${isDark ? "bg-black/90" : "bg-white/90"}`}>
          <button
            className="absolute top-6 right-6"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes size={28} className={`${isDark ? "text-white" : "text-gray-800"}`} />
          </button>

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => {
                setIsOpen(false);
                setActive(item.name);
              }}
              className={`text-2xl font-semibold transition-colors duration-200 ${active === item.name ? (isDark ? "text-white" : "text-blue-600") : (isDark ? "text-white/80 hover:text-white" : "text-gray-800 hover:text-blue-600")}`}
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className={`px-8 py-3 rounded-full font-semibold transition-colors duration-200 ${isDark ? "bg-white text-black hover:bg-gray-200 hover:text-black" : "bg-blue-600 text-white hover:bg-blue-700"}`}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
