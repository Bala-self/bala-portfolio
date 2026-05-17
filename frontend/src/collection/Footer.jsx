import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-400 py-8 mt-12 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-sm font-medium tracking-wide">
          © {new Date().getFullYear()}{' '}
          <span className="text-white hover:text-indigo-400 transition-colors duration-300 cursor-pointer">
            Balakrishnan M
          </span>
          . All rights reserved.
        </div>
        
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Bala-self"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white hover:scale-120 transition-all duration-300 text-2xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/bala.i_h_u_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 hover:scale-120 transition-all duration-300 text-2xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 hover:scale-120 transition-all duration-300 text-2xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:balakrishnan.code@gmail.com"
            className="text-gray-400 hover:text-emerald-400 hover:scale-120 transition-all duration-300 text-2xl"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;