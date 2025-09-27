import { ThemeProvider } from "@/components/ThemeProvider"
import { Header } from "@/components/portfolio/Header"
import { HeroSection } from "@/components/portfolio/HeroSection"
import { ExperienceTimeline } from "@/components/portfolio/ExperienceTimeline"
import { InterestsSection } from "@/components/portfolio/InterestsSection"
import { ContactSection } from "@/components/portfolio/ContactSection"

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="portfolio-container min-h-screen bg-background">
        <Header />
        <main>
          <section id="about" className="portfolio-section">
            <HeroSection />
          </section>
          <section id="experience" className="portfolio-section">
            <ExperienceTimeline />
          </section>
          <section id="education" className="portfolio-section">
            <InterestsSection />
          </section>
          <section id="contact" className="portfolio-section">
            <ContactSection />
          </section>
        </main>
        
        {/* Footer */}
        <footer className="py-8 border-t border-border/50 bg-card/20 mt-auto">
          <div className="container mx-auto px-6 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Built with React, TypeScript & Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
