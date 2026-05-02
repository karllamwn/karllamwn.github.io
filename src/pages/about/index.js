import React, { useEffect, useRef } from "react";
import "./style.css";
import {
  dataabout,
  worktimeline,
} from "../../content_option";

// Renders items as flex children with leading " · " separators. Flex layout
// prevents adjacent items from merging on wrap, and justify-content:flex-end
// right-aligns each line. Pass "$break" as an item to insert a mobile-only
// flex break (forces a line break on small viewports). After layout, JS
// marks any item whose top differs from the previous one as .line-start so
// its leading separator can be hidden on mobile.
const SepList = ({ items }) => {
  const containerRef = useRef(null);
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    let scheduled = 0;
    const mark = () => {
      const itemEls = Array.from(root.querySelectorAll(".value-item"));
      itemEls.forEach((el) => el.classList.remove("line-start"));
      void root.offsetHeight;
      for (let i = 1; i < itemEls.length; i++) {
        const prev = itemEls[i - 1].getBoundingClientRect().top;
        const cur = itemEls[i].getBoundingClientRect().top;
        if (cur > prev + 1) itemEls[i].classList.add("line-start");
      }
    };
    const schedule = () => {
      if (scheduled) return;
      scheduled = requestAnimationFrame(() => {
        scheduled = 0;
        mark();
      });
    };
    schedule();
    window.addEventListener("resize", schedule);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(schedule);
    }
    return () => {
      if (scheduled) cancelAnimationFrame(scheduled);
      window.removeEventListener("resize", schedule);
    };
  }, [items]);
  let isFirstAfterBreak = false;
  return (
    <span className="value-list" ref={containerRef}>
      {items.map((item, i) => {
        if (item === "$break") {
          isFirstAfterBreak = true;
          return <span key={i} className="value-break-mobile" aria-hidden />;
        }
        const showLeadingSep = i > 0 && !isFirstAfterBreak;
        isFirstAfterBreak = false;
        return (
          <span key={i} className="value-item">
            {showLeadingSep && <span className="value-sep" aria-hidden>{" · "}</span>}
            {item}
          </span>
        );
      })}
    </span>
  );
};

const LeaderRow = ({ label, value, href }) => (
  <div className="leader-row">
    <span className="label">{label}</span>
    <span className="dots" aria-hidden></span>
    {href ? (
      <a className="value" href={href} target="_blank" rel="noreferrer">{value}</a>
    ) : (
      <span className="value">{value}</span>
    )}
  </div>
);

const SectionHead = ({ id, label }) => (
  <>
    <div className="section-head">
      <span className="sec-mark">&sect;</span>
      <span className="sec-id">{id}</span>
      <span className="sec-em">&mdash;</span>
      <span className="sec-label">{label}</span>
    </div>
    <div className="divider-dashes" aria-hidden>{"- ".repeat(28)}</div>
  </>
);

const StarDivider = () => (
  <div className="divider-stars" aria-hidden>{"* ".repeat(28)}</div>
);

const primarySkills = ["AI Workflow", "Rhino", "Grasshopper", "Revit", "Adobe Suite"];
const secondarySkills = ["AutoCAD", "SketchUp", "Enscape", "$break", "V‑ray", "Premiere Pro"];

const experienceFirmsList = worktimeline
  .map((w) => w.where.replace(/\s*\([^)]*\)\s*$/, "").trim())
  .filter((firm) => !/sensearchitects/i.test(firm));
// Internal spaces → NBSP so each firm name stays together on one line.
const experienceFirms = experienceFirmsList
  .map((firm) => firm.replace(/ /g, " "))
  .join(" · ");

export const About = () => (
  <section id="about" className="page-section about-sheet">
    <SectionHead id="01" label="About" />

    <div className="about-intro">
      <div className="about-photo-block">
        <img
          className="about-avatar"
          src={`${process.env.PUBLIC_URL}/image/Profile/me_avatar.png`}
          alt="Karl Lam pixel-art avatar"
        />
      </div>
      <div className="about-intro-content">
        <h1 className="about-name-title">Karl Lam</h1>
        <p className="about-bio">{dataabout.aboutme}</p>

        <div className="leader-block about-profile">
          <LeaderRow label="Master" value="UBC SALA, Vancouver" />
          <LeaderRow label="Bachelor" value="NCL SAPL, Newcastle" />
          <LeaderRow label="Skills" value={<SepList items={primarySkills} />} />
          <LeaderRow label="Also" value={<SepList items={secondarySkills} />} />
          {experienceFirmsList.length > 0 && (
            <LeaderRow
              label="Experience"
              value={<SepList items={experienceFirmsList.map((f) => f.replace(/ /g, " "))} />}
            />
          )}
        </div>
      </div>
    </div>

    <StarDivider />
  </section>
);
