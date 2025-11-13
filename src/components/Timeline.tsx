import { useEffect, useRef, useState } from "react";

interface TimelineItem {
  type: "experience" | "education";
  company: string;
  logo?: string;
  location: string;
  period: string;
  role: string;
  achievements?: string[];
  details?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => new Set(prev).add(index));
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [items.length]);

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[hsl(var(--timeline-line))]" />

      <div className="space-y-12">
        {items.map((item, index) => {
          const isVisible = visibleItems.has(index);
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`relative transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
              }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div
                  className={`${
                    isLeft ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"
                  } pl-20 md:pl-0`}
                >
                  <div
                    className={`bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300 ${
                      isVisible ? "animate-scale-in" : ""
                    }`}
                  >
                    {/* Logo */}
                    {item.logo && (
                      <div
                        className={`mb-4 ${
                          isLeft ? "md:flex md:justify-end" : "flex justify-start"
                        }`}
                      >
                        <img
                          src={item.logo}
                          alt={`${item.company} logo`}
                          className="h-10 w-auto object-contain brightness-90 hover:brightness-110 transition-all"
                        />
                      </div>
                    )}

                    <div className="mb-3">
                      <p className="text-sm text-muted-foreground">
                        {item.company} • {item.location}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{item.period}</p>
                    </div>

                    <h3 className="text-xl font-serif font-medium mb-4 text-foreground">
                      {item.role}
                    </h3>

                    {item.achievements && (
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground leading-relaxed"
                          >
                            • {achievement}
                          </li>
                        ))}
                      </ul>
                    )}

                    {item.details && (
                      <ul className="space-y-2">
                        {item.details.map((detail, i) => (
                          <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                            • {detail}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Type badge */}
                    <div className="mt-4 pt-4 border-t border-border">
                      <span
                        className={`text-xs px-3 py-1 rounded-full ${
                          item.type === "experience"
                            ? "bg-primary/10 text-primary"
                            : "bg-accent/10 text-accent"
                        }`}
                      >
                        {item.type === "experience" ? "Experience" : "Education"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div
                  className={`absolute left-8 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary -translate-x-1/2 border-4 border-background transition-all duration-500 ${
                    isVisible ? "scale-100" : "scale-0"
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
