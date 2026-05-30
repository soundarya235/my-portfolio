import { motion } from "framer-motion";

export default function Projects() {
  const projectList = [
    { title: "Building Construction", image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800", link: "#", desc: "Professional landing page." },
    { title: "Restaurant Website", image: "https://images.pexels.com/photos/6267/menu-restaurant-table-dinner.jpg?auto=compress&cs=tinysrgb&w=800", link: "#", desc: "Elegant food menu." },
    { title: "Aari Embroidery", image: "https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&w=800", link: "#", desc: "Intricate Aari work designs." },
    { title: "Fashion Store", image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800", link: "#", desc: "Modern fashion storefront." },
    { title: "Cosmetics Hub", image: "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=800", link: "#", desc: "Beauty and cosmetics display." },
    { title: "Billing System", image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800", link: "#", desc: "Functional billing interface." },
  ];

  return (
    <motion.section 
      id="projects" 
      className="py-20 px-10 bg-slate-950"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">My Projects</h2>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((proj, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.05 }}
            className="glass rounded-2xl border border-white/10 overflow-hidden bg-white/5"
          >
            <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover bg-gray-800" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{proj.desc}</p>
              <a href={proj.link} className="text-blue-400 font-semibold hover:underline">View Project →</a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}