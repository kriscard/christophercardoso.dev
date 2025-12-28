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
        dark: "#0B0F1A",
        lightGray: "#EEEEEE",
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: "#8839ef",  // Catppuccin Latte Mauve
              textDecoration: "underline",
              textUnderlineOffset: "4px",
              fontWeight: "500",
              transition: "color 150ms ease-in-out",
              "&:hover": {
                color: "#7287fd",  // Catppuccin Latte Lavender
              },
              "&:focus": {
                outline: "2px solid #8839ef",
                outlineOffset: "2px",
                borderRadius: "2px",
              },
              "&:active": {
                color: "#dd7878",  // Catppuccin Latte Flamingo
              },
            },
          },
        },
        invert: {
          css: {
            a: {
              color: "#c6a0f6",  // Catppuccin Macchiato Mauve
              "&:hover": {
                color: "#b7bdf8",  // Catppuccin Macchiato Lavender
              },
              "&:focus": {
                outline: "2px solid #c6a0f6",
                outlineOffset: "2px",
                borderRadius: "2px",
              },
              "&:active": {
                color: "#f5bde6",  // Catppuccin Macchiato Pink
              },
            },
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
}
