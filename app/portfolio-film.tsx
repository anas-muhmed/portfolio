"use client";

import { useState } from "react";

const film = "/films/show-me-the-problem-r7.mp4";
const coverFrames = [
  ["left", "hospital-left.webp"],
  ["right", "renovation-right.webp"],
  ["center", "checkout-mid.webp"],
];

export default function PortfolioFilm() {
  const [playing, setPlaying] = useState(false);

  return (
    <article id="film" className="portfolio-film" aria-labelledby="film-title">
      <div className="film-copy">
        <p className="label">FILM / SOFTWARE IN EVERYDAY LIFE</p>
        <h3 id="film-title">Show me<br /><em>the problem.</em></h3>
        <p className="film-description">
          A report that never loads. A checkout that won’t take an order. An enquiry answered too late.
          Three short stories about what slow or unreliable software costs the people who use it.
        </p>
        <a className="film-contact text-link" href="#contact">Tell me what’s slowing you down ↗</a>
      </div>
      <div className="film-view">
        {playing ? (
          <div className="film-player">
            <video
              ref={(element) => { element?.focus(); }}
              aria-label="Show me the problem, narrated film"
              controls
              autoPlay
              playsInline
              preload="none"
              poster="/films/checkout-mid.webp"
              width="540"
              height="960"
              onError={() => setPlaying(false)}
            >
              <source src={film} type="video/mp4" />
              <a href={film}>Open the MP4 directly</a>
            </video>
          </div>
        ) : (
          <button type="button" className="film-trigger" onClick={() => setPlaying(true)}>
            <span className="film-stage" aria-hidden="true">
              {coverFrames.map(([position, filename]) => (
                // The final-size WebP assets are already compressed.
                // eslint-disable-next-line @next/next/no-img-element
                <img key={position} className={`film-frame film-frame-${position}`} src={`/films/${filename}`} alt="" width={288} height={512} loading="lazy" decoding="async" />
              ))}
              <span className="film-play"><span /></span>
            </span>
            <span className="film-button-label">Play the film <span>1:48 · Narrated</span></span>
          </button>
        )}
        {playing && <a className="film-file" href={film}>Open video file ↗</a>}
      </div>
    </article>
  );
}
