"use client"

import { useEffect, useState, useRef } from "react"

const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "AI/ML Enthusiast",
  "Problem Solver",
]

// Social Media Data
const socialLinks = [
  {
    name: "LinkedIn",
    icon: "fa-brands fa-linkedin-in",
    url: "https://www.linkedin.com/in/aditya-kumar-jha-13661828a/",
    color: "#0077b5",
  },
  {
    name: "GitHub",
    icon: "fa-brands fa-github",
    url: "https://github.com/AdityaKumar1988",
    color: "#333",
  },
  {
    name: "Instagram",
    icon: "fa-brands fa-instagram",
    url: "https://www.instagram.com/perfect_adi/",
    color: "#e1306c",
  },
  {
    name: "LeetCode",
    icon: "fa-solid fa-code", // Using generic code icon as LeetCode isn't standard in all FA sets
    url: "https://leetcode.com/u/Aditya_kr_jha/",
    color: "#f79e1b",
  },
]

function Particles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")

    let particles = []
    let animationId
    
    let mouse = {
      x: undefined,
      y: undefined,
      radius: 180
    }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = canvas.parentElement.offsetHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const handleMouseMove = (event) => {
        const rect = canvas.getBoundingClientRect()
        mouse.x = event.clientX - rect.left
        mouse.y = event.clientY - rect.top
    }
    window.addEventListener("mousemove", handleMouseMove)
    
    const handleMouseLeave = () => {
        mouse.x = undefined
        mouse.y = undefined
    }
    window.addEventListener("mouseout", handleMouseLeave)

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 3
        
        this.speedX = (Math.random() * 2) - 1
        this.speedY = (Math.random() * 2) - 1
        
        this.opacity = Math.random() * 0.3 + 0.3
        this.density = (Math.random() * 30) + 1
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height

        if (mouse.x !== undefined && mouse.y !== undefined) {
            let dx = mouse.x - this.x
            let dy = mouse.y - this.y
            let distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < mouse.radius) {
                const forceDirectionX = dx / distance
                const forceDirectionY = dy / distance
                const force = (mouse.radius - distance) / mouse.radius
                
                const directionX = forceDirectionX * force * this.density * 3
                const directionY = forceDirectionY * force * this.density * 3
                
                this.x -= directionX
                this.y -= directionY
            }
        }
      }

      draw() {
        ctx.fillStyle = `rgba(0, 0, 0, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const initParticles = () => {
        particles = []
        for (let i = 0; i < 85; i++) particles.push(new Particle())
    }
    initParticles()

    const connect = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          
          if (dist < 120) {
            ctx.strokeStyle = `rgba(0, 0, 0, ${0.30 - dist / 600})`
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.update()
        p.draw()
      })
      connect()
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseout", handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100vw",
        height: "100%",
        zIndex: 0,
      }}
    />
  )
}

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100)
  }, [])

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const speed = isDeleting ? 40 : 80

    if (!isDeleting && text === currentRole) {
      setTimeout(() => setIsDeleting(true), 1600)
      return
    }

    if (isDeleting && text === "") {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
      return
    }

    const timeout = setTimeout(() => {
      setText(
        isDeleting
          ? currentRole.substring(0, text.length - 1)
          : currentRole.substring(0, text.length + 1)
      )
    }, speed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100vw",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Particles />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          padding: "0 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
          zIndex: 1,
        }}
      >
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: "3.6rem", fontWeight: 800, color: "#002057" }}>
            Hi There,<br />
            I'm <span style={{ color: "#ff7b00" }}>Aditya Kumar Jha</span>
          </h1>

          <p style={{ fontSize: "1.5rem", fontWeight: 600, margin: "1rem 0" }}>
            I Am a{" "}
            <span style={{ color: "rgb(148,8,8)" }}>{text}</span>
            <span style={{ animation: "blink 1s infinite" }}>|</span>
          </p>

          <a
            href="#about"
            style={{
              display: "inline-block",
              padding: "0.85rem 2.1rem",
              borderRadius: "999px",
              background: "#2506ad",
              color: "#f7f7f7",
              fontWeight: 700,
              textDecoration: "none",
              marginBottom: "2rem",
            }}
          >
            About Me 
          </a>

          {/* Social Media Buttons */}
          <div style={{ display: "flex", gap: "1rem", marginTop: "10px" }}>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  background: "#000010", // Dark background like the reference
                  color: "#00e5ff",      // Cyan/Blue icon color
                  textDecoration: "none",
                  fontSize: "1.2rem",
                  transition: "transform 0.3s ease, background 0.3s ease",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.background = "#1a1a2e";
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.background = "#000010";
                }}
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <img
            src="/images/adi1.png"
            alt="Aditya Kumar Jha Logo"
            style={{
              width: "clamp(300px, 38vw, 400px)",
              borderRadius: "50%",
              border: "6px solid #fff",
              boxShadow: "0 18px 45px rgba(0,0,0,0.25)",
            }}
          />
        </div>
      </div>
    </section>
  )
}