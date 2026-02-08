"use client"

import { useRef, useEffect } from "react"
import { ScrollReveal } from "./scroll-reveal"

const educationData = [
  {
    title: "Secondary School (Class X)",
    subtitle: "General Studies",
    institute: "DAV Public School, Koylanagar, Dhanbad",
    period: "Apr 2019 - Mar 2020",
    grade: "Grade: 89%",
    description: [
      "Completed Secondary School (Class X) with a solid academic foundation across Mathematics, Science, English, and Social Studies, supporting further growth in logical thinking and academics.",
    ],
    skills: [],
  },
  {
    title: "Senior Secondary (Class XII)",
    subtitle: "Science (PCM)",
    institute: "DAV Public School, Koylanagar, Dhanbad",
    period: "Apr 2020 - Jun 2022",
    grade: "Grade: 86%",
    description: [
      "Completed Senior Secondary Education (Class XII) in Science (Physics, Chemistry, Mathematics). Built a strong analytical and problem-solving mindset through rigorous academic training. Developed a passion for technology and programming, which led to pursuing a career in computer science.",
    ],
    skills: [], 
  },
  {
    title: "Bachelor of Technology (B.Tech)",
    subtitle: "Computer Science and Engineering (AI & ML)",
    institute: "Vellore Institute of Technology",
    period: "2023 - 2027",
    grade: "CGPA: 8.96",
    description: [
      "Pursuing B.Tech in Computer Science and Engineering with specialization in Artificial Intelligence & Machine Learning. Developing strong foundations in core CS subjects with hands-on exposure to real-world projects in machine learning and full stack development.",
    ],
    skills: ["Regression & Classification", "SQL", "Data Structures", "Java", "OOP", "Machine Learning", "Python", "React.js", "Supervised Learning"],
  },
]

export function Education() {
  const containerRef = useRef(null)
  const lineRef = useRef(null)

  // Scroll Animation Logic
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !lineRef.current) return

      const { top, height } = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      const scrollY = windowHeight / 2 - top
      let progress = (scrollY / height) * 100

      if (progress < 0) progress = 0
      if (progress > 100) progress = 100

      lineRef.current.style.height = `${progress}%`
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="education"
      style={{
        background: "#f7f7f7",
        minHeight: "100vh",
        padding: "4rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <ScrollReveal>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: 800,
            textAlign: "center",
            marginBottom: "4rem",
            color: "rgb(32, 32, 32)",
          }}
        >
          My <span style={{ color: "rgb(115,3,167)" }}>Education</span>
        </h2>
      </ScrollReveal>

      <div
        ref={containerRef}
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          padding: "2rem 0",
        }}
      >
        {/* ================= TIMELINE LINES ================= */}
        
        {/* 1. Static Background Line (Grey) */}
        <div
          className="timeline-line"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            width: "6px",
            background: "#ccc",
            borderRadius: "4px",
            zIndex: 0,
          }}
        />

        {/* 2. Moving Progress Line (Purple) */}
        <div
          ref={lineRef}
          className="timeline-line"
          style={{
            position: "absolute",
            top: 0,
            height: "0%",
            width: "6px",
            background: "rgb(115,3,167)",
            borderRadius: "4px",
            zIndex: 1,
            transition: "height 0.1s linear", 
            boxShadow: "0 0 15px rgba(115,3,167, 0.6)",
            willChange: "height",
          }}
        >
           {/* Pointer Head */}
           <div
             style={{
               position: "absolute",
               bottom: "-10px",
               left: "50%",
               transform: "translateX(-50%)",
               width: "20px",
               height: "20px",
               background: "#fff",
               border: "4px solid rgb(115,3,167)",
               borderRadius: "50%",
               boxShadow: "0 0 20px rgb(115,3,167)",
               zIndex: 5,
             }}
           />
        </div>

        {/* ================= EDUCATION ITEMS ================= */}
        <div style={{ position: "relative", zIndex: 2 }}>
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="timeline-item"
            >
              <div
                className="content-card"
                style={{
                  gridColumn: index % 2 === 0 ? "3" : "1",
                  justifySelf: index % 2 === 0 ? "start" : "end",
                  width: "100%",
                  maxWidth: "500px",
                }}
              >
                <ScrollReveal delay={index * 200}>
                  <div
                    style={{
                      background: "#fff",
                      borderRadius: "12px",
                      padding: "2rem",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                      border: "1px solid rgba(0,0,0,0.05)",
                      position: "relative",
                    }}
                    className="hover:shadow-xl transition-shadow duration-300"
                  >
                    {/* Header: Title & Grade */}
                    <div style={{ marginBottom: "1rem" }}>
                        <h3 style={{ fontSize: "1.3rem", fontWeight: "800", color: "#020133", lineHeight: "1.2" }}>
                            {edu.institute}
                        </h3>
                        <p style={{ fontSize: "1.1rem", color: "rgb(115,3,167)", fontWeight: "700", marginTop: "0.2rem" }}>
                             {edu.title}
                        </p>
                        <p style={{ fontSize: "0.95rem", color: "#555", fontWeight: "600" }}>
                             {edu.subtitle}
                        </p>
                    </div>

                    {/* Date & Grade Row */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", fontSize: "0.9rem", color: "#666", fontWeight: "500" }}>
                        <span>{edu.period}</span>
                        <span style={{ background: "#e5ecfb", color: "#020133", padding: "4px 10px", borderRadius: "20px", fontWeight: "700" }}>
                            {edu.grade}
                        </span>
                    </div>

                    {/* Description Bullet Points */}
                    <ul style={{ paddingLeft: "1.2rem", marginBottom: "1.2rem", color: "#444", fontSize: "0.95rem", lineHeight: "1.6" }}>
                        {edu.description.map((point, i) => (
                            <li key={i} style={{ marginBottom: "0.5rem" }}>{point}</li>
                        ))}
                    </ul>

                    {/* Skills Tags (Only shows if array is not empty) */}
                    {edu.skills.length > 0 && (
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "1rem", borderTop: "1px solid #eee", paddingTop: "1rem" }}>
                            {edu.skills.map((skill) => (
                                <span key={skill} style={{ 
                                    fontSize: "0.8rem", 
                                    background: "#f0f0f0", 
                                    padding: "4px 10px", 
                                    borderRadius: "4px", 
                                    color: "#333",
                                    fontWeight: "600"
                                }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    )}

                  </div>
                </ScrollReveal>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CSS STYLES ================= */}
      <style jsx>{`
        /* DESKTOP STYLES */
        .timeline-line {
            left: 50%;
            transform: translateX(-50%);
        }

        .timeline-item {
            display: grid;
            grid-template-columns: 1fr 80px 1fr;
            width: 100%;
            margin-bottom: 3rem;
            align-items: center;
        }

        /* MOBILE STYLES */
        @media (max-width: 768px) {
            .timeline-line {
                left: 30px;
                transform: none;
            }

            .timeline-item {
                display: flex;
                flex-direction: column;
                padding-left: 70px;
                padding-right: 20px;
                margin-bottom: 2.5rem;
            }

            .content-card {
                grid-column: auto !important;
                justify-self: auto !important;
                width: 100% !important;
                max-width: 100% !important;
            }
        }
      `}</style>
    </section>
  )
}