import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { dataportfolio, projects } from "../../content_option";

const projectById = projects.reduce((acc, p) => {
  acc[p.id] = p;
  return acc;
}, {});

const categoryOf = (p) => {
  if (!p) return "Academic";
  const sub = (p.subtitle || "").toLowerCase();
  const type = (p.projectType || "").toLowerCase();
  const work = (p.workType || "").toLowerCase();
  if (sub.includes("competition") || type.includes("competition")) return "Competition";
  if (/aedas|alkf|atelier pacific|sensearchitects/.test(work)) return "Professional";
  if (work.includes("tutor:") || work.includes("individual work")) return "Academic";
  return "Academic";
};

const titleFor = (description) =>
  description.replace(/\s*\(\d{4}\)\s*$/, "").toUpperCase();

// Wrap CJK runs in <span class="cjk"> so they can be styled lighter.
const renderTitle = (text) => {
  const parts = text.split(/([　-鿿＀-￯]+)/);
  return parts.map((part, i) =>
    /[　-鿿＀-￯]/.test(part) ? (
      <span key={i} className="cjk">{part}</span>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
};

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

const CategorySection = ({ anchor, id, label, description }) => {
  const items = dataportfolio
    .map((d) => {
      const projectId = d.link.replace("/portfolio/", "");
      const p = projectById[projectId];
      return { ...d, project: p, category: categoryOf(p) };
    })
    .filter((d) => d.category === label);

  return (
    <section id={anchor} className="page-section category-sheet">
      <SectionHead id={id} label={label} />

      {description && <p className="category-desc">{description}</p>}

      <ol className="cat-list">
        {items.map((item, i) => {
          const num = String(i + 1).padStart(2, "0");
          const p = item.project;
          const city = (p?.location || "").split(",")[0].trim();
          const tags = [city, p?.date].filter(Boolean).join(" · ").toUpperCase();
          return (
            <li key={item.link} className="cat-item">
              <Link to={item.link}>
                <span className="c-num">[ {label[0]}{num} ]</span>
                <span className="c-title">{renderTitle(titleFor(item.description))}</span>
                <span className="c-tags">{tags}</span>
                <span className="c-action">[ + ]</span>
              </Link>
            </li>
          );
        })}
      </ol>

      <StarDivider />
    </section>
  );
};

export const Academic = () => (
  <CategorySection
    anchor="academic"
    id="02"
    label="Academic"
  />
);

export const Competition = () => (
  <CategorySection
    anchor="competition"
    id="03"
    label="Competition"
  />
);

export const Professional = () => (
  <CategorySection
    anchor="professional"
    id="04"
    label="Professional"
  />
);
