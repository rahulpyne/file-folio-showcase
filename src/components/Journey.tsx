import Timeline from "./Timeline";
import microsoftLogo from "@/assets/logos/microsoft.png";
import awsLogo from "@/assets/logos/aws.png";
import amazonLogo from "@/assets/logos/amazon.png";
import ubcLogo from "@/assets/logos/ubc-sauder.png";

const Journey = () => {
  const timelineItems = [
    {
      type: "education" as const,
      company: "UBC Sauder School of Business",
      logo: ubcLogo,
      location: "Vancouver, BC",
      period: "August 2025 - December 2026",
      role: "Master of Business Administration (MBA)",
      details: [
        "Focus: Business Administration and Management",
        "Vice President Student Development | MBA Council 2027",
        "Leading Tech & Leadership Coffee Chat Series connecting 100+ students",
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
        "Launched and leading the 'Tech & Leadership Coffee Chat Series' on LinkedIn connecting 100+ students with startup founders and industry experts to cultivate community learning and entrepreneurial thinking.",
        "Directing and coordinating multi-stakeholder initiatives focused on student inclusion and professional growth, aligning academic, industry, and alumni networks to deliver measurable engagement outcomes.",
      ],
    },
    {
      type: "experience" as const,
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
      type: "experience" as const,
      company: "Microsoft",
      logo: microsoftLogo,
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
      type: "experience" as const,
      company: "Amazon Web Services (AWS)",
      logo: awsLogo,
      location: "Seattle, WA",
      period: "April 2021 - January 2022",
      role: "Software Development Engineer II",
      achievements: [
        "Led end-to-end development of the 'Pending Agent Status' feature for Amazon Connect, a critical enhancement that optimized real-time agent availability and reduced missed customer calls by 3% under peak traffic conditions.",
        "Architected and implemented a data pipeline for Workforce Management Service, integrating hot and cold data streams across S3 and real-time schedulers to enable predictive workforce insights and improve forecast accuracy by 20%.",
        "Collaborated with product and operations leaders to translate technical performance metrics into process-improvement strategies, directly influencing customer satisfaction scores.",
      ],
    },
    {
      type: "experience" as const,
      company: "Amazon",
      logo: amazonLogo,
      location: "Greater Seattle Area",
      period: "July 2018 - March 2021",
      role: "Software Developer Engineer",
      achievements: [
        "Operational development across 4 CI/CD distributed asynchronous micro-services in more than 9 regions that handles omni-channel routing of calls, chats, work-items between agents and customers.",
        "Led the investigation and reduction of missed call related bugs of Amazon Connect from 3% to 1%.",
        "Developed an automated load test component for testing persistent Websocket connections and sending topic-based messages via SQS and SNS used in CI/CD pipeline.",
      ],
    },
    {
      type: "education" as const,
      company: "Northeastern University",
      location: "Boston, MA",
      period: "2016 - 2018",
      role: "Master's Degree in Computer Science",
      details: [
        "Focus: Advanced Computer Science",
        "Head Graduate Teaching Assistant for CS-5010 Programming Design Paradigm",
      ],
    },
    {
      type: "experience" as const,
      company: "Amazon",
      logo: amazonLogo,
      location: "Greater Seattle Area",
      period: "May 2017 - August 2017",
      role: "Software Developer Engineer Intern",
      achievements: [
        "Analyzed team requirements and designed a solution for load balancing between multiple server requests.",
        "Automated the process of data loading from Data warehouse to AWS RDS instance using Python, AWS Lambda, AWS DynamoDB and AWS S3.",
      ],
    },
    {
      type: "experience" as const,
      company: "Cognizant",
      location: "India",
      period: "December 2013 - August 2016",
      role: "Programmer Analyst",
      achievements: [
        "Banking and Financial Domain - Created web based application pages using HTML5, JavaScript, JSON, AJAX, jQuery, Angular JS and Advanced Java with Struts framework and Oracle 11g database.",
        "Developed numerous Web Services for extracting and manipulating data from inter-applications using SOAP and REST protocols.",
        "Worked extensively on PL/SQL, created procedures, cursors, packages and triggers.",
      ],
    },
    {
      type: "education" as const,
      company: "West Bengal University of Technology, Kolkata",
      location: "India",
      period: "2009 - 2013",
      role: "Bachelor's Degree in Computer Science and Engineering",
      details: [
        "First Class with Distinction",
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
