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
    color: "#ffd900",
  },
  {
    title: "AI Customer Support Dashboard",
    description:
      "An AI-driven analytics dashboard deployed on Streamlit Cloud using Random Forest models. Features a dual ML pipeline for real-time ticket resolution prediction and interactive risk assessment.",
    tools: "Python, Scikit-learn, Pandas, Streamlit",
    websiteUrl: "https://customer-stress-predictor-aditya-kumar-jha.streamlit.app/",
    githubUrl: "https://github.com/AdityaKumar1988/customer-stress-predictor",
    color: "#00d4ff",
  },
  {
    title: "Build-Nexus AI",
    description:
      "SmartBuild AI is an intelligent construction planning system that analyzes project inputs to generate optimized design options. It uses machine learning models and optimization techniques to estimate costs, evaluate risks, and support better project management.",
    tools: "JavaScript, Node.js, ML Models, Render, Numpy, Pandas, DEAP, Python, Scikit-learn, UptimeRobot",
    websiteUrl: "https://buildnexus-ai-adi.onrender.com",
    githubUrl: "https://github.com/AdityaKumar1988/BuildNexus-AI",
    color: "#ff4d4d",
  },
  {
    title: "Dynamic Cab Fare Calculator",
    description:
      "A full-stack ML project predicting and comparing ride fares across Ola, Uber, Rapido, and inDrive. Estimates prices dynamically based on traffic, time of day, and weather data.",
    tools: "Numpy, Pandas, FastApi, Hugging Face, Transformers, Scikit-learn, Python",
    websiteUrl: "https://dynamic-fare.vercel.app/",
    githubUrl: "https://github.com/AdityaKumar1988",
    color: "#a855f7",
  },
]

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{
        position: "relative",
        width: "320px",
        height: "440px",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
        background: `linear-gradient(135deg, ${project.color}18, ${project.color}35)`,
        border: `1px solid ${project.color}30`,
        cursor: "pointer",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {}
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
            background: "rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: `0 4px 15px ${project.color}40`,
            border: `1px solid ${project.color}50`,
          }}
        >
          <i
            className="fas fa-laptop-code"
            style={{ fontSize: "2.5rem", color: project.color }}
          />
        </div>

        <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#e2e8f0", lineHeight: "1.2" }}>
          {project.title}
        </h3>

        <p style={{ fontSize: "0.85rem", color: "#94a3b8", fontWeight: "600" }}>
          Hover to view details
        </p>
      </div>

      {}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(13, 27, 62, 0.97)",
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          transform: hovered ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
          zIndex: 10,
          border: `1px solid ${project.color}40`,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "4px",
            background: project.color,
          }}
        />

        <h3 style={{
          fontSize: "1.2rem",
          fontWeight: "800",
          color: "#e2e8f0",
          marginBottom: "0.5rem",
          marginTop: "0.5rem",
        }}>
          {project.title}
        </h3>

        <div style={{ flex: 1, overflowY: "auto", marginBottom: "1rem", paddingRight: "5px" }}>
          <p style={{ fontSize: "0.85rem", color: "#94a3b8", lineHeight: "1.5" }}>
            {project.description}
          </p>
        </div>

        <div style={{ marginBottom: "1rem", flexShrink: 0 }}>
          <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "#64748b", textTransform: "uppercase" }}>
            Tech Stack
          </span>
          <p style={{ fontSize: "0.85rem", color: "#cbd5e1", fontWeight: "600", marginTop: "0.2rem" }}>
            {project.tools}
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.6rem", flexShrink: 0 }}>
          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                padding: "0.6rem",
                borderRadius: "6px",
                background: project.color,
                color: "#0a0a1a",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "0.8rem",
                textAlign: "center",
                transition: "opacity 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Website
            </a>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              padding: "0.6rem",
              borderRadius: "6px",
              background: "transparent",
              color: "#e2e8f0",
              border: `2px solid rgba(255,255,255,0.2)`,
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "0.8rem",
              textAlign: "center",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)"
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent"
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"
            }}
          >
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
        background: "linear-gradient(135deg, #0a0a1a 0%, #0d1b3e 50%, #0a0a1a 100%)",
        padding: "4rem 1rem",
        minHeight: "100vh",
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
            marginBottom: "3rem",
            color: "#e2e8f0",
          }}
        >
          Projects{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #00e5ff, #6366f1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Made
          </span>
        </h2>
      </ScrollReveal>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {projects.map((project, index) => (
          <ScrollReveal key={project.title} delay={index * 150}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>

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
              background: "linear-gradient(90deg, #6366f1, #00e5ff)",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "700",
              boxShadow: "0 10px 20px rgba(99, 102, 241, 0.3)",
              transition: "transform 0.3s, box-shadow 0.3s",
              fontSize: "0.95rem",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)"
              e.currentTarget.style.boxShadow = "0 15px 30px rgba(99, 102, 241, 0.5)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(99, 102, 241, 0.3)"
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