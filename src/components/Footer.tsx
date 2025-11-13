import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-light mb-4">Rahul Pyne</h3>
            <p className="text-sm text-muted-foreground">
              MBA Candidate at UBC Sauder<br />
              AI Tech Entrepreneur & Product Manager
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#journey" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Journey
              </a>
              <a href="#skills" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </a>
            </nav>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-4">Connect</h4>
            <div className="space-y-3">
              <a 
                href="mailto:rahulpyne90@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                rahulpyne90@gmail.com
              </a>
              <a 
                href="tel:+16173725107"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                +1 (617) 372-5107
              </a>
              <a 
                href="https://www.linkedin.com/in/rahul-pyne"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rahul Pyne. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
