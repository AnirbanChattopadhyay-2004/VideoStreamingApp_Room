/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/next.js",
    "plugin:@typescript-eslint/recommended",
  "plugin:tailwindcss/recommended", // Tailwind CSS plugin
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
