import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
})

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
    <html lang="en" className={spaceGrotesk.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className={spaceGrotesk.className} style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}>


        <svg
          id="cursor-arrow"
          width="26"
          height="26"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 2L24 13L14 16L10 26L4 2Z"
            stroke="#6366f1"
            strokeWidth="2.2"
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="none"
          />
        </svg>


        <script dangerouslySetInnerHTML={{ __html: `
  (function() {
    var arrow = document.getElementById('cursor-arrow');
    if (!arrow) return;

    arrow.style.opacity = '0';

    window.addEventListener('mousemove', function(e) {
      arrow.style.opacity = '1';
      arrow.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    });

    document.addEventListener('mouseleave', function() {
      arrow.style.opacity = '0';
    });

    document.addEventListener('mouseenter', function() {
      arrow.style.opacity = '1';
    });

    document.addEventListener('mouseover', function(e) {
      if (e.target.closest('a, button, [role="button"]')) {
        arrow.classList.add('hovered');
      } else {
        arrow.classList.remove('hovered');
      }
    });
  })();
`}} />

        <div className="app-wrapper">{children}</div>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}