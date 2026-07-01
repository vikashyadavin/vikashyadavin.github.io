import { motion } from "framer-motion";
import {
  architectureFlow,
  education,
  experience,
  featuredProjects,
  metrics,
  navigation,
  pillars,
  principles,
  profile,
  skills,
} from "./data/portfolio";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

function Icon({ children }: { children: string }) {
  return (
    <span className="icon" aria-hidden="true">
      {children}
    </span>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section">
      <motion.div {...fade} className="section-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </motion.div>
      {children}
    </section>
  );
}

function App() {
  return (
    <main className="site-shell">
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Vikash Yadav home">
          <span>{profile.initials}</span>
          <div>
            <strong>Vikash Yadav</strong>
            <small>Engineering Executive</small>
          </div>
        </a>
        <div className="nav-links">
          {navigation.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      <header id="home" className="hero">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">Engineering Executive</p>
          <h1>Leadership across engineering, platforms and AI.</h1>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <a
              className="button primary"
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
            <a className="button" href="#leadership">
              View Leadership
            </a>
            <a className="button" href={`mailto:${profile.email}`}>
              Contact
            </a>
          </div>
          <div className="hero-facts" aria-label="Executive highlights">
            <div>
              <strong>18+</strong>
              <span>Years leading engineering</span>
            </div>
            <div>
              <strong>AI</strong>
              <span>Enterprise GenAI and platforms</span>
            </div>
            <div>
              <strong>Scale</strong>
              <span>Mobility, SaaS and commerce</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-card"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <img src={profile.photo} alt="Portrait of Vikash Yadav" />
          <div className="status-card">
            <span className="pulse" />
            <div>
              <strong>Based in {profile.location}</strong>
              <p>
                Open to leadership conversations across AI platforms, enterprise
                architecture and product-scale execution.
              </p>
            </div>
          </div>
        </motion.div>
      </header>

      <Section
        id="leadership"
        eyebrow="Leadership"
        title="Building organizations, platforms and products with enduring clarity."
      >
        <div className="intro-grid">
          <motion.article {...fade} className="panel-card">
            <h3>Executive presence</h3>
            <p>
              I connect strategy, architecture and delivery so teams move with
              confidence from roadmap to launch.
            </p>
          </motion.article>
          <motion.article {...fade} className="panel-card">
            <h3>Operating model</h3>
            <p>
              My approach emphasizes strong engineering culture, thoughtful
              hiring, measurable execution and pragmatic technology choices.
            </p>
          </motion.article>
        </div>
        <div className="pillars-grid">
          {pillars.map((pillar, index) => (
            <motion.article
              {...fade}
              transition={{ duration: 0.6, delay: index * 0.04 }}
              className="glass-card"
              key={pillar.title}
            >
              <Icon>{["✦", "◈", "◎", "▣"][index]}</Icon>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section
        id="case-studies"
        eyebrow="Case Studies"
        title="Selected initiatives where architecture and leadership shaped business outcomes."
      >
        <div className="project-grid">
          {featuredProjects.slice(0, 4).map((project, index) => (
            <motion.article
              {...fade}
              transition={{ duration: 0.6, delay: index * 0.04 }}
              className="project-card"
              key={project.name}
            >
              <div className="project-top">
                <span>{project.tag}</span>
                <Icon>↗</Icon>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="chips">
                {project.stack.map((item) => (
                  <em key={item}>{item}</em>
                ))}
              </div>
              <div className="outcome">{project.outcome}</div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section
        id="ai"
        eyebrow="AI"
        title="Practical enterprise AI, grounded in governance and product value."
      >
        <div className="ai-layout">
          <motion.article {...fade} className="ai-card large">
            <h3>Platform strategy</h3>
            <p>
              Designing AI systems for enterprise adoption with RAG patterns,
              prompt strategy, guardrails, observability and role-based access.
            </p>
          </motion.article>
          <motion.article {...fade} className="ai-card">
            <h3>Engineering acceleration</h3>
            <p>
              Applying AI thoughtfully to improve discovery, documentation,
              delivery quality and knowledge-sharing across cross-functional
              teams.
            </p>
          </motion.article>
          <motion.article {...fade} className="ai-card">
            <h3>Responsible delivery</h3>
            <p>
              Aligning AI with business priorities, security and human review so
              adoption scales responsibly.
            </p>
          </motion.article>
        </div>
      </Section>

      <Section
        id="resume"
        eyebrow="Resume"
        title="A career built from technical depth to executive leadership."
      >
        <div className="resume-grid">
          <div className="timeline">
            {experience.map((item, index) => (
              <motion.article
                {...fade}
                transition={{ duration: 0.6, delay: index * 0.04 }}
                className="timeline-card"
                key={item.company}
              >
                <div className="timeline-marker" />
                <div>
                  <p className="time-period">
                    {item.period} · {item.location}
                  </p>
                  <h3>{item.company}</h3>
                  <h4>{item.role}</h4>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
          <aside className="side-stack">
            <motion.article {...fade} className="panel-card">
              <h3>Capabilities</h3>
              <div className="skill-cloud">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.article>
            <motion.article {...fade} className="panel-card">
              <h3>Leadership principles</h3>
              <div className="principles-list">
                {principles.map((principle) => (
                  <p key={principle}>{principle}</p>
                ))}
              </div>
            </motion.article>
            <motion.article {...fade} className="panel-card">
              <h3>Education</h3>
              {education.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </motion.article>
          </aside>
        </div>
      </Section>

      <Section
        id="contact"
        eyebrow="Contact"
        title="For leadership conversations, platform reviews or AI strategy discussions."
      >
        <motion.div {...fade} className="contact-card">
          <div>
            <h3>Available for executive conversations</h3>
            <p>
              Engineering leadership, platform strategy, AI transformation,
              mobility and SaaS delivery.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button primary" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a
              className="button"
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
            >
              {profile.phone}
            </a>
            <a
              className="button"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="button"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </Section>

      <footer>
        <p>
          © {new Date().getFullYear()} Vikash Yadav. Built for leadership,
          clarity and long-term impact.
        </p>
      </footer>
    </main>
  );
}

export default App;
