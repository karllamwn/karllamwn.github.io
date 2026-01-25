import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import "./project_style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { meta, projects } from "../../content_option";
import { Link, useParams } from "react-router-dom";

export const Project = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  // If project not found, redirect or show error (optional)
  if (!project) {
    return <div className="text-center mt-5">Project not found</div>;
  }

  const [showModal, setShowModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");
  const [selectedLink, setSelectedLink] = useState("");
  
  // Transform State
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const zoomRef = useRef(1);
  const panRef = useRef({ x: 0, y: 0 });

  const [modalElement, setModalElement] = useState(null);
  
  // Pan Interaction State
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });

  // Sync refs with state
  useEffect(() => {
      zoomRef.current = zoom;
      panRef.current = pan;
  }, [zoom, pan]);

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

  useEffect(() => {
    if (!modalElement) return;

    const handleWheel = (e) => {
        e.preventDefault();
        
        const currentZoom = zoomRef.current;
        const currentPan = panRef.current;
        const rect = modalElement.getBoundingClientRect();
        
        // Calculate mouse position relative to the container center
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

        // Calculate new pan to maintain the point under the mouse
        // Formula: NewPan = Mouse - (Mouse - OldPan) * (NewZoom / OldZoom)
        const scaleRatio = newZoom / currentZoom;
        const newPanX = mouseX - (mouseX - currentPan.x) * scaleRatio;
        const newPanY = mouseY - (mouseY - currentPan.y) * scaleRatio;

        setZoom(newZoom);
        setPan({ x: newPanX, y: newPanY });
    };

    modalElement.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
        modalElement.removeEventListener('wheel', handleWheel);
    };
  }, [modalElement]);

  const handleMouseDown = (e) => {
      if (zoom <= 1) return;
      
      // Allow middle mouse button (1) or left mouse button (0)
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
      
      setPan({
          x: panStart.x + deltaX,
          y: panStart.y + deltaY
      });
  };

  const handleMouseUp = () => {
      setIsDragging(false);
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {project.title} | {meta.title} </title>
          <meta name="description" content={project.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> {project.title} </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <div className="project-container">
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

            <Row className="project-details">
                <Col lg="4" className="project-meta">
                    <h5 style={{ whiteSpace: "pre-line" }}>{project.subtitle}</h5>
                    <div className="meta-info">
                        <strong>Time:</strong> <p>{project.time}</p>
                        <strong>Project Type:</strong> <p>{project.projectType}</p>
                        <strong>Location:</strong> <p>{project.location}</p>
                        <strong>Work Type:</strong> <p style={{ whiteSpace: "pre-line" }}>{project.workType}</p>
                    </div>
                </Col>
                <Col lg="8" className="project-description">
                    <p>{project.description}</p>
                </Col>
            </Row>

            <Row className="project-gallery">
                {project.images.map((data, i) => (
                    <Col md="6" lg="4" key={i}>
                        <div className="gallery-item" onClick={() => handleShow(data)}>
                            <img 
                                src={data.img} 
                                alt={data.caption} 
                                className="clickable-image"
                                onContextMenu={(e) => e.preventDefault()}
                                draggable="false"
                                loading="lazy"
                                decoding="async"
                            />
                            {data.caption && data.caption !== "" && (
                                <div className="content">
                                    <p>{data.caption}</p>
                                </div>
                            )}
                        </div>
                    </Col>
                ))}
            </Row>

            <div className="text-center">
                <Link to="/#portfolio" className="back-btn" onClick={() => {
                    const portfolioSection = document.getElementById('portfolio');
                    if (portfolioSection) {
                        portfolioSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }}>Back to Portfolio</Link>
            </div>
        </div>

        {/* Image Modal */}
        <Modal show={showModal} onHide={handleClose} size="xl" centered dialogClassName="modal-90w">
            <Modal.Body 
                ref={setModalElement}
                className="text-center p-0 position-relative" 
                style={{ 
                    overflow: 'hidden', 
                    height: '85vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onClick={(e) => {
                    if (e.target.closest('.image-link-overlay') || e.target.tagName === 'A') return;
                    if (e.target.tagName === 'IMG') return;
                    if (zoom > 1) {
                        const dist = Math.sqrt(Math.pow(e.clientX - dragStart.x, 2) + Math.pow(e.clientY - dragStart.y, 2));
                        if (dist > 10) return;
                    }
                    handleClose();
                }}
            >
                <div className="p-0 position-relative" style={{ display: 'inline-block' }}>
                    <img 
                        src={selectedImg} 
                        alt="Enlarged view" 
                        onContextMenu={(e) => e.preventDefault()}
                        draggable="false"
                        style={{ 
                            maxWidth: '100%', 
                            maxHeight: '85vh',
                            width: 'auto',
                            height: 'auto',
                            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                            transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                            userSelect: 'none',
                            WebkitUserSelect: 'none',
                            display: 'block'
                        }} 
                    />
                    {selectedLink && (
                        <a 
                            href={selectedLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="image-link-overlay"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                color: 'white',
                                textDecoration: 'none',
                                fontSize: '1.2rem',
                                opacity: 0,
                                transition: 'opacity 0.3s ease',
                                transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                                transformOrigin: 'center center'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                            onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                        >
                            Visit Link
                        </a>
                    )}
                </div>
            </Modal.Body>
        </Modal>

      </Container>
    </HelmetProvider>
  );
};
