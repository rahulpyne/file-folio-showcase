import Timeline from "./Timeline";
import microsoftLogo from "@/assets/logos/microsoft.png";
import awsLogo from "@/assets/logos/aws.png";
import amazonLogo from "@/assets/logos/amazon.png";
import ubcLogo from "@/assets/logos/ubc-sauder.png";
import asuLogo from "@/assets/logos/asu.png";

const Journey = () => {
  const timelineItems = [
    {
      type: "education" as const,
      company: "UBC Sauder School of Business",
      logo: ubcLogo,
      location: "Vancouver, BC",
      period: "2025 - 2027 (In Progress)",
      role: "Master of Business Administration (MBA)",
      details: [
        "Vice President Student Development | MBA Council 2027",
        "Leading Tech & Leadership Coffee Chat Series connecting 100+ students",
        "Focus: Product Management, Entrepreneurship, and Market Strategy",
      ],
    },
    {
      type: "experience" as const,
      company: "MBA Society at Sauder School of Business, UBC",
      logo: ubcLogo,
      location: "Vancouver, BC",
      period: "September 2025 - Present",
      role: "Vice President Student Development | MBA Council 2027",
      achievements: [
        "Launched and leading the 'Tech & Leadership Coffee Chat Series' on LinkedIn, connecting 100+ students with startup founders and industry experts.",
        "Directing multi-stakeholder initiatives focused on student inclusion and professional growth.",
      ],
    },
    {
      type: "experience" as const,
      company: "Stealth Startup",
      location: "Redmond, WA",
      period: "March 2025 - May 2025",
      role: "Senior Software Engineer AI",
      achievements: [
        "Designed and deployed an agentic AI service achieving 95% accuracy in natural-language-to-SQL translation.",
        "Partnered with founders and enterprise clients to define MVP milestones.",
        "Built ontology and benchmarking frameworks to evaluate AI precision and reliability.",
      ],
    },
    {
      type: "experience" as const,
      company: "Microsoft",
      logo: microsoftLogo,
      location: "Redmond, WA",
      period: "February 2022 - January 2025",
      role: "Senior Software Engineer",
      achievements: [
        "Directed end-to-end integration of Microsoft Purview's Label Product, driving 4x sales growth.",
        "Partnered with global teams to accelerate enterprise adoption by 28%.",
        "Improved release velocity by 12% and service reliability by 8%.",
      ],
    },
    {
      type: "experience" as const,
      company: "Amazon Web Services (AWS)",
      logo: awsLogo,
      location: "Seattle, WA",
      period: "April 2021 - January 2022",
      role: "Software Development Engineer II",
      achievements: [
        "Led development of 'Pending Agent Status' feature for Amazon Connect.",
        "Designed scalable microservices architecture supporting 500K+ concurrent calls with 99.9% uptime.",
        "Reduced missed customer calls by 3% under peak traffic conditions.",
      ],
    },
    {
      type: "education" as const,
      company: "Arizona State University",
      logo: asuLogo,
      location: "Tempe, AZ",
      period: "2017 - 2019",
      role: "Master of Science in Computer Science",
      details: [
        "Specialization: Artificial Intelligence and Machine Learning",
        "Relevant Coursework: Data Mining, Cloud Computing, Statistical Machine Learning",
      ],
    },
    {
      type: "experience" as const,
      company: "Auger Inc.",
      location: "Remote",
      period: "May 2019 - April 2021",
      role: "Founding Engineer",
      achievements: [
        "Built and scaled an AI-powered recruiting platform using machine learning.",
        "Developed custom NLP pipeline for resume parsing, improving match quality by 40%.",
        "Collaborated with founders to define product strategy and technical roadmaps.",
      ],
    },
    {
      type: "education" as const,
      company: "Visvesvaraya Technological University",
      location: "India",
      period: "2009 - 2013",
      role: "Bachelor of Engineering in Computer Science",
      details: [
        "First Class with Distinction",
        "Focus: Software Engineering and Data Structures",
      ],
    },
  ];

  return (
    <section id="journey" className="py-24 px-6 border-b border-border">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <span className="section-number text-2xl">01</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6">
            My Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional experience and educational background
          </p>
        </div>

        <Timeline items={timelineItems} />
      </div>
    </section>
  );
};

export default Journey;
