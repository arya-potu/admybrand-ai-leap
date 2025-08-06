import { AuroraButton } from "@/components/ui/aurora-button"
import { AuroraText } from "@/components/ui/aurora-text"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import heroImage from "@/assets/hero-cosmic.jpg"

export function HeroSection() {
  return (
    <section className="theme-hero relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'var(--section-bg)' }}>
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/15 to-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <ScrollReveal delay={200}>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-full px-6 py-3 mb-6 shadow-md">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-bold text-blue-700">Powered by Advanced AI</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6" style={{ color: 'hsl(var(--section-primary))' }}>
                Transform Your
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent font-extrabold">
                  Brand's Future
                </span>
                <br />
                with <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent font-extrabold">AI</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <p className="text-xl font-medium mb-8 max-w-2xl" style={{ color: 'hsl(var(--section-text))' }}>
                ADmyBRAND AI Suite revolutionizes marketing with intelligent automation, 
                predictive analytics, and creative AI that scales your brand to new heights.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={800}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all text-lg font-bold group shadow-lg hover:shadow-xl transform hover:scale-105">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 rounded-xl hover:bg-gray-900 hover:text-white transition-all text-lg font-bold group shadow-md hover:shadow-lg transform hover:scale-105">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1000}>
              <div className="flex items-center gap-8 mt-12 justify-center lg:justify-start">
                <div className="text-center">
                  <AuroraText variant="glow" size="2xl" className="font-bold block">
                    10k+
                  </AuroraText>
                  <span className="text-sm font-semibold text-gray-700">Active Users</span>
                </div>
                <div className="text-center">
                  <AuroraText variant="glow" size="2xl" className="font-bold block">
                    500%
                  </AuroraText>
                  <span className="text-sm font-semibold text-gray-700">ROI Increase</span>
                </div>
                <div className="text-center">
                  <AuroraText variant="glow" size="2xl" className="font-bold block">
                    24/7
                  </AuroraText>
                  <span className="text-sm font-semibold text-gray-700">AI Support</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <ScrollReveal delay={600} direction="right">
              <div className="relative group">
                <div className="absolute inset-0 bg-aurora rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                <img 
                  src={heroImage} 
                  alt="ADmyBRAND AI Suite Dashboard" 
                  className="relative z-10 w-full h-auto rounded-3xl shadow-aurora transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Stats Cards */}
                <div className="absolute -top-4 -right-4 bg-glass/60 backdrop-blur-glass border border-glass-border rounded-xl p-4 animate-float">
                  <div className="text-center">
                    <AuroraText variant="cosmic" className="text-2xl font-bold block">
                      +127%
                    </AuroraText>
                    <span className="text-xs font-medium text-gray-600">Conversion Rate</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-glass/60 backdrop-blur-glass border border-glass-border rounded-xl p-4 animate-float" style={{ animationDelay: "1s" }}>
                  <div className="text-center">
                    <AuroraText variant="cosmic" className="text-2xl font-bold block">
                      2.4s
                    </AuroraText>
                    <span className="text-xs font-medium text-gray-600">AI Response</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}