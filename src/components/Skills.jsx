import { motion } from "framer-motion";
import SectionWrapper from './SectionWrapper';

export default function Skills() {
  const skillCategories = [
    { title: "Frontend", skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"] },
    { title: "Backend", skills: ["Python", "FastAPI", "Flask", "REST APIs"] },
    { title: "Database & Tools", skills: ["SQL", "PostgreSQL", "Git", "GitHub", "VS Code"] },
  ];

  // Animation variants (Staggering effect-kku)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <SectionWrapper>
      <section id="skills" className="py-20 px-10 bg-slate-900">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Technical Skills</h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((cat, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="glass p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-blue-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-white text-center">{cat.title}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {cat.skills.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-blue-950/50 border border-blue-500/30 rounded-lg text-blue-200 text-sm font-medium hover:bg-blue-600/20 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </SectionWrapper>
  );
}