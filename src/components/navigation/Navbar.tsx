import { useState, useEffect } from "react"
import { AuroraButton } from "@/components/ui/aurora-button"
import { AuroraText } from "@/components/ui/aurora-text"
import { CosmicModal, CosmicModalContent, CosmicModalHeader, CosmicModalTitle, CosmicModalTrigger } from "@/components/ui/cosmic-modal"
import { CosmicInput } from "@/components/ui/cosmic-input"
import { Brain, Menu, X, ChevronDown } from "lucide-react"

const navigationItems = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" }
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-aurora border-b border-gray-800 shadow-xl' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-aurora rounded-lg flex items-center justify-center animate-aurora-shift">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <AuroraText variant="cosmic" size="lg" className="font-bold">
                ADmyBRAND
              </AuroraText>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-700 hover:text-primary transition-colors text-sm font-medium"
                  >
                    {item.name}
                  </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <CosmicModal>
                <CosmicModalTrigger asChild>
                  <button className="text-gray-700 hover:text-primary transition-colors text-sm font-medium">
                    Login
                  </button>
                </CosmicModalTrigger>
                <CosmicModalContent>
                  <CosmicModalHeader>
                    <CosmicModalTitle>Welcome Back</CosmicModalTitle>
                  </CosmicModalHeader>
                  <div className="space-y-4">
                    <CosmicInput placeholder="Email" type="email" variant="aurora" className="bg-white border-gray-300 text-gray-900" />
                    <CosmicInput placeholder="Password" type="password" variant="aurora" className="bg-white border-gray-300 text-gray-900" />
                    <AuroraButton variant="aurora" className="w-full bg-primary hover:bg-primary-hover text-white font-semibold shadow-lg">
                      Sign In
                    </AuroraButton>
                  </div>
                </CosmicModalContent>
              </CosmicModal>
              
              <AuroraButton variant="aurora" size="sm" className="bg-primary hover:bg-primary-hover text-white font-semibold shadow-lg">
                Start Free Trial
              </AuroraButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-aurora border-t border-gray-800">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-gray-700 hover:text-primary transition-colors text-sm font-medium py-2"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-4 border-t border-gray-800 space-y-3">
                  <button className="text-left text-gray-700 hover:text-primary transition-colors text-sm font-medium">
                    Login
                  </button>
                  <AuroraButton variant="aurora" size="sm" className="w-full bg-primary hover:bg-primary-hover text-white font-semibold shadow-lg">
                    Start Free Trial
                  </AuroraButton>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16" />
    </>
  )
}