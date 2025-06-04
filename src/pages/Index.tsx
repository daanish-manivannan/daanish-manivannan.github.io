
import React from 'react';
import { ThemeProvider } from "next-themes";
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        
        <footer className="bg-muted border-t border-border py-6 md:py-8">
          <div className="container mx-auto px-6 text-center">
            <p className="text-muted-foreground text-sm md:text-base">
              © 2025 Daanish Manivannan. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
