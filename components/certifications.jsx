"use client"

import { useState, useEffect } from "react"
import { ScrollReveal } from "./scroll-reveal"

const certifications = [
  {
    id: 0,
    organization: "DeepLearning.AI | Coursera",
    role: "Supervised Machine Learning",
    period: "Feb 2026",
    description: "Hands-on training in supervised machine learning, focusing on regression and classification models, optimization techniques, and model evaluation.",
    link: "https://drive.google.com/file/d/1VMiSdoaEjrEWR6XHVi77xiq0eDVCSoe6/view?usp=sharing",
    topics: ["Regression", "Classification","Logistic Regression", "Python", "AI"],
    color: "#ff9f55",
  },
  {
    id: 1,
    organization: "GeeksforGeeks",
    role: "Full Stack Developer Bootcamp",
    period: "Issued",
    description: "Completed an end-to-end full stack program covering frontend, backend, databases, and core software development practices.",
    link: "https://drive.google.com/file/d/19E9R7E7QryCyYQ7Dcjz39VBgzWka5uub/view?usp=sharing",
    topics: ["Frontend", "Backend", "React", "Node.js","Express.js","MongoDB"],
    color: "#33bbcf",
  },
  {
    id: 2,
    organization: "Google Cloud | Simplilearn",
    role: "Introduction to Generative AI",
    period: "Feb 2026",
    description: "Learned the fundamentals of Generative AI, including foundation models, prompts, use cases, and real-world applications of generative models.",
    link: "https://drive.google.com/file/d/12jS0QfrhsiR1_CnQ0P4ofGV9gUxzZLvg/view?usp=sharing",
    topics: ["Generative AI", "Prompt Engineering", "Foundation Models"],
    color: "#9f55ff",
  },
  {
    id: 3,
    organization: "IBM Career Education Program",
    role: "Advanced Generative AI",
    period: "July 2026",
    description: "Completed IBM's Advanced Generative AI training program, covering advanced concepts and practical applications of generative AI.",
    link: "https://drive.google.com/file/d/1Dg4oDFg8M5uBtl5eU99vl0fD37Pk7TWn/view?usp=sharing",
    topics: ["Generative AI", "Prompt Engineering", "Large Language Models"],
    color: "#0f62fe",
  },
]

export function Certifications() {
  const [activeId, setActiveId] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768)
    checkScreen()
    window.addEventListener("resize", checkScreen)
    return () => window.removeEventListener("resize", checkScreen)
  }, [])

  const getCardStyle = (index) => {
    const offset = index - activeId
    const isActive = index === activeId

    const xOffset = isActive ? 0 : offset * (isMobile ? 25 : 55)
    const scale = isActive ? (isMobile ? 1.0 : 1.1) : (isMobile ? 0.95 : 0.9)
    const rotateY = isActive ? 0 : offset * -15
    const zIndex = isActive ? 10 : 10 - Math.abs(offset)
    const opacity = isActive ? 1 : 0.85
    const blur = isActive ? "0px" : "0.5px"

    return {
      transform: `perspective(1000px) translateX(${xOffset}%) scale(${scale}) rotateY(${rotateY}deg)`,
      zIndex: zIndex,
      opacity: opacity,
      filter: `blur(${blur})`,
      position: "relative",
      transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      boxShadow: isActive ? `0 25px 50px -12px ${certifications[index].color}60` : "0 10px 30px -10px rgba(0,0,0,0.3)",
      cursor: "pointer",
    }
  }

  return (
    <section
      id="certifications"
      style={{
        minHeight: "80vh",
        padding: isMobile ? "3rem 1rem" : "4rem 2rem",
        background: "linear-gradient(135deg, #0a0a1a 0%, #0d1b3e 50%, #0a0a1a 100%)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ScrollReveal>
        <h2
          style={{
            fontSize: isMobile ? "2rem" : "2.5rem",
            color: "#e2e8f0",
            fontWeight: 800,
            textAlign: "center",
            marginBottom: isMobile ? "2rem" : "3rem",
          }}
        >
          <span
            style={{
              background: "linear-gradient(90deg, #00e5ff, #6366f1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Certifications
          </span>
        </h2>
      </ScrollReveal>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
          height: isMobile ? "650px" : "500px",
          position: "relative",
        }}
      >
        {certifications.map((cert, index) => (
          <div
            key={cert.id}
            onMouseEnter={() => setActiveId(index)}
            style={{
              ...getCardStyle(index),
              position: "absolute",
              width: "100%",
              maxWidth: isMobile ? "90%" : "400px",
              background: "white",
              borderRadius: "20px",
              overflow: "hidden",
              border: index === activeId ? `2px solid ${cert.color}` : "1px solid #ddd",
            }}
          >
            <div style={{ height: "12px", background: cert.color }}></div>

            <div style={{ padding: isMobile ? "1.5rem" : "2.5rem 2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.2rem" }}>
                <i className="fas fa-certificate" style={{ color: cert.color, fontSize: isMobile ? "1.4rem" : "1.8rem" }} />
                <h3 style={{ margin: 0, fontSize: isMobile ? "0.9rem" : "1.1rem", fontWeight: "bold", color: "#555", textTransform: "uppercase", letterSpacing: "1px" }}>
                  {cert.organization}
                </h3>
              </div>

              <h2 style={{ fontSize: isMobile ? "1.2rem" : "1.4rem", fontWeight: "800", marginBottom: "0.5rem", color: "#1a1a1a", lineHeight: "1.2" }}>
                {cert.role}
              </h2>

              <p style={{ fontSize: isMobile ? "0.85rem" : "0.95rem", color: "#777", marginBottom: "1.2rem", fontWeight: "500" }}>
                {cert.period}
              </p>

              <p style={{ fontSize: isMobile ? "0.9rem" : "1rem", lineHeight: "1.6", color: "#444", marginBottom: "1.8rem" }}>
                {cert.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: isMobile ? "1.5rem" : "2rem" }}>
                {cert.topics.map((topic) => (
                  <span
                    key={topic}
                    style={{
                      background: `${cert.color}15`,
                      color: cert.color,
                      padding: isMobile ? "4px 10px" : "6px 14px",
                      borderRadius: "20px",
                      fontSize: isMobile ? "0.75rem" : "0.85rem",
                      fontWeight: "700",
                    }}
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: isMobile ? "10px 20px" : "12px 24px",
                  background: index === activeId ? "#020133" : "#ccc",
                  color: "white",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: isMobile ? "0.85rem" : "0.95rem",
                  transition: "all 0.3s",
                  opacity: index === activeId ? 1 : 0.5,
                  transform: index === activeId ? "translateY(0)" : "translateY(5px)",
                  boxShadow: index === activeId ? "0 4px 14px rgba(0,0,0,0.25)" : "none",
                }}
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "12px", marginTop: "1rem" }}>
        {certifications.map((_, index) => (
          <button
            key={index}
            onMouseEnter={() => setActiveId(index)}
            onClick={() => setActiveId(index)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              border: "none",
              background: index === activeId ? "rgb(115, 3, 167)" : "#ccc",
              cursor: "pointer",
              transition: "transform 0.3s, background 0.3s",
              transform: index === activeId ? "scale(1.3)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </section>
  )
}