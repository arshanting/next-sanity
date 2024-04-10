import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "1tibdm8c",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2024-04-11",
  basePath: "/admin",
  plugins: [ deskTool() ]
});

export default config;