
import Navbar from "./komponen/navbar";
import HeroSection from "./komponen/HeroSection";
import AboutSection from "./komponen/AboutSection";
import ExpertiseSection from "./komponen/ExpertiseSection";
import ExperienceSection from "./komponen/ExperienceSection";
import EducationSection from "./komponen/EducationSection";
import TestimonialSection from "./komponen/TestimonialSection";
import SocialImpactSection from "./komponen/SocialImpactSection";
import ContactSection from "./komponen/ContactSection";
import Footer from "./komponen/footer";

export default function Home() {
    return (
        <main>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ExpertiseSection />
            <ExperienceSection />
            <EducationSection />
            <TestimonialSection />
            <SocialImpactSection />
            <ContactSection />
            <Footer />
        </main>
    );
}