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
      style={{ minHeight: "100vh", padding: "2rem 9%", background: "#f7f7f7" }}
    >
      <ScrollReveal>
        <h2
          style={{
            fontSize: "2.2rem",
            color: "rgb(32, 32, 32)",
            fontWeight: 800,
            textAlign: "center",
            textTransform: "capitalize",
          }}
        >
          About <span style={{ color: "rgb(115, 3, 167)" }}>Me</span>
        </h2>
      </ScrollReveal>

      <div
        style={{
          display: "flex",
          gap: "2.5rem",
          flexWrap: "wrap",
          padding: "3.5rem 1rem",
          alignItems: "center",
        }}
      >
        {/* IMAGE */}
        <ScrollReveal delay={200}>
          <div
            style={{
              flex: "1 1 36rem",
              display: "flex",
              justifyContent: isMobile ? "center" : "flex-start",
              perspective: "1000px",
            }}
          >
            <img
              ref={imgRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              src="/images/adi.jpeg"
              alt="Aditya Kumar Jha"
              className="grayscale-hover"
              style={{
                width: isMobile ? "82%" : "28rem",
                borderRadius: "1rem",
                boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
                cursor: "pointer",
                transition:
                  "transform 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67)",
                transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                willChange: "transform",
                transformStyle: "preserve-3d",
              }}
            />
          </div>
        </ScrollReveal>

        {/* CONTENT */}
        <ScrollReveal delay={400}>
          <div style={{ flex: "1 1 42rem", padding: "1rem" }}>
            <h3
              style={{ color: "#1b1b1b", fontSize: "1.8rem", fontWeight: 700 }}
            >
              {"I'm Aditya"}
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: "#020133",
                fontWeight: 600,
                marginTop: "0.8rem",
              }}
            >
              AI ML Developer
            </p>
            <p
              style={{
                fontSize: "1rem",
                marginTop: "1.3rem",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 600,
                lineHeight: 1.9,
                color: "#333",
              }}
            >
              I’m a Computer Science undergraduate at VIT Vellore, specializing in Artificial Intelligence and Machine Learning. I enjoy building AI-driven systems and data-driven solutions using machine learning techniques such as predictive modeling, feature engineering, and data analysis. Alongside AI, I develop scalable full-stack applications with the MERN stack, integrating intelligent models into real-world products. I’m passionate about solving complex problems through machine learning, intelligent algorithms, and modern web technologies, and I constantly explore new tools and ideas to improve my skills.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.8rem",
                marginTop: "1.6rem",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 600,
              }}
            >
              <p style={{ fontSize: "1rem", color: "#333" }}>
                <span style={{ color: "#011aff" }}>Email :</span>{" "}
                adityakrjha1988@gmail.com
              </p>
              <p style={{ fontSize: "1rem", color: "#333" }}>
                <span style={{ color: "#011aff" }}>Place :</span> Dhanbad,
                Jharkhand, India
              </p>
            </div>

            {/* UPDATED RESUME BUTTON */}
            {/* UPDATED RESUME BUTTON WITH COLOR OVER EFFECT */}
            <div style={{ marginTop: "3rem" }}>
              <a
                href="https://drive.google.com/file/d/14smSSUkvloOVGJaQ1-svQlUbqy7J2MeX/view"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "1rem 2.2rem",
                  borderRadius: "0.6rem",
                  color: "#fff",
                  background: "#2506ad", // Original Purple
                  boxShadow: "0px 6px 14px rgba(37, 6, 173, 0.4)",
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  textDecoration: "none",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)", // Smooth easing
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#011aff"; // Shifts to Electric Blue
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0px 10px 20px rgba(1, 26, 255, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#2506ad"; // Back to Original Purple
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0px 6px 14px rgba(37, 6, 173, 0.4)";
                }}
              >
                <i
                  className="fas fa-file-download"
                  style={{ fontSize: "1.1rem" }}
                ></i>
                <span>Resume</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
