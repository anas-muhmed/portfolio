"use client";

import Link from "next/link";
import { useState } from "react";

const ordered = 100;
const firstDelivery = 60;
const remaining = ordered - firstDelivery;

export default function PharmacyDemo() {
  const [complete, setComplete] = useState(false);
  const received = complete ? ordered : firstDelivery;

  return (
    <article id="demo" className="workflow-preview" aria-labelledby="demo-title">
      <div className="workflow-top">
        <div>
          <h2 id="demo-title">Try the pharmacy workflow</h2>
          <p>Sample order · 100 units</p>
        </div>
        <span className="workflow-index" aria-hidden="true">{complete ? "02" : "01"} / 02</span>
      </div>
      <div className="workflow-stage" data-complete={complete}>
        <div className="workflow-grid" aria-hidden="true" />
        <div className="workflow-deck workflow-deck-back" aria-hidden="true" />
        <div className="workflow-deck workflow-deck-middle" aria-hidden="true" />
        <div className="workflow-deck workflow-deck-front">
          <div className="workflow-sheet" aria-live="polite" aria-atomic="true">
            <span className="workflow-kicker">STOCK RECEIPT</span>
            <span className="workflow-order">{complete ? "Order complete" : "Partial delivery"}</span>
            <div className="workflow-meter" aria-hidden="true"><span /></div>
            <div className="workflow-counts">
              <span><strong>{received}</strong> received</span>
              <span><strong>{ordered - received}</strong> still due</span>
            </div>
          </div>
        </div>
      </div>
      <div className="workflow-controls">
        <button type="button" onClick={() => setComplete(value => !value)}>
          {complete ? "Reset the example" : `Record remaining ${remaining} units`}
          <span aria-hidden="true">{complete ? "↺" : "+"}</span>
        </button>
        <Link className="workflow-link" href="/work/zoeconnect">ZoeConnect case study <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}
