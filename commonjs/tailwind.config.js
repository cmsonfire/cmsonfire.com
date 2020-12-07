const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js"],
  // https://www.colorbox.io/#steps=11#hue_start=207#hue_end=293#hue_curve=easeInQuad#sat_start=2#sat_end=90#sat_curve=easeOutQuad#sat_rate=130#lum_start=100#lum_end=53#lum_curve=easeOutQuad#lock_hex=2b394d#minor_steps_map=0

  // {
  //   "0": "#f8fcff",
  //   "5": "#e4f2f9",
  //   "10": "#d1eaf2",
  //   "20": "#a5deea",
  //   "30": "#7fd4df",
  //   "40": "#62c8d3",
  //   "50": "#4eb7c4",
  //   "60": "#3f9fb2",
  //   "70": "#40859d",
  //   "80": "#3c6a84",
  //   "90": "#355069",
  //   "100": "#2b394d"
  // }
  theme: {
    colors: {
      transparent: "transparent",
      gray: {
        100: "#f7fafc",
        200: "#edf2f7",
        300: "#e2e8f0",
        400: "#cbd5e0",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
        900: "#1a202c",
      },
      /* Logo colors
      #ffca28
      #ffa000
      #f57c00
      */
      fire: {
        100: "#fffff0",
        200: "#fefcbf",
        300: "#faf089",
        400: "#f6e05e",
        500: "#FFCA28",
        600: "#ffa000",
        700: "#f57c00",
        800: "#b7791f",
        900: "#975a16",
      },
      primary: {
        100: "#6492A6",
        200: "#59879b",
        300: "#527b8e",
        400: "#4A7082",
        500: "#3C5A68",
        600: "#344F5B",
        700: "#2D444E",
        800: "#253941",
        900: "#1E2E34",
      },
      secondary: {
        100: "#FFC285",
        200: "#FFAD5C",
        300: "#FF9933",
        400: "#FF850A",
        500: "#E07000",
        600: "#B85C00",
        700: "#8F4700",
        800: "#663300",
        900: "#3D1F00",
      },
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      default: "#fff",
    }),
    boxShadow: {
      // xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
      // sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      default:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      // md:
      //   "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      // lg:
      //   "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      // "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      // "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)",
      outline: "0 0 0 3px rgba(0, 0, 0, 0.25)",
      focus: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      none: "none",
    },
    extend: {
      outline: {
        basic: "2px solid #5e5e5e",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        md: "0 8px 15px -4px rgba(0, 0, 0, .25)",
        lg: "0 15px 30px -8px rgba(0, 0, 0, .25)",
        huge: "0 30px 60px -15px rgba(0, 0, 0, .25)",
      },
    },
  },
  // plugins: [require("@tailwindcss/ui")],
};
