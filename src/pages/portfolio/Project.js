import React, { useState, useEffect, useRef } from "react";
import "./project_style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Modal } from "react-bootstrap";
import { meta, projects } from "../../content_option";
import { Link, useParams } from "react-router-dom";

const LeaderRow = ({ label, value }) => (
  <div className="leader-row">
    <span className="label">{label}</span>
    <span className="dots" aria-hidden></span>
    <span className="value" style={{ whiteSpace: "pre-line", textAlign: "right" }}>{value}</span>
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

export const Project = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  const [showModal, setShowModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");
  const [selectedLink, setSelectedLink] = useState("");
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const zoomRef = useRef(1);
  const panRef = useRef({ x: 0, y: 0 });
  const [modalElement, setModalElement] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    zoomRef.current = zoom;
    panRef.current = pan;
  }, [zoom, pan]);

  useEffect(() => {
    if (!modalElement) return;
    const handleWheel = (e) => {
      e.preventDefault();
      const currentZoom = zoomRef.current;
      const currentPan = panRef.current;
      const rect = modalElement.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const mouseX = e.clientX - rect.left - centerX;
      const mouseY = e.clientY - rect.top - centerY;
      const delta = -Math.sign(e.deltaY) * 0.25;
      const newZoom = Math.min(Math.max(1, currentZoom + delta), 4);
      if (newZoom === 1) {
        setZoom(1);
        setPan({ x: 0, y: 0 });
        return;
      }
      const scaleRatio = newZoom / currentZoom;
      const newPanX = mouseX - (mouseX - currentPan.x) * scaleRatio;
      const newPanY = mouseY - (mouseY - currentPan.y) * scaleRatio;
      setZoom(newZoom);
      setPan({ x: newPanX, y: newPanY });
    };
    modalElement.addEventListener("wheel", handleWheel, { passive: false });
    return () => modalElement.removeEventListener("wheel", handleWheel);
  }, [modalElement]);

  if (!project) {
    return (
      <main className="sheet project-sheet">
        <p style={{ marginTop: 40 }}>Project not found.</p>
        <Link to="/" className="back-btn">[ ← Back ]</Link>
      </main>
    );
  }

  const handleClose = () => {
    setShowModal(false);
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setIsDragging(false);
    setSelectedLink("");
  };

  const handleShow = (data) => {
    setSelectedImg(data.img);
    setSelectedLink(data.link || "");
    setShowModal(true);
  };

  const handleMouseDown = (e) => {
    if (zoom <= 1) return;
    if (e.button !== 0 && e.button !== 1) return;
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    setPanStart({ x: pan.x, y: pan.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const deltaX = e.clientX - dragStart.x;
    const deltaY = e.clientY - dragStart.y;
    setPan({ x: panStart.x + deltaX, y: panStart.y + deltaY });
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{project.title} | {meta.title}</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <main className="sheet project-sheet">
        <SectionHead id="P" label={project.title} />

        {project.subtitle && project.subtitle.toLowerCase() !== "competition" && (
          <p className="project-subtitle" style={{ whiteSpace: "pre-line" }}>{project.subtitle}</p>
        )}

        <div className="project-hero">
          {project.video ? (
            <video
              width="100%"
              controls
              muted
              loop
              controlsList="nodownload"
              onContextMenu={(e) => e.preventDefault()}
            >
              <source src={process.env.PUBLIC_URL + project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={project.img}
              alt={project.title}
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
              decoding="async"
            />
          )}
        </div>

        <div className="leader-block project-meta">
          {project.time && <LeaderRow label="Time" value={project.time} />}
          {project.projectType && <LeaderRow label="Type" value={project.projectType} />}
          {project.location && <LeaderRow label="Location" value={project.location} />}
          {project.workType && <LeaderRow label="Work Type" value={project.workType} />}
        </div>

        <div className="project-description">
          {project.description.split(/\n\n+/).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <StarDivider />

        <ol className="project-gallery">
          {project.images.map((data, i) => (
            <li key={i} className="gallery-item" onClick={() => handleShow(data)}>
              <img
                src={data.img}
                alt={data.caption}
                className="clickable-image"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
                loading="lazy"
                decoding="async"
              />
              {data.caption && (
                <div className="gallery-caption">{data.caption}</div>
              )}
            </li>
          ))}
        </ol>

        <div className="divider-dashes" aria-hidden>{"- ".repeat(28)}</div>

        <Link to="/" className="back-btn">[ ← Back to Index ]</Link>
      </main>

      <Modal show={showModal} onHide={handleClose} size="xl" centered dialogClassName="modal-90w">
        <Modal.Body
          ref={setModalElement}
          className="text-center p-0 position-relative"
          style={{
            overflow: "hidden",
            height: "85vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "default",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onClick={(e) => {
            if (e.target.closest(".image-link-overlay") || e.target.tagName === "A") return;
            if (e.target.tagName === "IMG") return;
            if (zoom > 1) {
              const dist = Math.sqrt(
                Math.pow(e.clientX - dragStart.x, 2) + Math.pow(e.clientY - dragStart.y, 2)
              );
              if (dist > 10) return;
            }
            handleClose();
          }}
        >
          <div className="p-0 position-relative" style={{ display: "inline-block" }}>
            <img
              src={selectedImg}
              alt="Enlarged view"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
              style={{
                maxWidth: "100%",
                maxHeight: "85vh",
                width: "auto",
                height: "auto",
                transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                transition: isDragging ? "none" : "transform 0.1s ease-out",
                userSelect: "none",
                WebkitUserSelect: "none",
                display: "block",
              }}
            />
            {selectedLink && (
              <a
                href={selectedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="image-link-overlay"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  textDecoration: "none",
                  fontSize: "1.2rem",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                  transformOrigin: "center center",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
              >
                Visit Link
              </a>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </HelmetProvider>
  );
};
