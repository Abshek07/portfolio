import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, Globe, Palette, Brain } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Data Analysis",
    description:
      "Transform raw data into actionable insights using advanced analytics, visualization, and statistical methods.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Build responsive, modern web applications with clean code and intuitive user experiences.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Create visually appealing and user-friendly interfaces that enhance user engagement and satisfaction.",
  },
  {
    icon: Brain,
    title: "ML Model Development",
    description:
      "Develop and deploy machine learning models for prediction, classification, and automation tasks.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            My <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-hover p-8 text-center group relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              </div>

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center
                           group-hover:bg-primary/20 transition-colors duration-300"
                >
                  <service.icon className="w-8 h-8 text-primary" />
                </motion.div>

                <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom border glow */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
