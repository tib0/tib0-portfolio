import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    darkTheme: "dracula",
    themes: [
      {
        lemonade: {
          ...require("daisyui/src/theming/themes")["lemonade"],
          "neutral": "#212221",
          "primary": "#6dbb31",
          ".navbar": {
            "box-shadow": "0 4px 15px rgb(0 0 0 / 10%)",
            "border-bottom": "1px solid rgb(255 255 255 / 2%)",
            "min-height": "3.5rem",
          },
          ".wave": {
            "animation-name": "wave-animation",
            "animation-duration": "5s",
            "animation-iteration-count": "2",
            "transform-origin": "80% 85%",
            "display": "inline-block",
          },
          ".hero-content": {
            "z-index": "0",
            "display": "flex",
            "align-items": "center",
            "justify-content": "center",
            "max-width": "80rem",
            "gap": "1rem",
            "padding": "1rem",
            "box-shadow": "0 4px 15px rgb(0 0 0 / 10%)",
            "border-bottom": "1px solid rgb(255 255 255 / 2%)",
          },
        },
        dracula: {
          ...require("daisyui/src/theming/themes")["dracula"],
          ".navbar": {
            "box-shadow": "0 4px -15px rgb(255 255 255 / 10%)",
            "border-bottom": "1px solid rgb(255 255 255 / 2%)",
            "min-height": "3.5rem",
          },
          ".wave": {
            "animation-name": "wave-animation",
            "animation-duration": "5s",
            "animation-iteration-count": "2",
            "transform-origin": "80% 85%",
            "display": "inline-block",
          },
          ".hero-content": {
            "z-index": "0",
            "display": "flex",
            "align-items": "center",
            "justify-content": "center",
            "max-width": "80rem",
            "gap": "1rem",
            "padding": "1rem",
            "box-shadow": "0 4px -15px rgb(255 255 255 / 10%)",
            "border-bottom": "1px solid rgb(255 255 255 / 2%)",
          },
        },
      },
    ],
  },
  plugins: [daisyui],
}

export default config