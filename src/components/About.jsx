import SectionWrapper from './SectionWrapper'; // SectionWrapper-ai import pannunga

export default function About() {
  return (
    <SectionWrapper>
      <section id="about" className="py-20 px-10 text-white bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">About Me</h2>
          
          <div className="glass p-8 rounded-3xl border border-white/10 bg-white/5 mb-10 hover:border-blue-500/30 transition-colors duration-500">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am an Electronics & Communication Engineering graduate (2013) currently undergoing 
              intensive training in <b>AI Python Fullstack Development</b>. 
              I am focused on mastering the synergy between Python-based backend logic and modern 
              Frontend frameworks like React to build intelligent, user-centric web applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Current Training */}
            <div className="glass p-6 rounded-2xl border border-white/10 bg-white/5 hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Current Training</h3>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>AI Python Fullstack Course</li>
                <li>Focusing on MERN/Python Stack</li>
                <li>Hands-on Project Development</li>
              </ul>
            </div>

            {/* Education */}
            <div className="glass p-6 rounded-2xl border border-white/10 bg-white/5 hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Education</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="font-medium text-white">B.E. ECE | 2013</li>
                <li>Einstein College of Engineering</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}