import React from "react";
import "./style.css";
import {
  dataabout,
  worktimeline,
} from "../../content_option";

// Renders items as flex children with leading " · " separators. Flex layout
// prevents adjacent items from merging on wrap, and justify-content:flex-end
// right-aligns each line.
const SepList = ({ items }) => (
  <span className="value-list">
    {items.map((item, i) => (
      <span key={i} className="value-item">
        {i > 0 && <span className="value-sep" aria-hidden>{" · "}</span>}
        {item}
      </span>
    ))}
  </span>
);

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
const secondarySkills = ["AutoCAD", "SketchUp", "Enscape", "V‑ray", "Premiere Pro"];

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
