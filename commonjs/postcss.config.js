module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss")("./commonjs/tailwind.config.js"),
    require("autoprefixer"),
  ],
};
