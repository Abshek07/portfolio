import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science (Data Science)",
    institution: "GM University",
    period: "Expected 2027",
    icon: GraduationCap,
  },
  {
    degree: "Pre-University",
    institution: "SM Independent PU College, Dharwad",
    period: "2021 | 84.96%",
    icon: Award,
  },
  {
    degree: "Secondary School",
    institution: "Government High School, Kalasur",
    period: "2019 | 82.56%",
    icon: Calendar,
  },
];

const experiences = [
  "Google Student Ambassador – GM University",
  "Hackathon Participant – Ignitron",
  "Hackathon Participant – InCubate 2025",
  "Academic and ML-based project experience",
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-display font-semibold mb-4 neon-text">
                Who am I?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I am Abhishekagouda Naganagouda Patil, a B.Tech Computer Science student 
                specialized in Data Science. I am passionate about software development, 
                machine learning, and building intelligent systems that solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My interests lie in sentiment analysis, predictive modeling, and automation. 
                My projects include MediConnect, a Machine Learning-based Sentiment Analysis model, 
                and a Blood Management System.
              </p>
            </div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-8 mt-6"
            >
              <h3 className="text-2xl font-display font-semibold mb-4 neon-text">
                Experience & Activities
              </h3>
              <ul className="space-y-3">
                {experiences.map((exp, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {exp}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-semibold neon-text mb-6">
              Education
            </h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="glass-card-hover p-6 flex gap-4"
              >
                <div className="p-3 rounded-lg bg-primary/10 h-fit">
                  <edu.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-lg mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-muted-foreground mb-1">{edu.institution}</p>
                  <p className="text-sm text-primary">{edu.period}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
