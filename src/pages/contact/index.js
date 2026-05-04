import React from "react";
import "./style.css";
import { contactConfig, socialprofils } from "../../content_option";

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

const DashDivider = () => (
  <div className="divider-dashes" aria-hidden>{"- ".repeat(28)}</div>
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

const year = new Date().getFullYear();

export const ContactUs = () => {
  return (
    <section id="contact" className="page-section contact-sheet">
      <SectionHead id="05" label="Contact" />

      <h2 className="contact-headline">
        Open to full-time roles,<br />
        collaborations + freelance work.
      </h2>

      <div className="leader-block contact-rows">
        <a className="leader-row leader-row--link" href={`mailto:${contactConfig.YOUR_EMAIL}`}>
          <span className="label">Email</span>
          <span className="dots" aria-hidden></span>
          <span className="value">Click to send →</span>
        </a>
        <a className="leader-row leader-row--link" href={`tel:${contactConfig.YOUR_FONE.replace(/\s+/g, "")}`}>
          <span className="label">Phone</span>
          <span className="dots" aria-hidden></span>
          <span className="value">Click to call →</span>
        </a>
        <LeaderRow
          label="LinkedIn"
          value="lkwn24 →"
          href={socialprofils.linkedin}
        />
        <LeaderRow
          label="GitHub"
          value="@karllamwn →"
          href={socialprofils.github}
        />
      </div>

      <DashDivider />

      <StarDivider />

      <div className="contact-barcode">
        <div className="barcode-bars" aria-hidden></div>
        <div className="barcode-text">UBC-KARLLAM-{year}-MARCH</div>
      </div>

      <h3 className="thank-you">Thank You for Visiting</h3>

      <div className="contact-copyright">
        &copy; {year} KARL LAM &mdash; ALL RIGHTS RESERVED
      </div>

      <DashDivider />

      <div className="contact-footer-bars" aria-hidden></div>
    </section>
  );
};
