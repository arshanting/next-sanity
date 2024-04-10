import schemas from "@/sanity/schemas";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "1tibdm8c",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2024-04-11",
  basePath: "/admin",
  plugins: [ deskTool() ],
  schema: { types: schemas }
});

export default config;