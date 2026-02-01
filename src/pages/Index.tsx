import { Helmet } from "react-helmet-async";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Abhishekagouda Patil | Data Science & ML Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Abhishekagouda Naganagouda Patil - B.Tech Computer Science student specialized in Data Science, Machine Learning, and Web Development."
        />
        <meta
          name="keywords"
          content="Abhishekagouda Patil, Data Science, Machine Learning, Web Development, Portfolio, B.Tech, Computer Science"
        />
        <meta name="author" content="Abhishekagouda Naganagouda Patil" />
        <link rel="canonical" href="https://abhishekagouda.dev" />
      </Helmet>

      <main className="relative min-h-screen overflow-hidden">
        <ParticleBackground />
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
