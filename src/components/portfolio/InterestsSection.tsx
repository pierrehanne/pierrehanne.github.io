import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Globe, Calendar, Award, ExternalLink } from "lucide-react"

export function InterestsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Education & <span className="text-accent">Background</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Strong academic foundation in engineering and computer science, with international experience
            and focus on data science and distributed systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Master's Degree */}
          <Card className="project-card bg-card/80 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-accent/10 rounded-xl text-accent">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Master's in Engineering</h3>
                  <a
                    href="https://www.esiea.fr/en/homepage/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent font-semibold hover:underline"
                  >
                    ESIEA
                  </a>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  2015 – 2021
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Exchange Program - Canada */}
          <Card className="project-card bg-card/80 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-accent/10 rounded-xl text-accent">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Exchange Program</h3>
                  <a
                    href="https://www.usherbrooke.ca/genie/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent font-semibold hover:underline"
                  >
                    Sherbrooke University
                  </a>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  2019
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Exchange Program - Japan */}
          <Card className="project-card bg-card/80 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-accent/10 rounded-xl text-accent">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Exchange Program</h3>
                  <a
                    href="https://www.toyo.ac.jp/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent font-semibold hover:underline"
                  >
                    Toyo University
                  </a>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  2017
                </div>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* AWS Certifications */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              AWS <span className="text-accent">Certifications</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional cloud certifications demonstrating expertise in solutions architecture,
              data engineering, and machine learning on Amazon Web Services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* AWS SAA */}
            <Card className="project-card bg-card/80 backdrop-blur-sm border-border/50 group hover:border-accent/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-accent/10 rounded-xl text-accent group-hover:bg-accent/20 transition-colors duration-300">
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg group-hover:text-accent transition-colors duration-300">
                      Solutions Architect
                    </h4>
                    <p className="text-sm text-muted-foreground">Associate Level</p>
                  </div>
                </div>
                <a
                  href="https://aws.amazon.com/certification/certified-solutions-architect-associate/?nc1=h_ls"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-300 text-sm font-medium"
                >
                  View Certification <ExternalLink className="h-3 w-3" />
                </a>
              </CardContent>
            </Card>

            {/* AWS DEA */}
            <Card className="project-card bg-card/80 backdrop-blur-sm border-border/50 group hover:border-accent/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-accent/10 rounded-xl text-accent group-hover:bg-accent/20 transition-colors duration-300">
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg group-hover:text-accent transition-colors duration-300">
                      Data Engineer
                    </h4>
                    <p className="text-sm text-muted-foreground">Associate Level</p>
                  </div>
                </div>
                <a
                  href="https://aws.amazon.com/certification/certified-data-engineer-associate/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-300 text-sm font-medium"
                >
                  View Certification <ExternalLink className="h-3 w-3" />
                </a>
              </CardContent>
            </Card>

            {/* AWS MLEA */}
            <Card className="project-card bg-card/80 backdrop-blur-sm border-border/50 group hover:border-accent/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-accent/10 rounded-xl text-accent group-hover:bg-accent/20 transition-colors duration-300">
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg group-hover:text-accent transition-colors duration-300">
                      ML Engineer
                    </h4>
                    <p className="text-sm text-muted-foreground">Associate Level</p>
                  </div>
                </div>
                <a
                  href="https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-300 text-sm font-medium"
                >
                  View Certification <ExternalLink className="h-3 w-3" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
