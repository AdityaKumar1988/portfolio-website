"use client"

import { ScrollReveal } from "./scroll-reveal"

export function Experience() {
  const techStack = [
    "Retrieval-Augmented Generation (RAG)",
    "Semantic Search",
    "OCR",
    "Prompt Engineering",
    "Vector Search",
    "Document Intelligence",
    "Knowledge Retrieval",
    "LLMs",
  ]

  const responsibilities = [
    "Designed and deployed an Enterprise AI Knowledge Retrieval System using RAG for intelligent access to official organizational policies.",
    "Built an OCR-powered semantic document pipeline with vector retrieval and prompt engineering.",
    "Developed an enterprise conversational AI assistant, reducing manual document search from minutes to seconds.",
    "Improved knowledge accessibility through LLM-powered semantic search and document-grounded responses.",
    "Reduced employee information retrieval time from minutes to seconds using RAG-based search."
  ]

  return (
    <section
      id="experience"
      style={{
        background: "linear-gradient(135deg, #0a0a1a 0%, #0d1b3e 50%, #0a0a1a 100%)",
        padding: "3rem 1rem",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ScrollReveal>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: 800,
              color: "#e2e8f0",
              marginBottom: "0.5rem",
            }}
          >
            Experience
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              fontWeight: 600,
              background: "linear-gradient(90deg, #00e5ff, #6366f1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Enterprise AI & Machine Learning Experience
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={200} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div
          className="experience-card"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            borderRadius: "20px",
            padding: "2.5rem",
            width: "100%",
            maxWidth: "1100px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
            position: "relative",
            transition: "transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease",
            cursor: "default",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)"
            e.currentTarget.style.boxShadow = "0 30px 60px rgba(0, 229, 255, 0.12)"
            e.currentTarget.style.borderColor = "rgba(0, 229, 255, 0.25)"
            e.currentTarget.style.background = "rgba(0, 229, 255, 0.02)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)"
            e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.4)"
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)"
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)"
          }}
        >
          <div className="experience-layout">
            <div className="experience-left">
              <h3 style={{ fontSize: "1.4rem", fontWeight: "800", color: "#e2e8f0", marginBottom: "0.3rem", lineHeight: "1.3" }}>
                AI/ML Intern – Systems Department
              </h3>
              
              <div style={{ fontSize: "1.05rem", fontWeight: "700", color: "#00e5ff", marginBottom: "1rem" }}>
                Bharat Coking Coal Limited (BCCL)
              </div>
              
              <div style={{
                display: "inline-block",
                background: "rgba(99, 102, 241, 0.15)",
                color: "#818cf8",
                padding: "6px 14px",
                borderRadius: "20px",
                fontWeight: "700",
                fontSize: "0.85rem",
                border: "1px solid rgba(99, 102, 241, 0.3)",
                marginBottom: "2rem"
              }}>
                May 2026 – July 2026
              </div>

              <div>
                <h4 style={{ fontSize: "0.85rem", fontWeight: "700", color: "#94a3b8", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Tech Stack
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: "0.75rem",
                        background: "rgba(99, 102, 241, 0.1)",
                        padding: "5px 12px",
                        borderRadius: "6px",
                        color: "#818cf8",
                        fontWeight: "600",
                        border: "1px solid rgba(99, 102, 241, 0.2)",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(99, 102, 241, 0.2)"
                        e.currentTarget.style.transform = "translateY(-1px)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(99, 102, 241, 0.1)"
                        e.currentTarget.style.transform = "translateY(0)"
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="experience-right">
              <p style={{
                fontSize: "0.95rem",
                lineHeight: "1.5",
                color: "#cbd5e1",
                fontWeight: "500",
                marginBottom: "1.5rem",
                background: "rgba(255,255,255,0.02)",
                padding: "1.2rem",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.05)"
              }}>
                Engineered an Enterprise AI Knowledge Retrieval System leveraging RAG, LLMs, OCR, and semantic search to deliver intelligent, document-grounded enterprise knowledge retrieval.
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {responsibilities.map((task, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.8rem" }}>
                    <div style={{
                      minWidth: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      background: "rgba(0, 229, 255, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "3px"
                    }}>
                      <i className="fas fa-check" style={{ fontSize: "0.55rem", color: "#00e5ff" }}></i>
                    </div>
                    <p style={{ fontSize: "0.9rem", color: "#94a3b8", lineHeight: "1.5", margin: 0 }}>
                      {task}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <style jsx>{`
        .experience-layout {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 3rem;
        }
        
        @media (max-width: 900px) {
          .experience-layout {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
        
        @media (max-width: 480px) {
          .experience-card {
            padding: 1.5rem !important;
          }
          .experience-layout {
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  )
}
