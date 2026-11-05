import { useEffect, useRef, useState } from 'react';
import { motion, animate, useInView, useReducedMotion } from 'framer-motion';

const stats = [
  { to: 13, suffix: '+', label: 'Years total experience' },
  { to: 4, suffix: '', label: 'Years PCB testing' },
  { to: 9, suffix: '', label: 'Years data handling' },
  { to: 6, suffix: '', label: 'Months Python full stack' },
];

const timeline = [
  {
    period: 'Feb 2026 – Sep 2026',
    title: 'AI Python Full Stack Web Development',
    sub: 'Training',
    desc: 'Built full stack projects using Python, Flask, React and SQL.',
  },
  {
    period: '2017 – Present',
    title: 'Data Entry Operator',
    sub: 'Experience',
    desc: 'Accurate, deadline-driven handling of large volumes of data.',
  },
  {
    period: '2013 – 2017',
    title: 'PCB Testing',
    sub: 'Experience',
    desc: 'Fault finding, testing and debugging of electronic circuit boards.',
  },
  {
    period: '2013',
    title: 'B.E. Electronics & Communication Engineering',
    sub: 'Education',
    desc: 'Einstein College of Engineering',
  },
];

const skills = [
  'Python', 'Javascript', 'Flask', 'React', 'SQL', 'Tailwind CSS', 'Git & GitHub',];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function CountUp({ to, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, to]);

  return (
    <span ref={ref}>
      <span aria-hidden="true">{val}{suffix}</span>
      <span className="sr-only">{to}{suffix}</span>
    </span>
  );
}

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white md:px-10"
    >
      {/* soft background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl"
      />

      <motion.div
        variants={container}
        initial={reduce ? 'show' : 'hidden'}
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="relative mx-auto max-w-5xl"
      >
        <motion.div variants={item} className="mb-12 text-center">
          <h2 id="about-heading" className="text-4xl font-bold text-blue-400">
            About Me
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
        </motion.div>

        {/* Intro */}
        <motion.div
          variants={item}
          className="mb-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-colors duration-500 hover:border-blue-500/40"
        >
          <p className="text-lg leading-relaxed text-gray-300">
            I'm an Electronics &amp; Communication Engineering graduate with{' '}
            <strong className="text-white">13 years of work experience</strong>: 4 years in{' '}
            <strong className="text-white">PCB testing</strong> and 9 years in{' '}
            <strong className="text-white">data entry</strong>, where accuracy, fault-finding and
            attention to detail were part of my daily work.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-300">
            I always wanted to move into IT, so in 2026 I completed a{' '}
            <strong className="text-white">6-month AI Python Full Stack Web Development course</strong>{' '}
            and built projects with{' '}
            <strong className="text-white">Python, Flask, React and SQL</strong>. I'm now looking
            for a junior developer role where I can combine my testing mindset with my new
            development skills.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.ul
          variants={container}
          className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.li
              key={s.label}
              variants={item}
              whileHover={reduce ? undefined : { y: -6, scale: 1.03 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 text-center"
            >
              <p className="text-3xl font-extrabold text-blue-400">
                <CountUp to={s.to} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-sm text-gray-400">{s.label}</p>
            </motion.li>
          ))}
        </motion.ul>

        <div className="grid gap-10 md:grid-cols-5">
          {/* Timeline */}
          <motion.div variants={item} className="md:col-span-3">
            <h3 className="mb-6 text-2xl font-semibold text-blue-400">Journey</h3>
            <ol className="relative space-y-8 border-l border-blue-500/30 pl-6">
              {timeline.map((t) => (
                <motion.li key={t.title} variants={item} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-blue-500 ring-4 ring-blue-500/20"
                  />
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    {t.sub} · <time>{t.period}</time>
                  </p>
                  <h4 className="mt-1 text-lg font-semibold text-white">{t.title}</h4>
                  <p className="mt-1 text-gray-400">{t.desc}</p>
                </motion.li>
              ))}
            </ol>
          </motion.div>

          {/* Skills */}
          <motion.div variants={item} className="md:col-span-2">
            <h3 className="mb-6 text-2xl font-semibold text-blue-400">Skills</h3>
            <ul className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <motion.li
                  key={skill}
                  whileHover={reduce ? undefined : { scale: 1.08 }}
                  className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 transition-colors hover:bg-blue-500/20"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}