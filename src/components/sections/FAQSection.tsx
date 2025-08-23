import { GlassCard } from "@/components/ui/glass-card"
import { AuroraText } from "@/components/ui/aurora-text"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { HelpCircle, Plus, Minus } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "How does ADmyBRAND's AI actually work?",
    answer: "Our AI combines large language models, computer vision, and machine learning algorithms trained on billions of marketing data points. It learns your brand voice, analyzes market trends, and generates content that's tailored to your specific audience and goals.",
    delay: 200
  },
  {
    question: "Can I integrate ADmyBRAND with my existing marketing tools?",
    answer: "Absolutely! We offer native integrations with 200+ marketing tools including HubSpot, Salesforce, Google Ads, Facebook Ads, Shopify, and more. Our API also allows for custom integrations with any platform.",
    delay: 300
  },
  {
    question: "How quickly can I see results?",
    answer: "Most customers see initial improvements within the first week. Significant results typically appear within 30 days, with many achieving 200-400% ROI improvements within 90 days of implementation.",
    delay: 400
  },
  {
    question: "Is my data secure with ADmyBRAND?",
    answer: "Yes, we take security extremely seriously. We're SOC 2 Type II certified, GDPR compliant, and use enterprise-grade encryption. Your data is never used to train our models for other customers, and you maintain full ownership of your content.",
    delay: 500
  },
  {
    question: "Do I need technical expertise to use ADmyBRAND?",
    answer: "Not at all! Our platform is designed for marketers, not developers. The interface is intuitive and user-friendly. We also provide comprehensive onboarding, training, and 24/7 support to ensure your success.",
    delay: 600
  },
  {
    question: "What makes ADmyBRAND different from other AI marketing tools?",
    answer: "Unlike basic AI tools that generate generic content, ADmyBRAND offers a complete marketing intelligence suite. We provide predictive analytics, real-time optimization, brand protection, and creative automation all in one platform, with AI that truly understands your brand.",
    delay: 700
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription anytime with no penalties or hidden fees. We offer a 14-day free trial and flexible month-to-month plans. If you're not satisfied, we even offer a 30-day money-back guarantee.",
    delay: 800
  },
  {
    question: "How does the AI learn my brand voice?",
    answer: "Our AI analyzes your existing content, brand guidelines, and communication patterns to understand your unique voice. It continuously learns from your feedback and approvals, becoming more accurate over time. You can also manually train it with specific examples and preferences.",
    delay: 900
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="theme-faq py-24 bg-gray-50 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-blue-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-glass/30 backdrop-blur-glass border border-glass-border rounded-full px-4 py-2 mb-6">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">FAQ</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked
              <br />
              <AuroraText variant="aurora" size="6xl" as="span" className="font-bold">
                Questions
              </AuroraText>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get answers to the most common questions about ADmyBRAND AI Suite. 
              Can't find what you're looking for? Contact our support team.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={faq.delay} direction="up">
              <GlassCard 
                variant="default" 
                className={`mb-4 cursor-pointer transition-all duration-300 ${
                  openIndex === index ? 'shadow-glow border-primary/30' : 'hover:shadow-glass'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-primary" />
                    ) : (
                      <Plus className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </div>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 mt-4' : 'max-h-0'
                }`}>
                  <div className="pt-4 border-t border-glass-border">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Contact Support */}
        <ScrollReveal delay={1000}>
          <div className="text-center mt-16">
            <GlassCard variant="elevated" className="max-w-md mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-glass/50 rounded-xl flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
                <p className="text-muted-foreground mb-4">
                  Our support team is here to help you succeed.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="px-4 py-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors">
                    Contact Support
                  </button>
                  <button className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors">
                    Schedule Demo
                  </button>
                </div>
              </div>
            </GlassCard>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}