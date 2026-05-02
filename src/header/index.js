import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logotext } from "../content_option";

const SCRAMBLE_CHARS = "!<>-_\\/[]{}—=+*^?#0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const randomChar = () =>
  SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];

const useScramble = (target) => {
  const ref = useRef(null);
  const frameRef = useRef(0);
  const queueRef = useRef([]);

  const reveal = () => {
    if (!ref.current) return;
    const node = ref.current;
    const original = node.dataset.original || target;
    const length = original.length;
    const queue = [];
    for (let i = 0; i < length; i++) {
      const from = node.textContent[i] || " ";
      const to = original[i];
      const start = Math.floor(Math.random() * 30);
      const end = start + Math.floor(Math.random() * 30) + 10;
      queue.push({ from, to, start, end, char: null });
    }
    queueRef.current = queue;
    cancelAnimationFrame(frameRef.current);
    let frame = 0;
    const tick = () => {
      let output = "";
      let complete = 0;
      const q = queueRef.current;
      for (let i = 0; i < q.length; i++) {
        const { from, to, start, end } = q[i];
        let char = q[i].char;
        if (frame >= end) {
          complete++;
          output += to;
        } else if (frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = to === " " ? " " : randomChar();
            q[i].char = char;
          }
          output += char;
        } else {
          output += from;
        }
      }
      if (ref.current) ref.current.textContent = output;
      if (complete === q.length) return;
      frame++;
      frameRef.current = requestAnimationFrame(tick);
    };
    tick();
  };

  useEffect(() => () => cancelAnimationFrame(frameRef.current), []);

  return { ref, reveal };
};

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "academic", label: "Academic" },
  { id: "competition", label: "Competition" },
  { id: "professional", label: "Professional" },
  { id: "contact", label: "Contact" },
];

const Headermain = () => {
  const [today, setToday] = useState("");
  const [activeId, setActiveId] = useState("about");
  const brandText = "LKWN";
  const { ref: brandRef, reveal: scramble } = useScramble(brandText);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      const hh = String(d.getHours()).padStart(2, "0");
      const mm = String(d.getMinutes()).padStart(2, "0");
      setToday(`${y}.${m}.${day} ${hh}:${mm}`);
    };
    tick();
    const id = setInterval(tick, 30 * 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") return;
    const sections = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [location.pathname]);

  const goTo = (e, id) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `/#${id}`);
    }
  };

  return (
    <header className="site-header">
      <div className="sheet header-inner">
        <div className="eyebrow">
          <span>Portfolio Receipt</span>
          <span className="right">{today}</span>
        </div>

        <Link
          to="/"
          className="brand-logo"
          aria-label={brandText}
          ref={brandRef}
          data-original={brandText}
          onMouseEnter={scramble}
        >
          {brandText}
        </Link>

        <div className="divider-dashes" aria-hidden>
          {"- ".repeat(28)}
        </div>

        <nav className="primary-nav">
          {SECTIONS.map((s, i) => (
            <React.Fragment key={s.id}>
              {i > 0 && <span className="sep">·</span>}
              <a
                href={`#${s.id}`}
                onClick={(e) => goTo(e, s.id)}
                className={activeId === s.id ? "active" : ""}
              >
                {s.label}
              </a>
            </React.Fragment>
          ))}
        </nav>

        <div className="divider-stars" aria-hidden>
          {"* ".repeat(28)}
        </div>
      </div>
    </header>
  );
};

export default Headermain;
