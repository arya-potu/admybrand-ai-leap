import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				/* Aurora Color System */
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					glow: 'hsl(var(--secondary-glow))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					glow: 'hsl(var(--accent-glow))'
				},
				tertiary: {
					DEFAULT: 'hsl(var(--tertiary))',
					foreground: 'hsl(var(--tertiary-foreground))',
					glow: 'hsl(var(--tertiary-glow))'
				},
				
				/* Glass System */
				glass: 'hsl(var(--glass))',
				'glass-border': 'hsl(var(--glass-border))',
				
				/* Standard Colors */
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			
			/* Advanced Gradients */
			backgroundImage: {
				'aurora': 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 25%, hsl(var(--accent)) 50%, hsl(var(--tertiary)) 75%, hsl(var(--primary)) 100%)',
				'cosmic': 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(220 35% 8%) 50%, hsl(var(--background)) 100%)',
				'glass': 'linear-gradient(135deg, hsl(220 30% 15% / 0.3) 0%, hsl(220 30% 25% / 0.1) 100%)',
				'hero': 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(var(--primary) / 0.3) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 80%, hsl(var(--tertiary) / 0.2) 0%, transparent 60%), linear-gradient(180deg, hsl(var(--background)) 0%, hsl(220 35% 8%) 50%, hsl(var(--background)) 100%)',
				
				/* Section-specific themes */
				'theme-hero': 'var(--section-bg)',
				'theme-features': 'var(--section-bg)',
				'theme-pricing': 'var(--section-bg)',
				'theme-testimonials': 'var(--section-bg)',
				'theme-faq': 'var(--section-bg)',
				'theme-contact': 'var(--section-bg)',
				'theme-footer': 'var(--section-bg)'
			},
			
			/* Advanced Shadows */
			boxShadow: {
				'glass': 'var(--shadow-glass)',
				'glow': 'var(--shadow-glow)',
				'aurora': 'var(--shadow-aurora)'
			},
			
			/* Custom Border Radius */
			borderRadius: {
				'glass': 'var(--radius)',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 4px)',
				sm: 'calc(var(--radius) - 8px)'
			},
			
			/* Backdrop Blur */
			backdropBlur: {
				'glass': '24px',
				'aurora': '16px'
			},
			
			/* Advanced Animations */
			keyframes: {
				/* Existing */
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				
				/* Aurora Animations */
				'aurora-shift': {
					'0%, 100%': { 
						'background-position': '0% 50%',
						'background-size': '200% 200%'
					},
					'50%': { 
						'background-position': '100% 50%',
						'background-size': '300% 300%'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'glow-pulse': {
					'0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.05)' }
				},
				'morphing': {
					'0%, 100%': { borderRadius: '30% 70% 20% 80%' },
					'25%': { borderRadius: '70% 30% 80% 20%' },
					'50%': { borderRadius: '20% 80% 70% 30%' },
					'75%': { borderRadius: '80% 20% 30% 70%' }
				},
				'slide-up': {
					'0%': { 
						opacity: '0', 
						transform: 'translateY(40px)' 
					},
					'100%': { 
						opacity: '1', 
						transform: 'translateY(0)' 
					}
				},
				'slide-in-right': {
					'0%': { 
						opacity: '0', 
						transform: 'translateX(40px)' 
					},
					'100%': { 
						opacity: '1', 
						transform: 'translateX(0)' 
					}
				},
				'scale-in': {
					'0%': { 
						opacity: '0', 
						transform: 'scale(0.9)' 
					},
					'100%': { 
						opacity: '1', 
						transform: 'scale(1)' 
					}
				},
				'text-shimmer': {
					'0%': { 'background-position': '-200% center' },
					'100%': { 'background-position': '200% center' }
				}
			},
			
			animation: {
				/* Existing */
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				
				/* Aurora Animations */
				'aurora-shift': 'aurora-shift 8s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
				'morphing': 'morphing 10s ease-in-out infinite',
				'slide-up': 'slide-up 0.6s var(--ease-smooth)',
				'slide-in-right': 'slide-in-right 0.6s var(--ease-smooth)',
				'scale-in': 'scale-in 0.4s var(--ease-bounce)',
				'text-shimmer': 'text-shimmer 2s linear infinite'
			},
			
			/* Custom Transitions */
			transitionTimingFunction: {
				'smooth': 'var(--ease-smooth)',
				'bounce': 'var(--ease-bounce)',
				'elastic': 'var(--ease-elastic)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
