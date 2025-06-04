
import React from 'react';
import { Github, Linkedin, Download, Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Daanish_Manivannan_Resume.pdf';
    link.download = 'Daanish_Manivannan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-semibold text-foreground">
            Daanish Manivannan<span className="text-primary">.</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/daanish-manivannan" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://linkedin.com/in/daanish-manivannan" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="sm" onClick={downloadResume}>
              <Download className="h-4 w-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
