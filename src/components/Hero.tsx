import { Typewriter } from "react-simple-typewriter";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

type HeroData = {
  name: string;
  title: string;
  roles: string[];
  description: string;
  image: string;
};

const Hero = () => {
  const [data, setData] = useState<HeroData | null>(null);

  useEffect(() => {
    const loadHero = async () => {
      const snap = await getDoc(doc(db, "hero", "main"));
      if (snap.exists()) {
        setData(snap.data() as HeroData);
      }
    };
    loadHero();
  }, []);

if (!data) {
  return (
    <section
      className="relative min-h-screen flex flex-col md:flex-row
      items-center justify-center gap-10 md:gap-16
      px-4 sm:px-8 md:px-20 pt-28 pb-16
      bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
      overflow-hidden"
    >
      {/* Background Blur / Glow */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
      <div className="absolute -top-32 -left-24 w-96 h-96 bg-purple-400 opacity-30 blur-3xl rounded-full animate-blob"></div>
      <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-pink-400 opacity-30 blur-3xl rounded-full animate-blob animation-delay-2000"></div>

      {/* Image Placeholder */}
      <div className="relative z-10 w-full md:w-1/2 flex justify-center">
        <div className="w-56 sm:w-64 md:w-96 h-64 sm:h-72 md:h-96 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl animate-pulse" />
      </div>

      {/* Text Placeholder */}
      <div className="relative z-10 w-full md:w-1/2 text-center md:text-left flex flex-col justify-center gap-4">
        <div className="h-8 sm:h-10 md:h-12 w-3/4 bg-white/20 rounded-lg animate-pulse"></div>
        <div className="h-6 sm:h-8 md:h-10 w-1/2 bg-white/20 rounded-lg animate-pulse"></div>
        <div className="h-6 sm:h-8 md:h-10 w-2/3 bg-white/20 rounded-lg animate-pulse mt-2"></div>
        <div className="h-24 sm:h-28 md:h-32 w-full bg-white/10 rounded-2xl animate-pulse mt-4"></div>

        {/* Buttons Placeholder */}
        <div className="flex gap-4 mt-6 justify-center md:justify-start">
          <div className="h-10 sm:h-12 w-32 sm:w-36 bg-white/20 rounded-xl animate-pulse"></div>
          <div className="h-10 sm:h-12 w-32 sm:w-36 bg-white/20 rounded-xl animate-pulse"></div>
        </div>
      </div>

      {/* Blob Animation CSS */}
      <style>{`
        @keyframes blob {
          0%,100% { transform: translate(0px,0px) scale(1); }
          33% { transform: translate(30px,-50px) scale(1.1); }
          66% { transform: translate(-20px,20px) scale(0.9); }
        }
        .animate-blob { animation: blob 10s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
}



  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row
      items-center justify-center gap-10 md:gap-16
      px-4 sm:px-8 md:px-20 pt-28 pb-16
      bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
      text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/10" />

      <div className="absolute -top-32 -left-24 w-96 h-96 bg-purple-400 opacity-30 blur-3xl rounded-full" />
      <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-pink-400 opacity-30 blur-3xl rounded-full" />

      <div className="relative z-10 w-full md:w-1/2 flex justify-center">
        <img
          src={data.image}
          alt="Profile"
          className="w-56 sm:w-64 md:w-96 drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
        />
      </div>

      <div className="relative z-10 w-full md:w-1/2 text-center md:text-left">
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-6xl">
          {data.name}
        </h1>

        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl">
          {data.title}
        </h2>

        <h2 className="mt-4 font-extrabold text-xl sm:text-2xl md:text-4xl">
          <Typewriter
            words={data.roles}
            loop={0}
            cursor
            cursorStyle="|"
          />
        </h2>

        <p className="mt-5 text-sm sm:text-base md:text-xl text-white/80">
          {data.description}
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
