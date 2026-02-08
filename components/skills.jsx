"use client"

import { ScrollReveal } from "./scroll-reveal"

const skills = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
  { name: "DSA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/thealgorithms/thealgorithms-original.svg" },
]

export function Skills() {
  return (
    <section
      id="skills"
      style={{
        minHeight: "90vh",
        padding: "4rem 9%",
        background: "#f7f7f7", 
      }}
    >
      <ScrollReveal>
        <h2
          style={{
            fontSize: "2.5rem",
            color: "rgb(32, 32, 32)",
            fontWeight: 800,
            textAlign: "center",
            textTransform: "capitalize",
            marginBottom: "3rem",
          }}
        >
          Skills &{" "}
          <span style={{ color: "rgb(115, 3, 167)" }}>Abilities</span>
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div
          style={{
            background: "#fff",
            borderRadius: "1.5rem",
            padding: "2.5rem",
            width: "100%",
            maxWidth: "1100px",
            margin: "0 auto",
            boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
          }}
        >
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <ScrollReveal key={skill.name} delay={100 + index * 50}>
                <div
                  className="skill-card"
                  style={{
                    padding: "1.5rem 1rem",
                    borderRadius: "1rem",
                    background: "#fff",
                    border: "1px solid #eef2f6",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1rem",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.03)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)"
                    e.currentTarget.style.boxShadow = "0 10px 20px rgba(115, 3, 167, 0.2)"
                    e.currentTarget.style.borderColor = "transparent"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = "0 2px 5px rgba(0,0,0,0.03)"
                    e.currentTarget.style.borderColor = "#eef2f6"
                  }}
                >
                  <img
                    src={skill.icon || "/placeholder.svg"}
                    alt={skill.name}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "contain",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      fontFamily: "'Nunito', sans-serif",
                      color: "#333",
                    }}
                  >
                    {skill.name}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <style jsx>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
          }
        }
        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  )
}