import { GlassCard } from "@/components/ui/glass-card"
import { AuroraText } from "@/components/ui/aurora-text"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { 
  Brain, 
  Target, 
  TrendingUp, 
  Zap, 
  Shield, 
  Palette,
  BarChart3,
  Sparkles
} from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Content Creation",
    description: "Generate compelling copy, visuals, and campaigns with our advanced AI engine that understands your brand voice.",
    color: "text-primary",
    delay: 200
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Leverage machine learning to identify and reach your ideal customers with surgical precision across all channels.",
    color: "text-secondary",
    delay: 300
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Forecast market trends, customer behavior, and campaign performance before they happen with our AI insights.",
    color: "text-accent",
    delay: 400
  },
  {
    icon: Zap,
    title: "Real-time Optimization",
    description: "Automatically adjust campaigns, budgets, and strategies in real-time for maximum ROI and performance.",
    color: "text-tertiary",
    delay: 500
  },
  {
    icon: Shield,
    title: "Brand Protection",
    description: "Monitor and protect your brand reputation across the internet with AI-powered sentiment analysis and alerts.",
    color: "text-primary",
    delay: 600
  },
  {
    icon: Palette,
    title: "Creative Studio",
    description: "Access an infinite creative studio with AI-generated designs, videos, and multimedia content for any campaign.",
    color: "text-secondary",
    delay: 700
  },
  {
    icon: BarChart3,
    title: "Advanced Reporting",
    description: "Get comprehensive insights with interactive dashboards and automated reports that reveal actionable opportunities.",
    color: "text-accent",
    delay: 800
  },
  {
    icon: Sparkles,
    title: "Automation Workflows",
    description: "Create sophisticated marketing workflows that run on autopilot while maintaining human oversight and control.",
    color: "text-tertiary",
    delay: 900
  }
]

export function FeaturesSection() {
  return (
    <section className="theme-features py-24 bg-white relative overflow-hidden">
      {/* Clean background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-glass/30 backdrop-blur-glass border border-glass-border rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Powerful Features</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Everything You Need to
              <br />
              <AuroraText variant="aurora" size="6xl" as="span" className="font-bold">
                Dominate Your Market
              </AuroraText>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive AI suite provides all the tools, insights, and automation 
              you need to scale your marketing efforts and achieve unprecedented growth.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={feature.delay} direction="up">
              <GlassCard 
                variant="elevated" 
                className="group hover:scale-105 transition-all duration-500 h-full"
              >
                <div className="flex flex-col h-full">
                  <div className={`w-12 h-12 rounded-xl bg-white/80 border border-gray-200 flex items-center justify-center mb-4 group-hover:shadow-xl group-hover:bg-white transition-all duration-300`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed flex-1">
                    {feature.description}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-glass-border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm text-primary font-medium">Learn more →</span>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={1000}>
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2 text-sm text-gray-600">
              <span>And 50+ more advanced features</span>
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}