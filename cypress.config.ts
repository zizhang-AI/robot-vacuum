import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://zizhang-ai.github.io/robot-vacuum/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
