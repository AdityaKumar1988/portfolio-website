"use client"

export function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0a0a1a 0%, #0d1b3e 50%, #0a0a1a 100%)",
        padding: "0.8rem 0",
        width: "100%",
      }}
    >
      {}
      <div
        style={{
          width: "95%",
          maxWidth: "100%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "1rem",
          marginBottom: "0.5rem",
        }}
      >
        {}
        <div style={{ flex: 1, textAlign: "left", maxWidth: "600px" }}>
          <h3
            style={{
              fontSize: "1.1rem",
              color: "#e2e8f0",
              marginBottom: "0.2rem",
              fontWeight: 700,
            }}
          >
            Aditya's Portfolio
          </h3>
          <p
            style={{
              fontSize: "0.8rem",
              color: "#94a3b8",
              lineHeight: 1.4,
              fontFamily: "'Nunito', sans-serif",
              margin: 0,
            }}
          >
            Thank you for visiting my personal portfolio website. Connect with me
            over socials. Keep Rising. Connect with me over live chat!
          </p>
        </div>

        {}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            textAlign: "right",
          }}
        >
          <h3
            style={{
              fontSize: "1.1rem",
              color: "#e2e8f0",
              marginBottom: "0.2rem",
              fontWeight: 700,
            }}
          >
            Contact Info
          </h3>

          {}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", justifyContent: "flex-end", alignItems: "center" }}>
            <p style={{ color: "#94a3b8", fontSize: "0.8rem", fontFamily: "'Nunito', sans-serif", margin: 0, display: "flex", alignItems: "center", gap: "5px" }}>
              +91-6207051988
              <i className="fas fa-phone" style={{ color: "#00e5ff", fontSize: "0.8rem" }} />
            </p>
            <p style={{ color: "#94a3b8", fontSize: "0.8rem", fontFamily: "'Nunito', sans-serif", margin: 0, display: "flex", alignItems: "center", gap: "5px" }}>
              adityakrjha1988@gmail.com
              <i className="fas fa-envelope" style={{ color: "#00e5ff", fontSize: "0.8rem" }} />
            </p>
          </div>

          {}
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
                  height: "24px",
                  width: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  fontSize: "0.8rem",
                  background: "rgba(255,255,255,0.08)",
                  color: "#94a3b8",
                  textDecoration: "none",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#00e5ff"
                  e.currentTarget.style.color = "#0a0a1a"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)"
                  e.currentTarget.style.color = "#94a3b8"
                }}
              >
                <i className={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {}
      <div
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          paddingTop: "0.5rem",
          textAlign: "center",
          fontSize: "0.75rem",
          fontFamily: "'Nunito', sans-serif",
          color: "rgba(255,255,255,0.4)",
          width: "95%",
          margin: "0 auto",
        }}
      >
        Designed with{" "}
        <i className="fas fa-heart" style={{ color: "#e90606", margin: "0 0.2rem", fontSize: "0.75rem" }} />{" "}
        by{" "}
        <span style={{ color: "#00e5ff", fontWeight: 600 }}>
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