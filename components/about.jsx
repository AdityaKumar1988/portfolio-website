"use client";

import { useEffect, useState, useRef } from "react";
import { ScrollReveal } from "./scroll-reveal";

export function About() {
  const [isMobile, setIsMobile] = useState(false);
  const imgRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleMouseMove = (e) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => setRotate({ x: 0, y: 0 });

  return (
    <section
      id="about"
      className="about-section"
      style={{
        minHeight: "100vh",
        padding: "5rem 9%",
        background: "linear-gradient(135deg, #0a0a1a 0%, #0d1b3e 50%, #0a0a1a 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "-10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      <ScrollReveal>
        <h2
          style={{
            fontSize: "3rem",
            color: "#e2e8f0",
            fontWeight: 800,
            textAlign: "center",
            marginBottom: "1rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          About{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #00e5ff, #6366f1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Me
          </span>
        </h2>
      </ScrollReveal>

      <div
        className="about-content"
        style={{
          display: "flex",
          gap: "4rem",
          flexWrap: "wrap",
          padding: "2rem 0",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {}
        <ScrollReveal delay={200}>
          <div
            className="about-image"
            style={{
              flex: "1 1 30rem",
              display: "flex",
              justifyContent: isMobile ? "center" : "flex-start",
              alignItems: "center",
              perspective: "1000px",
            }}
          >
            <div
              ref={imgRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                position: "relative",
                width: isMobile ? "82%" : "28rem",
                cursor: "pointer",
                transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transition: "transform 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67)",
                willChange: "transform",
                transformStyle: "preserve-3d",
                borderRadius: "1rem",
              }}
            >
              {}
              <div
                style={{
                  position: "absolute",
                  inset: "-8px",
                  background: "linear-gradient(45deg, #00e5ff, #6366f1)",
                  borderRadius: "1rem",
                  filter: "blur(20px)",
                  opacity: 0.35,
                  zIndex: 0,
                }}
              />

              {}
              <img
                src="/images/adi.jpeg"
                alt="Aditya Kumar Jha"
                className="grayscale-hover"
                style={{
                  width: "100%",
                  borderRadius: "1rem",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                  display: "block",
                  position: "relative",
                  zIndex: 1,
                  border: "2px solid rgba(0, 229, 255, 0.2)",
                }}
              />
            </div>
          </div>
        </ScrollReveal>

        {}
        <ScrollReveal delay={400}>
          <div
            className="about-text"
            style={{
              flex: "1 1 40rem",
              padding: "2.5rem",
              background: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(10px)",
              borderRadius: "2rem",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
            }}
          >
            <h3 style={{ color: "#f8fafc", fontSize: "2rem", fontWeight: 700 }}>
              Hello, I'm <span style={{ color: "#00e5ff" }}>Aditya</span>
            </h3>
            <p
              style={{
                fontSize: "1.2rem",
                background: "linear-gradient(90deg, #6366f1, #00e5ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 700,
                marginTop: "0.5rem",
              }}
            >
              AI & Machine Learning Developer
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                marginTop: "1.5rem",
                lineHeight: 1.8,
                color: "#94a3b8",
                fontWeight: 400,
              }}
            >
              I'm a Computer Science undergraduate at{" "}
              <span style={{ color: "#e2e8f0", fontWeight: 600 }}>VIT Vellore</span>,
              specializing in Artificial Intelligence and Machine Learning. I enjoy
              building AI-driven systems and data-driven solutions using machine
              learning techniques such as predictive modeling and feature engineering.
              <br />
              <br />
              Alongside AI, I develop scalable full-stack applications with the{" "}
              <span style={{ color: "#e2e8f0", fontWeight: 600 }}>MERN stack</span>,
              integrating intelligent models into real-world products. I'm passionate
              about solving complex problems through intelligent algorithms and modern
              web technologies.
            </p>

            {}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: "1.5rem",
                marginTop: "2rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ color: "#00e5ff", fontWeight: 800 }}>Email:</span>
                <span style={{ color: "#cbd5e1", fontSize: "0.9rem" }}>
                  adityakrjha1988@gmail.com
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ color: "#00e5ff", fontWeight: 800 }}>Place:</span>
                <span style={{ color: "#cbd5e1" }}>Dhanbad, Jharkhand, India</span>
              </div>
            </div>

            {}
            <div style={{ marginTop: "3rem" }}>
              <a
                href="https://drive.google.com/file/d/14smSSUkvloOVGJaQ1-svQlUbqy7J2MeX/view"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  padding: "1rem 2.5rem",
                  borderRadius: "999px",
                  color: "#0a0a1a",
                  background: "linear-gradient(90deg, #6366f1, #00e5ff)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  boxShadow: "0 10px 20px rgba(99,102,241,0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,229,255,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 10px 20px rgba(99,102,241,0.3)";
                }}
              >
                <i className="fas fa-file-download"></i>
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .about-content {
            flex-direction: column !important;
            gap: 2rem !important;
          }
          .about-image {
            flex: 1 1 100% !important;
            justify-content: center !important;
          }
          .about-text {
            flex: 1 1 100% !important;
            padding: 1.5rem !important;
          }
          .about-section {
            padding: 4rem 5% !important;
          }
        }
      `}</style>
    </section>
  );
}