import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin } from "lucide-react"
import professionalHeadshot from "@/assets/professional-headshot.jpg"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Profile Image */}
        <div className="mb-20 mx-auto w-40 h-40 rounded-full overflow-hidden glow-shadow animate-fade-in border-4 border-accent/20 hover:border-accent/40 transition-all duration-500 hover:scale-105 group cursor-pointer">
          <img
            src={professionalHeadshot}
            alt="Professional headshot of Pierre Hanne"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 hero-text animate-slide-up">
          Pierre Hanne
          <br />
          <span className="text-accent">GenAI Domain Lead</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Designing and deploying{" "}
          <span className="text-accent font-semibold">enterprise-grade GenAI solutions</span>,
          while architecting{" "}
          <span className="text-accent font-semibold">robust data pipelines</span> to ingest, process,
          and valorize data in both{" "}
          <span className="text-accent font-semibold">streaming</span> and{" "}
          <span className="text-accent font-semibold">batch</span> modes — powered by AWS.
        </p>

        {/* Key highlights */}
        <div
          className="grid md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto animate-scale-in"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 tech-gradient transition-all duration-300 hover:scale-105 hover:bg-card/70 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/20 group cursor-pointer">
            <h3 className="font-semibold text-accent mb-2 group-hover:text-accent/90 transition-colors duration-300">GenAI</h3>
            <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
              Built large-scale GenAI solutions for entreprise and customers
            </p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 tech-gradient transition-all duration-300 hover:scale-105 hover:bg-card/70 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/20 group cursor-pointer">
            <h3 className="font-semibold text-accent mb-2 group-hover:text-accent/90 transition-colors duration-300">Data Architecture</h3>
            <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
              Expertise in designing pipelines for ingestion, streaming, and batch processing at scale
            </p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 tech-gradient transition-all duration-300 hover:scale-105 hover:bg-card/70 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/20 group cursor-pointer">
            <h3 className="font-semibold text-accent mb-2 group-hover:text-accent/90 transition-colors duration-300">AWS Certified</h3>
            <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
              Certified in Solutions Architect, Data Engineer, and Machine Learning — with real-world delivery experience
            </p>
          </div>
        </div>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="lg"
              className="border-accent/50 hover:border-accent hover:glow-shadow"
              onClick={() => window.open('https://www.linkedin.com/in/pierre-hanne-a590b5132/', '_blank')}
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-accent/50 hover:border-accent hover:glow-shadow"
              onClick={() => window.open('https://github.com/pierrehanne', '_blank')}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-accent mx-auto" />
        </div>
      </div>
    </section>
  )
}
