import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { introdata, meta, dataportfolio, projects } from "../../content_option";

const projectById = projects.reduce((acc, p) => { acc[p.id] = p; return acc; }, {});

const categoryOf = (p) => {
  if (!p) return "Academic";
  const sub = (p.subtitle || "").toLowerCase();
  const type = (p.projectType || "").toLowerCase();
  const work = (p.workType || "").toLowerCase();
  if (sub.includes("competition") || type.includes("competition")) return "Competition";
  if (work.includes("tutor:") || work.includes("individual work")) return "Academic";
  if (/aedas|alkf|atelier pacific|sensearchitects/.test(work)) return "Professional";
  return "Academic";
};

const tagsFor = (link, fallbackTitle) => {
  const id = link.replace("/portfolio/", "");
  const p = projectById[id];
  if (!p) return fallbackTitle;
  const city = (p.location || "").split(",")[0].trim();
  return [categoryOf(p), city, p.date].filter(Boolean).join(" · ").toUpperCase();
};

const titleFor = (description) => description.replace(/\s*\(\d{4}\)\s*$/, "").toUpperCase();

export const Home = () => {
  const recent = dataportfolio.slice(0, 5);

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <main className="sheet home-sheet">
        <div className="section-marker">
          <span>S 01</span>
          <span>Statement</span>
        </div>

        <h1 className="home-title">
          {introdata.title}
        </h1>

        <p className="home-description">{introdata.description}</p>

        <div className="divider-stars" aria-hidden>
          {"* ".repeat(28)}
        </div>

        <div className="section-marker">
          <span>S 02</span>
          <span>Recent Work</span>
        </div>

        <ol className="recent-list">
          {recent.map((item, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <li key={item.link} className="recent-item">
                <Link to={item.link}>
                  <span className="r-num">[ A{num} ]</span>
                  <span className="r-title">{titleFor(item.description)}</span>
                  <span className="r-tags">{tagsFor(item.link, item.description)}</span>
                  <span className="r-action">[ + ]</span>
                </Link>
              </li>
            );
          })}
        </ol>

        <div className="divider-dashes" aria-hidden>
          {"- ".repeat(28)}
        </div>

        <div className="leader-row">
          <span className="label">Total Recent</span>
          <span className="dots" aria-hidden></span>
          <Link to="/portfolio" className="value">View All Projects &rarr;</Link>
        </div>

        <div className="divider-stars" aria-hidden>
          {"* ".repeat(28)}
        </div>
      </main>
    </HelmetProvider>
  );
};
