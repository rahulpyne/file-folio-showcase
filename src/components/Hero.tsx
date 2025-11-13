import { ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${profilePhoto})`,
          backgroundPosition: "center 30%",
          backgroundSize: "cover",
        }}
      />
      
      <div className="relative z-10 text-center px-6 animate-fade-in-up">
        <h1 className="heading-display text-white mb-6">
          <span className="block text-4xl md:text-5xl italic font-serif opacity-90">Rahul</span>
          <span className="block font-bold">Pyne</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
          MBA, MS in Computer Science
        </p>
        <p className="text-sm md:text-base text-white/80 max-w-xl mx-auto">
          AI Tech Entrepreneur • Product Manager • Ex-Microsoft • Ex-Amazon
        </p>
      </div>

      <a 
        href="#about"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
};

export default Hero;
