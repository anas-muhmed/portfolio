import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ZoeConnect case study | Muhammed Anas",
  description: "How Muhammed Anas co-built ZoeConnect at Camerin Innovate and developed the Drug Indenting workflow from requests to stock receipt.",
  alternates: { canonical: "https://www.anasdev.software/work/zoeconnect" },
  openGraph: {
    title: "ZoeConnect case study | Muhammed Anas",
    description: "A hospital platform co-built with Vignesh at Camerin Innovate. See the pharmacy workflow Anas built.",
    url: "https://www.anasdev.software/work/zoeconnect",
  },
};

const contributions = [
  ["Request, comparison and approval", "Built screens and backend logic to submit medication requests, compare options and route requests through review and approval."],
  ["Order and receipt tracking", "Added per-item ordering and inventory receipt so teams can record partial deliveries and see what is outstanding."],
  ["Database and integration work", "Integrated Drug Indenting into ZoeConnect and added database records for each medication’s order and receipt state."],
];

export default function ZoeConnectCaseStudy() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header>
        <Link className="brand" href="/">anas<i>.</i><span> / software engineer</span></Link>
        <nav aria-label="Case study navigation">
          <Link href="/#work">Selected work</Link>
          <Link className="nav-cta" href="/#contact">Discuss a project ↗</Link>
        </nav>
      </header>
      <main id="main" className="shell case-study">
        <div className="case-intro">
          <p className="label">CASE STUDY / CAMERIN INNOVATE</p>
          <h1>ZoeConnect</h1>
          <p className="case-lead">When a pharmacy order arrives in parts, staff can see exactly what’s still due.</p>
          <p>I co-built ZoeConnect with Vignesh at Camerin Innovate. I built Drug Indenting across the UI, APIs, and database.</p>
          <dl className="case-facts">
            <div><dt>Platform adoption</dt><dd>10+ hospital clients</dd></div>
            <div><dt>Engineering team</dt><dd>Muhammed Anas & Vignesh</dd></div>
            <div><dt>My contribution</dt><dd>Drug Indenting · UI, APIs & database</dd></div>
          </dl>
        </div>
        <div className="case-example">
          <p className="label">EXAMPLE PHARMACY ORDER</p>
          <dl aria-label="Illustrative quantities">
            <div><dt>Ordered</dt><dd>100 units</dd></div>
            <div><dt>Received</dt><dd>60 units</dd></div>
            <div><dt>Still due</dt><dd>40 units</dd></div>
          </dl>
          <p>Staff can record the 60 units that arrive and keep the remaining 40 visible on the same request.</p>
        </div>
        <ol className="case-flow" aria-label="Drug Indenting workflow">
          <li><strong>Request</strong><span>Submit medications and quantities.</span></li>
          <li><strong>Compare & approve</strong><span>Review supplier options and approve the request.</span></li>
          <li><strong>Order</strong><span>Track which items have been ordered.</span></li>
          <li><strong>Receive</strong><span>Record deliveries and see what’s outstanding.</span></li>
        </ol>
        <div className="case-body">
          <p className="label">DRUG INDENTING</p>
          <h2>What I built</h2>
          <div className="case-contributions">
            {contributions.map(([title, description]) => (
              <article key={title}><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
          <div className="case-actions">
            <Link className="button" href="/#contact">Discuss a similar project ↗</Link>
            <a className="text-link" href="https://zoeconnect.in/" target="_blank" rel="noreferrer">Visit the public product site ↗</a>
          </div>
        </div>
      </main>
    </>
  );
}
