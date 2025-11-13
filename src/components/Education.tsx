const Education = () => {
  const education = [
    {
      degree: "Master of Business Administration (MBA)",
      institution: "UBC Sauder School of Business",
      location: "Vancouver, BC",
      period: "2025 - 2027 (In Progress)",
      details: [
        "Focus: Product Management, Entrepreneurship, and Market Strategy",
        "Vice President Student Development | MBA Council 2027",
        "Leading Tech & Leadership Coffee Chat Series",
      ],
    },
    {
      degree: "Master of Science in Computer Science",
      institution: "Arizona State University",
      location: "Tempe, AZ",
      period: "2017 - 2019",
      details: [
        "Specialization: Artificial Intelligence and Machine Learning",
        "Relevant Coursework: Data Mining, Cloud Computing, Statistical Machine Learning",
      ],
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Visvesvaraya Technological University",
      location: "India",
      period: "2009 - 2013",
      details: [
        "First Class with Distinction",
        "Focus: Software Engineering and Data Structures",
      ],
    },
  ];

  return (
    <section id="education" className="py-24 px-6 border-b border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <span className="section-number text-2xl">02</span>
            <h2 className="text-4xl md:text-5xl font-serif font-light mt-4">
              Education
            </h2>
          </div>
          
          <div className="md:col-span-9 space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-border pl-6 pb-8">
                <div className="mb-3">
                  <p className="text-sm text-muted-foreground">
                    {edu.institution} • {edu.location} • {edu.period}
                  </p>
                </div>
                
                <h3 className="text-2xl font-serif font-medium mb-4">
                  {edu.degree}
                </h3>
                
                <ul className="space-y-2">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="text-muted-foreground leading-relaxed">
                      {detail}
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

export default Education;
