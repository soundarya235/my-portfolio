import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-10 bg-slate-950">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto glass p-8 rounded-2xl border border-white/10 bg-white/5"
      >
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-400">Get In Touch</h2>
        
        <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
          {/* Replace this with your Access Key from web3forms.com */}
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
          
          <input 
            type="text" name="name" placeholder="Your Name" required
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-blue-500"
          />
          <input 
            type="email" name="email" placeholder="Your Email" required
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-blue-500"
          />
          <textarea 
            name="message" rows="4" placeholder="Your Message" required
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-blue-500"
          ></textarea>
          
          <button 
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}