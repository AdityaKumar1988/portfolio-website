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
    height: "38px", // Very compact height
    outline: "none",
    padding: "0 10px 0 38px",
    fontSize: "0.85rem",
    fontFamily: "'Poppins', sans-serif",
    borderRadius: "6px",
    border: "1px solid #e0e0e0",
    background: "#f8f9fa",
    textTransform: "none",
    transition: "all 0.3s ease",
  }

  const iconStyle = {
    position: "absolute",
    top: "50%",
    left: "12px",
    color: "#888",
    fontSize: "13px",
    pointerEvents: "none",
    transform: "translateY(-50%)",
  }

  return (
    <section
      id="contact"
      style={{
        background: "#f7f7f7",
        // Minimal vertical padding to fit viewport
        padding: "1.5rem 5%", 
        paddingBottom: "0.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ScrollReveal>
        <h2
          style={{
            fontSize: "1.8rem", // Slightly smaller header
            color: "rgb(32, 32, 32)",
            fontWeight: 800,
            textAlign: "center",
            textTransform: "capitalize",
            marginBottom: "1rem",
          }}
        >
          Get in <span style={{ color: "rgb(115, 3, 167)" }}>Touch</span>
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={200} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        {/* === UNIFIED WIDE CARD CONTAINER === */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            maxWidth: "1000px", // INCREASED WIDTH (Was 850px)
            background: "#fff",
            borderRadius: "1rem",
            overflow: "hidden",
            boxShadow: isHovered 
              ? "0 0 30px rgba(115, 3, 167, 0.4)" 
              : "0 10px 30px rgba(0,0,0,0.1)",
            transform: isHovered ? "scale(1.01)" : "scale(1)", // Subtle scale
            border: isHovered ? "2px solid rgba(115, 3, 167, 0.3)" : "2px solid transparent",
            transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          }}
        >
          
          {/* === LEFT SIDE: VISUAL === */}
          <div
            className="hidden md:flex"
            style={{
              flex: "3.5", // 35% width (slightly narrower to give form more space)
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.5rem", // Reduced padding
              color: "#fff",
              textAlign: "center",
            }}
          >
             <div style={{ 
                 background: "rgba(255,255,255,0.15)", 
                 borderRadius: "50%", 
                 padding: "1rem",
                 marginBottom: "1rem",
                 backdropFilter: "blur(5px)",
                 boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
             }}>
                <i className="fas fa-paper-plane" style={{ fontSize: "2rem", color: "#fff" }} />
             </div>
             <h3 style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "0.5rem" }}>Let's Chat!</h3>
             <p style={{ opacity: 0.9, fontSize: "0.85rem", lineHeight: "1.4", maxWidth: "220px" }}>
                 Whether you have a question or just want to say hi, I'll try my best to get back to you!
             </p>
          </div>

          {/* === RIGHT SIDE: FORM === */}
          <div
            style={{
              flex: "6.5", // 65% width (Wider form area)
              padding: "1.5rem 2.5rem", // Reduced vertical padding
              background: "#fff",
            }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem", // Tighter gap
              }}
            >
               <h3 style={{ color: "#333", marginBottom: "0.2rem", fontSize: "1.3rem", fontWeight: "700" }}>Send a Message</h3>
              
              {/* Name */}
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
                  onFocus={(e) => { e.target.style.borderColor = "rgb(115, 3, 167)"; e.target.style.background = "#fff"; }}
                  onBlur={(e) => { e.target.style.borderColor = "#e0e0e0"; e.target.style.background = "#f8f9fa"; }}
                />
              </div>

              {/* Email */}
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
                   onFocus={(e) => { e.target.style.borderColor = "rgb(115, 3, 167)"; e.target.style.background = "#fff"; }}
                   onBlur={(e) => { e.target.style.borderColor = "#e0e0e0"; e.target.style.background = "#f8f9fa"; }}
                />
              </div>

              {/* Phone */}
              <div style={{ position: "relative" }}>
                <i className="fas fa-phone" style={iconStyle} />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={inputStyle}
                   onFocus={(e) => { e.target.style.borderColor = "rgb(115, 3, 167)"; e.target.style.background = "#fff"; }}
                   onBlur={(e) => { e.target.style.borderColor = "#e0e0e0"; e.target.style.background = "#f8f9fa"; }}
                />
              </div>

              {/* Message */}
              <div style={{ position: "relative" }}>
                <i className="fas fa-comment-dots" style={{ ...iconStyle, top: "18px", transform: "none" }} />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={2} // Reduced rows significantly
                  required
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    height: "auto",
                    paddingTop: "10px",
                    resize: "vertical",
                    minHeight: "80px" // Very compact text area
                  }}
                   onFocus={(e) => { e.target.style.borderColor = "rgb(115, 3, 167)"; e.target.style.background = "#fff"; }}
                   onBlur={(e) => { e.target.style.borderColor = "#e0e0e0"; e.target.style.background = "#f8f9fa"; }}
                />
              </div>

              {/* Submit Button */}
              <div style={{ marginTop: "0.2rem" }}>
                <button
                  type="submit"
                  style={{
                    color: "#fff",
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    borderRadius: "50px",
                    padding: "8px 25px", // Smaller button
                    background: "rgb(115, 3, 167)",
                    boxShadow: "0px 4px 15px rgba(115, 3, 167, 0.4)",
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
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0px 6px 20px rgba(115, 3, 167, 0.6)";
                  }}
                  onMouseLeave={(e) => {
                     e.currentTarget.style.transform = "translateY(0)";
                     e.currentTarget.style.boxShadow = "0px 4px 15px rgba(115, 3, 167, 0.4)";
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
        @media (max-width: 768px) {
          /* On mobile, stack them vertically */
          div[style*="flex-direction: row"] {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  )
}