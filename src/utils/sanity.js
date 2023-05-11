import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: "2023-05-03",
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export async function getCopy() {
  const [copy] = await client.fetch(`*[_type in ["site-copy"]]`);
  return copy;
}

export async function getMeta() {
  const [meta] = await client.fetch(`*[_type in ["meta"]]`);
  return meta;
}

export async function getProjects() {
  const [projects] = await client.fetch(`*[_type in ["projects"]]`);
  return projects;
}
