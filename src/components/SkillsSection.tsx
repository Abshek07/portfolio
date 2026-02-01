import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code, 
  Globe, 
  Database, 
  BarChart3, 
  FileCode2, 
  Terminal 
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "C", "Java", "JavaScript"],
    color: "from-primary to-accent",
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript", "Flutter"],
    color: "from-accent to-neon-blue",
  },
  {
    title: "Core CS",
    icon: Terminal,
    skills: ["Data Structures & Algorithms (DSA)"],
    color: "from-neon-blue to-primary",
  },
  {
    title: "Data Science / Analysis",
    icon: BarChart3,
    skills: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "EDA",
      "Machine Learning",
      "Scikit-learn",
      "Feature Engineering",
      "Model Evaluation",
      "Jupyter Notebook",
    ],
    color: "from-primary to-secondary",
  },
  {
    title: "Data Tools",
    icon: Database,
    skills: ["SQL", "Tableau", "Power BI"],
    color: "from-secondary to-accent",
  },
  {
    title: "Other Tools",
    icon: FileCode2,
    skills: ["Git", "VS Code", "Google Colab"],
    color: "from-accent to-primary",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-hover p-6 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-20`}>
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + skillIndex * 0.05,
                    }}
                    className="px-3 py-1.5 text-sm rounded-full bg-muted text-muted-foreground 
                             hover:bg-primary/20 hover:text-primary transition-all duration-300
                             border border-transparent hover:border-primary/30 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
