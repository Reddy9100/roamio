/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		keyframes: {
			'fab-glow': {
			  '0%, 100%': {
				transform: 'translateY(0)',
				boxShadow: '0 0 5px rgba(255, 255, 255, 0.3), 0 0 10px rgba(255, 255, 255, 0.4)',
			  },
			  '50%': {
				transform: 'translateY(3px)',
				boxShadow: '0 0 15px rgba(255, 255, 255, 0.7), 0 0 25px rgba(255, 255, 255, 0.9)',
			  },
			},
		  },
		  animation: {
			'fab-glow': 'fab-glow 2.4s ease-in-out infinite',
		  },
		  
		colors: {
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))',
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))',
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))',
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))',
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))',
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))',
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))',
		  },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  chart: {
			'1': 'hsl(var(--chart-1))',
			'2': 'hsl(var(--chart-2))',
			'3': 'hsl(var(--chart-3))',
			'4': 'hsl(var(--chart-4))',
			'5': 'hsl(var(--chart-5))',
		  },
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
		fontFamily: {
		  sans: ['var(--font-inter)', 'sans-serif'],
		  inter: ['var(--font-inter)', 'sans-serif'],
		  rubik: ['var(--font-roboto-mono)', 'sans-serif'],
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  