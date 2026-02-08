"use client"

import { useState, useEffect } from "react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Work", href: "#work" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("#home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Auto-detect active section based on scroll position
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

  return (
    <>
      <header
        className="navbar-header"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "65px",
          backgroundColor: "#fff",
          boxShadow: scrolled
            ? "0 2px 8px rgba(146, 161, 176, 0.4)"
            : "0 1px 4px rgba(146, 161, 176, 0.3)",
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            fontSize: "1.35rem",
            fontWeight: 800,
            color: "#fc8c05",
            textDecoration: "none",
            transition: "color 0.2s",
            flexShrink: 0,
            marginRight: "1rem",
            paddingLeft: "10px", // Safety padding for mobile
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "28px",
              height: "28px",
              background: "#002057",
              color: "#fc8c05",
              borderRadius: "4px",
              fontSize: "0.95rem",
              fontWeight: 900,
              lineHeight: 1,
            }}
          >
            A
          </span>
          <span className="logo-text">Aditya</span>
        </a>

        {/* Navigation - Always Visible */}
        <nav className="main-nav">
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              alignItems: "center",
              margin: 0,
              padding: 0,
            }}
          >
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <a
                  href={link.href}
                  onClick={() => setActiveSection(link.href)}
                  className="nav-link"
                  style={{
                    color: activeSection === link.href ? "#011aff" : "#0e2431",
                    fontWeight: 600,
                    textDecoration: "none",
                    letterSpacing: "0.02rem",
                    transition: "0.2s",
                    borderBottom:
                      activeSection === link.href
                        ? "2px solid #011aff"
                        : "2px solid transparent",
                    paddingBottom: "4px",
                    textTransform: "capitalize",
                    whiteSpace: "nowrap",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <style jsx>{`
        /* --- Responsive Styles --- */

        /* Header Padding */
        .navbar-header {
          padding: 0 2%; /* Default tight padding */
        }

        /* Nav Container: Allows horizontal scroll on mobile */
        .main-nav {
          display: flex;
          overflow-x: auto; /* Enables scroll if items overflow */
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none; /* Firefox: hide scrollbar */
          margin-left: auto;
          padding-right: 15px; /* Padding for end of scroll */
        }
        .main-nav::-webkit-scrollbar {
          display: none; /* Chrome/Safari: hide scrollbar */
        }

        /* Mobile View (Default) */
        .nav-item {
          margin-left: 1rem;
          flex-shrink: 0; /* Prevents items from squishing */
        }
        .nav-link {
          font-size: 0.8rem !important; /* Smaller text for mobile */
        }
        .logo-text {
          display: none; /* Hide name on small mobile to save space */
        }

        /* Desktop View (Screens wider than 768px) */
        @media (min-width: 768px) {
          .navbar-header {
            padding: 0 10%;
          }
          .nav-item {
            margin-left: 2.5rem;
          }
          .nav-link {
            font-size: 0.98rem !important;
          }
          .logo-text {
            display: inline;
          }
          .main-nav {
            overflow-x: visible; /* No scrolling needed on desktop */
          }
        }
      `}</style>
    </>
  )
}