
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, TestTube, Wrench, Brain, Cloud } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Test Automation",
      icon: TestTube,
      description: "Comprehensive testing frameworks and tools",
      skills: [
        "Playwright", "CodeceptJS", "Selenium", "Jest", "Cypress", 
        "Postman", "API Testing", "E2E Testing", "Performance Testing",
        "Test Framework Design", "CI/CD Integration"
      ],
      color: "text-red-500"
    },
    {
      title: "Programming Languages",
      icon: Code2,
      description: "Core programming and scripting languages",
      skills: [
        "Python", "JavaScript", "TypeScript", "Java", "R", 
        "HTML/CSS", "SQL", "Shell Scripting", "C", "C++"  
      ],
      color: "text-blue-500"
    },
    {
      title: "Web Development",
      icon: Code2,
      description: "Frontend and backend development",
      skills: [
        "React.js", "Node.js", "Express.js", "Flask", "REST APIs", 
        "MongoDB", "JSON", "AJAX", "Bootstrap", "jQuery"
      ],
      color: "text-green-500"
    },
    {
      title: "Data Science & AI",
      icon: Brain,
      description: "Machine learning and data analysis",
      skills: [
        "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", 
        "Matplotlib", "NLTK", "Hugging Face", "Deep Learning", "CNN", "LSTM"
      ],
      color: "text-purple-500"
    },
    {
      title: "Cloud & Tools",
      icon: Cloud,
      description: "Development and deployment tools",
      skills: [
        "IBM Cloud", "Azure DevOps", "Git/GitHub", "Power BI", 
        "Jupyter Notebook", "VS Code", "Remix IDE", "Power Automate"
      ],
      color: "text-orange-500"
    },
    {
      title: "Development Tools",
      icon: Wrench,
      description: "Essential development utilities",
      skills: [
        "Git", "GitHub", "VS Code", "Jupyter", "BeautifulSoup", 
        "SMTP", "Google Translate API", "Ethereum", "Blockchain"
      ],
      color: "text-indigo-500"
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set in software development, data science, full-stack development, and test automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`p-2 rounded-lg bg-muted ${category.color}`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {category.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-sm text-muted-foreground">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
