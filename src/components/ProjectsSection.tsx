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
      "A comprehensive healthcare management system featuring patient history tracking, appointment reminders, and seamless doctor connectivity.",
    tags: ["Healthcare", "System Design", "UI/UX"],
    image: mediconnectImg,
    github: "https://github.com/Abshek07/mediconnect",
    demo: "https://mediconnect-health-hub-eight.vercel.app/",
  },
  {
    title: "Digital Mental Health System",
    description:
      "An early mental health assessment platform focused on privacy and accessibility.",
    tags: ["Mental Health", "Privacy", "Accessibility"],
    image: mentalHealthImg,
  },
  {
    title: "Sentiment Analysis ML Model",
    description:
      "ML model using Python & Scikit-learn for sentiment classification.",
    tags: ["Python", "Scikit-learn", "NLP"],
    image: sentimentImg,
  },
  {
    title: "Blood Management System",
    description:
      "Blood inventory system for donation and request tracking.",
    tags: ["Web Dev", "Database", "Healthcare"],
    image: bloodManagementImg,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="section-container">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="glass-card overflow-hidden"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">

                  <h3 className="text-xl font-semibold">
                    {project.title}
                  </h3>

                  <div className="flex gap-2">

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="icon" variant="ghost">
                          <Github size={18} />
                        </Button>
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="icon" variant="ghost">
                          <ExternalLink size={18} />
                        </Button>
                      </a>
                    )}

                  </div>

                </div>

                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
