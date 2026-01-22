const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", ...fontFamily.sans],
      },
      // Catppuccin Macchiato palette
      colors: {
        ctp: {
          // Base colors
          base: '#24273a',
          mantle: '#1e2030',
          crust: '#181926',
          // Surface colors
          surface0: '#363a4f',
          surface1: '#494d64',
          surface2: '#5b6078',
          // Text colors
          text: '#cad3f5',
          subtext0: '#a5adcb',
          subtext1: '#b8c0e0',
          // Overlay
          overlay0: '#6e738d',
          overlay1: '#8087a2',
          overlay2: '#939ab7',
          // Accent colors
          mauve: '#c6a0f6',
          pink: '#f5bde6',
          blue: '#8aadf4',
          sapphire: '#7dc4e4',
          lavender: '#b7bdf8',
          flamingo: '#f0c6c6',
          rosewater: '#f4dbd6',
          // Latte equivalents (light mode)
          latte: {
            mauve: '#8839ef',
            lavender: '#7287fd',
            base: '#eff1f5',
            text: '#4c4f69',
            surface0: '#ccd0da',
          }
        }
      },
      backgroundColor: {
        dark: "#24273a",  // Catppuccin Macchiato Base
        lightGray: "#EEEEEE",
      },
      // Touch targets & component sizing
      spacing: {
        'touch': '2.75rem',       // 44px - WCAG minimum
        'touch-lg': '3rem',       // 48px - comfortable
      },
      size: {
        'icon-sm': '1rem',        // 16px
        'icon': '1.25rem',        // 20px
        'icon-lg': '1.5rem',      // 24px
        'touch': '2.75rem',       // 44px
        'logo': '2.5rem',         // 40px
      },
      minHeight: {
        'touch': '2.75rem',       // 44px
      },
      minWidth: {
        'touch': '2.75rem',       // 44px
      },
      typography: {
        DEFAULT: {
          css: {
            fontSize: "1.0625rem",  // 17px
            lineHeight: "1.75",
            a: {
              color: "#8839ef",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
              textDecorationThickness: "1px",
              fontWeight: "500",
              transition: "color 150ms ease-in-out",
              "&:hover": {
                color: "#7287fd",
              },
              "&:focus": {
                outline: "2px solid #8839ef",
                outlineOffset: "2px",
                borderRadius: "2px",
              },
            },
            h1: {
              fontSize: "2.5rem",
              fontWeight: "700",
              lineHeight: "1.2",
              marginTop: "0",
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            },
            h2: {
              fontSize: "1.875rem",
              fontWeight: "700",
              lineHeight: "1.3",
              marginTop: "3rem",
              marginBottom: "1.25rem",
              letterSpacing: "-0.01em",
            },
            h3: {
              fontSize: "1.5rem",
              fontWeight: "600",
              lineHeight: "1.4",
              marginTop: "2.5rem",
              marginBottom: "1rem",
            },
            h4: {
              fontSize: "1.25rem",
              fontWeight: "600",
              lineHeight: "1.5",
              marginTop: "2rem",
              marginBottom: "0.75rem",
            },
            p: {
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
              lineHeight: "1.75",
            },
            "ul, ol": {
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
              paddingLeft: "1.5rem",
            },
            li: {
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
              lineHeight: "1.75",
            },
            "li > p": {
              marginTop: "0.75rem",
              marginBottom: "0.75rem",
            },
            blockquote: {
              fontStyle: "italic",
              fontSize: "1.0625rem",
              lineHeight: "1.75",
              paddingLeft: "1.5rem",
              borderLeftWidth: "3px",
              borderLeftColor: "#8839ef",
              marginTop: "2rem",
              marginBottom: "2rem",
              color: "#4c4f69",
              quotes: "none",
            },
            "blockquote p:first-of-type::before": {
              content: "none",
            },
            "blockquote p:last-of-type::after": {
              content: "none",
            },
            code: {
              color: "#8839ef",
              backgroundColor: "#eff1f5",
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
              paddingTop: "0.25rem",
              paddingBottom: "0.25rem",
              borderRadius: "0.25rem",
              fontSize: "0.9em",
              fontWeight: "500",
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            pre: {
              backgroundColor: "#eff1f5",
              color: "#4c4f69",
              fontSize: "0.9375rem",
              lineHeight: "1.7",
              marginTop: "2rem",
              marginBottom: "2rem",
              borderRadius: "0.5rem",
              overflowX: "auto",
            },
            "pre code": {
              backgroundColor: "transparent",
              color: "inherit",
              fontSize: "inherit",
              fontWeight: "400",
            },
            strong: {
              fontWeight: "600",
              color: "#4c4f69",
            },
            hr: {
              marginTop: "3rem",
              marginBottom: "3rem",
              borderColor: "#dce0e8",
            },
          },
        },
        invert: {
          css: {
            a: {
              color: "#c6a0f6",
              "&:hover": {
                color: "#b7bdf8",
              },
              "&:focus": {
                outline: "2px solid #c6a0f6",
              },
            },
            "h1, h2, h3, h4, h5, h6": {
              color: "#cad3f5",
            },
            p: {
              color: "#cad3f5",
            },
            blockquote: {
              borderLeftColor: "#c6a0f6",
              color: "#a5adcb",
            },
            code: {
              color: "#c6a0f6",
              backgroundColor: "#363a4f",
            },
            pre: {
              backgroundColor: "#363a4f",
              color: "#cad3f5",
            },
            strong: {
              color: "#cad3f5",
            },
            hr: {
              borderColor: "#5b6078",
            },
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
}
