import { GlassCard } from "@/components/ui/glass-card"
import { AuroraButton } from "@/components/ui/aurora-button"
import { AuroraText } from "@/components/ui/aurora-text"
import { CosmicInput } from "@/components/ui/cosmic-input"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { useState } from "react"
import { Mail, MessageSquare, Phone, Send, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", company: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section className="theme-contact py-24 bg-white relative overflow-hidden">
      {/* Clean background */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-glass/30 backdrop-blur-glass border border-glass-border rounded-full px-4 py-2 mb-6">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Get in Touch</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Transform
              <br />
              <AuroraText variant="aurora" size="6xl" as="span" className="font-bold">
                Your Marketing?
              </AuroraText>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with our team to learn how ADmyBRAND can revolutionize 
              your marketing strategy. We're here to help you succeed.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <ScrollReveal delay={200} direction="left">
            <GlassCard variant="elevated" className="h-full">
              <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2 text-primary">Message Sent!</h4>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <CosmicInput
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        variant="aurora"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <CosmicInput
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        variant="aurora"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <CosmicInput
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      variant="aurora"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your marketing goals..."
                      required
                      rows={4}
                      className="w-full rounded-glass border border-glass-border bg-glass/30 backdrop-blur-glass px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus:bg-glass/50 focus:shadow-aurora transition-all duration-300"
                    />
                  </div>
                  
                  <AuroraButton 
                    type="submit" 
                    variant="aurora" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </AuroraButton>
                </form>
              )}
            </GlassCard>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal delay={400} direction="right">
            <div className="space-y-8">
              <GlassCard variant="default">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-glass/50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Email us</h4>
                    <p className="text-muted-foreground mb-1">Get in touch via email</p>
                    <a href="mailto:hello@admybrand.ai" className="text-primary hover:text-primary-glow transition-colors">
                      hello@admybrand.ai
                    </a>
                  </div>
                </div>
              </GlassCard>

              <GlassCard variant="default">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-glass/50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Call us</h4>
                    <p className="text-muted-foreground mb-1">Mon-Fri 9AM-6PM PST</p>
                    <a href="tel:+15551234567" className="text-primary hover:text-primary-glow transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </GlassCard>

              <GlassCard variant="default">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-glass/50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Live Chat</h4>
                    <p className="text-muted-foreground mb-3">Chat with our support team</p>
                    <AuroraButton variant="glass" size="sm">
                      Start Chat
                    </AuroraButton>
                  </div>
                </div>
              </GlassCard>

              {/* Demo CTA */}
              <GlassCard variant="premium" className="text-center">
                <h4 className="text-xl font-semibold mb-2">Want a personalized demo?</h4>
                <p className="text-muted-foreground mb-4">
                  See ADmyBRAND in action with your specific use case
                </p>
                <AuroraButton variant="aurora" className="w-full">
                  Schedule Demo
                </AuroraButton>
              </GlassCard>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}