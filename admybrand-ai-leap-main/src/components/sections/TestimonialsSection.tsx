import { GlassCard } from "@/components/ui/glass-card"
import { AuroraText } from "@/components/ui/aurora-text"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { LazyImage } from "@/components/performance/LazyImage"
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CMO at TechFlow",
    company: "TechFlow Inc.",
    content: "ADmyBRAND transformed our marketing completely. We've seen a 300% increase in qualified leads and our campaign ROI improved by 450%. The AI insights are game-changing.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face",
    delay: 200
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder & CEO",
    company: "GrowthLab",
    content: "The predictive analytics feature helped us identify market opportunities 6 months before our competitors. We've captured 40% more market share this year.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    delay: 300
  },
  {
    name: "Emily Watson",
    role: "Marketing Director",
    company: "Stellar Brands",
    content: "From content creation to campaign optimization, ADmyBRAND handles everything. Our team productivity increased by 200% while maintaining premium quality.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    delay: 400
  },
  {
    name: "David Kim",
    role: "Head of Digital",
    company: "InnovateCorp",
    content: "The real-time optimization feature alone saved us $50K in ad spend last quarter. The AI learns and adapts faster than any human team could.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    delay: 500
  },
  {
    name: "Lisa Thompson",
    role: "VP Marketing",
    company: "ScaleUp Solutions",
    content: "We've been able to scale our marketing efforts 10x without increasing our team size. The automation workflows are incredibly sophisticated yet easy to use.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=100&h=100&fit=crop&crop=face",
    delay: 600
  },
  {
    name: "Alex Parker",
    role: "Chief Growth Officer",
    company: "NextGen Media",
    content: "ADmyBRAND's creative AI generates content that's indistinguishable from our best human copywriters, but 100x faster. It's revolutionary.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    delay: 700
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonialsPerView = 3

  const nextTestimonials = () => {
    setCurrentIndex((prev) => 
      prev + testimonialsPerView >= testimonials.length ? 0 : prev + testimonialsPerView
    )
  }

  const prevTestimonials = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, testimonials.length - testimonialsPerView) : Math.max(0, prev - testimonialsPerView)
    )
  }

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + testimonialsPerView)

  return (
    <section className="theme-testimonials py-24 bg-white relative overflow-hidden">
      {/* Clean background */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-10 left-10 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-glass/30 backdrop-blur-glass border border-glass-border rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Customer Stories</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Loved by
              <br />
              <AuroraText variant="shimmer" size="6xl" as="span" className="font-bold">
                10,000+ Marketers
              </AuroraText>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of marketing professionals who have transformed their 
              businesses with ADmyBRAND AI Suite. Here's what they have to say.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {visibleTestimonials.map((testimonial, index) => (
              <ScrollReveal key={`${currentIndex}-${index}`} delay={testimonial.delay} direction="up">
                <GlassCard variant="elevated" className="group hover:scale-105 transition-all duration-500 h-full">
                  <div className="flex flex-col h-full">
                    {/* Quote Icon */}
                    <div className="w-12 h-12 bg-glass/50 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                      <Quote className="w-6 h-6 text-primary" />
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Content */}
                    <blockquote className="text-muted-foreground italic leading-relaxed mb-6 flex-1">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-6 border-t border-glass-border">
                      <LazyImage
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full border-2 border-primary/20 flex-shrink-0"
                      />
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevTestimonials}
              className="p-3 bg-glass/30 backdrop-blur-glass border border-glass-border rounded-full hover:bg-glass/50 hover:shadow-glow transition-all duration-300"
              disabled={currentIndex === 0}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(testimonials.length / testimonialsPerView) }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i * testimonialsPerView)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / testimonialsPerView) === i
                      ? 'bg-primary w-8'
                      : 'bg-glass-border hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonials}
              className="p-3 bg-glass/30 backdrop-blur-glass border border-glass-border rounded-full hover:bg-glass/50 hover:shadow-glow transition-all duration-300"
              disabled={currentIndex + testimonialsPerView >= testimonials.length}
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <ScrollReveal delay={800}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-glass-border">
            <div className="text-center">
              <AuroraText variant="glow" size="3xl" className="font-bold block mb-2">
                10k+
              </AuroraText>
              <span className="text-sm text-muted-foreground">Happy Customers</span>
            </div>
            <div className="text-center">
              <AuroraText variant="glow" size="3xl" className="font-bold block mb-2">
                4.9/5
              </AuroraText>
              <span className="text-sm text-muted-foreground">Average Rating</span>
            </div>
            <div className="text-center">
              <AuroraText variant="glow" size="3xl" className="font-bold block mb-2">
                500%
              </AuroraText>
              <span className="text-sm text-muted-foreground">ROI Increase</span>
            </div>
            <div className="text-center">
              <AuroraText variant="glow" size="3xl" className="font-bold block mb-2">
                99.9%
              </AuroraText>
              <span className="text-sm text-muted-foreground">Uptime</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}