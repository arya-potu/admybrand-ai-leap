import { GlassCard } from "@/components/ui/glass-card"
import { AuroraButton } from "@/components/ui/aurora-button"
import { AuroraText } from "@/components/ui/aurora-text"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Check, Sparkles, Crown, Rocket } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "29",
    period: "month",
    description: "Perfect for small businesses and startups",
    icon: Sparkles,
    variant: "default" as const,
    popular: false,
    features: [
      "AI Content Generation (1,000 pieces/month)",
      "Basic Analytics Dashboard",
      "Email Campaign Automation",
      "Social Media Scheduling",
      "Brand Voice Training",
      "Standard Support"
    ],
    delay: 200
  },
  {
    name: "Professional",
    price: "99",
    period: "month",
    description: "Ideal for growing businesses and agencies",
    icon: Crown,
    variant: "premium" as const,
    popular: true,
    features: [
      "AI Content Generation (10,000 pieces/month)",
      "Advanced Predictive Analytics",
      "Multi-channel Campaign Automation",
      "A/B Testing & Optimization",
      "Custom Brand Training",
      "Priority Support",
      "Team Collaboration Tools",
      "Advanced Reporting"
    ],
    delay: 300
  },
  {
    name: "Enterprise",
    price: "299",
    period: "month",
    description: "For large organizations with complex needs",
    icon: Rocket,
    variant: "elevated" as const,
    popular: false,
    features: [
      "Unlimited AI Content Generation",
      "Real-time Market Intelligence",
      "Omnichannel Campaign Management",
      "Custom AI Model Training",
      "White-label Solutions",
      "Dedicated Account Manager",
      "Custom Integrations",
      "Enterprise Security & Compliance"
    ],
    delay: 400
  }
]

export function PricingSection() {
  return (
    <section className="theme-pricing py-24 bg-gray-50 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-glass/30 backdrop-blur-glass border border-glass-border rounded-full px-4 py-2 mb-6">
              <Crown className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Simple Pricing</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Choose Your
              <br />
              <AuroraText variant="cosmic" size="6xl" as="span" className="font-bold">
                Growth Plan
              </AuroraText>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start free and scale as you grow. No hidden fees, no setup costs, 
              and you can cancel anytime. All plans include our core AI features.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <ScrollReveal key={index} delay={plan.delay} direction="up">
              <GlassCard 
                variant={plan.variant}
                className={`relative group h-full ${
                  plan.popular 
                    ? 'transform scale-105 border-primary/50 shadow-aurora' 
                    : 'hover:scale-105'
                } transition-all duration-500`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-aurora text-primary-foreground px-4 py-1 rounded-full text-sm font-medium animate-aurora-shift">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/80 border border-gray-200 rounded-xl flex items-center justify-center group-hover:shadow-xl group-hover:bg-white transition-all duration-300">
                      <plan.icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-5xl font-bold">
                        <AuroraText variant="glow" as="span">
                          ${plan.price}
                        </AuroraText>
                      </span>
                      <span className="text-gray-600 ml-1">/{plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex-1 mb-8">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <AuroraButton 
                    variant={plan.popular ? "aurora" : "glass"} 
                    size="lg" 
                    className="w-full"
                  >
                    {plan.popular ? "Start Free Trial" : "Get Started"}
                  </AuroraButton>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom info */}
        <ScrollReveal delay={600}>
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-4">
              All plans include 14-day free trial • No credit card required • Cancel anytime
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}