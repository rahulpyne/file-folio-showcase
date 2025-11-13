import { Button } from "@/components/ui/button";
import { Menu, Download } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-lg font-medium hover:opacity-70 transition-opacity">
          Rahul Pyne
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm hover:opacity-70 transition-opacity">
            About
          </a>
          <a href="#journey" className="text-sm hover:opacity-70 transition-opacity">
            Journey
          </a>
          <a href="#skills" className="text-sm hover:opacity-70 transition-opacity">
            Skills
          </a>
          <a 
            href="mailto:rahulpyne90@gmail.com"
            className="text-sm hover:opacity-70 transition-opacity"
          >
            Contact
          </a>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
