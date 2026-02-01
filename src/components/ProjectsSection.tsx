import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

import mediconnectImg from "@/assets/project-mediconnect.jpg";
import mentalHealthImg from "@/assets/project-mental-health.jpg";
import sentimentImg from "@/assets/project-sentiment.jpg";
import bloodManagementImg from "@/assets/project-blood-management.jpg";

const projects = [
  {
    title: "MediConnect",
    description:
      "A comprehensive healthcare management system featuring patient history tracking, appointment reminders, and seamless doctor connectivity. Emphasis on intuitive UI/UX and robust system design.",
    tags: ["Healthcare", "System Design", "UI/UX"],
    image: mediconnectImg,
    color: "from-primary to-accent",
  },
  {
    title: "Digital Mental Health System",
    description:
      "An early mental health assessment platform designed with a focus on privacy, accessibility, and user-friendly interface. Helps users identify potential mental health concerns early.",
    tags: ["Mental Health", "Privacy", "Accessibility"],
    image: mentalHealthImg,
    color: "from-accent to-secondary",
  },
  {
    title: "Sentiment Analysis ML Model",
    description:
      "Machine learning model built using Python and Scikit-learn for classifying text sentiments into positive, negative, and neutral categories with high accuracy.",
    tags: ["Python", "Scikit-learn", "NLP"],
    image: sentimentImg,
    color: "from-secondary to-primary",
  },
  {
    title: "Blood Management System",
    description:
      "A transparent blood inventory management system enabling efficient request and donation tracking. Built using modern web and database technologies.",
    tags: ["Web Dev", "Database", "Healthcare"],
    image: bloodManagementImg,
    color: "from-primary to-neon-blue",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="glass-card group relative overflow-hidden"
              style={{
                transform: hoveredIndex === index 
                  ? "perspective(1000px) rotateX(2deg) rotateY(2deg)" 
                  : "perspective(1000px) rotateX(0) rotateY(0)",
                transition: "transform 0.3s ease-out",
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display font-semibold text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="w-9 h-9 text-muted-foreground hover:text-primary"
                    >
                      <Github size={18} />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="w-9 h-9 text-muted-foreground hover:text-primary"
                    >
                      <ExternalLink size={18} />
                    </Button>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at ${hoveredIndex === index ? '50% 50%' : '0% 0%'}, hsl(var(--primary) / 0.1), transparent 70%)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
