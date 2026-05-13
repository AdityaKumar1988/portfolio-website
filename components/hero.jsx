"use client"

import { useEffect, useState, useRef } from "react"

const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "AI/ML Enthusiast",
  "Problem Solver",
]


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
    icon: "fa-solid fa-code",
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
      radius: 200,
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

    const colors = [
      "rgba(0, 229, 255,",   
      "rgba(99, 102, 241,",  
      "rgba(139, 92, 246,",  
      "rgba(56, 189, 248,",  
    ]

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2.5 + 1
        this.baseX = this.x
        this.baseY = this.y
        this.speedX = (Math.random() * 1.2) - 0.6
        this.speedY = (Math.random() * 1.2) - 0.6
        this.opacity = Math.random() * 0.5 + 0.3
        this.density = Math.random() * 30 + 1
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.pulseSpeed = Math.random() * 0.02 + 0.005
        this.pulseOffset = Math.random() * Math.PI * 2
        this.pulseAmount = Math.random() * 0.4 + 0.1
      }

      update(time) {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height

        this.currentOpacity =
          this.opacity + Math.sin(time * this.pulseSpeed + this.pulseOffset) * this.pulseAmount

        if (mouse.x !== undefined && mouse.y !== undefined) {
          let dx = mouse.x - this.x
          let dy = mouse.y - this.y
          let distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance
            const forceDirectionY = dy / distance
            const force = (mouse.radius - distance) / mouse.radius
            const directionX = forceDirectionX * force * this.density * 2.5
            const directionY = forceDirectionY * force * this.density * 2.5
            this.x -= directionX
            this.y -= directionY
          }
        }
      }

      draw() {
        const alpha = Math.max(0.05, Math.min(1, this.currentOpacity))
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 4
        )
        gradient.addColorStop(0, `${this.color}${alpha})`)
        gradient.addColorStop(1, `${this.color}0)`)

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `${this.color}${Math.min(1, alpha + 0.3)})`
        ctx.fill()
      }
    }

    const initParticles = () => {
      particles = []
      const count = Math.floor((canvas.width * canvas.height) / 12000)
      for (let i = 0; i < Math.min(count, 100); i++) particles.push(new Particle())
    }
    initParticles()
    window.addEventListener("resize", initParticles)

    const connect = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.35
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            )
            gradient.addColorStop(0, `rgba(99, 102, 241, ${alpha})`)
            gradient.addColorStop(1, `rgba(0, 229, 255, ${alpha})`)

            ctx.strokeStyle = gradient
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    let time = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time++
      particles.forEach((p) => {
        p.update(time)
        p.draw()
      })
      connect()
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("resize", initParticles)
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
        background: "linear-gradient(135deg, #0a0a1a 0%, #0d1b3e 50%, #0a0a1a 100%)",
      }}
    >
      <Particles />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 60% 50%, rgba(99,102,241,0.08) 0%, transparent 70%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div
        className="hero-content"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
          zIndex: 1,
        }}
      >
        {}
        <div className="hero-text" style={{ flex: "1.2" }}>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 3.6rem)",
              fontWeight: 800,
              color: "#e2e8f0",
              lineHeight: 1.1,
              whiteSpace: "nowrap", 
            }}
            className="hero-heading"
          >
            Hi There,
            <br />
            I'm{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #00e5ff, #6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Aditya Kumar Jha
            </span>
          </h1>

          <p
            className="hero-subtitle"
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
              fontWeight: 600,
              margin: "1.5rem 0",
              color: "#94a3b8",
              display: "flex", 
              alignItems: "center",
              minHeight: "1.6em" 
            }}
          >
            I Am a&nbsp; 
            <span style={{ color: "#00e5ff" }}>{text}</span>
            <span
              style={{
                animation: "blink 1s infinite",
                color: "#00e5ff",
              }}
            >
              |
            </span>
          </p>

          <a
            href="#about"
            style={{
              display: "inline-block",
              padding: "0.85rem 2.1rem",
              borderRadius: "999px",
              background: "linear-gradient(90deg, #6366f1, #00e5ff)",
              color: "#fff",
              fontWeight: 700,
              textDecoration: "none",
              marginBottom: "2rem",
              boxShadow: "0 0 20px rgba(99,102,241,0.4)",
              transition: "box-shadow 0.3s ease, transform 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = "0 0 35px rgba(0,229,255,0.5)"
              e.currentTarget.style.transform = "translateY(-2px)"
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = "0 0 20px rgba(99,102,241,0.4)"
              e.currentTarget.style.transform = "translateY(0)"
            }}
          >
            About Me
          </a>

          <div className="social-links" style={{ display: "flex", gap: "1rem", marginTop: "10px" }}>
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
                  background: "rgba(255,255,255,0.05)",
                  color: "#00e5ff",
                  textDecoration: "none",
                  fontSize: "1.2rem",
                  transition: "transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease",
                  border: "1px solid rgba(0, 229, 255, 0.2)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)"
                  e.currentTarget.style.background = "rgba(0,229,255,0.15)"
                  e.currentTarget.style.boxShadow = "0 0 15px rgba(0,229,255,0.3)"
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)"
                  e.currentTarget.style.boxShadow = "none"
                }}
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>

        {}
        <div className="hero-image" style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <div
            style={{
              position: "relative",
              display: "inline-block",
            }}
          >
            {}
            <div
              style={{
                position: "absolute",
                inset: "-8px", 
                borderRadius: "50%",
                background: "linear-gradient(135deg, #6366f1, #00e5ff, #8b5cf6)",
                zIndex: 0,
                filter: "blur(4px)",
                animation: "spin 6s linear infinite",
              }}
            />
            {}
            <img
              src="/images/adi1.png"
              alt="Aditya Kumar Jha Logo"
              style={{
                position: "relative",
                zIndex: 1,
                width: "clamp(260px, 32vw, 380px)",
                borderRadius: "50%",
                border: "8px solid #0d1b3e", 
                display: "block",
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column-reverse !important;
            text-align: center;
            padding-top: 6rem !important;
            padding-bottom: 2rem !important;
            gap: 1rem !important;
          }
          .hero-text {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-subtitle {
            justify-content: center;
          }
          .social-links {
            justify-content: center;
          }
          .hero-image {
            justify-content: center !important;
            margin-bottom: 1rem;
            margin-top: 5rem;
          }
          .hero-heading {
            white-space: normal !important;
          }
        }
      `}</style>
    </section>
  )
}