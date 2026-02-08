import "./globals.css"

export const metadata = {
  title: "Portfolio | Aditya Kumar Jha",
  description:
    "Portfolio of Aditya Kumar Jha - Computer Science undergraduate at VIT Vellore specializing in AI & ML. Full Stack Developer.",
  keywords: [
    "Aditya Kumar Jha",
    "Full Stack Developer",
    "VIT Vellore",
    "React",
    "Next.js",
    "Portfolio",
  ],
}

export const viewport = {
  themeColor: "#0e2431",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body style={{ fontFamily: "'Poppins', sans-serif" }}>
  <div className="app-wrapper">{children}</div>
</body>

    </html>
  )
}
