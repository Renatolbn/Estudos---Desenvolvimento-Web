import html from "eslint-plugin-html";

export default [
  {
    files: ["**/*.html"],
    plugins: {
      html
    },
    languageOptions: {
      globals: {
        // Variáveis globais do navegador
        console: "readonly",
        prompt: "readonly",
        alert: "readonly",
        confirm: "readonly",
        document: "readonly",
        window: "readonly",
        navigator: "readonly",
        localStorage: "readonly",
        sessionStorage: "readonly"
      }
    },
    rules: {
      "semi": ["error", "always"],
      "quotes": ["warn", "double"],
      "no-unused-vars": "warn",
      "no-undef": "warn"
    }
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        console: "readonly",
        prompt: "readonly",
        alert: "readonly",
        document: "readonly",
        window: "readonly"
      }
    },
    rules: {
      "semi": ["error", "always"],
      "quotes": ["warn", "double"]
    }
  }
];