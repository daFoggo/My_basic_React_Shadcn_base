/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		fontFamily: {
  			clash: ["ClashDisplay", "sans-serif"],
  			spaceGrotesk: ["Space Grotesk", "sans-serif"],
  			dmSans: ["DM Sans", "sans-serif"],
  			inter: ["Inter", "sans-serif"],
  			jetBrains: ["JetBrains Mono", "monospace"]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			indigo: {
  				'50': '#eef2ff',
  				'100': '#e0e7ff',
  				'200': '#c7d2fe',
  				'300': '#a5b4fc',
  				'400': '#818cf8',
  				'500': '#6366f1',
  				'600': '#4f46e5',
  				'700': '#4338ca',
  				'800': '#3730a3',
  				'900': '#312e81',
  				'950': '#1e1b4b'
  			},
  			blue: {
  				'50': '#eff6ff',
  				'100': '#dbeafe',
  				'200': '#bfdbfe',
  				'300': '#93c5fd',
  				'400': '#60a5fa',
  				'500': '#3b82f6',
  				'600': '#2563eb',
  				'700': '#1d4ed8',
  				'800': '#1e40af',
  				'900': '#1e3a8a',
  				'950': '#172554'
  			},
  			orange: {
  				'50': '#fff7ed',
  				'100': '#ffedd5',
  				'200': '#fed7aa',
  				'300': '#fdba74',
  				'400': '#fb923c',
  				'500': '#f97316',
  				'600': '#ea580c',
  				'700': '#c2410c',
  				'800': '#9a3412',
  				'900': '#7c2d12',
  				'950': '#431407'
  			},
  			emerald: {
  				'50': '#ecfdf5',
  				'100': '#d1fae5',
  				'200': '#a7f3d0',
  				'300': '#6ee7b7',
  				'400': '#34d399',
  				'500': '#10b981',
  				'600': '#059669',
  				'700': '#047857',
  				'800': '#065f46',
  				'900': '#064e3b',
  				'950': '#022c22'
  			},
  			red: {
  				'50': '#fef2f2',
  				'100': '#fee2e2',
  				'200': '#fecaca',
  				'300': '#fca5a5',
  				'400': '#f87171',
  				'500': '#ef4444',
  				'600': '#dc2626',
  				'700': '#b91c1c',
  				'800': '#991b1b',
  				'900': '#7f1d1d',
  				'950': '#450a0a'
  			},
  			zinc: {
  				'50': '#fafafa',
  				'100': '#f4f4f5',
  				'200': '#e4e4e7',
  				'300': '#d4d4d8',
  				'400': '#a1a1aa',
  				'500': '#71717a',
  				'600': '#52525b',
  				'700': '#3f3f46',
  				'800': '#27272a',
  				'900': '#18181b',
  				'950': '#09090b'
  			},
  			gray: {
  				'50': '#f9fafb',
  				'100': '#f3f4f6',
  				'200': '#e5e7eb',
  				'300': '#d1d5db',
  				'400': '#9ca3af',
  				'500': '#6b7280',
  				'600': '#4b5563',
  				'700': '#374151',
  				'800': '#1f2937',
  				'900': '#111827',
  				'950': '#030712'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
