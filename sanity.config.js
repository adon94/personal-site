import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { vercelDeployTool } from "sanity-plugin-vercel-deploy";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  projectId,
  dataset,
  basePath: "/studio",

  name: "default",
  title: "adamcodes.io",

  plugins: [deskTool(), visionTool(), vercelDeployTool()],

  schema: {
    types: schemaTypes,
  },
});
