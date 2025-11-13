const Experience = () => {
  const experiences = [
    {
      company: "MBA Society at Sauder School of Business, UBC",
      location: "Vancouver, BC",
      period: "September 2025 - Present",
      role: "Vice President Student Development | MBA Council 2027",
      achievements: [
        "Launched and leading the 'Tech & Leadership Coffee Chat Series' on LinkedIn, connecting 100+ students with startup founders and industry experts to cultivate community learning and entrepreneurial thinking.",
        "Directing and coordinating multi-stakeholder initiatives focused on student inclusion and professional growth, aligning academic, industry, and alumni networks to deliver measurable engagement outcomes.",
      ],
    },
    {
      company: "Stealth Startup",
      location: "Redmond, WA",
      period: "March 2025 - May 2025",
      role: "Senior Software Engineer AI",
      achievements: [
        "Designed and deployed an agentic AI service that achieved 95% accuracy in natural-language-to-SQL translation, enhancing client data accessibility and decision automation.",
        "Partnered directly with founders and enterprise clients to define MVP milestones, aligning technical innovation with measurable business outcomes.",
        "Built ontology and benchmarking frameworks to evaluate AI precision and reliability, driving early-stage adoption and strengthening investor confidence.",
      ],
    },
    {
      company: "Microsoft",
      location: "Redmond, WA",
      period: "February 2022 - January 2025",
      role: "Senior Software Engineer",
      achievements: [
        "Directed the end-to-end integration of Microsoft Purview's Label Product with Microsoft Security, leading a 6-member team and driving 4x sales growth via bundled licensing through improved compliance alignment.",
        "Partnered with global product, compliance, and data teams to translate business goals into technical roadmaps, aligning product vision and regulatory strategy—accelerating enterprise adoption by 28%.",
        "Mentored junior developers and coordinated cross-functional stakeholders to deliver high-impact releases that strengthened enterprise data governance—improving release velocity by 12% and service reliability by 8%.",
      ],
    },
    {
      company: "Amazon Web Services (AWS)",
      location: "Seattle, WA",
      period: "April 2021 - January 2022",
      role: "Software Development Engineer II",
      achievements: [
        "Led end-to-end development of the 'Pending Agent Status' feature for Amazon Connect, optimizing real-time agent availability and reducing missed customer calls by 3% under peak traffic conditions.",
        "Designed and executed a scalable microservices architecture supporting 500K+ concurrent calls, maintaining 99.9% uptime.",
        "Collaborated with product managers and UX designers to align technical capabilities with customer needs, enhancing agent productivity and operational efficiency.",
      ],
    },
    {
      company: "Auger Inc.",
      location: "Remote",
      period: "May 2019 - April 2021",
      role: "Founding Engineer",
      achievements: [
        "Built and scaled an AI-powered recruiting platform that matched job seekers with employers using machine learning, driving early product-market fit and user acquisition.",
        "Developed a custom NLP pipeline for resume parsing and candidate ranking, improving match quality by 40%.",
        "Collaborated with founders to define product strategy, design MVPs, and establish technical roadmaps.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 border-b border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <span className="section-number text-2xl">01</span>
            <h2 className="text-4xl md:text-5xl font-serif font-light mt-4">
              Experience
            </h2>
          </div>
          
          <div className="md:col-span-9 space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-2 border-border pl-6 pb-8">
                <div className="mb-3">
                  <p className="text-sm text-muted-foreground">
                    {exp.company} • {exp.location} • {exp.period}
                  </p>
                </div>
                
                <h3 className="text-2xl font-serif font-medium mb-4">
                  {exp.role}
                </h3>
                
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-muted-foreground leading-relaxed">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
