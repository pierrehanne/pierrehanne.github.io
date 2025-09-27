import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Calendar, Users, Zap, TrendingUp, Award, Target } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

interface Experience {
  period: string
  company: string
  companyUrl?: string
  role: string
  achievements: string[]
  highlights: string[]
  icon: React.ReactNode
  impact?: string
  location?: string
}

const experiences: Experience[] = [
  {
    period: "2025 - Present",
    company: "IDEMIA",
    companyUrl: "https://www.idemia.com",
    role: "GenAI Domain Lead",
    location: "Courbevoie, France",
    impact: "Leading enterprise AI transformation for 6,500+ users",
    achievements: [
      "Delivered INSIDER, IDEMIA’s Generative AI platform, designed for secure, compliant, and observable multi-tenant deployments, with application fastening supporting mission-critical use cases in the Secure Transaction Business Unit.",
      "Drove the technical roadmap for INSIDER as a hands-on tech lead, architecting the ingestion system enabling Retrieval-Augmented Generation (RAG) and implementing text-to-SQL capabilities for seamless interaction with AWS DataHub, accelerating data-driven use cases across business domains.",
    ],
    highlights: [
      "Serverless Architecture", "Data Analytics", "Machine Learning", "Deep Learning", "Agentic Patterns"
    ],
    icon: <Zap className="h-5 w-5" />
  },
  {
    period: "2023 - 2025",
    company: "IDEMIA", 
    companyUrl: "https://www.idemia.com",
    role: "Data Scientist / Data Engineer",
    location: "Courbevoie, France",
    impact: "Built scalable data infrastructure processing millions of eSIM transactions",
    achievements: [
      "Designed and deployed an AWS Lambda Architecture combining Apache Spark (batch) and Apache Flink (streaming) to process large-scale eSIM telemetry data for both historical analytics and real-time insights.",
      "Developed machine learning recommender system for eSIM pricing optimization."
    ],
    highlights: [
      "AWS", "Terraform", "Airflow", "Spark", "Flink", "DataHub", "ETL", "Analytics"
    ],
    icon: <Building2 className="h-5 w-5" />
  },
  {
    period: "2021 - 2022", 
    company: "SQORUS (Societe Generale)",
    companyUrl: "https://www.societegenerale.com/en",
    role: "Data Consultant",
    location: "La Défense, France",
    impact: "Enhanced HR data quality and insights for global banking operations",
    achievements: [
      "Developed a Spark-based data quality framework integrated with DataHub to monitor HRIS data quality.",
      "Implemented NLP pipelines for topic modeling and sentiment analysis on employee feedback, providing actionable insights for HR Barometer.",
      "Designed and deployed supervised text classification models to map external training catalogs (e.g., Udemy) to internal taxonomies."
    ],
    highlights: [
      "HR Analytics", "DataHub", "On-Premise", "ETL", "NLP", "MLFlow", "Kedro"
    ],
    icon: <Users className="h-5 w-5" />
  }
]

function ExperienceCard({ exp, index, isVisible }: { exp: Experience; index: number; isVisible: boolean }) {
  return (
    <div 
      className={`relative mb-16 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Timeline node */}
      <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full timeline-node transition-all duration-500 hover:scale-125 ${
        index === 0 ? 'animate-pulse shadow-lg shadow-accent/50' : ''
      } ${isVisible ? 'scale-100' : 'scale-0'}`}>
        <div className="absolute inset-0.5 bg-background rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-accent rounded-full"></div>
        </div>
      </div>
      
      {/* Content card */}
      <article 
        className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-1/2 md:mr-8' : 'md:pl-1/2 md:ml-8'}`}
        itemScope 
        itemType="https://schema.org/WorkExperience"
      >
        <Card className="group project-card bg-card/80 backdrop-blur-sm border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 overflow-hidden">
          <CardContent className="p-0">
            {/* Header with gradient background */}
            <div className="bg-gradient-to-r from-accent/5 to-primary/5 p-6 border-b border-border/30">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-xl text-accent group-hover:bg-accent/20 transition-colors duration-300 group-hover:scale-110 transform">
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <time itemProp="startDate">{exp.period}</time>
                    {exp.location && (
                      <>
                        <span className="text-border">•</span>
                        <span itemProp="address">{exp.location}</span>
                      </>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-accent transition-colors duration-300" itemProp="jobTitle">
                    {exp.role}
                  </h3>
                  {exp.companyUrl ? (
                    <a 
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent font-semibold text-lg hover:text-accent/80 transition-colors duration-300 hover:underline"
                      itemProp="hiringOrganization"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    <p className="text-accent font-semibold text-lg" itemProp="hiringOrganization">
                      {exp.company}
                    </p>
                  )}
                  {exp.impact && (
                    <div className="flex items-center gap-2 mt-3 p-2 bg-accent/5 rounded-lg border border-accent/20">
                      <TrendingUp className="h-4 w-4 text-accent" />
                      <span className="text-sm font-medium text-accent/90">{exp.impact}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Achievements section */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-4 w-4 text-accent" />
                <h4 className="font-semibold text-foreground">Key Achievements</h4>
              </div>
              <ul className="space-y-3 mb-6" itemProp="description">
                {exp.achievements.map((achievement, i) => (
                  <li 
                    key={i} 
                    className="text-sm text-muted-foreground flex items-start gap-3 group/item hover:text-foreground/90 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>

              {/* Skills and technologies */}
              <div className="flex items-center gap-2 mb-3">
                <Award className="h-4 w-4 text-accent" />
                <h4 className="font-semibold text-foreground">Technologies & Skills</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((highlight, i) => (
                  <Badge 
                    key={i} 
                    variant="secondary" 
                    className="skill-tag text-xs hover:bg-accent/20 hover:text-accent hover:border-accent/50 transition-all duration-300 hover:scale-105"
                    itemProp="skills"
                  >
                    {highlight}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </article>
    </div>
  )
}

export function ExperienceTimeline() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px',
  })

  return (
    <section 
      className="py-24 bg-gradient-to-b from-background via-card/10 to-background relative overflow-hidden"
      itemScope 
      itemType="https://schema.org/Person"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
            Professional <span className="text-accent">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Over 4+ years of experience in GenAI, data engineering, and cloud architecture, 
            delivering enterprise-scale solutions that drive business transformation and innovation.
          </p>
        </div>
        
        <div ref={ref} className="relative max-w-5xl mx-auto">
          {/* Enhanced timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/50 to-transparent rounded-full shadow-lg shadow-accent/20"></div>
          
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index} 
              exp={exp} 
              index={index} 
              isVisible={isIntersecting}
            />
          ))}
        </div>
      </div>
    </section>
  )
}