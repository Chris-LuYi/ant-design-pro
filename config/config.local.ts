import { defineConfig } from 'umi';

export default defineConfig({
  // Overwrite default config for local, if you modify this file, please remember add this file to .gitignore so that your change won't overwrite other people's local setting
  define: {
    GLOBAL_CONFIG: {
      url: 'https://localhost:44397',
    },
  },
});
