import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { ArrowUpRight, Brain, Cloud, Code2, Github, Linkedin, Mail, Rocket, ShieldCheck, Users } from 'lucide-react';
import { education, experiences, profile, projects, skills } from './data/profile';
import './styles.css';

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' }, transition: { duration: 0.65 } };

function Section({ id, kicker, title, children }: { id: string; kicker: string; title: string; children: React.ReactNode }) {
  return <section id={id} className="section"><motion.div {...fade}><p className="kicker">{kicker}</p><h2>{title}</h2>{children}</motion.div></section>;
}

function App() {
  return <main>
    <nav className="nav"><b>VY</b><span><a href="#work">Work</a><a href="#journey">Journey</a><a href="#contact">Contact</a></span></nav>

    <header className="hero">
      <div className="orb orb1"/><div className="orb orb2"/>
      <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8}} className="hero-content">
        <p className="eyebrow">Engineering Executive Portfolio</p>
        <h1>{profile.name}</h1>
        <h3>{profile.title}</h3>
        <p className="summary">{profile.summary}</p>
        <div className="cta"><a className="button primary" href={`mailto:${profile.email}`}>Contact Me <Mail size={18}/></a><a className="button" href={profile.linkedin} target="_blank">LinkedIn <Linkedin size={18}/></a><a className="button" href={profile.github} target="_blank">GitHub <Github size={18}/></a></div>
      </motion.div>
      <div className="metric-grid">{profile.metrics.map(([n,l])=><motion.div {...fade} className="metric" key={l}><strong>{n}</strong><span>{l}</span></motion.div>)}</div>
    </header>

    <Section id="leadership" kicker="Leadership Snapshot" title="I build teams, platforms and execution systems.">
      <div className="pillars">
        <div><Users/><h4>People Leadership</h4><p>Hiring, mentoring, performance, delivery cadence and engineering culture.</p></div>
        <div><Cloud/><h4>Platform Architecture</h4><p>Cloud-native, event-driven, observable systems designed for scale.</p></div>
        <div><Brain/><h4>AI Transformation</h4><p>RAG, GenAI integrations, guardrails and enterprise AI adoption.</p></div>
        <div><Rocket/><h4>Product Ownership</h4><p>From strategy to architecture, execution, launch and business outcomes.</p></div>
      </div>
    </Section>

    <Section id="work" kicker="Featured Work" title="Selected platforms and products.">
      <div className="project-grid">{projects.map((p,i)=><motion.article {...fade} transition={{duration:.6,delay:i*.05}} className="card project" key={p.name}><span>{p.tag}</span><h3>{p.name}</h3><p>{p.description}</p><div className="chips">{p.stack.map(s=><em key={s}>{s}</em>)}</div></motion.article>)}</div>
    </Section>

    <Section id="architecture" kicker="Architecture Thinking" title="From idea to scalable operating platform.">
      <div className="pipeline">{['Business Problem','Product Strategy','Cloud Architecture','APIs & Events','Data & AI','Observability','Growth'].map((x,i)=><React.Fragment key={x}><div>{x}</div>{i<6 && <ArrowUpRight/>}</React.Fragment>)}</div>
    </Section>

    <Section id="journey" kicker="Career Journey" title="18+ years across engineering, architecture and leadership.">
      <div className="timeline">{experiences.map(e=><article className="time-card" key={e.company}><div><h3>{e.company}</h3><p>{e.role}</p><small>{e.period} · {e.location}</small></div><ul>{e.points.map(p=><li key={p}>{p}</li>)}</ul></article>)}</div>
    </Section>

    <Section id="ai" kicker="AI & GenAI" title="Enterprise AI should be useful, governed and measurable.">
      <div className="ai-grid"><div className="big-card"><Brain size={42}/><h3>AI Operating Model</h3><p>RAG systems, token governance, guardrails, vector search, AI-assisted engineering workflows and enterprise integrations.</p></div><div className="big-card"><ShieldCheck size={42}/><h3>Responsible Delivery</h3><p>Security, observability, data privacy, human-in-loop workflows and clear business success metrics.</p></div></div>
    </Section>

    <Section id="skills" kicker="Capability Map" title="Technology, leadership and domain depth.">
      <div className="skill-cloud">{skills.map(s=><span key={s}>{s}</span>)}</div>
    </Section>

    <Section id="education" kicker="Education" title="Continuous learning with data and engineering depth.">
      <div className="edu">{education.map(e=><p key={e}>{e}</p>)}</div>
    </Section>

    <Section id="contact" kicker="Contact" title="Let’s build something meaningful.">
      <div className="contact-card"><Code2/><p>Open to conversations around engineering leadership, AI platforms, mobility, SaaS, digital commerce and product-scale architecture.</p><div className="cta"><a className="button primary" href={`mailto:${profile.email}`}>{profile.email}</a><a className="button" href={profile.linkedin} target="_blank">LinkedIn</a></div></div>
    </Section>
  </main>;
}

createRoot(document.getElementById('root')!).render(<App />);
