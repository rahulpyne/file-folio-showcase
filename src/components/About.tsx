const About = () => {
  return (
    <section id="about" className="py-24 px-6 border-b border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-3">
            <span className="section-number text-2xl">00</span>
            <h2 className="text-4xl md:text-5xl font-serif font-light mt-4">
              About
            </h2>
          </div>
          
          <div className="md:col-span-9 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a technologist turned product thinker, passionate about building solutions where technology, design, and business strategy meet.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Over the past 7 years at Microsoft, Amazon, and early-stage startups, I've evolved from developing large-scale systems to shaping product vision, customer experience, and business outcomes. I enjoy transforming complex technical challenges into simple, user-focused solutions that drive adoption and growth.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing my MBA at UBC Sauder, I'm expanding my perspective on product management, entrepreneurship, and market strategy — learning how technology can not only scale systems but also scale impact.
            </p>

            <div className="pt-6">
              <h3 className="text-xl font-medium mb-4">My strengths include:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Product Strategy & Vision — translating ideas into scalable roadmaps and measurable value</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Customer Focus — collaborating with SMB and enterprise clients to solve meaningful problems</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Cross-Functional Leadership — aligning engineers, designers, and business teams around shared outcomes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Innovation & Growth Mindset — reimagining workflows through AI, automation, and creativity</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 flex flex-wrap gap-4">
              <a 
                href="https://www.linkedin.com/in/rahul-pyne" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                LinkedIn →
              </a>
              <a 
                href="mailto:rahulpyne90@gmail.com"
                className="text-sm text-primary hover:underline"
              >
                Email →
              </a>
              <span className="text-sm text-muted-foreground">
                +1 (617) 372-5107
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
