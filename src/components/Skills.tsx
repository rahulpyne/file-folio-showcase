const Skills = () => {
  const skillCategories = [
    {
      category: "Product & Strategy",
      skills: [
        "Product Management",
        "Product Strategy & Vision",
        "Customer Experience Design",
        "Market Analysis",
        "Roadmap Planning",
        "Stakeholder Management",
      ],
    },
    {
      category: "Technical",
      skills: [
        "AI/ML Engineering",
        "Cloud Development (AWS, Azure)",
        "Microservices Architecture",
        "NLP & Data Mining",
        "Python, Java, C#, TypeScript",
        "SQL & NoSQL Databases",
      ],
    },
    {
      category: "Leadership",
      skills: [
        "Cross-Functional Leadership",
        "Team Mentorship",
        "Agile Methodologies",
        "Technical Communication",
        "Change Management",
        "Strategic Planning",
      ],
    },
    {
      category: "Business",
      skills: [
        "Entrepreneurship",
        "Business Strategy",
        "Financial Analysis",
        "Sales Enablement",
        "Compliance & Governance",
        "Market Strategy",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 border-b border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <span className="section-number text-2xl">03</span>
            <h2 className="text-4xl md:text-5xl font-serif font-light mt-4">
              Skills
            </h2>
          </div>
          
          <div className="md:col-span-9">
            <div className="grid sm:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-xl font-serif font-medium border-b border-border pb-2">
                    {category.category}
                  </h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="text-muted-foreground">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
