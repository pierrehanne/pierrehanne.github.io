import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Curious about AWS-driven solutions, scalable data architectures, or machine learning applications?
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <Card className="project-card bg-card/80 backdrop-blur-sm border-border/50">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-6 text-accent">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg text-accent">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Contact</p>
                    <p className="text-sm text-muted-foreground">LinkedIn / GitHub</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg text-accent">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Paris / Remote</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social links & actions */}
          <Card className="project-card bg-card/80 backdrop-blur-sm border-border/50">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-6 text-accent">Links</h3>
              
              <div className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-accent/50 hover:border-accent hover:glow-shadow"
                  size="lg"
                  onClick={() => window.open('https://www.linkedin.com/in/pierre-hanne-a590b5132/', '_blank')}
                >
                  <Linkedin className="mr-3 h-5 w-5" />
                  LinkedIn Profile
                </Button>

                <Button 
                  variant="outline" 
                  className="w-full justify-start border-accent/50 hover:border-accent hover:glow-shadow"
                  size="lg"
                  onClick={() => window.open('https://github.com/pierrehanne', '_blank')}
                >
                  <Github className="mr-3 h-5 w-5" />
                  GitHub Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}