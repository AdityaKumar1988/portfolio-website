"use client"

import { useState } from "react"
import { ScrollReveal } from "./scroll-reveal"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isHovered, setIsHovered] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:adityakrjha1988@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n${formData.message}`)}`
    window.open(mailtoLink)
  }

  const inputStyle = {
    width: "100%",
    height: "38px",
    outline: "none",
    padding: "0 10px 0 38px",
    fontSize: "0.85rem",
    fontFamily: "'Poppins', sans-serif",
    borderRadius: "6px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    background: "rgba(255, 255, 255, 0.05)",
    color: "#e2e8f0",
    textTransform: "none",
    transition: "all 0.3s ease",
  }

  const iconStyle = {
    position: "absolute",
    top: "50%",
    left: "12px",
    color: "#64748b",
    fontSize: "13px",
    pointerEvents: "none",
    transform: "translateY(-50%)",
  }

  return (
    <section
      id="contact"
      style={{
        background: "linear-gradient(135deg, #0a0a1a 0%, #0d1b3e 50%, #0a0a1a 100%)",
        padding: "3rem 5% 4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <ScrollReveal>
        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: 800,
            textAlign: "center",
            textTransform: "capitalize",
            marginBottom: "1rem",
            color: "#e2e8f0",
          }}
        >
          Get in{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #00e5ff, #6366f1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Touch
          </span>
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={200} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        {}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            maxWidth: "1000px",
            background: "rgba(255, 255, 255, 0.03)",
            borderRadius: "1rem",
            overflow: "hidden",
            boxShadow: isHovered
              ? "0 0 30px rgba(0, 229, 255, 0.25)"
              : "0 10px 30px rgba(0,0,0,0.4)",
            transform: isHovered ? "scale(1.01)" : "scale(1)",
            border: isHovered
              ? "1px solid rgba(0, 229, 255, 0.3)"
              : "1px solid rgba(255, 255, 255, 0.08)",
            transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          }}
        >

          {}
          <div
            className="hidden md:flex"
            style={{
              flex: "3.5",
              background: "linear-gradient(135deg, #6366f1 0%, #00e5ff 100%)",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.5rem",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.15)",
                borderRadius: "50%",
                padding: "1rem",
                marginBottom: "1rem",
                backdropFilter: "blur(5px)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              }}
            >
              <i className="fas fa-paper-plane" style={{ fontSize: "2rem", color: "#fff" }} />
            </div>
            <h3 style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "0.5rem" }}>Let's Chat!</h3>
            <p style={{ opacity: 0.9, fontSize: "0.85rem", lineHeight: "1.4", maxWidth: "220px" }}>
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          {}
          <div
            style={{
              flex: "6.5",
              padding: "1.5rem 2.5rem",
              background: "transparent",
            }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem",
              }}
            >
              <h3
                style={{
                  color: "#e2e8f0",
                  marginBottom: "0.2rem",
                  fontSize: "1.3rem",
                  fontWeight: "700",
                }}
              >
                Send a Message
              </h3>

              {}
              <div style={{ position: "relative" }}>
                <i className="fas fa-user" style={iconStyle} />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#00e5ff"
                    e.target.style.background = "rgba(0, 229, 255, 0.05)"
                    e.target.style.boxShadow = "0 0 0 2px rgba(0, 229, 255, 0.1)"
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.1)"
                    e.target.style.background = "rgba(255,255,255,0.05)"
                    e.target.style.boxShadow = "none"
                  }}
                />
              </div>

              {}
              <div style={{ position: "relative" }}>
                <i className="fas fa-envelope" style={iconStyle} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#00e5ff"
                    e.target.style.background = "rgba(0, 229, 255, 0.05)"
                    e.target.style.boxShadow = "0 0 0 2px rgba(0, 229, 255, 0.1)"
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.1)"
                    e.target.style.background = "rgba(255,255,255,0.05)"
                    e.target.style.boxShadow = "none"
                  }}
                />
              </div>

              {}
              <div style={{ position: "relative" }}>
                <i className="fas fa-phone" style={iconStyle} />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#00e5ff"
                    e.target.style.background = "rgba(0, 229, 255, 0.05)"
                    e.target.style.boxShadow = "0 0 0 2px rgba(0, 229, 255, 0.1)"
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.1)"
                    e.target.style.background = "rgba(255,255,255,0.05)"
                    e.target.style.boxShadow = "none"
                  }}
                />
              </div>

              {}
              <div style={{ position: "relative" }}>
                <i
                  className="fas fa-comment-dots"
                  style={{ ...iconStyle, top: "18px", transform: "none" }}
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={2}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    height: "auto",
                    paddingTop: "10px",
                    resize: "vertical",
                    minHeight: "80px",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#00e5ff"
                    e.target.style.background = "rgba(0, 229, 255, 0.05)"
                    e.target.style.boxShadow = "0 0 0 2px rgba(0, 229, 255, 0.1)"
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.1)"
                    e.target.style.background = "rgba(255,255,255,0.05)"
                    e.target.style.boxShadow = "none"
                  }}
                />
              </div>

              {}
              <div style={{ marginTop: "0.2rem" }}>
                <button
                  type="submit"
                  style={{
                    color: "#0a0a1a",
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    borderRadius: "50px",
                    padding: "8px 25px",
                    background: "linear-gradient(90deg, #00e5ff, #6366f1)",
                    boxShadow: "0px 4px 15px rgba(0, 229, 255, 0.3)",
                    transition: "all 0.3s ease",
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 700,
                    border: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)"
                    e.currentTarget.style.boxShadow = "0px 6px 20px rgba(0, 229, 255, 0.5)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = "0px 4px 15px rgba(0, 229, 255, 0.3)"
                  }}
                >
                  Submit
                  <i className="fas fa-paper-plane" style={{ fontSize: "0.8rem" }} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </ScrollReveal>

      <style jsx>{`
        input::placeholder,
        textarea::placeholder {
          color: #4a5568;
        }
        @media (max-width: 768px) {
          div[style*="flex-direction: row"] {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  )
}