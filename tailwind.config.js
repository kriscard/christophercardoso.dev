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
      backgroundColor: {
        dark: "#24273a",  // Catppuccin Macchiato Base
        lightGray: "#EEEEEE",
      },
      typography: {
        DEFAULT: {
          css: {
            // Base settings
            fontSize: "1.0625rem",  // 17px
            lineHeight: "1.75",

            // Links
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

            // Headings
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

            // Paragraphs
            p: {
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
              lineHeight: "1.75",
            },

            // Lists
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

            // Blockquotes
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

            // Code
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
              padding: "0",
              borderRadius: "0.5rem",
              overflowX: "auto",
            },
            "pre code": {
              backgroundColor: "transparent",
              color: "inherit",
              fontSize: "inherit",
              fontWeight: "400",
              padding: "0",
            },

            // Strong
            strong: {
              fontWeight: "600",
              color: "#4c4f69",
            },

            // HR
            hr: {
              marginTop: "3rem",
              marginBottom: "3rem",
              borderColor: "#dce0e8",
            },
          },
        },
        invert: {
          css: {
            // Links (dark mode)
            a: {
              color: "#c6a0f6",
              "&:hover": {
                color: "#b7bdf8",
              },
              "&:focus": {
                outline: "2px solid #c6a0f6",
              },
            },

            // Headings (dark mode)
            "h1, h2, h3, h4, h5, h6": {
              color: "#cad3f5",
            },

            // Body text (dark mode)
            p: {
              color: "#cad3f5",
            },

            // Blockquotes (dark mode)
            blockquote: {
              borderLeftColor: "#c6a0f6",
              color: "#a5adcb",
            },

            // Code (dark mode)
            code: {
              color: "#c6a0f6",
              backgroundColor: "#363a4f",
            },
            pre: {
              backgroundColor: "#363a4f",
              color: "#cad3f5",
              padding: "0",
            },

            // Strong (dark mode)
            strong: {
              color: "#cad3f5",
            },

            // HR (dark mode)
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
