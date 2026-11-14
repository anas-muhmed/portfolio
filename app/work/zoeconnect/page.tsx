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
  ["Database and integration work", "Integrated Drug Indenting into ZoeConnect and added database support for item-level ordering and inventory receipts."],
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
          <p className="case-lead">A modular healthcare platform, co-built by two engineers at Camerin Innovate.</p>
          <p>I co-built ZoeConnect with Vignesh at Camerin Innovate. The platform works alongside existing hospital systems. My work included Drug Indenting, which gives pharmacy teams a way to follow each medication request through approval, order and inventory receipt.</p>
          <dl className="case-facts">
            <div><dt>Platform adoption</dt><dd>10+ hospital clients</dd></div>
            <div><dt>Engineering team</dt><dd>Muhammed Anas & Vignesh</dd></div>
            <div><dt>My contribution</dt><dd>Drug Indenting · UI, APIs & database</dd></div>
          </dl>
        </div>
        <ol className="case-flow" aria-label="Drug Indenting workflow">
          <li><strong>Request</strong><span>Submit medications and quantities.</span></li>
          <li><strong>Compare & approve</strong><span>Review supplier options and approve the request.</span></li>
          <li><strong>Order</strong><span>Track which items have been ordered.</span></li>
          <li><strong>Receive</strong><span>Record deliveries and see what’s outstanding.</span></li>
        </ol>
        <div className="case-body">
          <p className="label">DRUG INDENTING</p>
          <h2>From a request to the stockroom</h2>
          <p>A request can contain multiple medications, and items may be ordered or delivered at different times. I built the workflow so teams can see each item’s status and keep pending quantities visible after a partial delivery.</p>
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
