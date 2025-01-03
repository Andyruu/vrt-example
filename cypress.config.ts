import { addVisualRegressionTrackerPlugin } from "@visual-regression-tracker/agent-cypress";
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    "chromeWebSecurity": false,
  
    setupNodeEvents(on, config) {
      addVisualRegressionTrackerPlugin(on, config);
      
    },
  },
});
