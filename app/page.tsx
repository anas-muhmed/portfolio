import Link from "next/link";
import PortfolioFilm from "./portfolio-film";

const gh = 'https://github.com/anas-muhmed';
const projects = [
 ['01','Mortuary','An operational hospital application where dependable records, usable workflows and responsive data access matter.','Independently developed this application at Camerin Innovate, working across its interface, backend and database.','Full-stack development / SQL / Performance troubleshooting'],
 ['02','CliniGrowth','Growth-chart workflows bringing application logic, data mapping and visual presentation together.','Independently developed this application at Camerin Innovate, including growth-chart logic and presentation.','Application logic / Data mapping / Chart interfaces']
];
const services = [
 ['01','Backend engineering','Build REST APIs, connect existing systems and turn multi-step business processes into usable software.','Node.js · NestJS · PostgreSQL · REST APIs'],
 ['02','Cloud deployment & CI/CD','Containerize an app, set up a Linux deployment or fix a failing build and release pipeline.','Docker Compose · Linux · Nginx · GitHub Actions'],
 ['03','Performance & reliability','Trace a slow query, reduce frontend payload or fix a recurring application bug.','React · Next.js · SQL · Performance profiling']
];
export default function Home(){return <>
<a className="skip" href="#main">Skip to content</a>
<header><a className="brand" href="#top">anas<i>.</i><span> / software engineer</span></a><nav aria-label="Main navigation"><a href="#work">Selected work</a><a href="#services">How I can help</a><a className="nav-cta" href="#contact">Discuss a project ↗</a></nav></header>
<main id="main">
<section id="top" className="hero hero-new">
  <div className="shell">
    <div className="eyebrow"><span className="dot" /> Available for freelance projects <span>Kochi, Kerala · India</span></div>
    <div className="hero-grid">
      <div className="hero-intro">
        <p className="label">MUHAMMED ANAS / SOFTWARE ENGINEER</p>
        <h1>Backend systems.<br /><em>Built to work.</em></h1>
        <p className="hero-copy">I build and fix workflow software, APIs, and cloud deployments. If a slow process or a failing release is holding you up, tell me where it breaks.</p>
        <div className="actions">
          <a className="button hero-primary" href="#contact">Discuss your project <span aria-hidden="true">↗</span></a>
          <a className="text-link" href="#work">See my work <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <Link className="workflow-preview" href="/work/zoeconnect">
        <div className="workflow-top"><span>FEATURED CASE STUDY</span><span aria-hidden="true">↗</span></div>
        <div className="workflow-stage" aria-hidden="true">
          <div className="workflow-grid" />
          <div className="workflow-deck workflow-deck-back" />
          <div className="workflow-deck workflow-deck-middle" />
          <div className="workflow-deck workflow-deck-front">
            <div className="workflow-sheet">
              <span className="workflow-kicker">ILLUSTRATIVE PHARMACY ORDER</span>
              <span className="workflow-order">Delivery in progress</span>
              <div className="workflow-meter"><span /><span /></div>
              <div className="workflow-counts">
                <span><strong>60</strong> received</span>
                <span><strong>40</strong> still due</span>
              </div>
            </div>
          </div>
        </div>
        <div className="workflow-bottom">
          <div><strong>ZoeConnect</strong><span>Hospital pharmacy workflows</span></div>
          <span className="workflow-link">Read case study <span aria-hidden="true">↗</span></span>
        </div>
      </Link>
    </div>
  </div>
</section>
<div className="trust shell">
  <span>Hospital deployments include</span><strong>MOSC, Kolencherry</strong><strong>Al Mass, Malappuram</strong><span className="employment">Delivered through Camerin Innovate</span>
</div>
<section id="work" className="shell">
  <div className="section-head"><div><p className="label">01 / SELECTED WORK</p><h2>See what I’ve built.</h2></div><p>Explore a hospital workflow I built in production and a deployment pipeline you can inspect on GitHub.</p></div>
  <div className="proof-grid">
    <article className="proof-card">
      <p className="label">ZoeConnect / Healthcare</p>
      <h3>Partial deliveries, fully tracked.</h3>
      <p>I built the pharmacy workflow across its interface, APIs, and database so staff can see what arrived and what’s still due.</p>
      <Link className="text-link" href="/work/zoeconnect">Read the case study ↗</Link>
    </article>
    <article className="proof-card" id="devconnect">
      <p className="label">DevConnect / Deployment</p>
      <h3>From a code push to AWS.</h3>
      <p>I built a GitHub Actions pipeline that tests the app, builds Docker images, and deploys to AWS. A failed test stops the release.</p>
      <a className="text-link" href={`${gh}/DevConnect/blob/main/.github/workflows/deploy.yml`} target="_blank" rel="noreferrer">Inspect the workflow ↗</a>
    </article>
  </div>
  <PortfolioFilm />
  <div className="projects">{projects.map(([n,title,desc,role,stack])=><article className="project" key={n}><span className="number">{n}</span><div><div className="tag">Healthcare application <span>Professional work</span></div><h3>{title}</h3><p>{desc}</p><details><summary>My contribution <span>+</span></summary><p>{role}</p><p className="stack">{stack}</p></details></div><aside><span className="pill"><span className="dot"/> In hospital use</span><small>Employer-owned software<br/>High-level description only</small></aside></article>)}</div><div className="supporting"><article><p className="label">PUBLIC ENGINEERING PROJECT</p><h3>BuildWise</h3><p>A system-design learning app with a Docker Compose deployment and a GitHub Actions workflow for a DigitalOcean VPS.</p><div className="links"><a href={`${gh}/BuildWise`} target="_blank" rel="noreferrer">Architecture & source ↗</a><a href={`${gh}/BuildWise/blob/master/.github/workflows/deploy.yml`} target="_blank" rel="noreferrer">Build and deploy workflow ↗</a></div></article></div></section>
<section id="services" className="dark"><div className="shell"><div className="section-head"><div><p className="label">02 / HOW I CAN HELP</p><h2>How I can help</h2></div><p>For teams that need an engineer to understand the application, make a focused change and explain what was delivered.</p></div><div className="service-grid">{services.map(([n,title,desc,stack])=><article key={n}><span className="number">{n}</span><h3>{title}</h3><p>{desc}</p><span className="stack">{stack}</span></article>)}</div></div></section>
<section className="shell" id="approach"><div className="section-head"><div><p className="label">03 / WORKING TOGETHER</p><h2>A clear start.<br/><em>A useful finish.</em></h2></div><p>Start with a short scope discussion, then agree a paid milestone. Implementation stays tied to a result we can check.</p></div><ol className="process">{[['Define the result','Agree the problem, access needed, deliverables, price and acceptance checks.'],['Build & verify','Implement the agreed change and check its behavior in an appropriate test environment.'],['Hand over clearly','Receive the changes, verification notes and setup or deployment instructions.']].map(([title,desc],i)=><li key={title}><span className="number">0{i+1}</span><h3>{title}</h3><p>{desc}</p></li>)}</ol></section>
<section id="about" className="about shell"><p className="label">THE ENGINEER BEHIND THE WORK</p><div><h2>I’m Anas.<br/>I care about the whole path.</h2><p>I’m a software engineer at Camerin Innovate in Kochi. I work on hospital applications and Go-based platform tooling. In my OpenTelemetry lab, I use Docker Compose and Kubernetes to practice deployment and observability.</p><p>For freelance work, I bring a practical approach: understand the existing system, keep the scope explicit and verify the change before calling it complete.</p><a className="text-link" href="/AnasResume.pdf" download>Download résumé ↗</a></div></section>
<section id="contact" className="contact"><div className="shell"><p className="label">04 / LET’S TALK ABOUT YOUR PROJECT</p><h2>What do you need<br/><em>shipped or fixed?</em></h2><p>Send what you’re trying to ship, what’s blocked, and what success looks like. I’ll suggest a first milestone if the project fits.</p><a className="button" href="mailto:anassafia.dev@gmail.com?subject=Project%20enquiry">Start a project conversation ↗</a><a className="email" href="mailto:anassafia.dev@gmail.com">anassafia.dev@gmail.com</a><div className="availability"><span className="dot"/><span>Available for scoped freelance projects.</span></div></div></section>
</main><footer className="shell"><a className="brand" href="#top">anas<i>.</i></a><span>Software that does useful work.</span><div><a href={gh} target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/anas-muhmed/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="#top">Back to top ↑</a></div><small>© {new Date().getFullYear()} Muhammed Anas</small></footer></>}
