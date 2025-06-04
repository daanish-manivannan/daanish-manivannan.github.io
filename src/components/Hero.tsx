
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Code, Sparkles } from 'lucide-react';

const Hero = () => {
  const roles = ['Software Developer',
    'Automation Engineer SDET',
    'Full Stack Developer', 
    'Data Scientist'
    
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Daanish_Manivannan_Resume.pdf';
    link.download = 'Daanish_Manivannan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                <div className="relative bg-card border border-border rounded-full p-6 shadow-lg">
                  <Code className="h-12 w-12 text-primary mx-auto" />
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Hi, I'm <span className="text-primary">Daanish</span>
            </h1>
            
            <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 h-12 flex items-center justify-center">
              <span className="mr-2">I'm a</span>
              <div className="text-primary font-medium min-w-0 flex items-center">
                <span>{displayText}</span>
                <span className="animate-pulse text-primary/60 ml-1">|</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
             Software Engineer with a solid foundation in QA automation, full-stack development, and data science. Dedicated to developing scalable, high-performance systems and ensuring software quality through rigorous engineering standards and best practices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="w-full sm:w-auto"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={downloadResume}
                className="w-full sm:w-auto"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              
              <Button 
                variant="ghost"
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto"
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 justify-center max-w-2xl mx-auto">
              {['Python', 'JavaScript', 'Playwright', 'CodeceptJS', 'React', 'TensorFlow', 'Flask', 'Git'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium border border-border hover:bg-accent transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
