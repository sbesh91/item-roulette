const config = {
  trailingComma: "es5",
  singleQuote: true,
  printWidth: 100,
  tailwindAttributes: ["class"],
  tailwindFunctions: ["clsx", "cva", "cn"],
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};

export default config;
