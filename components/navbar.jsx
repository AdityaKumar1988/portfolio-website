"use client"

import { useState, useEffect } from "react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("#home")
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)

      const sections = navLinks.map((l) => l.href.replace("#", ""))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection("#" + sections[i])
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  useEffect(() => {
    if (!menuOpen) return
    const handleClickOutside = (e) => {
      if (!e.target.closest("header")) {
        setMenuOpen(false)
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [menuOpen])

  const scrollToSection = (e, href) => {
    e.preventDefault()
    setActiveSection(href)
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
          padding: scrolled ? "10px 1rem" : "18px 1rem",
          transition: "padding 0.4s ease",
          pointerEvents: "none",
        }}
      >
        <nav
          style={{
            pointerEvents: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "900px",
            height: "52px",
            padding: "0 8px 0 6px",
            borderRadius: "999px",
            background: scrolled
              ? "rgba(10, 10, 26, 0.85)"
              : "rgba(10, 10, 26, 0.55)",
            border: "1px solid rgba(0, 229, 255, 0.15)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: scrolled
              ? "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,229,255,0.08)"
              : "0 4px 20px rgba(0,0,0,0.2)",
            transition: "all 0.4s ease",
          }}
        >
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexShrink: 0,
              marginLeft: "4px",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "36px",
                height: "36px",
                flexShrink: 0,
              }}
            >
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="17" stroke="url(#logoGrad)" strokeWidth="1.5" fill="none" />
                <path d="M11 26 L18 10 L25 26" stroke="url(#logoGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <path d="M13.5 21 H22.5" stroke="url(#logoGrad)" strokeWidth="1.8" strokeLinecap="round" />
                <defs>
                  <linearGradient id="logoGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#00e5ff" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div style={{ lineHeight: 1 }}>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  background: "linear-gradient(90deg, #00e5ff, #818cf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textTransform: "uppercase",
                  display: "block",
                }}
              >
                Aditya
              </span>
              <span
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.25em",
                  color: "rgba(255,255,255,0.35)",
                  textTransform: "uppercase",
                  display: "block",
                  marginTop: "1px",
                }}
              >
                Portfolio
              </span>
            </div>
          </a>

          <ul
            className="desktop-nav"
            style={{
              listStyle: "none",
              display: "flex",
              alignItems: "center",
              margin: 0,
              padding: 0,
              gap: "2px",
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    style={{
                      display: "block",
                      fontSize: "12.5px",
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? "#00e5ff" : "rgba(255,255,255,0.6)",
                      textDecoration: "none",
                      padding: "6px 12px",
                      borderRadius: "999px",
                      background: isActive ? "rgba(0, 229, 255, 0.1)" : "transparent",
                      border: isActive ? "1px solid rgba(0,229,255,0.25)" : "1px solid transparent",
                      transition: "all 0.2s ease",
                      whiteSpace: "nowrap",
                      letterSpacing: "0.02em",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "rgba(255,255,255,0.9)"
                        e.currentTarget.style.background = "rgba(255,255,255,0.06)"
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "rgba(255,255,255,0.6)"
                        e.currentTarget.style.background = "transparent"
                      }
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <a
            href="https://drive.google.com/file/d/1tJ3J6tg-sBxbisfrsU0zgPeVfMsyYYxi/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
            style={{
              fontSize: "12px",
              fontWeight: 600,
              color: "#00e5ff",
              textDecoration: "none",
              padding: "7px 16px",
              borderRadius: "999px",
              border: "1px solid rgba(0,229,255,0.4)",
              background: "rgba(0,229,255,0.07)",
              letterSpacing: "0.05em",
              flexShrink: 0,
              transition: "all 0.2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0,229,255,0.18)"
              e.currentTarget.style.boxShadow = "0 0 16px rgba(0,229,255,0.25)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(0,229,255,0.07)"
              e.currentTarget.style.boxShadow = "none"
            }}
          >
            Resume ↗
          </a>

          <button
            className="hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "6px",
              flexDirection: "column",
              gap: "5px",
              marginLeft: "8px",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "20px",
                  height: "1.5px",
                  background: "#00e5ff",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                  transform:
                    menuOpen
                      ? i === 0
                        ? "translateY(6.5px) rotate(45deg)"
                        : i === 2
                          ? "translateY(-6.5px) rotate(-45deg)"
                          : "scaleX(0)"
                      : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </nav>

        {menuOpen && (
          <div
            className="mobile-menu"
            style={{
              position: "absolute",
              top: "calc(100% + 8px)",
              left: "1rem",
              right: "1rem",
              background: "rgba(10, 10, 26, 0.95)",
              border: "1px solid rgba(0,229,255,0.15)",
              borderRadius: "16px",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              pointerEvents: "auto",
              zIndex: 1001,
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  style={{
                    fontSize: "14px",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "#00e5ff" : "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    padding: "10px 16px",
                    borderRadius: "10px",
                    background: isActive ? "rgba(0,229,255,0.1)" : "transparent",
                    transition: "all 0.15s ease",
                    letterSpacing: "0.02em",
                    cursor: "pointer",
                  }}
                >
                  {link.label}
                </a>
              )
            })}
            <a
              href="https://drive.google.com/file/d/14smSSUkvloOVGJaQ1-svQlUbqy7J2MeX/view"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#00e5ff",
                textDecoration: "none",
                padding: "10px 16px",
                borderRadius: "10px",
                border: "1px solid rgba(0,229,255,0.3)",
                background: "rgba(0,229,255,0.07)",
                marginTop: "4px",
                textAlign: "center",
              }}
            >
              Resume ↗
            </a>
          </div>
        )}
      </header>

      <style jsx>{`
        .desktop-nav { display: flex !important; }
        .resume-btn { display: block !important; }
        .hamburger { display: none !important; }
 
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .resume-btn { display: none !important; }
          .hamburger { display: flex !important; }
          .mobile-menu { display: flex !important; }
        }
 
        @media (max-width: 900px) and (min-width: 769px) {
          .desktop-nav li a {
            padding: 6px 8px !important;
            font-size: 11.5px !important;
          }
        }
      `}</style>
    </>
  )
}