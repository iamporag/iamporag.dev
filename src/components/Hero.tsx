import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white overflow-hidden pt-24"
    >
      {/* Floating shapes */}
      <div className="absolute -top-20 -left-10 w-72 h-72 bg-purple-400 rounded-full opacity-30 animate-pulse blur-3xl"></div>
      <div className="absolute -bottom-20 -right-10 w-72 h-72 bg-pink-400 rounded-full opacity-30 animate-pulse blur-3xl"></div>

    {/* Profile Image */}
      <div className="z-10">
        <img
          src="src/assets/iamporag.svg"
          alt="Profile"
          className="w-64 md:w-80 shadow-2xl object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="z-10 max-w-lg">
        <h1 className="text-3xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Sakib Hasan
        </h1>
          {/* Animated Roles */}
      <h2 className="mt-4 text-4xl md:text-4xl font-extrabold text-white drop-shadow-md h-10">
        <Typewriter
          words={['Flutter Developer', 'Android Developer', 'IOS Developer']}
          loop={0} // 0 = infinite
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>
        <p className="mt-6 text-lg md:text-xl text-white/80 drop-shadow-md">
          I build beautiful, scalable, and responsive web applications with modern design.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-blue-100 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
