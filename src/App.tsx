import { motion } from 'framer-motion';
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
  skills
} from './data/portfolio';

const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7 }
};

function Icon({ children }: { children: string }) {
  return <span className="icon" aria-hidden="true">{children}</span>;
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
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
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Vikash Yadav home">
          <span>{profile.initials}</span>
          <strong>Vikash Yadav</strong>
        </a>
        <div className="nav-links">
          {navigation.slice(1).map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
        </div>
      </nav>

      <header id="home" className="hero">
        <div className="grid-bg" />
        <div className="glow glow-a" />
        <div className="glow glow-b" />
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="eyebrow">Engineering Executive Portfolio</p>
          <h1>{profile.name}</h1>
          <h3>{profile.role}</h3>
          <p>{profile.summary}</p>
          <div className="hero-actions">
            <a className="button primary" href={profile.resume} target="_blank" rel="noreferrer">Download Profile</a>
            <a className="button" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="button" href={`mailto:${profile.email}`}>Contact</a>
          </div>
        </motion.div>
        <motion.div className="hero-card" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
          <img src={profile.photo} alt="Vikash Yadav" />
          <div className="status-card">
            <span className="pulse" />
            <div>
              <strong>Based in {profile.location}</strong>
              <p>Open to Engineering Leadership, AI Platforms & Mobility conversations.</p>
            </div>
          </div>
        </motion.div>
      </header>

      <Section id="impact" eyebrow="Impact Snapshot" title="Building products, platforms and engineering teams at scale.">
        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <motion.article {...fade} transition={{ duration: 0.6, delay: index * 0.04 }} className="metric-card" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="leadership" eyebrow="Leadership Operating Model" title="People, platforms, AI and business outcomes — aligned.">
        <div className="pillars-grid">
          {pillars.map((pillar, index) => (
            <motion.article {...fade} transition={{ duration: 0.6, delay: index * 0.05 }} className="glass-card" key={pillar.title}>
              <Icon>{['✦', '◈', '◎', '▣'][index]}</Icon>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="work" eyebrow="Featured Work" title="Selected platforms and product journeys.">
        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <motion.article {...fade} transition={{ duration: 0.65, delay: index * 0.04 }} className="project-card" key={project.name}>
              <div className="project-top">
                <span>{project.tag}</span>
                <Icon>↗</Icon>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="chips">
                {project.stack.map(item => <em key={item}>{item}</em>)}
              </div>
              <div className="outcome">{project.outcome}</div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="architecture" eyebrow="Architecture Thinking" title="From business problem to observable, AI-ready platforms.">
        <motion.div {...fade} className="architecture-card">
          {architectureFlow.map((step, index) => (
            <div className="flow-wrap" key={step}>
              <div className="flow-step">{step}</div>
              {index < architectureFlow.length - 1 && <span className="flow-arrow">→</span>}
            </div>
          ))}
        </motion.div>
        <div className="split-panel">
          <motion.article {...fade} className="panel-card">
            <h3>Galaxy 2.0 Telemetry Pattern</h3>
            <p>EventHub-first communication, ETL, observability, high-volume data pipelines and operational dashboards for connected mobility.</p>
          </motion.article>
          <motion.article {...fade} className="panel-card">
            <h3>Vimee Mobility SaaS Pattern</h3>
            <p>Driver app, guardian app, GPS ingestion, route/stop engine, ETA, role-based admin dashboard and AWS-ready backend.</p>
          </motion.article>
        </div>
      </Section>

      <Section id="journey" eyebrow="Career Journey" title="A progression from technical execution to engineering leadership.">
        <div className="timeline">
          {experience.map((item, index) => (
            <motion.article {...fade} transition={{ duration: 0.65, delay: index * 0.04 }} className="timeline-card" key={item.company}>
              <div className="timeline-marker" />
              <div>
                <p className="time-period">{item.period} · {item.location}</p>
                <h3>{item.company}</h3>
                <h4>{item.role}</h4>
                <ul>
                  {item.points.map(point => <li key={point}>{point}</li>)}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="ai" eyebrow="AI & GenAI" title="Practical AI adoption for engineering and enterprise platforms.">
        <div className="ai-layout">
          <motion.article {...fade} className="ai-card large">
            <h3>AI Operating Model</h3>
            <p>RAG systems, AI assistants, prompt strategy, vector search, guardrails, token governance, observability and role-based enterprise integration.</p>
          </motion.article>
          <motion.article {...fade} className="ai-card">
            <h3>Engineering Acceleration</h3>
            <p>Using AI to improve discovery, documentation, coding workflows, QA automation and support triage.</p>
          </motion.article>
          <motion.article {...fade} className="ai-card">
            <h3>Responsible Delivery</h3>
            <p>Security, privacy, human-in-loop review, metrics, fallback paths and governance for enterprise AI.</p>
          </motion.article>
        </div>
      </Section>

      <Section id="skills" eyebrow="Capabilities" title="A technology portfolio built around leadership, scale and execution.">
        <motion.div {...fade} className="skill-cloud">
          {skills.map(skill => <span key={skill}>{skill}</span>)}
        </motion.div>
      </Section>

      <Section id="principles" eyebrow="Leadership Philosophy" title="The principles behind how I lead and build.">
        <div className="principles-grid">
          {principles.map((principle, index) => (
            <motion.div {...fade} transition={{ duration: 0.6, delay: index * 0.04 }} className="principle" key={principle}>
              <strong>{String(index + 1).padStart(2, '0')}</strong>
              <p>{principle}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="education" eyebrow="Education" title="Formal learning that supports engineering leadership and data-driven strategy.">
        <motion.div {...fade} className="education-card">
          {education.map(item => <p key={item}>{item}</p>)}
        </motion.div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Let's build scalable products, AI platforms and high-performance teams.">
        <motion.div {...fade} className="contact-card">
          <div>
            <h3>Available for leadership conversations</h3>
            <p>Engineering leadership, AI platforms, mobility, SaaS, digital commerce, architecture reviews and product-scale execution.</p>
          </div>
          <div className="contact-actions">
            <a className="button primary" href={`mailto:${profile.email}`}>{profile.email}</a>
            <a className="button" href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
            <a className="button" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </motion.div>
      </Section>

      <footer>
        <p>© {new Date().getFullYear()} Vikash Yadav. Built with React, TypeScript and GitHub Pages.</p>
      </footer>
    </main>
  );
}

export default App;
