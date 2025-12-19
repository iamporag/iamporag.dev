import { FaFacebook, FaGithub, FaLinkedin,} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <p className="text-sm md:text-base">
          © 2025 iamporag. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/iamporag"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/iamporag"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://facebook.com/iamporag"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaFacebook size={24} />
          </a>
        </div>
      </div>

      {/* Optional: small note */}
      <p className="text-center text-white/80 mt-4 text-xs">
        Built with React & Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
