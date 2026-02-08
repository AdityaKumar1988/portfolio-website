"use client"

import { useEffect, useState } from "react"
import { ScrollReveal } from "./scroll-reveal"

export function About() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkScreen()
    window.addEventListener("resize", checkScreen)

    return () => window.removeEventListener("resize", checkScreen)
  }, [])

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        padding: "2rem 9%",
        background: "#f7f7f7",
      }}
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
            }}
          >
            <img
              src="/images/adi.jpeg"
              alt="Aditya Kumar Jha"
              className="grayscale-hover"
              style={{
                width: isMobile ? "82%" : "28rem",
                borderRadius: "1rem",
                boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
                cursor: "pointer",
              }}
            />
          </div>
        </ScrollReveal>

        {/* CONTENT */}
        <ScrollReveal delay={400}>
          <div
            style={{
              flex: "1 1 42rem",
              padding: "1rem",
            }}
          >
            <h3
              style={{
                color: "#1b1b1b",
                fontSize: "1.8rem",
                fontWeight: 700,
              }}
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
              Full Stack Developer
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
              I am a Computer Science undergraduate at VIT Vellore, specializing in
              Artificial Intelligence and Machine Learning. I love building clean,
              scalable web applications using the MERN stack and enjoy solving
              real-world problems through code. I’m always experimenting,
              learning, and pushing myself to the next level.
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
                <span style={{ color: "#011aff" }}>Place :</span>{" "}
                Dhanbad, Jharkhand, India
              </p>
            </div>

            <div style={{ marginTop: "3rem" }}>
              <a
                href="https://drive.google.com/file/d/1Ay9O3vIO70uuscQoJjEnWX3MEyNOh8sQ/view"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "1rem 2.2rem",
                  borderRadius: "0.6rem",
                  color: "#fff",
                  background: "#2506ad",
                  boxShadow: "0px 6px 14px rgba(48,68,247,0.6)",
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  textDecoration: "none",
                }}
              >
                Resume 
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
