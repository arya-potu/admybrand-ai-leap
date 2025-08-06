import { Navbar } from "@/components/navigation/Navbar"
import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { PricingSection } from "@/components/sections/PricingSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { FooterSection } from "@/components/sections/FooterSection"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <div id="features">
          <FeaturesSection />
        </div>
        
        <div id="pricing">
          <PricingSection />
        </div>
        
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        
        <div id="faq">
          <FAQSection />
        </div>
        
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      
      <FooterSection />
    </div>
  )
}