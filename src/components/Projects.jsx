import { motion, useReducedMotion } from "framer-motion";

const base = import.meta.env.BASE_URL;

// ✅ Featured: unga biggest full stack projects
const featured = [
  {
    title: "AI Developer Workspace",
    type: "Training project · 2026",
    image: `${base}projects/ai-workspace.png`,
    problem:
      "Developers code write, analyze, debug and document panna oru AI-powered workspace.",
    highlights: [
      "JWT authentication (email login) with token auto-refresh",
      "Project and multi-file code workspace with version history",
      "AI features: explain code, find bugs, optimize, generate docs (Gemini API)",
      "Admin panel with usage stats, plus project sharing and comments",
      "Secured APIs: ownership checks and role-based permissions",
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Django REST", "MySQL", "Gemini API", "JWT"],
    live: "https://ai-code-workspace.vercel.app",
    github: "https://github.com/soundarya235/ai_code_workspace",
  },
  {
    title: "Event Management System",
    type: "Training project · 2026",
    image: `${base}projects/event-management.png`,
    problem:
      "Events create panni, users bookings pannura full stack app, admin panel-oda.",
    highlights: [
      "Role-based access: user and admin, token-based authentication",
      "Event, booking and user management with REST APIs",
      "Image upload support for events",
      "Password hashing and protected routes",
    ],
    tech: ["React", "Tailwind CSS", "Flask", "SQLite"],
    live: "https://smart-event-management-beta.vercel.app",
    github: "https://github.com/soundarya235/smart-event-management",
  },
];

// ✏️ Idhula irukkura description/tech unga project-oda match aagudha nu check pannunga.
// Thappa irundha maathunga, illa andha project-ai remove pannunga.
const more = [
  {
    title: "ShopEase Full Stack",
    type: "Training project · 2026",
    image: `${base}projects/shop-ease.png`,
    desc: "Online shopping app with a separate frontend and backend.", // ✏️ real features
    tech: ["React", "REST API"], // ✏️ real stack podunga (backend, database)
    live: "https://shop-ease-full-stack.vercel.app",
    github: "https://github.com/soundarya235/ShopEase-FullStack",
  },
  {
    title: "Invoice Generator",
    type: "Training project · 2026",
    image: `${base}projects/invoice-generator.png`,
    desc: "Generate and manage invoices for billing.", // ✏️ real features
    tech: ["React"], // ✏️ real stack podunga
    live: "https://invoice-generator-five-rho.vercel.app",
    github: "https://github.com/soundarya235/invoice-generator",
  },
];

const linkClass =
  "inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors";

function Tag({ children }) {
  return (
    <li className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">
      {children}
    </li>
  );
}

function Shot({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={(e) => {
        e.currentTarget.style.display = "none"; // screenshot illana image maraiyum
      }}
      className={`w-full bg-slate-800 object-cover object-top ${className}`}
    />
  );
}

function Links({ live, github }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className={`${linkClass} bg-blue-600 hover:bg-blue-700`}
        >
          Live Demo
        </a>
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className={`${linkClass} border border-white/20 hover:bg-white/10`}
        >
          GitHub
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  const reduce = useReducedMotion();
  const hover = reduce ? undefined : { y: -6 };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-slate-950 px-6 py-20 text-white md:px-10"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto max-w-6xl"
      >
        <h2
          id="projects-heading"
          className="mb-3 text-center text-4xl font-bold text-blue-400"
        >
          My Projects
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-gray-400">
          AI Python Full Stack training (Feb – Sep 2026) la naan build panna projects.
        </p>

        {/* Featured */}
        <h3 className="mb-6 text-2xl font-semibold">Featured Projects</h3>
        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          {featured.map((p) => (
            <motion.article
              key={p.title}
              whileHover={hover}
              className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <Shot src={p.image} alt={`${p.title} screenshot`} className="h-56" />
              <div className="flex flex-1 flex-col p-6">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  {p.type}
                </p>
                <h4 className="text-xl font-bold">{p.title}</h4>
                <p className="mt-2 text-sm text-gray-400">{p.problem}</p>

                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-300">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
                  {p.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </ul>

                <Links live={p.live} github={p.github} />
              </div>
            </motion.article>
          ))}
        </div>

        {/* More projects */}
        <h3 className="mb-6 text-2xl font-semibold">More Projects</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {more.map((p) => (
            <motion.article
              key={p.title}
              whileHover={hover}
              className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <Shot src={p.image} alt={`${p.title} screenshot`} className="h-44" />
              <div className="flex flex-1 flex-col p-5">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  {p.type}
                </p>
                <h4 className="text-lg font-bold">{p.title}</h4>
                <p className="mt-1 text-sm text-gray-400">{p.desc}</p>

                <ul className="mt-3 flex flex-wrap gap-2" aria-label="Tech stack">
                  {p.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </ul>

                <Links live={p.live} github={p.github} />
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}