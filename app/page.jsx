import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Certifications } from "@/components/certifications"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />

      <main>
  <Hero />
  <About />
  <Projects />
  <Experience />
  <Skills />
  <Education />
  <Certifications />
  <Contact />
</main>



      <Footer />
    </>
  )
}

