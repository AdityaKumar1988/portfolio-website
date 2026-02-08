"use client"

export function Footer() {
  return (
    <footer
      style={{
        background: "rgb(0, 1, 43)",
        // UPDATED: Very tight padding to reduce height
        padding: "0.8rem 0", 
        width: "100%",
      }}
    >
      {/* MAIN CONTENT CONTAINER */}
      <div
        style={{
          width: "95%", 
          maxWidth: "100%", 
          margin: "0 auto", 
          display: "flex",
          justifyContent: "space-between", 
          alignItems: "flex-start", // Align to top
          gap: "1rem",
          // UPDATED: Minimal margin between content and copyright
          marginBottom: "0.5rem", 
        }}
      >
        {/* === LEFT SIDE: Portfolio Text === */}
        <div style={{ flex: 1, textAlign: "left", maxWidth: "600px" }}>
          <h3
            style={{
              fontSize: "1.1rem", // Smaller header
              color: "#fff",
              marginBottom: "0.2rem", // Tighter spacing
              fontWeight: 700,
            }}
          >
            Aditya's Portfolio
          </h3>
          <p
            style={{
              fontSize: "0.8rem", // Smaller text
              color: "#ccc",
              lineHeight: 1.4,
              fontFamily: "'Nunito', sans-serif",
              margin: 0,
            }}
          >
            Thank you for visiting my personal portfolio website. Connect with me
            over socials. Keep Rising. Connect with me over live chat!
          </p>
        </div>

        {/* === RIGHT SIDE: Contact & Socials === */}
        <div 
          style={{ 
            flex: 1, 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "flex-end", 
            textAlign: "right"
          }}
        >
          <h3
            style={{
              fontSize: "1.1rem",
              color: "#fff",
              marginBottom: "0.2rem",
              fontWeight: 700,
            }}
          >
            Contact Info
          </h3>
          
          {/* Contact Details - Compact Row */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", justifyContent: "flex-end", alignItems: "center" }}>
            <p style={{ color: "#ccc", fontSize: "0.8rem", fontFamily: "'Nunito', sans-serif", margin: 0, display: "flex", alignItems: "center", gap: "5px" }}>
              +91-6207051988
              <i className="fas fa-phone" style={{ color: "#ffae00", fontSize: "0.8rem" }} />
            </p>
            <p style={{ color: "#ccc", fontSize: "0.8rem", fontFamily: "'Nunito', sans-serif", margin: 0, display: "flex", alignItems: "center", gap: "5px" }}>
              adityakrjha1988@gmail.com
              <i className="fas fa-envelope" style={{ color: "#ffae00", fontSize: "0.8rem" }} />
            </p>
          </div>

          {/* Social Icons - Compact */}
          <div style={{ display: "flex", gap: "0.6rem", marginTop: "0.5rem", justifyContent: "flex-end" }}>
            {[
              { icon: "fab fa-github", url: "https://github.com/AdityaKumar1988" },
              { icon: "fab fa-linkedin", url: "https://linkedin.com/in/aditya-kumar-jha" },
              { icon: "fas fa-envelope", url: "mailto:adityakrjha1988@gmail.com" },
            ].map((social) => (
              <a
                key={social.icon}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  height: "24px", // Very small icons
                  width: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  fontSize: "0.8rem",
                  background: "rgba(255,255,255,0.08)",
                  color: "#fff",
                  textDecoration: "none",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#ffae00"
                  e.currentTarget.style.color = "#000"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)"
                  e.currentTarget.style.color = "#fff"
                }}
              >
                <i className={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* === BOTTOM: Designed With === */}
      <div
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          paddingTop: "0.5rem", // Minimal padding
          textAlign: "center",
          fontSize: "0.75rem",
          fontFamily: "'Nunito', sans-serif",
          color: "rgba(255,255,255,0.6)",
          width: "95%", 
          margin: "0 auto",
        }}
      >
        Designed with{" "}
        <i className="fas fa-heart" style={{ color: "#e90606", margin: "0 0.2rem", fontSize: "0.75rem" }} />{" "}
        by{" "}
        <span style={{ color: "#ffae00", fontWeight: 600 }}>
          Aditya Kumar Jha
        </span>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          footer > div {
            flex-direction: column;
            gap: 1rem;
            align-items: center !important;
            text-align: center !important;
          }
          footer > div > div {
            text-align: center !important;
            align-items: center !important;
            max-width: 100% !important;
          }
          footer p {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  )
}