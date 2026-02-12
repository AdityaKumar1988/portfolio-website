"use client"

import { useState } from "react"
import { ScrollReveal } from "./scroll-reveal"

const projects = [
  {
    title: "SchedulerSim",
    description:
      "A web-based CPU scheduling simulator that visualizes and analyzes Operating Systems scheduling algorithms with real-time Gantt chart visualization and automated computation.",
    tools: "Next.js, React, Tailwind CSS",
    websiteUrl: "https://cpu-scheduler-aditya.vercel.app/",
    githubUrl: "https://github.com/AdityaKumar1988",
    color: "#ffd900", // Yellow theme
  },
  {
    title: "AI Customer Support Intelligence Dashboard",
    description:
      "An AI-driven analytics dashboard deployed on Streamlit Cloud using Random Forest models. Features a dual ML pipeline for real-time ticket resolution prediction and interactive risk assessment, cutting assessment time by 57%.",
    tools: "Python, Scikit-learn, Pandas, Streamlit",
    websiteUrl: "https://customer-stress-predictor-aditya-kumar-jha.streamlit.app/",
    githubUrl: "https://github.com/AdityaKumar1988/customer-stress-predictor",
    color: "#00d4ff", // Blue theme
  },
]

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{
        position: "relative",
        width: "350px",
        height: "420px",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        background: `linear-gradient(135deg, ${project.color}15, ${project.color}30)`,
        cursor: "pointer",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ================= NORMAL STATE (Icon & Title) ================= */}
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          textAlign: "center",
          gap: "1.5rem",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: `0 4px 15px ${project.color}40`,
          }}
        >
          <i
            className="fas fa-laptop-code"
            style={{ fontSize: "2.5rem", color: project.color }}
          />
        </div>
        
        <h3 style={{ fontSize: "1.6rem", fontWeight: "800", color: "#333" }}>
          {project.title}
        </h3>
        
        <p style={{ fontSize: "0.9rem", color: "#666", fontWeight: "600" }}>
          Hover to view details
        </p>
      </div>

      {/* ================= HOVER OVERLAY (Details) ================= */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "#fff",
          padding: "1.5rem", // REDUCED PADDING
          display: "flex",
          flexDirection: "column",
          transform: hovered ? "translateY(0)" : "translateY(100%)", 
          transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
          zIndex: 10,
        }}
      >
        {/* Colored Header Stripe */}
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "6px",
                background: project.color
            }}
        />

        <h3 style={{ 
            fontSize: "1.3rem", // Slightly smaller
            fontWeight: "800", 
            color: "#222", 
            marginBottom: "0.5rem", 
            marginTop: "0.5rem" 
        }}>
          {project.title}
        </h3>

        {/* Scrollable Description Area */}
        <div style={{ flex: 1, overflowY: "auto", marginBottom: "1rem", paddingRight: "5px" }}>
            <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: "1.5" }}>
            {project.description}
            </p>
        </div>

        <div style={{ marginBottom: "1rem", flexShrink: 0 }}>
            <span style={{ fontSize: "0.8rem", fontWeight: "700", color: "#888", textTransform: "uppercase" }}>
                Tech Stack
            </span>
            <p style={{ fontSize: "0.9rem", color: "#333", fontWeight: "600", marginTop: "0.2rem" }}>
                {project.tools}
            </p>
        </div>

        {/* BUTTONS CONTAINER - Always Visible */}
        <div style={{ display: "flex", gap: "0.8rem", flexShrink: 0 }}>
          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                padding: "0.7rem",
                borderRadius: "6px",
                background: "#000",
                color: "#fff",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "0.85rem",
                textAlign: "center",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = project.color)}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#000")}
            >
              <i className="fas fa-external-link-alt" style={{ marginRight: "6px" }}/>
              Website
            </a>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              padding: "0.7rem",
              borderRadius: "6px",
              background: "#fff",
              color: "#000",
              border: "2px solid #000",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "0.85rem",
              textAlign: "center",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = "#000"
                e.currentTarget.style.color = "#fff"
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = "#fff"
                e.currentTarget.style.color = "#000"
            }}
          >
            <i className="fab fa-github" style={{ marginRight: "6px" }}/>
            Code
          </a>
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section
      id="work"
      style={{
        background: "#f7f7f7",
        padding: "4rem 2rem",
        minHeight: "100vh",
      }}
    >
      <ScrollReveal>
        <h2
          style={{
            fontSize: "2.5rem",
            color: "rgb(32, 32, 32)",
            fontWeight: 800,
            textAlign: "center",
            marginBottom: "3rem",
            textTransform: "capitalize",
          }}
        >
          Projects <span style={{ color: "rgb(115, 3, 167)" }}>Made</span>
        </h2>
      </ScrollReveal>

      {/* Projects Grid */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2.5rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {projects.map((project, index) => (
          <ScrollReveal key={project.title} delay={index * 200}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>

      {/* View All Button */}
      <ScrollReveal delay={400}>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}>
          <a
            href="https://github.com/AdityaKumar1988"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "1rem 2.5rem",
              borderRadius: "50px",
              background: "#020133",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "1rem",
              boxShadow: "0 10px 20px rgba(2, 1, 51, 0.2)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)"
                e.currentTarget.style.boxShadow = "0 15px 25px rgba(2, 1, 51, 0.3)"
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow = "0 10px 20px rgba(2, 1, 51, 0.2)"
            }}
          >
            <span>View All Projects</span>
            <i className="fas fa-arrow-right" />
          </a>
        </div>
      </ScrollReveal>
    </section>
  )
}