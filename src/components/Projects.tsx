
import React from 'react';
import { Github, ExternalLink, Calendar, MapPin, Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Moti - Cyberbullying Threat Detection System",
      description: "Advanced multilingual threat detection model using Google Trans Library and Hugging Face API. Built with NLTK and Python featuring automated SMTP alert system for reporting threatening behavior with 94% accuracy rate.",
      // image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
      image: "/MOTI LOGO.png",
      technologies: ["Python", "NLTK", "Hugging Face API", "Google Translate", "SMTP", "Machine Learning"],
      githubUrl: "https://github.com/daanish-manivannan/MOTI",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Deep Learning-Based Price Prediction Model for Blockchain-Based Stock Market",
      description: "Deep Learning model using Long Short Term Memory networks for stock price prediction. Implemented with Ethereum-based data ingestion through Remix IDE for secure and decentralized data handling.",
      // image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop",
      image: "/Stock Market Blockchain.png",
      technologies: ["Python", "LSTM", "TensorFlow", "Ethereum", "Remix IDE", "Blockchain"],
      githubUrl: "https://github.com/daanish-manivannan/Stock-Prediction",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Mushroom Classification Web App",
      description: "CNN-based web application for classifying mushrooms into 3 categories: Boletus, Lactarius, and Russula. Built using Flask and TensorFlow on IBM Cloud with Transfer Learning using Xception model.",
      // image: "https://images.unsplash.com/photo-1518449835505-35fdc9c6d7ad?w=500&h=300&fit=crop",
      image: "/Mushroom Classifier.png",
      technologies: ["Flask", "TensorFlow", "CNN", "IBM Cloud", "Xception", "Transfer Learning"],
      githubUrl: "https://github.com/daanish-manivannan/Mushroom-Classifier",
      liveUrl: "#",
      featured: true
    }
  ];

  const workExperience = [
    {
      title: "QA Automation Engineer",
      company: "Lumel Technologies",
      location: "Chennai, India",
      duration: "June 2024 – March 2025 (9+ months)",
      type: "Full-time",
      description: "Lead the development and maintenance of comprehensive test automation frameworks for Infodrive Analytics platform. Architected scalable testing solutions using modern JavaScript frameworks and CI/CD integration, ensuring high-quality software delivery.",
      technologies: ["CodeceptJS", "Playwright", "JavaScript", "TypeScript", "Git", "CI/CD", "Power Automate", "Performance Testing"],
      achievements: [
        "Built end-to-end automation framework from scratch achieving 95% test coverage",
        "Reduced manual testing time by 70% through intelligent test automation",
        "Integrated automated testing pipeline reducing deployment time by 50%",
        "Mentored junior developers on testing best practices and automation strategies"
      ]
    },
    {
      title: "Data Science Engineer",
      company: "ND Global Tech Solutions",
      location: "Hyderabad, India",
      duration: "Aug 2023 – Oct 2023 (3 months)",
      type: "Remote Internship",
      description: "Developed advanced web scraping solutions and data processing pipelines for large-scale music analytics. Implemented machine learning models for pattern recognition and trend analysis in musical content data.",
      technologies: ["Python", "BeautifulSoup", "Pandas", "NumPy", "Scikit-learn", "Data Analysis", "Web Scraping"],
      achievements: [
        "Scraped and processed 10,000+ song lyrics with 99% accuracy",
        "Developed automated data cleaning pipeline reducing processing time by 80%",
        "Generated actionable insights on music trends using statistical analysis",
        "Built scalable data infrastructure supporting real-time analytics"
      ]
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Projects & Experience</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing technical projects and professional experience in automation testing, data science, and web development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Featured Projects</h3>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.filter(project => project.featured).map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-foreground mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {/* <Button variant="outline" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Professional Experience</h3>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {workExperience.map((experience, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                    <CardTitle className="text-xl font-semibold text-foreground">{experience.title}</CardTitle>
                    <Badge variant="outline" className="self-start lg:self-center">{experience.type}</Badge>
                  </div>
                  <div className="space-y-1">
                    <p className="text-primary font-medium text-lg">{experience.company}</p>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{experience.duration}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                    {experience.description}
                  </CardDescription>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      Key Achievements:
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {experience.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-1 text-xs">●</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {experience.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
