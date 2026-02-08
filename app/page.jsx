import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Certifications } from "@/components/certifications"
export default function Page() {
  return (
    <>
      <Navbar />

      <main>
  <Hero />
  <About />
  <Skills />
  <Education />
  <Projects />
  <Certifications />
  <Contact />
</main>



      <Footer />
    </>
  )
}

