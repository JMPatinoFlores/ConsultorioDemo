import { AboutSection } from "@/components/About";
import { ContactSection } from "@/components/Contact";
import { GallerySection } from "@/components/Gallery";
import HeroSection from "@/components/Hero";
import { ServicesSection } from "@/components/Services";
import { FloatingWhatsApp } from "@/components/WhatsAppButton";

export default function Home() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <GallerySection />
            <ContactSection />
            <FloatingWhatsApp />
        </div>
    );
}
