import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="h-screen flex justify-center items-center px-6">
      <div className="text-center">
        {/* Profile Pic - Static but elegant with a slight entry animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src="/Profile.png" 
            alt="Soundarya" 
            className="w-60 h-60 rounded-full mx-auto mb-8 border border-blue-500/30 p-1" 
          />
        </motion.div>

        {/* Text Content - Professional fade-up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Hi, I'm <span className="text-blue-400">Soundarya</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light">
            Python Fullstack Developer
          </p>
          
          {/* Professional Call to Action */}
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="mt-8 inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all"
          >
            Hire Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}