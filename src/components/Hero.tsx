import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative min-h-screen
        flex flex-col md:flex-row
        items-center justify-center
        gap-10 md:gap-16
        px-4 sm:px-8 md:px-20
        pt-28 pb-16
        bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
        text-white overflow-hidden
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Floating shapes */}
      <div className="absolute -top-32 -left-24 w-96 h-96 bg-purple-400 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-pink-400 opacity-30 blur-3xl rounded-full"></div>

      {/* Image (always top on mobile) */}
      <div className="relative z-10 w-full md:w-1/2 flex justify-center">
        <img
          src="src/assets/iamporag.svg"
          alt="Profile"
          className="
            w-56 sm:w-64 md:w-96
            max-w-full
            drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)]
          "
        />
      </div>

      {/* Text */}
      <div className="relative z-10 w-full md:w-1/2 text-center md:text-left">
        <h1
          className="
            font-extrabold drop-shadow-xl
            text-3xl sm:text-4xl md:text-6xl
            whitespace-nowrap
          "
        >
          Sakib Hasan
        </h1>
        <h2
          className="
            font-semibold drop-shadow-xl
            text-3xl sm:text-2xl md:text-4xl
            whitespace-nowrap
          "
        >
          Creative
        </h2>

        <h2
          className="
            mt-4 font-extrabold drop-shadow-md
            text-xl sm:text-2xl md:text-4xl
            whitespace-nowrap
            overflow-hidden
          "
        >
          <Typewriter
            words={[
              "Flutter Developer",
              "Android Developer",
              "IOS Developer",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p className="mt-5 text-sm sm:text-base md:text-xl text-white/80">
          I build beautiful, scalable & responsive applications with Flutter.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="
              px-6 py-3
              sm:px-8 sm:py-4
              bg-white text-blue-600
              font-semibold rounded-xl
              shadow-lg
              hover:bg-blue-100 transition
            "
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="
              px-6 py-3
              sm:px-8 sm:py-4
              border border-white
              text-white font-semibold rounded-xl
              hover:bg-white hover:text-blue-600 transition
            "
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
