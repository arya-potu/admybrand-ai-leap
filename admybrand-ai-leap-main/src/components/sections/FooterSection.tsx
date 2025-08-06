import { AuroraText } from "@/components/ui/aurora-text"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { CosmicInput } from "@/components/ui/cosmic-input"
import { AuroraButton } from "@/components/ui/aurora-button"
import { 
  Brain, 
  Twitter, 
  Linkedin, 
  Github, 
  Youtube,
  Mail,
  MapPin,
  Phone
} from "lucide-react"

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "API Documentation", href: "/docs" },
    { name: "Integrations", href: "/integrations" },
    { name: "Changelog", href: "/changelog" }
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Press Kit", href: "/press" },
    { name: "Contact", href: "/contact" },
    { name: "Partners", href: "/partners" }
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Help Center", href: "/help" },
    { name: "Community", href: "/community" },
    { name: "Webinars", href: "/webinars" },
    { name: "Case Studies", href: "/cases" }
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR", href: "/gdpr" },
    { name: "Security", href: "/security" }
  ]
}

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/admybrand", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/admybrand", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/admybrand", label: "GitHub" },
  { icon: Youtube, href: "https://youtube.com/admybrand", label: "YouTube" }
]

export function FooterSection() {
  return (
    <footer className="theme-footer bg-gray-900 border-t border-gray-800 relative overflow-hidden">
      {/* Clean dark background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Newsletter Section */}
        <ScrollReveal>
          <div className="py-16 border-b border-glass-border">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Stay ahead with
                <br />
                <AuroraText variant="shimmer" size="4xl" as="span" className="font-bold">
                  AI Marketing Insights
                </AuroraText>
              </h3>
              <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
                Get the latest trends, tips, and strategies delivered to your inbox. 
                Join 50,000+ marketers who trust our insights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <CosmicInput 
                  placeholder="Enter your email" 
                  type="email"
                  variant="glow"
                  className="flex-1"
                />
                <AuroraButton variant="aurora" className="bg-primary hover:bg-primary-hover text-white font-semibold shadow-lg">
                  Subscribe
                </AuroraButton>
              </div>
              
              <p className="text-xs text-gray-300 mt-4">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={200}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-aurora rounded-xl flex items-center justify-center animate-aurora-shift">
                    <Brain className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <AuroraText variant="cosmic" size="xl" className="font-bold">
                    ADmyBRAND
                  </AuroraText>
                </div>
                
                <p className="text-gray-200 mb-6 max-w-sm">
                  Revolutionizing marketing with AI-powered solutions that scale 
                  your brand to new heights. Join the future of marketing today.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-200">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>San Francisco, CA 94105</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-200">
                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-200">
                    <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>hello@admybrand.ai</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-4 grid sm:grid-cols-4 gap-8">
              <ScrollReveal delay={300}>
                <div>
                  <h4 className="font-semibold text-white mb-4">Product</h4>
                  <ul className="space-y-2">
                    {footerLinks.product.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={link.href}
                          className="text-gray-200 hover:text-primary transition-colors text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div>
                  <h4 className="font-semibold text-white mb-4">Company</h4>
                  <ul className="space-y-2">
                    {footerLinks.company.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={link.href}
                          className="text-gray-200 hover:text-primary transition-colors text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <div>
                  <h4 className="font-semibold text-white mb-4">Resources</h4>
                  <ul className="space-y-2">
                    {footerLinks.resources.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={link.href}
                          className="text-gray-200 hover:text-primary transition-colors text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={600}>
                <div>
                  <h4 className="font-semibold text-white mb-4">Legal</h4>
                  <ul className="space-y-2">
                    {footerLinks.legal.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={link.href}
                          className="text-gray-200 hover:text-primary transition-colors text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <ScrollReveal delay={700}>
          <div className="py-8 border-t border-glass-border flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-200">
              © 2024 ADmyBRAND AI Suite. All rights reserved.
            </div>
            
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 backdrop-blur-glass border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 hover:shadow-glow hover:border-primary/50 transition-all duration-300 text-white"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}